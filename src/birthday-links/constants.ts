/**
 * Birthday Links Route Constants and Type Definitions
 * 
 * This module defines the static random URL strings and TypeScript interfaces
 * for the birthday-links feature routing configuration.
 */

import type { JSX } from 'solid-js';

// Route constants with predefined random strings
// Requirements 1.2, 1.3, 1.4: Static random URLs with at least 16 alphanumeric characters, unique from each other
export const ROUTES = {
  BIRTHDAY_PAGE: '/abc123def456ghi789',  // 18 characters, alphanumeric
  SONG_PAGE: '/xyz987uvw654rst321'       // 18 characters, alphanumeric, different from birthday page
} as const;

// Type for route paths
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];

// Route configuration interface for SolidJS Router
export interface RouteConfig {
  readonly path: string;
  readonly component: () => JSX.Element;
  readonly exact?: boolean;
}

// Birthday routes configuration
export interface BirthdayRoutes {
  readonly birthdayPage: RouteConfig;
  readonly songPage: RouteConfig;
}

// Page component props interfaces
export interface BirthdayPageProps {}

export interface SongPageProps {}

// Page content model
export interface PageContent {
  readonly message: string;
  readonly pageType: 'birthday' | 'song';
}

// Static content definitions
export const BIRTHDAY_CONTENT: PageContent = {
  message: "Press 'love' reaction in zoom",
  pageType: 'birthday'
} as const;

export const SONG_CONTENT: PageContent = {
  message: 'Sing birthday song',
  pageType: 'song'
} as const;

// Router integration types
export interface AppRouterProps {
  children?: JSX.Element;
}

// Route registration function type
export type RouteRegistrationFunction = () => RouteConfig[];