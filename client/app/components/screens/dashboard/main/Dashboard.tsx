import MainStatistics from "@/screens/dashboard/main/main-statistics/MainStatistics";
import MiddleStatistics from "@/screens/dashboard/main/middle-statistics/MiddleStatistics";
import Layout from "@/ui/layout/Layout";
import {FC, PropsWithChildren} from 'react';

const Dashboard: FC<PropsWithChildren<unknown>> = () => {
	return <Layout title="Dashboard">
		
		<MainStatistics/>
		<MiddleStatistics/>
	</Layout>;
};

export default Dashboard;
