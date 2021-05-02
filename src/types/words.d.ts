interface WordVariant {
    name: string;
    translate: string;
}

type WordType = 'noun' | 'adverb' | 'verb' | 'сonjunction' | 'adjective' | 'preposition';

interface WordDomain {
    id?: number;
    type?: WordType;
    main?: string;
    secondary?: string;
    third?: string;
    rating?: number;
    wrongs?: number;
    spendedTime?: number;
}

interface WordDTO {
    id?: number;
    type?: WordType;
    main?: WordVariant;
    secondary?: WordVariant;
    third?: WordVariant;
    rating?: number;
    wrongs?: number;
    spendedTime?: number;
}

type IWordDataMapper = Mapper<WordDomain, WordDTO>;

interface IWordsModel {
    getWords(options?: QueryOptions<keyof WordDomain>): Promise<WordDomain[]>;
    deleteWord(id?: number): Promise<number>;
    createWord(params: WordDomain): Promise<WordDomain>;
    updateWords(params: WordDomain): Promise<WordDomain[]>;
}
