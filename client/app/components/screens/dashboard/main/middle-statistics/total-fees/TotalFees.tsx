import { FC } from 'react';
import { MdOutlineQueryStats } from 'react-icons/md';

import styles from './TotalFees.module.scss';
import AnimatedCounter from '@/ui/AnimatedCounter';
import ProgressBar from '@/ui/progress-bar/ProgressBar';

const TotalFees: FC<{ total: number }> = ({ total }) => {
	return (
		<div className={styles.fees}>
			<ProgressBar percent={Math.round((total / 3000000000) * 100)} />
			<div className={styles.icon}>
				<MdOutlineQueryStats />
			</div>
			<div className={styles.name}>Total fees</div>
			{/*<div className={styles.total}>${total.toLocaleString()}</div>*/}
			<AnimatedCounter to={total} />
		</div>
	);
};

export default TotalFees;
