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

    public async createWord(params: WordParams): Promise<WordDTO> {
        return this.wordsRepository.createWord(params);
    }

    public async updateWords(params: WordParams): Promise<WordDTO[]> {
        return this.wordsRepository.updateWords(params);
    }

    public async deleteWord(id?: number): Promise<number> {
        return this.wordsRepository.deleteWord(id);
    }

    public async getRandomWords(limit?: number): Promise<WordDTO[]> {
        const words = await this.wordsRepository.getWords({
            orderBy: [{ name: 'rating' }],
        });

        const result = [];

        const resultLimit = limit || words.length;

        for (let i = 0; i < resultLimit && words.length; i += 1) {
            const index = Math.floor(Math.random() * words.length * 0.5);
            result.push(words.splice(index, 1)[0]);
        }

        return result;
    }
}
