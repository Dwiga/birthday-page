/**
 * SongPage Component
 * 
 * A simple, clean SolidJS functional component that displays "Sing birthday song" message.
 * This component serves the birthday song instruction page for the birthday-links feature.
 * 
 * Requirements: 3.1, 3.3
 */

import type { Component } from 'solid-js';
import { SONG_CONTENT } from './constants';
import type { SongPageProps } from './constants';

/**
 * SongPage component that displays the birthday song instruction message
 * 
 * @returns JSX element containing the centered song instruction message
 */
export const SongPage: Component<SongPageProps> = () => {
  return (
    <div class="song-page">
      <style>{`
        .song-page {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          font-family: Arial, sans-serif;
          padding: 20px;
          box-sizing: border-box;
        }

        .song-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: normal;
          color: #333;
          margin: 0;
          text-align: center;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .song-page {
            padding: 15px;
          }
        }
      `}</style>

      <h1 class="song-title">{SONG_CONTENT.message}</h1>
    </div>
  );
};

export default SongPage;