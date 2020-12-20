type TAwaitToReturn<T, E> = Promise<[E | null, T | undefined]>

function to<T, E = Error>(promise: Promise<T>): TAwaitToReturn<T, E> {
  return promise
    .then<[null, T]>((data) => [null, data])
    .catch<[E, undefined]>((error) => [error, undefined]);
}

export default to;
