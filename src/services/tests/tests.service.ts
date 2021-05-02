import { WordDataMapper } from '@mappers';
import { WordsModel } from '@models';
import { WordsRepository } from '@repositories';

export class TestsService {
    private wordsRepository: WordsRepository;

    constructor() {
        this.wordsRepository = new WordsRepository(new WordsModel(), new WordDataMapper());
    }

    public async getTestWords(limit?: number): Promise<WordDTO[]> {
        const words = await this.wordsRepository.getWords({
            orderBy: [{ name: 'rating' }],
        });

        const result = [];

        const resultLimit = limit || words.length;

        for (let i = 0; i < resultLimit && words.length; i += 1) {
            result.push(words.splice(this.getRandomIndex(words.length, resultLimit), 1)[0]);
        }

        return result;
    }

    private getRandomIndex(amount: number, limit: number): number {
        if (amount >= limit) {
            return this.getRandomIndex(Math.floor(amount * 0.5), limit);
        }

        return Math.floor(Math.random() * amount);
    }
}
