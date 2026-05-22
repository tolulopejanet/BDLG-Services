export const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return variants;
};