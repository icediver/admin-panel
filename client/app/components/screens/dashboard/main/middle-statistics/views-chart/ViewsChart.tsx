import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js';
import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';

import { IViewsByMonth } from '@/services/statistics/statistics.interface';

import { useTheme } from '@/hooks/useTheme';

import styles from './ViewsChart.module.scss';
import { options } from '@/screens/dashboard/main/middle-statistics/views-chart/chart.options';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {
	const { isDarkTheme } = useTheme();
	return (
		<div className={styles.chart}>
			<div
				className='chart-container'
				style={{ position: 'relative', height: '40vh', width: '30vw' }}
			>
				<Bar
					width={100}
					height={50}
					options={options(isDarkTheme)}
					data={{
						labels: data.map(item => item.month),
						datasets: [
							{
								// label: 'Dataset 1',
								data: data.map(item => item.views),
								backgroundColor: '#7a94fe'
							}
						]
					}}
				/>
			</div>
		</div>
	);
};

export default ViewsChart;
