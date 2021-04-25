interface Mapper<T, P> {
    toDomain(data: P): T;
    toDalEntity(data: T): P;
}

interface OrderBy<T> {
    name: T;
    direction?: 'ASC' | 'DESC';
}
interface QueryParams<T extends string> {
    orderBy?: OrderBy<T>[];
}
