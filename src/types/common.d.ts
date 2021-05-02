interface Mapper<T, P> {
    toDomain(data: P): T;
    toDalEntity(data: T): P;
}

interface OrderBy<T> {
    name: T;
    direction?: 'ASC' | 'DESC';
}
interface QueryOptions<T extends string> {
    orderBy?: OrderBy<T>[];
}
