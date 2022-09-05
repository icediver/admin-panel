import { Controller, Get } from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@Get('/main')
	@Auth()
	async getMainStatics() {
		return this.statisticsService.getMainStatistics();
	}
	@Get('/middle')
	@Auth()
	async getMiddleStatics() {
		return this.statisticsService.getMiddleStatistics();
	}
}
