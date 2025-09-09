import { describe, it, expect } from 'vitest';
import enTranslations from '../locales/en.json';
import ruTranslations from '../locales/ru.json';
import arTranslations from '../locales/ar.json';

describe('Translation Files', () => {
  it('should have English translations', () => {
    expect(enTranslations).toBeDefined();
    expect(typeof enTranslations).toBe('object');
    expect(enTranslations.header).toBeDefined();
    expect(enTranslations.hero).toBeDefined();
  });

  it('should have Russian translations', () => {
    expect(ruTranslations).toBeDefined();
    expect(typeof ruTranslations).toBe('object');
    expect(ruTranslations.header).toBeDefined();
    expect(ruTranslations.hero).toBeDefined();
  });

  it('should have Arabic translations', () => {
    expect(arTranslations).toBeDefined();
    expect(typeof arTranslations).toBe('object');
    expect(arTranslations.header).toBeDefined();
    expect(arTranslations.hero).toBeDefined();
  });

  it('should have consistent structure between languages', () => {
    const enKeys = Object.keys(enTranslations);
    const ruKeys = Object.keys(ruTranslations);
    const arKeys = Object.keys(arTranslations);

    expect(enKeys).toEqual(ruKeys);
    expect(enKeys).toEqual(arKeys);
  });

  it('should have hero section in all languages', () => {
    expect(enTranslations.hero).toBeDefined();
    expect(ruTranslations.hero).toBeDefined();
    expect(arTranslations.hero).toBeDefined();
  });

  it('should have pricing section in all languages', () => {
    expect(enTranslations.pricing).toBeDefined();
    expect(ruTranslations.pricing).toBeDefined();
    expect(arTranslations.pricing).toBeDefined();
  });

  it('should have contact modal section in all languages', () => {
    expect(enTranslations.contact_modal).toBeDefined();
    expect(ruTranslations.contact_modal).toBeDefined();
    expect(arTranslations.contact_modal).toBeDefined();
  });
});
