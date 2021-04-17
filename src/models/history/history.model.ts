import { HistoryTable } from './history.table';

export class HistoryModel implements IHistoryModel {
    public async createHistories(params: HistoryDomain[]): Promise<HistoryDomain[]> {
        return HistoryTable.bulkCreate(
            params.map(({ wordId, rating, wrongs }) => ({
                wordId,
                rating,
                wrongs,
            }))
        );
    }

    public async getHistories(): Promise<HistoryDomain[]> {
        return HistoryTable.findAll({
            attributes: ['id', 'wordId', 'rating', 'wrongs', 'createdAt'],
            raw: true,
        });
    }

    public deleteHistory(id: number): Promise<number> {
        return HistoryTable.destroy({
            where: {
                id,
            },
        });
    }
}
