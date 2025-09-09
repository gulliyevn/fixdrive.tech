import { describe, it, expect } from 'vitest'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import ar from '@/locales/ar.json'
import az from '@/locales/az.json'
import tr from '@/locales/tr.json'
import de from '@/locales/de.json'
import fr from '@/locales/fr.json'
import es from '@/locales/es.json'
import itLocale from '@/locales/it.json'
import pt from '@/locales/pt.json'
import zh from '@/locales/zh.json'

type Dict = Record<string, unknown>

function flatten(obj: Dict, prefix = ''): string[] {
  const keys: string[] = []
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (Array.isArray(v)) {
      keys.push(key)
    } else if (v && typeof v === 'object') {
      keys.push(...flatten(v as Dict, key))
    } else {
      keys.push(key)
    }
  }
  return keys.sort()
}

function parity(expectLocale: Dict) {
  const base = new Set(flatten(en as unknown as Dict))
  const target = new Set(flatten(expectLocale))
  const missing = [...base].filter(k => !target.has(k))
  const extra = [...target].filter(k => !base.has(k))
  expect(missing).toEqual([])
  expect(extra).toEqual([])
}

describe('Translations key parity', () => {
  it('ru matches en keys', () => parity(ru as unknown as Dict))
  it('ar matches en keys', () => parity(ar as unknown as Dict))
  it('az matches en keys', () => parity(az as unknown as Dict))
  it('tr matches en keys', () => parity(tr as unknown as Dict))
  it('de matches en keys', () => parity(de as unknown as Dict))
  it('fr matches en keys', () => parity(fr as unknown as Dict))
  it('es matches en keys', () => parity(es as unknown as Dict))
  it('it matches en keys', () => parity(itLocale as unknown as Dict))
  it('pt matches en keys', () => parity(pt as unknown as Dict))
  it('zh matches en keys', () => parity(zh as unknown as Dict))
})
