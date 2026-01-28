/**
 * BirthdayPage Component
 * 
 * An ultra-joyful, animated SolidJS functional component that displays "Happy birthday" message
 * with spectacular animations, party elements, and mobile-optimized styling.
 * This component serves the birthday greeting page for the birthday-links feature.
 * 
 * Requirements: 2.1, 2.3
 */

import type { Component } from 'solid-js';
import { createSignal, onMount } from 'solid-js';
import { BIRTHDAY_CONTENT } from './constants';
import type { BirthdayPageProps } from './constants';

/**
 * BirthdayPage component that displays the birthday greeting message with spectacular animations
 * 
 * @returns JSX element containing the ultra-animated birthday message
 */
export const BirthdayPage: Component<BirthdayPageProps> = () => {
  const [showConfetti, setShowConfetti] = createSignal(false);
  const [showFireworks, setShowFireworks] = createSignal(false);
  const [showCake, setShowCake] = createSignal(false);

  onMount(() => {
    // Staggered animation reveals
    setTimeout(() => setShowConfetti(true), 300);
    setTimeout(() => setShowFireworks(true), 800);
    setTimeout(() => setShowCake(true), 1200);
  });

  return (
    <div class="birthday-page">
      <style>{`
        .birthday-page {
          min-height: 100vh;
          min-height: 100dvh; /* Mobile viewport fix */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 20% 80%, #ff6b6b 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, #feca57 0%, transparent 50%),
                      linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
          background-size: 300% 300%;
          animation: partyBackground 6s ease infinite;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          overflow: hidden;
          position: relative;
          padding: 20px;
          box-sizing: border-box;
        }

        @keyframes partyBackground {
          0% { background-position: 0% 50%; }
          33% { background-position: 100% 50%; }
          66% { background-position: 50% 100%; }
          100% { background-position: 0% 50%; }
        }

        .birthday-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 900;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: 
            megaBounce 2s ease-in-out infinite,
            textRainbow 3s linear infinite,
            textGlow 2s ease-in-out infinite alternate;
          margin: 0;
          text-align: center;
          z-index: 20;
          position: relative;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
          letter-spacing: 0.1em;
        }

        @keyframes megaBounce {
          0%, 20%, 50%, 80%, 100% { 
            transform: translateY(0) scale(1) rotate(0deg); 
          }
          10% { 
            transform: translateY(-20px) scale(1.15) rotate(-2deg); 
          }
          30% { 
            transform: translateY(-40px) scale(1.25) rotate(2deg); 
          }
          40% { 
            transform: translateY(-60px) scale(1.3) rotate(-1deg); 
          }
          60% { 
            transform: translateY(-30px) scale(1.1) rotate(1deg); 
          }
        }

        @keyframes textRainbow {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        @keyframes textGlow {
          0% { filter: drop-shadow(0 0 10px #ff6b6b) drop-shadow(0 0 20px #4ecdc4); }
          100% { filter: drop-shadow(0 0 20px #feca57) drop-shadow(0 0 30px #ff9ff3); }
        }

        .party-emojis {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(2rem, 6vw, 4rem);
          z-index: 15;
          animation: emojiDance 3s ease-in-out infinite;
        }

        @keyframes emojiDance {
          0%, 100% { transform: translateX(-50%) rotate(-10deg) scale(1); }
          25% { transform: translateX(-50%) rotate(10deg) scale(1.2); }
          50% { transform: translateX(-50%) rotate(-5deg) scale(1.1); }
          75% { transform: translateX(-50%) rotate(5deg) scale(1.15); }
        }

        .confetti-explosion {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }

        .confetti {
          position: absolute;
          width: clamp(8px, 2vw, 15px);
          height: clamp(8px, 2vw, 15px);
          animation: confettiBlast 4s linear infinite;
        }

        .confetti:nth-child(1) { left: 5%; animation-delay: 0s; background: linear-gradient(45deg, #ff6b6b, #ff1744); }
        .confetti:nth-child(2) { left: 15%; animation-delay: 0.1s; background: linear-gradient(45deg, #4ecdc4, #00bcd4); }
        .confetti:nth-child(3) { left: 25%; animation-delay: 0.2s; background: linear-gradient(45deg, #45b7d1, #2196f3); }
        .confetti:nth-child(4) { left: 35%; animation-delay: 0.3s; background: linear-gradient(45deg, #96ceb4, #4caf50); }
        .confetti:nth-child(5) { left: 45%; animation-delay: 0.4s; background: linear-gradient(45deg, #feca57, #ff9800); }
        .confetti:nth-child(6) { left: 55%; animation-delay: 0.5s; background: linear-gradient(45deg, #ff9ff3, #e91e63); }
        .confetti:nth-child(7) { left: 65%; animation-delay: 0.6s; background: linear-gradient(45deg, #54a0ff, #3f51b5); }
        .confetti:nth-child(8) { left: 75%; animation-delay: 0.7s; background: linear-gradient(45deg, #5f27cd, #9c27b0); }
        .confetti:nth-child(9) { left: 85%; animation-delay: 0.8s; background: linear-gradient(45deg, #00d2d3, #009688); }
        .confetti:nth-child(10) { left: 95%; animation-delay: 0.9s; background: linear-gradient(45deg, #ff6348, #f44336); }

        @keyframes confettiBlast {
          0% {
            transform: translateY(-100vh) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(-80vh) rotate(180deg) scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(1080deg) scale(0);
            opacity: 0;
          }
        }

        .fireworks {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
        }

        .firework {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: fireworkBurst 2s ease-out infinite;
        }

        .firework:nth-child(1) { top: 20%; left: 20%; background: #ff6b6b; animation-delay: 0s; }
        .firework:nth-child(2) { top: 30%; left: 80%; background: #4ecdc4; animation-delay: 0.3s; }
        .firework:nth-child(3) { top: 60%; left: 15%; background: #feca57; animation-delay: 0.6s; }
        .firework:nth-child(4) { top: 70%; left: 85%; background: #ff9ff3; animation-delay: 0.9s; }
        .firework:nth-child(5) { top: 40%; left: 50%; background: #54a0ff; animation-delay: 1.2s; }

        @keyframes fireworkBurst {
          0% {
            transform: scale(0);
            opacity: 1;
            box-shadow: 0 0 0 0 currentColor;
          }
          50% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 
              0 0 0 20px transparent,
              0 0 0 40px currentColor,
              0 0 0 60px transparent,
              0 0 0 80px currentColor;
          }
          100% {
            transform: scale(1);
            opacity: 0;
            box-shadow: 
              0 0 0 20px transparent,
              0 0 0 40px transparent,
              0 0 0 60px transparent,
              0 0 0 80px transparent;
          }
        }

        .birthday-cake {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(3rem, 8vw, 6rem);
          animation: cakeBounce 2s ease-in-out infinite;
          z-index: 15;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
        }

        @keyframes cakeBounce {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(-2deg); }
          50% { transform: translateX(-50%) translateY(-20px) rotate(2deg); }
        }

        .party-balloons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .balloon-emoji {
          position: absolute;
          font-size: clamp(2rem, 5vw, 4rem);
          animation: balloonFloat 8s ease-in-out infinite;
        }

        .balloon-emoji:nth-child(1) { 
          left: 10%; 
          top: 80%; 
          animation-delay: 0s; 
        }
        .balloon-emoji:nth-child(2) { 
          right: 10%; 
          top: 70%; 
          animation-delay: 1s; 
        }
        .balloon-emoji:nth-child(3) { 
          left: 5%; 
          top: 60%; 
          animation-delay: 2s; 
        }
        .balloon-emoji:nth-child(4) { 
          right: 5%; 
          top: 85%; 
          animation-delay: 3s; 
        }

        @keyframes balloonFloat {
          0%, 100% { 
            transform: translateY(0) rotate(-5deg); 
          }
          25% { 
            transform: translateY(-30px) rotate(5deg); 
          }
          50% { 
            transform: translateY(-60px) rotate(-3deg); 
          }
          75% { 
            transform: translateY(-30px) rotate(3deg); 
          }
        }

        .sparkle-shower {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 12;
        }

        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
          animation: sparkleShine 1.5s ease-in-out infinite;
          box-shadow: 0 0 10px currentColor;
        }

        .sparkle:nth-child(1) { top: 15%; left: 20%; animation-delay: 0s; color: #ff6b6b; }
        .sparkle:nth-child(2) { top: 25%; left: 80%; animation-delay: 0.2s; color: #4ecdc4; }
        .sparkle:nth-child(3) { top: 45%; left: 10%; animation-delay: 0.4s; color: #feca57; }
        .sparkle:nth-child(4) { top: 55%; left: 90%; animation-delay: 0.6s; color: #ff9ff3; }
        .sparkle:nth-child(5) { top: 75%; left: 25%; animation-delay: 0.8s; color: #54a0ff; }
        .sparkle:nth-child(6) { top: 35%; left: 70%; animation-delay: 1s; color: #96ceb4; }
        .sparkle:nth-child(7) { top: 65%; left: 60%; animation-delay: 1.2s; color: #5f27cd; }
        .sparkle:nth-child(8) { top: 85%; left: 75%; animation-delay: 1.4s; color: #00d2d3; }

        @keyframes sparkleShine {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg); 
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .birthday-page {
            padding: 10px;
          }
          
          .party-emojis {
            top: 5%;
          }
          
          .birthday-cake {
            bottom: 10%;
          }
          
          .balloon-emoji {
            font-size: 2.5rem;
          }
        }

        @media (max-height: 600px) {
          .birthday-title {
            font-size: clamp(2rem, 6vw, 3.5rem);
          }
          
          .party-emojis {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
          }
          
          .birthday-cake {
            font-size: clamp(2rem, 6vw, 4rem);
            bottom: 5%;
          }
        }
      `}</style>

      <div class="party-emojis">
        🎉🎊🥳🎈
      </div>

      <div class="sparkle-shower">
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
      </div>

      <h1 class="birthday-title">{BIRTHDAY_CONTENT.message}</h1>

      {showConfetti() && (
        <div class="confetti-explosion">
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
        </div>
      )}

      {showFireworks() && (
        <div class="fireworks">
          <div class="firework"></div>
          <div class="firework"></div>
          <div class="firework"></div>
          <div class="firework"></div>
          <div class="firework"></div>
        </div>
      )}

      {showCake() && (
        <div class="birthday-cake">🎂</div>
      )}

      <div class="party-balloons">
        <div class="balloon-emoji">🎈</div>
        <div class="balloon-emoji">🎈</div>
        <div class="balloon-emoji">🎈</div>
        <div class="balloon-emoji">🎈</div>
      </div>
    </div>
  );
};

export default BirthdayPage;