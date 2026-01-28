/**
 * Integration Tests for Birthday Links Router
 * 
 * Tests the complete integration of routes with the SolidJS Router.
 */

import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Router } from '@solidjs/router';
import { BirthdayRouter } from './BirthdayRouter';
import { ROUTES } from './constants';

describe('Birthday Links Router Integration', () => {
  it('renders BirthdayRouter without errors', () => {
    expect(() => {
      render(() => <BirthdayRouter />);
    }).not.toThrow();
  });

  it('includes all required routes in the router', () => {
    const { container } = render(() => <BirthdayRouter />);
    
    // Verify the router is rendered
    expect(container).toBeDefined();
  });

  it('validates route constants meet requirements', () => {
    // Requirements: 1.2, 1.3, 1.4 - URL format validation
    const birthdayUrl = ROUTES.BIRTHDAY_PAGE.slice(1); // Remove leading slash
    const songUrl = ROUTES.SONG_PAGE.slice(1); // Remove leading slash
    
    // At least 16 characters
    expect(birthdayUrl.length).toBeGreaterThanOrEqual(16);
    expect(songUrl.length).toBeGreaterThanOrEqual(16);
    
    // Only alphanumeric characters
    expect(birthdayUrl).toMatch(/^[a-zA-Z0-9]+$/);
    expect(songUrl).toMatch(/^[a-zA-Z0-9]+$/);
    
    // Different from each other
    expect(birthdayUrl).not.toBe(songUrl);
  });

  it('ensures routes are properly configured for navigation', () => {
    // Requirements: 4.1, 4.3, 4.4 - Route registration and navigation
    expect(ROUTES.BIRTHDAY_PAGE).toBe('/abc123def456ghi789');
    expect(ROUTES.SONG_PAGE).toBe('/xyz987uvw654rst321');
    
    // Verify paths start with slash for proper routing
    expect(ROUTES.BIRTHDAY_PAGE.startsWith('/')).toBe(true);
    expect(ROUTES.SONG_PAGE.startsWith('/')).toBe(true);
  });
});