import { onCLS, onLCP, onINP, onTTFB, onFCP } from 'web-vitals'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type VitalsReporter = (metric: { name: string; value: number; id: string }) => void

export function initWebVitals(report?: VitalsReporter) {
  const r: VitalsReporter = report || ((m) => {
    // default: log to console
    // eslint-disable-next-line no-console
    console.log(`[WebVitals] ${m.name}:`, Math.round(m.value), m.id)
  })

  try {
    onLCP((m) => r({ name: 'LCP', value: m.value, id: m.id }))
    onCLS((m) => r({ name: 'CLS', value: m.value, id: m.id }))
    onINP((m) => r({ name: 'INP', value: m.value, id: m.id }))
    onFCP((m) => r({ name: 'FCP', value: m.value, id: m.id }))
    onTTFB((m) => r({ name: 'TTFB', value: m.value, id: m.id }))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Web Vitals init failed', e)
  }
}

