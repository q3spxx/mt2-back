import { HistoryDataMapper, WordDataMapper } from '@mappers';
import { HistoriesModel } from '@models';
import { HistoriesRepository } from '@repositories';

export class HistoryService {
    private historiesRepository: HistoriesRepository;

    constructor() {
        this.historiesRepository = new HistoriesRepository(
            new HistoriesModel(),
            new HistoryDataMapper(new WordDataMapper())
        );
    }

    public async getHistories(): Promise<HistoryDTO[]> {
        return this.historiesRepository.getHistories();
    }

    public async createHistory(params: HistoryDTO): Promise<HistoryDTO> {
        return this.historiesRepository.createHistory(params);
    }
}
