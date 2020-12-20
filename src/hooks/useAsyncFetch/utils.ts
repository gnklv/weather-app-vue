import type { Ref, UnwrapRef } from 'vue';
import { isRef, ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export function wrapRef<T>(param: T | Ref<T>): Ref<T> | Ref<UnwrapRef<T>> {
  return isRef(param) ? param : ref(param);
}
