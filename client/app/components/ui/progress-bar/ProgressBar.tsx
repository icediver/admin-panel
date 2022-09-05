import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './ProgressBar.module.scss';
import { useProgressAnimate } from '@/ui/progress-bar/useProgresAnimate';

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	const { variants } = useProgressAnimate(percent);
	return (
		<div className={styles.progress}>
			<div className={styles.overflow}>
				<motion.div
					{...variants}
					className={styles.bar}
					// style={{ transform: `rotate(${45 + percent * 1.8}deg)` }}
				></motion.div>
			</div>
			<div className={styles.percent}>{percent}%</div>
		</div>
	);
};

export default ProgressBar;
