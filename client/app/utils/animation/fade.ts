import { MotionProps, Variants } from 'framer-motion';

export const FADE_IN: MotionProps = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: { duration: 1.4 }
};

export const menuAnimation: Variants = {
	open: {
		opacity: 1,
		scaleY: 1,
		scaleZ: 1,
		scaleX: 1,
		transition: { type: 'spring', stiffness: 60, damping: 9 }
	},
	closed: {
		opacity: 0,
		scaleY: -0.3,
		scaleZ: 0,
		scaleX: 0,
		transition: { type: 'spring', stiffness: 70, damping: 8 }
	}
};
