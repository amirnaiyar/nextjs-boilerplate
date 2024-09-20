'use client';
import { DependencyList, useEffect } from 'react';

declare global {
  /* eslint-disable */
  interface Window {
    _customEventTargetElement: undefined | HTMLDivElement;
  }
}

const getElement = () => {
  if (!window._customEventTargetElement) {
    window._customEventTargetElement = document.createElement('div');
  }

  return window._customEventTargetElement;
};

export function useCustomEventListener<T>(
  eventName: string,
  eventHandler: (data: T) => void,
  deps?: DependencyList
): void {
  useEffect(() => {
    const element = getElement();
    const handleEvent = (event: CustomEvent | Event) => {
      const data = (event as CustomEvent).detail;
      eventHandler(data);
    };

    element.addEventListener(eventName, handleEvent, false);

    return () => {
      element.removeEventListener(eventName, handleEvent, false);
    };
  }, deps);
}

export function emitCustomEvent<T>(eventName: string, data?: T): void {
  const element = getElement();
  const event = new CustomEvent(eventName, { detail: data });
  element.dispatchEvent(event);
}

export default {
  emitCustomEvent,
  useCustomEventListener,
};
