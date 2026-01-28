/**
 * Birthday Links Router Component
 * 
 * This component sets up the SolidJS Router with birthday-links routes
 * and integrates with the existing application structure.
 * 
 * Requirements: 4.1, 4.2, 4.3, 4.4
 */

import { Router, Route } from '@solidjs/router';
import type { Component } from 'solid-js';
import { ErrorBoundary } from 'solid-js';
import { ROUTES } from './constants';
import { BirthdayPage } from './BirthdayPage';
import { SongPage } from './SongPage';
import type { AppRouterProps } from './constants';

/**
 * Default fallback component for invalid URLs
 * Requirements: 4.2 - Handle invalid URLs gracefully
 */
const NotFoundPage: Component = () => {
  return (
    <div class="not-found-page" role="main" aria-labelledby="not-found-title">
      <h1 id="not-found-title">Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <p>Please check the URL and try again.</p>
    </div>
  );
};

/**
 * Error fallback component for handling component errors
 * Requirements: 4.2 - Handle errors gracefully without crashing
 */
const ErrorFallback: Component<{ error: Error; reset: () => void }> = (props) => {
  return (
    <div class="error-page" role="alert" aria-labelledby="error-title">
      <h1 id="error-title">Something went wrong</h1>
      <p>An error occurred while loading the page.</p>
      <details style="margin-top: 1rem;">
        <summary>Error details</summary>
        <pre style="white-space: pre-wrap; margin-top: 0.5rem;">
          {props.error.message}
        </pre>
      </details>
      <button 
        onClick={props.reset}
        style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer;"
      >
        Try again
      </button>
    </div>
  );
};

/**
 * Birthday Links Router component that sets up all routes with error handling
 * Requirements: 4.1, 4.2, 4.3, 4.4 - Route to appropriate page components, handle errors gracefully, and register routes
 */
export const BirthdayRouter: Component<AppRouterProps> = (props) => {
  return (
    <ErrorBoundary fallback={(error, reset) => <ErrorFallback error={error} reset={reset} />}>
      <Router>
        {/* Birthday page route - Requirements: 2.2, 4.1 */}
        <Route 
          path={ROUTES.BIRTHDAY_PAGE} 
          component={() => (
            <ErrorBoundary fallback={(error, reset) => <ErrorFallback error={error} reset={reset} />}>
              <BirthdayPage />
            </ErrorBoundary>
          )} 
        />
        
        {/* Song page route - Requirements: 3.2, 4.1 */}
        <Route 
          path={ROUTES.SONG_PAGE} 
          component={() => (
            <ErrorBoundary fallback={(error, reset) => <ErrorFallback error={error} reset={reset} />}>
              <SongPage />
            </ErrorBoundary>
          )} 
        />
        
        {/* Fallback route for invalid URLs - Requirements: 4.2 */}
        <Route path="*" component={NotFoundPage} />
        
        {/* Render any children passed to the router */}
        {props.children}
      </Router>
    </ErrorBoundary>
  );
};

export default BirthdayRouter;