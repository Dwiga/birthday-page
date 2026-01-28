/**
 * Birthday Links Type Definitions
 * 
 * This module contains additional TypeScript type definitions
 * for the birthday-links feature components and routing.
 */

import type { Component } from 'solid-js';

// Component type definitions for SolidJS
export type BirthdayPageComponent = Component;
export type SongPageComponent = Component;

// Route component type
export type RouteComponent = Component;

// Navigation types
export interface NavigationState {
  currentPath: string;
  isValidRoute: boolean;
}

// Error handling types
export interface RouteError {
  message: string;
  path: string;
  timestamp: Date;
}

// Route validation types
export interface RouteValidation {
  isValid: boolean;
  path: string;
  error?: string;
}

// URL validation types
export interface URLValidation {
  hasMinimumLength: boolean;
  isAlphanumeric: boolean;
  isUnique: boolean;
  length: number;
}

// Route registration result
export interface RouteRegistrationResult {
  success: boolean;
  registeredRoutes: string[];
  errors?: string[];
}