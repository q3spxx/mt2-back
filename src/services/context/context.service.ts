import { WORD_TYPES } from '@config';

export class ContextService {
    public async getContext(): Promise<ContextDTO> {
        return Promise.resolve({
            wordTypes: WORD_TYPES,
        });
    }
}
