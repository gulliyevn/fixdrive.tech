import * as Sentry from '@sentry/react';

export function initSentry() {
  try {
    // Vite provides import.meta.env typed via vite/client. Ensure types are available.
    const dsn = (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_SENTRY_DSN as
      | string
      | undefined;
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
