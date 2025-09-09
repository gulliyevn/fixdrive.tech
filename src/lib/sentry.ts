import * as Sentry from '@sentry/react';

export function initSentry() {
  try {
    const dsn = import.meta.env?.VITE_SENTRY_DSN;
    if (!dsn || dsn === 'YOUR_SENTRY_DSN') {
      console.log('Sentry DSN not configured, skipping initialization');
      return;
    }
    Sentry.init({
      dsn,
      tracesSampleRate: 0.1,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 1.0,
      integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    });
  } catch (error) {
    console.warn('Failed to initialize Sentry:', error);
  }
}
