import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as dayjs from 'dayjs';
import { fn, Op } from 'sequelize';
import { ViewsModel } from './views.model';

@Injectable()
export class ViewsService {
	constructor(
		@InjectModel(ViewsModel)
		private readonly viewsModel
	) {}

	async updateViews(movieId: number) {
		const row = await this.viewsModel.findOne({
			where: {
				movieId,
				[Op.and]: [
					fn('EXTRACT(MONTH from "createdAt") =', dayjs().get('month') + 1)
				]
			}
		});
		if (row) return row.increment('views');

		return this.viewsModel.create({
			movieId
		});
	}
}
