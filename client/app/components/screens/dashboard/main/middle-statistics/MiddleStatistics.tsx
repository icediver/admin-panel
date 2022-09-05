import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { StatisticsService } from '@/services/statistics/statistics.service';

import styles from './MiddleStatistics.module.scss';
import TotalFees from '@/screens/dashboard/main/middle-statistics/total-fees/TotalFees';
import ViewsChart from '@/screens/dashboard/main/middle-statistics/views-chart/ViewsChart';
import Loader from '@/ui/Loader';
import Heading from '@/ui/heading/Heading';

const MiddleStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get middle statistics'], () =>
		StatisticsService.getMiddle()
	);
	return (
		<div className='mt-2'>
			<Heading>Middle Statistics</Heading>
			{isLoading ? (
				<Loader />
			) : data ? (
				<div className={styles.wrapper}>
					<TotalFees total={data.totalFees} />
					<ViewsChart data={data.viewsByMonth} />
				</div>
			) : (
				<div>Statistics not found</div>
			)}
		</div>
	);
};

export default MiddleStatistics;
