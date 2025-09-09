/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

type ToastRecord = {
  id: string;
  dismiss: () => void;
  update: (props: Partial<ToastRecord>) => void;
  duration?: number | typeof Infinity;
  [key: string]: any;
};

const TOAST_LIMIT = 1;
let count = 0;

function generateId(): string {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const toastStore: {
  state: { toasts: ToastRecord[] };
  listeners: Array<(state: { toasts: ToastRecord[] }) => void>;
  getState: () => { toasts: ToastRecord[] };
  setState: (
    nextState:
      | { toasts: ToastRecord[] }
      | ((state: { toasts: ToastRecord[] }) => { toasts: ToastRecord[] }),
  ) => void;
  subscribe: (listener: (state: { toasts: ToastRecord[] }) => void) => () => void;
} = {
  state: { toasts: [] },
  listeners: [],
  getState: () => toastStore.state,
  setState: (nextState) => {
    if (typeof nextState === 'function') {
      toastStore.state = nextState(toastStore.state);
    } else {
      toastStore.state = { ...toastStore.state, ...nextState } as { toasts: ToastRecord[] };
    }
    toastStore.listeners.forEach((listener) => listener(toastStore.state));
  },
  subscribe: (listener) => {
    toastStore.listeners.push(listener);
    return () => {
      toastStore.listeners = toastStore.listeners.filter((l) => l !== listener);
    };
  },
};

export const toast = (props: Omit<ToastRecord, 'id' | 'dismiss' | 'update'>) => {
  const id = generateId();

  const update = (next: Partial<ToastRecord>) =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...next } : t)),
    }));

  const dismiss = () =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }));

  toastStore.setState((state) => ({
    ...state,
    toasts: [{ ...props, id, dismiss, update }, ...state.toasts].slice(0, TOAST_LIMIT),
  }));

  return { id, dismiss, update };
};

export function useToast() {
  const [state, setState] = useState(toastStore.getState());

  useEffect(() => {
    const unsubscribe = toastStore.subscribe((next) => setState(next));
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeouts: number[] = [];
    state.toasts.forEach((t) => {
      if (t.duration === Infinity) return;
      const timeout = window.setTimeout(() => t.dismiss(), t.duration || 5000);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [state.toasts]);

  return { toast, toasts: state.toasts };
}
