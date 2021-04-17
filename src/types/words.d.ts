interface WordDTO {
    id?: number;
    type: WordType;
    main: WordVariant;
    secondary?: WordVariant;
    third?: WordVariant;
    rating?: number;
    wrongs?: number;
}

interface WordVariant {
    name: string;
    translate: string;
}

interface WordDomain {
    id?: number;
    type: WordType;
    main: string;
    secondary?: string;
    third?: string;
    rating?: number;
    wrongs?: number;
}

type WordParams = Pick<WordDTO, 'id' | 'main' | 'secondary' | 'third' | 'type'>;

type WordType = 'noun' | 'adverb' | 'verb' | 'сonjunction' | 'adjective' | 'preposition';

type IWordDataMapper = Mapper<WordDomain, WordDTO>;

interface IWordsModel {
    getWords(): Promise<WordDomain[]>;
    deleteWord(id?: number): Promise<number>;
    createWord(params: WordDomain): Promise<WordDomain>;
    updateWords(params: WordDomain): Promise<WordDomain[]>;
}
