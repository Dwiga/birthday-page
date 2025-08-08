import { createSignal, onMount, onCleanup } from 'solid-js';
import './birthday-card.css';
import birthdayVideo from './assets/birthday-video.mp4';
import birthdaySong from './assets/birthday-song.mp3';

export const BirthdayCard = () => {
  const [isPlaying, setIsPlaying] = createSignal(false);
  const [showMessage, setShowMessage] = createSignal(false);
  let videoRef!: HTMLVideoElement;
  let audioRef!: HTMLAudioElement;

  const playMedia = async () => {
    try {
      // Start both video and audio simultaneously
      const videoPromise = videoRef.play();
      const audioPromise = audioRef.play();
      
      await Promise.all([videoPromise, audioPromise]);
      setIsPlaying(true);
      
      // Show birthday message after a short delay
      setTimeout(() => setShowMessage(true), 1000);
    } catch (error) {
      console.error('Error playing media:', error);
    }
  };

  const pauseMedia = () => {
    videoRef.pause();
    audioRef.pause();
    setIsPlaying(false);
  };

  const resumeMedia = () => {
    videoRef.play();
    audioRef.play();
    setIsPlaying(true);
  };

  // Sync video with audio duration
  onMount(() => {
    // Loop video continuously until audio ends
    const handleVideoEnd = () => {
      if (!audioRef.ended && !audioRef.paused) {
        videoRef.currentTime = 0;
        videoRef.play();
      }
    };

    // Stop everything when audio ends
    const handleAudioEnd = () => {
      videoRef.pause();
      setIsPlaying(false);
      setShowMessage(true); // Keep message visible after song ends
    };

    videoRef.addEventListener('ended', handleVideoEnd);
    audioRef.addEventListener('ended', handleAudioEnd);

    // Cleanup event listeners
    onCleanup(() => {
      videoRef?.removeEventListener('ended', handleVideoEnd);
      audioRef?.removeEventListener('ended', handleAudioEnd);
    });
  });

  return (
    <div class="birthday-card">
      {/* Floating balloons animation */}
      <div class="balloons">
        <div class="balloon balloon-1"></div>
        <div class="balloon balloon-2"></div>
        <div class="balloon balloon-3"></div>
        <div class="balloon balloon-4"></div>
        <div class="balloon balloon-5"></div>
      </div>

      {/* Confetti animation */}
      <div class="confetti">
        {Array.from({ length: 50 }, (_, i) => (
          <div class={`confetti-piece confetti-${i % 6}`}></div>
        ))}
      </div>

      {/* Main card content */}
      <div class="card-content">
        <div class="video-container">
          <video
            ref={videoRef}
            src={birthdayVideo}
            muted={true}
            loop={false}
            class="birthday-video"
          />
          <div class={`video-overlay ${isPlaying() ? 'playing' : ''}`}>
            <div class="play-button" onClick={playMedia}>
              {!isPlaying() && (
                <>
                  <div class="play-icon">▶</div>
                  <div class="play-text">Click to Start the Celebration!</div>
                </>
              )}
            </div>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={birthdaySong}
          preload="auto"
        />

        {/* Birthday message */}
        <div class={`birthday-message ${showMessage() ? 'show' : ''}`}>
          <h1 class="title">🎉 Happy Birthday! 🎉</h1>
          <p class="subtitle">Wishing you a day filled with happiness and joy!</p>
          <div class="cake">🎂</div>
        </div>

        {/* Control buttons */}
        <div class="controls">
          {isPlaying() ? (
            <button class="control-btn pause-btn" onClick={pauseMedia}>
              ⏸️ Pause
            </button>
          ) : showMessage() && (
            <button class="control-btn resume-btn" onClick={resumeMedia}>
              ▶️ Resume
            </button>
          )}
        </div>
      </div>

      {/* Sparkles animation */}
      <div class="sparkles">
        {Array.from({ length: 20 }, (_, i) => (
          <div class={`sparkle sparkle-${i % 4}`}>✨</div>
        ))}
      </div>
    </div>
  );
};