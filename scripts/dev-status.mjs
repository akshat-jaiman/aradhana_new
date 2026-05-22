import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";
import net from "node:net";

const root = process.cwd();

function run(command) {
  try {
    const out = execSync(command, {
      stdio: ["ignore", "pipe", "pipe"],
      encoding: "utf8",
    }).trim();
    return { ok: true, out };
  } catch (error) {
    const stderr = error?.stderr?.toString?.().trim?.() || "";
    const stdout = error?.stdout?.toString?.().trim?.() || "";
    return { ok: false, out: stderr || stdout || "Command failed." };
  }
}

function checkPort(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1200);
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("timeout", () => {
      socket.destroy();
      resolve(false);
    });
    socket.once("error", () => {
      resolve(false);
    });
    socket.connect(port, "127.0.0.1");
  });
}

function parsePostgresConfig() {
  const file = join(root, "backend", "src", "main", "resources", "application.yml");
  if (!existsSync(file)) {
    return null;
  }
  const text = readFileSync(file, "utf8");
  const urlMatch = text.match(/url:\s*jdbc:postgresql:\/\/([^:/\s]+):?(\d+)?\/([^\s]+)/);
  const userMatch = text.match(/username:\s*([^\s]+)/);
  return {
    host: urlMatch?.[1] || "localhost",
    port: Number(urlMatch?.[2] || 5432),
    db: urlMatch?.[3] || "unknown",
    username: userMatch?.[1] || "unknown",
  };
}

async function main() {
  const checks = [];

  const node = run("node -v");
  checks.push({
    name: "Node.js",
    ok: node.ok,
    detail: node.ok ? node.out : node.out,
  });

  const npm = run("npm -v");
  checks.push({
    name: "npm",
    ok: npm.ok,
    detail: npm.ok ? npm.out : npm.out,
  });

  const java = run("java -version");
  checks.push({
    name: "Java (runtime)",
    ok: java.ok,
    detail: java.ok ? (java.out || "Detected") : java.out,
  });

  const wrapperExists =
    existsSync(join(root, "backend", "mvnw.cmd")) &&
    existsSync(join(root, "backend", ".mvn", "wrapper", "maven-wrapper.properties"));
  checks.push({
    name: "Maven Wrapper",
    ok: wrapperExists,
    detail: wrapperExists ? "mvnw.cmd + wrapper properties found" : "Wrapper files missing",
  });

  const backendPortOpen = await checkPort(8080);
  checks.push({
    name: "Backend port 8080",
    ok: !backendPortOpen,
    detail: backendPortOpen ? "Already in use" : "Available",
  });

  const frontendPortOpen = await checkPort(5173);
  checks.push({
    name: "Frontend port 5173",
    ok: !frontendPortOpen,
    detail: frontendPortOpen ? "Already in use" : "Available",
  });

  const pg = parsePostgresConfig();
  if (pg) {
    const pgReachable = await checkPort(pg.port);
    checks.push({
      name: `PostgreSQL ${pg.host}:${pg.port}`,
      ok: pgReachable,
      detail: pgReachable
        ? `Reachable (db=${pg.db}, user=${pg.username})`
        : `Not reachable (db=${pg.db}, user=${pg.username})`,
    });
  } else {
    checks.push({
      name: "PostgreSQL config",
      ok: false,
      detail: "backend application.yml not found",
    });
  }

  let failed = 0;
  console.log("\nAradhana Dev Status\n");
  for (const c of checks) {
    const icon = c.ok ? "OK " : "XX ";
    if (!c.ok) failed += 1;
    console.log(`${icon} ${c.name}: ${c.detail}`);
  }
  console.log("");

  if (failed > 0) {
    console.log(`Status: ${failed} check(s) need attention.`);
    process.exitCode = 1;
    return;
  }
  console.log("Status: all checks passed.");
}

main();
