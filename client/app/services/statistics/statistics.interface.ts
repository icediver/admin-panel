export interface IMainStatisticsResponse {
	countReviews: number;
	countMovies: number;
	views: number;
	averageRating: number;
}

export interface IViewsByMonth {
	views: string;
	month: string;
}

export interface IMiddleStatisticsResponse {
	
	
	totalFees: number;
	viewsByMonth: IViewsByMonth[];
}
