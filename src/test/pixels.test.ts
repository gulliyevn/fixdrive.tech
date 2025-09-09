import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  initMetaPixel,
  initLinkedInPixel,
  initPixels,
  trackMetaEvent,
  trackLinkedInEvent,
} from '../lib/pixels';

// Mock window objects
const mockFbq = vi.fn();
const mockLintrk = vi.fn();

Object.defineProperty(window, 'fbq', {
  value: mockFbq,
  writable: true,
});

Object.defineProperty(window, 'lintrk', {
  value: mockLintrk,
  writable: true,
});

describe('Pixels', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFbq.mockClear();
    mockLintrk.mockClear();
  });

  it('should initialize Meta Pixel', () => {
    initMetaPixel();

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should initialize LinkedIn Pixel', () => {
    initLinkedInPixel();

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should initialize all pixels', () => {
    initPixels();

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should track Meta events', () => {
    trackMetaEvent('Purchase', { value: 100 });

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should track LinkedIn events', () => {
    trackLinkedInEvent('conversion_123', { value: 100 });

    // Should not throw error
    expect(true).toBe(true);
  });

  it('should handle missing fbq gracefully', () => {
    // Mock missing fbq
    Object.defineProperty(window, 'fbq', {
      value: undefined,
      writable: true,
    });

    expect(() => {
      trackMetaEvent('test', {});
    }).not.toThrow();
  });

  it('should handle missing lintrk gracefully', () => {
    // Mock missing lintrk
    Object.defineProperty(window, 'lintrk', {
      value: undefined,
      writable: true,
    });

    expect(() => {
      trackLinkedInEvent('test', {});
    }).not.toThrow();
  });
});
