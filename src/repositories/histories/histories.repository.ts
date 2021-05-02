export class HistoriesRepository {
    private model: IHistoriesModel;

    private mapper: IHistoryDataMapper;

    constructor(model: IHistoriesModel, mapper: IHistoryDataMapper) {
        this.model = model;
        this.mapper = mapper;
    }

    public async getHistories(): Promise<HistoryDTO[]> {
        const data = await this.model.getHistories();

        return data.map(test => this.mapper.toDalEntity(test));
    }

    public async createHistory(params: HistoryDTO): Promise<HistoryDTO> {
        const data = await this.model.createHistory(this.mapper.toDomain(params));

        return this.mapper.toDalEntity(data);
    }
}
