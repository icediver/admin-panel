import { FC } from 'react';

import { ITableItem } from './table.interface';
import Loader from '@/ui/Loader';
import TableItem from '@/ui/table/TableItem';

const Table: FC<{ items?: ITableItem[]; isLoading?: boolean }> = ({
	items,
	isLoading
}) => {
	return (
		<div className='mt-6'>
			{isLoading ? (
				<Loader count={3} />
			) : items?.length ? (
				items.map(item => <TableItem item={item} key={item.id} />)
			) : (
				<div>Items not found</div>
			)}
		</div>
	);
};

export default Table;
