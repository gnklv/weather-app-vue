import type { Ref } from 'vue';
import { ref, watch } from 'vue';

import { to } from '@/utils';

import type { AsyncFn, AsyncFnReturn, AsyncState } from './types';
import { wrapRef } from './utils';

function useAsync<T, P>(
  promiseFn: AsyncFn<T, P> | Ref<AsyncFn<T, P>>,
  params?: P | Ref<P>,
): AsyncFnReturn<T> {
  const wrappedPromiseFn = wrapRef(promiseFn);
  const wrappedParams = wrapRef(params);

  const state = ref<AsyncState>('loading');
  const error = ref<Error>();
  const data = ref<T>();

  const watched: [typeof wrappedPromiseFn, typeof wrappedParams] = [
    wrappedPromiseFn,
    wrappedParams,
  ];
  const watchOptions = { immediate: true };
  watch(
    watched,
    async ([newPromiseFn, newParams]) => {
      const [e, result] = await to(newPromiseFn(newParams));
      if (e) {
        state.value = 'error';
        error.value = e;
        data.value = undefined;
      } else if (result) {
        state.value = 'success';
        error.value = undefined;
        data.value = result;
      }
    },
    watchOptions,
  );

  return { state, data, error };
}

function useFetch<T>(requestInfo: RequestInfo | Ref<RequestInfo>): AsyncFnReturn<T> {
  const wrappedReqInfo = wrapRef(requestInfo);

  // eslint-disable-next-line consistent-return
  return useAsync(async () => {
    const reqInfo = wrappedReqInfo.value;

    const response = await fetch(reqInfo);
    if (!response.ok) {
      throw await response.json();
    } else {
      return response.json();
    }
  });
}

export { useAsync, useFetch };
