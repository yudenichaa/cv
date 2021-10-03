enum PromiseStatus {
  pending = 'pending',
  success = 'success',
  error = 'error',
}

export function withSuspend<T>(promise: Promise<T>) {
  let status: PromiseStatus = PromiseStatus.pending;
  let result: T;
  let error: Error;
  let suspender = promise.then(
    (r: T) => {
      status = PromiseStatus.success;
      result = r;
      return;
    },
    (e: Error) => {
      status = PromiseStatus.error;
      error = e;
    }
  );
  return {
    run() {
      if (status === PromiseStatus.pending) {
        throw suspender;
      } else if (status === PromiseStatus.error) {
        throw error;
      } else if (status === PromiseStatus.success) {
        return result;
      }
    },
  };
}

export type SuspendReturnType = ReturnType<typeof withSuspend>;
