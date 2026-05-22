$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$propsFile = Join-Path $scriptDir "maven-wrapper.properties"

if (-not $env:JAVA_HOME) {
    $javaCmd = (Get-Command java -ErrorAction SilentlyContinue).Source
    if ($javaCmd) {
        $env:JAVA_HOME = Split-Path -Parent (Split-Path -Parent $javaCmd)
    }
}

if (-not (Test-Path $propsFile)) {
    throw "maven-wrapper.properties not found at $propsFile"
}

$distributionUrl = $null
Get-Content $propsFile | ForEach-Object {
    if ($_ -match "^distributionUrl=(.+)$") {
        $distributionUrl = $matches[1].Trim()
    }
}

if (-not $distributionUrl) {
    throw "distributionUrl is missing in maven-wrapper.properties"
}

$distDir = Join-Path $scriptDir "dists"
$zipPath = Join-Path $distDir "apache-maven.zip"
$mavenHome = Join-Path $distDir "apache-maven"
$mavenCmd = Join-Path $mavenHome "bin\mvn.cmd"

if (-not (Test-Path $distDir)) {
    New-Item -ItemType Directory -Path $distDir | Out-Null
}

if (-not (Test-Path $mavenCmd)) {
    Write-Host "Downloading Maven distribution..."
    Invoke-WebRequest -Uri $distributionUrl -OutFile $zipPath

    if (Test-Path $mavenHome) {
        Remove-Item $mavenHome -Recurse -Force
    }

    Expand-Archive -Path $zipPath -DestinationPath $distDir -Force

    $expanded = Get-ChildItem $distDir -Directory |
        Where-Object { $_.Name -like "apache-maven-*" } |
        Select-Object -First 1

    if (-not $expanded) {
        throw "Unable to locate extracted Maven directory."
    }

    Rename-Item -Path $expanded.FullName -NewName "apache-maven"
}

& $mavenCmd @args
exit $LASTEXITCODE
