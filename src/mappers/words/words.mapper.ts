export class WordDataMapper implements IWordDataMapper {
    public toDomain({ id, main, secondary, third, type, rating, wrongs }: WordDTO): WordDomain {
        const data: WordDomain = {
            id,
            main: JSON.stringify(main),
            type,
            rating,
            wrongs,
        };

        if (secondary) {
            data.secondary = JSON.stringify(secondary);
        }

        if (third) {
            data.third = JSON.stringify(third);
        }

        return data;
    }

    public toDalEntity({ id, main, secondary, third, type, rating, wrongs }: WordDomain): WordDTO {
        const data: WordDTO = {
            id,
            main: JSON.parse(main),
            type,
            rating,
            wrongs,
        };

        if (secondary) {
            data.secondary = JSON.parse(secondary);
        }

        if (third) {
            data.third = JSON.parse(third);
        }

        return data;
    }
}
