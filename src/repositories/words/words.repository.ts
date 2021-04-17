export class WordsRepository {
    private model: IWordsModel;

    private mapper: IWordDataMapper;

    constructor(model: IWordsModel, mapper: IWordDataMapper) {
        this.model = model;
        this.mapper = mapper;
    }

    public async getWords(): Promise<WordDTO[]> {
        const data = await this.model.getWords();
        return data.map(item => this.mapper.toDalEntity(item));
    }

    public async createWord(params: WordParams): Promise<WordDTO> {
        const data = await this.model.createWord(this.mapper.toDomain(params));
        return this.mapper.toDalEntity(data);
    }

    public async deleteWord(id?: number): Promise<number> {
        const data = await this.model.deleteWord(id);
        return data;
    }

    public async updateWords(params: WordParams): Promise<WordDTO[]> {
        const data = await this.model.updateWords(this.mapper.toDomain(params));
        return data.map(word => this.mapper.toDalEntity(word));
    }
}
