/**
 * Birthday Links Feature - Main Export Module
 * 
 * This module exports all constants, types, and utilities
 * for the birthday-links feature.
 */

// Export route constants and configuration types
export {
  ROUTES,
  BIRTHDAY_CONTENT,
  SONG_CONTENT,
  type RoutePath,
  type RouteConfig,
  type BirthdayRoutes,
  type BirthdayPageProps,
  type SongPageProps,
  type PageContent,
  type AppRouterProps,
  type RouteRegistrationFunction
} from './constants';

// Export additional type definitions
export {
  type BirthdayPageComponent,
  type SongPageComponent,
  type RouteComponent,
  type NavigationState,
  type RouteError,
  type RouteValidation,
  type URLValidation,
  type RouteRegistrationResult
} from './types';

// Export utility functions
export {
  validateURLFormat,
  validateRoute,
  getAllRoutePaths,
  validateAllRoutes
} from './utils';

// Export components
export { BirthdayPage } from './BirthdayPage';
export { SongPage } from './SongPage';

// Export router components and configuration
export { BirthdayRouter } from './BirthdayRouter';
export {
  createBirthdayRoutes,
  getBirthdayRouteConfigs,
  registerBirthdayRoutes
} from './router';