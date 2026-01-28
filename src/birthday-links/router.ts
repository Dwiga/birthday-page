/**
 * Birthday Links Router Configuration
 * 
 * This module sets up the route configuration for the birthday-links feature,
 * mapping random URLs to their corresponding page components.
 * 
 * Requirements: 2.2, 3.2, 4.3, 4.4
 */

import { ROUTES } from './constants';
import { BirthdayPage } from './BirthdayPage';
import { SongPage } from './SongPage';
import type { RouteConfig, BirthdayRoutes } from './constants';

/**
 * Creates route configuration for the birthday page
 * Requirements: 2.2 - Serve birthday page at randomly generated URL
 */
function createBirthdayPageRoute(): RouteConfig {
  return {
    path: ROUTES.BIRTHDAY_PAGE,
    component: () => BirthdayPage({}),
    exact: true
  };
}

/**
 * Creates route configuration for the song page
 * Requirements: 3.2 - Serve song page at randomly generated URL
 */
function createSongPageRoute(): RouteConfig {
  return {
    path: ROUTES.SONG_PAGE,
    component: () => SongPage({}),
    exact: true
  };
}

/**
 * Creates all birthday-links route configurations
 * Requirements: 4.3, 4.4 - Register both random URL routes in router configuration
 */
export function createBirthdayRoutes(): BirthdayRoutes {
  return {
    birthdayPage: createBirthdayPageRoute(),
    songPage: createSongPageRoute()
  };
}

/**
 * Gets all route configurations as an array for router registration
 * Requirements: 4.3, 4.4 - Integration with existing React Router setup
 */
export function getBirthdayRouteConfigs(): RouteConfig[] {
  const routes = createBirthdayRoutes();
  return [routes.birthdayPage, routes.songPage];
}

/**
 * Route registration function for integration with main application router
 * Requirements: 4.4 - Register routes when application initializes
 */
export const registerBirthdayRoutes = getBirthdayRouteConfigs;