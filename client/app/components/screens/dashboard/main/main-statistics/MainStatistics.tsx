import {StatisticsService} from "@/services/statistics/statistics.service";
import Heading from "@/ui/heading/Heading";
import Loader from "@/ui/Loader";
import StatisticItem from "@/ui/statistic-item/StatisticItem";
import {useQuery} from "@tanstack/react-query";
import {FC} from 'react'

const MainStatistics: FC = () => {
	const {data, isLoading} = useQuery(['get main statistics'], () => StatisticsService.getMain())
	return (<div>
		<Heading>Main Statistics</Heading>
		{isLoading ? (
			<Loader/>
		) : data?.length ? (
			<div className="grid grid-cols-4 gap-8">
				{data.map(item => (
					<StatisticItem item={item} key={item.id}/>
				))}
			</div>
		) : (
			<div>Statistics not found</div>
		)}
	</div>)
}

export default MainStatistics