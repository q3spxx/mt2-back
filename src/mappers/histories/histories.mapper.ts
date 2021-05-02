export class HistoryDataMapper implements IHistoryDataMapper {
    private wordsMapper: IWordDataMapper;

    constructor(wordsMapper: IWordDataMapper) {
        this.wordsMapper = wordsMapper;
    }

    public toDomain({ id, testType, wordsAmount, words, createdAt }: HistoryDTO): HistoryDomain {
        const test: HistoryDomain = {
            testType,
            wordsAmount,
            wordsHistories: words?.map(word => {
                return {
                    wordId: word.id,
                    rating: word.rating,
                    wrongs: word.wrongs,
                    spendedTime: word.spendedTime,
                    variant: word.variant,
                };
            }),
        };

        if (id) {
            test.id = id;
        }

        if (createdAt) {
            test.createdAt = createdAt;
        }

        return test;
    }

    public toDalEntity({ id, testType, wordsAmount, wordsHistories, createdAt }: HistoryDomain): HistoryDTO {
        let wrongs = 0;
        let rating = 0;
        let spendedTime = 0;

        const test = {
            id,
            testType,
            wordsAmount,
            createdAt,
            words: wordsHistories?.map(history => {
                if (history.wrongs) {
                    wrongs += history.wrongs;
                }

                if (history.rating) {
                    rating += history.rating;
                }

                if (history.spendedTime) {
                    spendedTime += history.spendedTime;
                }

                return {
                    ...this.wordsMapper.toDalEntity(history),
                    variant: history.variant,
                };
            }),
        };

        return {
            ...test,
            wrongs,
            rating,
            spendedTime,
        };
    }
}
