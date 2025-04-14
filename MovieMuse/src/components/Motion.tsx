export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};
export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};
export const staggerContainer = {
    visible: {
        transition: {
        staggerChildren: 0.1
        }
    }
};
export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
};
export const cardHover = {
    whileHover: { scale: 1.03 } 
};
