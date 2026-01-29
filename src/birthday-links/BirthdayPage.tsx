/**
 * BirthdayPage Component
 * 
 * A simple, clean SolidJS functional component that displays the zoom instruction message.
 * This component serves the birthday greeting page for the birthday-links feature.
 * 
 * Requirements: 2.1, 2.3
 */

import type { Component } from 'solid-js';
import { BIRTHDAY_CONTENT } from './constants';
import type { BirthdayPageProps } from './constants';

/**
 * BirthdayPage component that displays the zoom instruction message
 * 
 * @returns JSX element containing the centered instruction message
 */
export const BirthdayPage: Component<BirthdayPageProps> = () => {
  return (
    <div class="birthday-page">
      <style>{`
        .birthday-page {
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

        .birthday-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: normal;
          color: #333;
          margin: 0;
          text-align: center;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .birthday-page {
            padding: 15px;
          }
        }
      `}</style>

      <h1 class="birthday-title">{BIRTHDAY_CONTENT.message}</h1>
    </div>
  );
};

export default BirthdayPage;