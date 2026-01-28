/**
 * SongPage Component
 * 
 * A colorful SolidJS functional component that displays "Sing birthday song" message
 * with vibrant styling and musical theme.
 * This component serves the birthday song instruction page for the birthday-links feature.
 * 
 * Requirements: 3.1, 3.3
 */

import type { Component } from 'solid-js';
import { createSignal, onMount } from 'solid-js';
import { SONG_CONTENT } from './constants';
import type { SongPageProps } from './constants';

/**
 * SongPage component that displays the birthday song instruction message with colorful styling
 * 
 * @returns JSX element containing the colorful song instruction message
 */
export const SongPage: Component<SongPageProps> = () => {
  const [showNotes, setShowNotes] = createSignal(false);

  onMount(() => {
    // Trigger musical notes animation after component mounts
    setTimeout(() => setShowNotes(true), 300);
  });

  return (
    <div class="song-page">
      <style>{`
        .song-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
          background-size: 300% 300%;
          animation: colorWave 5s ease infinite;
          font-family: 'Arial', sans-serif;
          position: relative;
          overflow: hidden;
        }

        @keyframes colorWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .song-title {
          font-size: 3.5rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGradient 3s ease infinite, pulse 2s ease-in-out infinite;
          margin: 0;
          text-align: center;
          z-index: 10;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          position: relative;
        }

        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .musical-notes {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .note {
          position: absolute;
          font-size: 2rem;
          color: #fff;
          animation: noteFloat 4s linear infinite;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .note:nth-child(1) { left: 10%; animation-delay: 0s; color: #ff6b6b; }
        .note:nth-child(2) { left: 20%; animation-delay: 0.5s; color: #4ecdc4; }
        .note:nth-child(3) { left: 30%; animation-delay: 1s; color: #45b7d1; }
        .note:nth-child(4) { left: 40%; animation-delay: 1.5s; color: #96ceb4; }
        .note:nth-child(5) { left: 50%; animation-delay: 2s; color: #feca57; }
        .note:nth-child(6) { left: 60%; animation-delay: 2.5s; color: #ff9ff3; }
        .note:nth-child(7) { left: 70%; animation-delay: 3s; color: #54a0ff; }
        .note:nth-child(8) { left: 80%; animation-delay: 3.5s; color: #5f27cd; }

        @keyframes noteFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .color-circles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          animation: circleFloat 6s ease-in-out infinite;
          opacity: 0.7;
        }

        .circle:nth-child(1) {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, #ff6b6b, #ff1744);
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }

        .circle:nth-child(2) {
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, #4ecdc4, #00bcd4);
          top: 60%;
          left: 80%;
          animation-delay: 1s;
        }

        .circle:nth-child(3) {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, #45b7d1, #2196f3);
          top: 70%;
          left: 10%;
          animation-delay: 2s;
        }

        .circle:nth-child(4) {
          width: 70px;
          height: 70px;
          background: radial-gradient(circle, #96ceb4, #4caf50);
          top: 30%;
          left: 75%;
          animation-delay: 3s;
        }

        .circle:nth-child(5) {
          width: 90px;
          height: 90px;
          background: radial-gradient(circle, #feca57, #ff9800);
          top: 50%;
          left: 5%;
          animation-delay: 4s;
        }

        @keyframes circleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }

        .microphone {
          position: absolute;
          bottom: 10%;
          right: 10%;
          font-size: 4rem;
          color: #fff;
          animation: micBounce 2s ease-in-out infinite;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
          z-index: 10;
        }

        @keyframes micBounce {
          0%, 100% { transform: rotate(-10deg) scale(1); }
          50% { transform: rotate(10deg) scale(1.1); }
        }

        .rhythm-bars {
          position: absolute;
          bottom: 20%;
          left: 10%;
          display: flex;
          gap: 5px;
          z-index: 10;
        }

        .bar {
          width: 8px;
          background: linear-gradient(to top, #ff6b6b, #4ecdc4);
          border-radius: 4px;
          animation: rhythmPulse 1s ease-in-out infinite;
        }

        .bar:nth-child(1) { height: 40px; animation-delay: 0s; }
        .bar:nth-child(2) { height: 60px; animation-delay: 0.1s; }
        .bar:nth-child(3) { height: 30px; animation-delay: 0.2s; }
        .bar:nth-child(4) { height: 70px; animation-delay: 0.3s; }
        .bar:nth-child(5) { height: 50px; animation-delay: 0.4s; }
        .bar:nth-child(6) { height: 45px; animation-delay: 0.5s; }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .song-page {
            padding: 10px;
          }
          
          .song-title {
            font-size: clamp(2.5rem, 7vw, 3.5rem);
          }
          
          .microphone {
            font-size: 3rem;
            bottom: 5%;
            right: 5%;
          }
          
          .rhythm-bars {
            bottom: 15%;
            left: 5%;
          }
          
          .note {
            font-size: 1.5rem;
          }
        }

        @media (max-height: 600px) {
          .song-title {
            font-size: clamp(2rem, 6vw, 3rem);
          }
          
          .microphone {
            font-size: 2.5rem;
          }
          
          .circle:nth-child(1) { width: 60px; height: 60px; }
          .circle:nth-child(2) { width: 45px; height: 45px; }
          .circle:nth-child(3) { width: 70px; height: 70px; }
          .circle:nth-child(4) { width: 50px; height: 50px; }
          .circle:nth-child(5) { width: 65px; height: 65px; }
        }
      `}</style>

      <div class="color-circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>

      {showNotes() && (
        <div class="musical-notes">
          <div class="note">♪</div>
          <div class="note">♫</div>
          <div class="note">♪</div>
          <div class="note">♬</div>
          <div class="note">♫</div>
          <div class="note">♪</div>
          <div class="note">♬</div>
          <div class="note">♫</div>
        </div>
      )}

      <h1 class="song-title">{SONG_CONTENT.message}</h1>

      <div class="microphone">🎤</div>

      <div class="rhythm-bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  );
};

export default SongPage;