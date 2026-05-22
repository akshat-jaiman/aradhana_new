export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.14,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
