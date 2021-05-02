export const APP_HOST = process.env.APP_HOST || '192.168.0.101';
export const APP_PORT = process.env.APP_PORT || 6000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = Number(process.env.DB_PORT) || 6543;
export const DB_DATABASE = process.env.DB_DATABASE || 'postgres';
export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'step2zero';
export const WORD_TYPES: WordType[] = ['noun', 'adverb', 'verb', 'сonjunction', 'adjective', 'preposition'];
