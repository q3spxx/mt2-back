import { HistoryModel } from '@models';
import { HistoryRepository } from '@repositories';

export class HistoryService {
    private historyRepository: HistoryRepository;

    constructor() {
        this.historyRepository = new HistoryRepository(new HistoryModel());
    }

    public async getHistories(): Promise<HistoryDTO[]> {
        return this.historyRepository.getHistories();
    }

    public async createHistories(params: HistoryParams[]): Promise<HistoryDTO[]> {
        return this.historyRepository.createHistories(params);
    }

    public async deleteHistory(id?: number): Promise<number> {
        return this.historyRepository.deleteHistory(id);
    }
}
