export class HistoryRepository {
    private model: IHistoryModel;

    constructor(model: IHistoryModel) {
        this.model = model;
    }

    public async getHistories(): Promise<HistoryDTO[]> {
        return this.model.getHistories();
    }

    public async createHistories(params: HistoryParams[]): Promise<HistoryDTO[]> {
        return this.model.createHistories(params);
    }

    public async deleteHistory(id?: number): Promise<number> {
        return this.model.deleteHistory(id);
    }
}
