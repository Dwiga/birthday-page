/**
 * SongPage Component Tests
 * 
 * Unit tests for the SongPage component to verify it renders
 * the correct content and integrates properly with SolidJS.
 */

import { render } from '@solidjs/testing-library';
import { describe, expect, test } from 'vitest';
import { SongPage } from './SongPage';
import { SONG_CONTENT } from './constants';

describe('<SongPage />', () => {
  test('renders the song instruction message', () => {
    const { getByText } = render(() => <SongPage />);
    expect(getByText(SONG_CONTENT.message)).toBeInTheDocument();
  });

  test('renders without errors', () => {
    const { container } = render(() => <SongPage />);
    expect(container).toBeInTheDocument();
  });

  test('has correct CSS class', () => {
    const { container } = render(() => <SongPage />);
    const songPageDiv = container.querySelector('.song-page');
    expect(songPageDiv).toBeInTheDocument();
  });

  test('displays message in h1 element', () => {
    const { container } = render(() => <SongPage />);
    const h1Element = container.querySelector('h1');
    expect(h1Element).toBeInTheDocument();
    expect(h1Element?.textContent).toBe(SONG_CONTENT.message);
  });
});