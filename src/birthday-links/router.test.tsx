/**
 * Router Configuration Tests
 * 
 * Tests for the birthday-links router configuration and route registration.
 */

import { describe, it, expect } from 'vitest';
import { createBirthdayRoutes, getBirthdayRouteConfigs, registerBirthdayRoutes } from './router';
import { ROUTES } from './constants';

describe('Birthday Links Router Configuration', () => {
  describe('createBirthdayRoutes', () => {
    it('creates route configurations for both pages', () => {
      const routes = createBirthdayRoutes();
      
      expect(routes.birthdayPage).toBeDefined();
      expect(routes.songPage).toBeDefined();
      expect(routes.birthdayPage.path).toBe(ROUTES.BIRTHDAY_PAGE);
      expect(routes.songPage.path).toBe(ROUTES.SONG_PAGE);
    });

    it('sets exact matching for routes', () => {
      const routes = createBirthdayRoutes();
      
      expect(routes.birthdayPage.exact).toBe(true);
      expect(routes.songPage.exact).toBe(true);
    });

    it('assigns correct components to routes', () => {
      const routes = createBirthdayRoutes();
      
      expect(routes.birthdayPage.component).toBeDefined();
      expect(routes.songPage.component).toBeDefined();
      expect(typeof routes.birthdayPage.component).toBe('function');
      expect(typeof routes.songPage.component).toBe('function');
    });
  });

  describe('getBirthdayRouteConfigs', () => {
    it('returns an array of route configurations', () => {
      const configs = getBirthdayRouteConfigs();
      
      expect(Array.isArray(configs)).toBe(true);
      expect(configs).toHaveLength(2);
    });

    it('includes both birthday and song page routes', () => {
      const configs = getBirthdayRouteConfigs();
      const paths = configs.map(config => config.path);
      
      expect(paths).toContain(ROUTES.BIRTHDAY_PAGE);
      expect(paths).toContain(ROUTES.SONG_PAGE);
    });
  });

  describe('registerBirthdayRoutes', () => {
    it('is an alias for getBirthdayRouteConfigs', () => {
      expect(registerBirthdayRoutes).toBe(getBirthdayRouteConfigs);
    });

    it('returns the same result as getBirthdayRouteConfigs', () => {
      const configs1 = getBirthdayRouteConfigs();
      const configs2 = registerBirthdayRoutes();
      
      expect(configs1).toEqual(configs2);
    });
  });

  describe('Route Configuration Requirements', () => {
    it('uses the correct random URL paths from constants', () => {
      const routes = createBirthdayRoutes();
      
      // Requirements: 2.2, 3.2 - Use randomly generated URLs
      expect(routes.birthdayPage.path).toBe('/abc123def456ghi789');
      expect(routes.songPage.path).toBe('/xyz987uvw654rst321');
    });

    it('ensures routes are properly configured for router integration', () => {
      const configs = getBirthdayRouteConfigs();
      
      // Requirements: 4.3, 4.4 - Integration with router setup
      configs.forEach(config => {
        expect(config.path).toBeDefined();
        expect(config.component).toBeDefined();
        expect(typeof config.path).toBe('string');
        expect(typeof config.component).toBe('function');
      });
    });
  });
});