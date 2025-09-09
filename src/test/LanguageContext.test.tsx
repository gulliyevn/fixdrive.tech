import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider, useT } from '../contexts/LanguageContext';

// Test component that uses the context
const TestComponent = () => {
  const { t, language, setLanguage } = useT();

  return (
    <div>
      <div data-testid="current-language">{language}</div>
      <div data-testid="translated-text">{t('header.brand.title')}</div>
      <button onClick={() => setLanguage('ru')}>Switch to Russian</button>
    </div>
  );
};

describe('LanguageContext', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should provide default English language', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    expect(screen.getByTestId('translated-text')).toHaveTextContent('FixDrive');
  });

  it('should translate text correctly', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('translated-text')).toHaveTextContent('FixDrive');
  });

  it('should switch language when setLanguage is called', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    const switchButton = screen.getByText('Switch to Russian');

    act(() => {
      switchButton.click();
    });

    expect(screen.getByTestId('current-language')).toHaveTextContent('ru');
  });

  it('should persist language in localStorage', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    const switchButton = screen.getByText('Switch to Russian');

    act(() => {
      switchButton.click();
    });

    expect(localStorage.setItem).toHaveBeenCalledWith('language', 'ru');
  });
});
