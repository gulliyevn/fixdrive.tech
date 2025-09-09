import { describe, it, expect } from 'vitest';
import { LANGUAGE_OPTIONS } from '../shared/constants/languages';

describe('Constants', () => {
  it('should have correct language options', () => {
    expect(LANGUAGE_OPTIONS).toBeDefined();
    expect(Array.isArray(LANGUAGE_OPTIONS)).toBe(true);
    expect(LANGUAGE_OPTIONS.length).toBe(11);
  });

  it('should have all required language properties', () => {
    LANGUAGE_OPTIONS.forEach((lang) => {
      expect(lang).toHaveProperty('code');
      expect(lang).toHaveProperty('label');
      expect(lang).toHaveProperty('flag');
      expect(typeof lang.code).toBe('string');
      expect(typeof lang.label).toBe('string');
      expect(typeof lang.flag).toBe('string');
    });
  });

  it('should have unique language codes', () => {
    const codes = LANGUAGE_OPTIONS.map((lang) => lang.code);
    const uniqueCodes = new Set(codes);
    expect(uniqueCodes.size).toBe(codes.length);
  });

  it('should include English and Russian', () => {
    const codes = LANGUAGE_OPTIONS.map((lang) => lang.code);
    expect(codes).toContain('en');
    expect(codes).toContain('ru');
  });

  it('should include Arabic', () => {
    const codes = LANGUAGE_OPTIONS.map((lang) => lang.code);
    expect(codes).toContain('ar');
  });
});
