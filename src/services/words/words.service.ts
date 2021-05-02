import { WordDataMapper } from '@mappers';
import { WordsModel } from '@models';
import { WordsRepository } from '@repositories';

export class WordsService {
    private wordsRepository: WordsRepository;

    constructor() {
        this.wordsRepository = new WordsRepository(new WordsModel(), new WordDataMapper());
    }

    public async getWords(): Promise<WordDTO[]> {
        return this.wordsRepository.getWords();
    }

    public async createWord(params: WordDTO): Promise<WordDTO> {
        return this.wordsRepository.createWord(params);
    }

    public async updateWords(params: WordDTO): Promise<WordDTO[]> {
        return this.wordsRepository.updateWords(params);
    }

    public async deleteWord(id?: number): Promise<number> {
        return this.wordsRepository.deleteWord(id);
    }
}
