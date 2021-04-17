export class CommonError extends Error {
    public status: number;

    public message = 'error';

    constructor(status: number) {
        super();
        this.status = status;
    }
}
