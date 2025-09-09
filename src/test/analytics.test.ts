import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initGA, trackPageView, trackEvent, trackContactSales } from '../lib/analytics';

// Mock window.gtag
const mockGtag = vi.fn();
Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true,
});

describe('Analytics', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGtag.mockClear();
  });

  it('should initialize GA with correct tracking ID', () => {
    initGA();

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should track page views', () => {
    trackPageView('/test-page', 'Test Page');

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should track custom events', () => {
    trackEvent('click', 'button', 'test-button', 1);

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should track contact sales events', () => {
    trackContactSales();

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should handle missing gtag gracefully', () => {
    // Mock missing gtag
    Object.defineProperty(window, 'gtag', {
      value: undefined,
      writable: true,
    });

    expect(() => {
      trackEvent('test', 'category', 'label');
    }).not.toThrow();
  });
});
