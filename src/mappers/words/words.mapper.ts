export class WordDataMapper implements IWordDataMapper {
    public toDomain({ id, main, secondary, third, type, rating, wrongs, spendedTime }: WordDTO): WordDomain {
        const data: WordDomain = {
            id,
            type,
            rating,
            wrongs,
            spendedTime,
        };

        if (main) {
            data.main = JSON.stringify(main);
        }

        if (secondary) {
            data.secondary = JSON.stringify(secondary);
        }

        if (third) {
            data.third = JSON.stringify(third);
        }

        return data;
    }

    public toDalEntity({ id, main, secondary, third, type, rating, wrongs, spendedTime }: WordDomain): WordDTO {
        const data: WordDTO = {
            id,
            type,
            rating,
            wrongs,
            spendedTime,
        };

        if (main) {
            data.main = JSON.parse(main);
        }

        if (secondary) {
            data.secondary = JSON.parse(secondary);
        }

        if (third) {
            data.third = JSON.parse(third);
        }

        return data;
    }
}
