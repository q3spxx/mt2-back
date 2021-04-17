interface Mapper<T, P> {
    toDomain(data: P): T;
    toDalEntity(data: T): P;
}
