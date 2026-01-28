/**
 * Birthday Links Utility Functions
 * 
 * This module contains utility functions for route validation
 * and URL format checking.
 */

import { ROUTES } from './constants';
import type { URLValidation, RouteValidation } from './types';

/**
 * Validates that a URL string meets the requirements:
 * - At least 16 characters
 * - Only alphanumeric characters
 * - Unique from other URLs
 */
export function validateURLFormat(url: string, otherUrls: string[] = []): URLValidation {
  const hasMinimumLength = url.length >= 16;
  const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(url);
  const isUnique = !otherUrls.includes(url);
  
  return {
    hasMinimumLength,
    isAlphanumeric,
    isUnique,
    length: url.length
  };
}

/**
 * Validates that a route path is one of the defined birthday-links routes
 */
export function validateRoute(path: string): RouteValidation {
  const validPaths = Object.values(ROUTES);
  const isValid = validPaths.includes(path as any);
  
  return {
    isValid,
    path,
    error: isValid ? undefined : `Invalid route path: ${path}`
  };
}

/**
 * Gets all defined route paths
 */
export function getAllRoutePaths(): string[] {
  return Object.values(ROUTES);
}

/**
 * Checks if all route constants meet the requirements
 */
export function validateAllRoutes(): boolean {
  const routes = Object.values(ROUTES);
  
  // Check each route individually
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const otherRoutes = routes.filter((_, index) => index !== i);
    
    // Remove leading slash for validation
    const urlPart = route.startsWith('/') ? route.slice(1) : route;
    const validation = validateURLFormat(urlPart, otherRoutes.map(r => r.startsWith('/') ? r.slice(1) : r));
    
    if (!validation.hasMinimumLength || !validation.isAlphanumeric || !validation.isUnique) {
      return false;
    }
  }
  
  return true;
}