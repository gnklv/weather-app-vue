import { Ref, UnwrapRef } from 'vue';

export type AsyncState = 'loading' | 'success' | 'error';

export type AsyncFn<T, P> = (params?: P | UnwrapRef<P>) => Promise<T>

export interface AsyncFnReturn<T> {
  state: Ref<AsyncState>;
  data: Ref<T | undefined>;
  error: Ref<Error | undefined>;
}
