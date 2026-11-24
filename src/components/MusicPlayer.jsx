import { useState } from 'react';
import YouTube from 'react-youtube';
import { Music, ChevronDown, SkipBack, SkipForward, Play, Pause, Volume2, ExternalLink, X } from 'lucide-react';

const MusicPlayer = () => {
  // We add a new state to track if we should autoplay
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(50);
  // This tracks if the player is mounted at all
  const [isPlayerMounted, setIsPlayerMounted] = useState(false); 

  const playlist = [
    { id: 'X9c8momlvA8', title: 'Robbers', artist: 'The 1975', link: 'https://music.youtube.com/watch?v=X9c8momlvA8' }, 
    { id: '2waBRY_3xwc', title: 'Sliver Sable', artist: 'Cigarettes After Sex', link: 'https://music.youtube.com/watch?v=2waBRY_3xwc' }, 
    { id: 'mGUjVbsYG6E', title: 'No. 1 Party Anthem', artist: 'Arctic Monkeys', link: 'https://music.youtube.com/watch?v=mGUjVbsYG6E' },
    { id: 'oplra1FJxWI', title: "Don't Look Back In Anger", artist: 'Oasis', link: 'https://music.youtube.com/watch?v=aW_8kbyOKeQ' },
    { id: 'OMOGaugKpzs', title: "Every Breath You Take", artist: 'The Police', link: 'https://music.youtube.com/watch?v=-SaUrDhp034' },
  ];

  const onReady = (event) => {
    setPlayer(event.target);
    event.target.setVolume(volume);
    // Only play if shouldAutoplay is true
    if (shouldAutoplay) {
      event.target.playVideo();
    }
  };

  const onStateChange = (event) => {
    if (event.data === 1) setIsPlaying(true);
    if (event.data === 2) setIsPlaying(false);
    if (event.data === 0) nextTrack(); 
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) player.pauseVideo();
      else player.playVideo();
    }
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(false);
    // If they change tracks manually, they want to play it
    setShouldAutoplay(true); 
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    changeTrack(nextIndex);
  };

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    changeTrack(prevIndex);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    if (player) player.setVolume(newVolume);
  };

  // Triggered when clicking "Play Music"
  const handlePlayMusic = () => {
    setShouldAutoplay(true); // Tell it to play
    setIsPlayerMounted(true); // Mount the hidden YouTube player
    setShowPrompt(false);
    setIsOpen(true); 
  };

  // Triggered when clicking "Maybe Later" or "X"
  const handleMaybeLater = () => {
    setShouldAutoplay(false); // Tell it NOT to play
    setIsPlayerMounted(true); // Mount the player (but it stays paused)
    setShowPrompt(false);
  };

  const currentTrack = playlist[currentTrackIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* 1. THE PROMPT MODAL */}
      {showPrompt && (
        <div className="w-[320px] bg-[#0a0a0a] border border-[#222] rounded-2xl p-5 shadow-2xl animate-pop-up">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase">Audio Experience</span>
            </div>
            <button onClick={handleMaybeLater} className="text-gray-400 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          <h2 className="text-[19px] font-bold text-white mb-4 leading-tight">
            Listen to curated soundtrack while exploring?
          </h2>

          <div className="bg-[#121212] border border-[#333] rounded-xl p-3 flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#222] rounded-md flex items-center justify-center">
                <Music size={14} className="text-gray-400" />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold line-clamp-1">{currentTrack.title}</h4>
                <p className="text-gray-500 text-[10px] line-clamp-1">{currentTrack.artist}</p>
              </div>
            </div>
            <div className="flex items-end gap-0.5 h-2.5">
              <div className="w-0.5 bg-white rounded-full h-1.5 animate-music-bar"></div>
              <div className="w-0.5 bg-white rounded-full h-2 animate-[music-bar_1.2s_ease-in-out_infinite_0.2s]"></div>
              <div className="w-0.5 bg-white rounded-full h-1.5 animate-[music-bar_0.8s_ease-in-out_infinite_0.4s]"></div>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handlePlayMusic}
              className="flex-1 flex items-center justify-center gap-1.5 bg-white text-black py-2.5 rounded-lg font-bold text-xs hover:bg-gray-200 transition-colors"
            >
              <Play size={14} fill="currentColor" /> Play Music
            </button>
            <button 
              onClick={handleMaybeLater}
              className="flex-1 bg-[#1a1a1a] text-gray-400 py-2.5 rounded-lg font-bold text-xs border border-[#333] hover:bg-[#222] hover:text-white transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}

      {/* 2. HIDDEN YOUTUBE PLAYER */}
      {/* We only mount this if isPlayerMounted is true. 
          And we dynamically set autoplay based on shouldAutoplay. */}
      {isPlayerMounted && (
        <div className="hidden">
          <YouTube
            videoId={playlist[currentTrackIndex].id}
            opts={{ 
              height: '0', 
              width: '0', 
              playerVars: { 
                autoplay: shouldAutoplay ? 1 : 0, // <--- THE FIX IS HERE
                controls: 0 
              } 
            }}
            onReady={onReady}
            onStateChange={onStateChange}
          />
        </div>
      )}

      {/* 3. FLOATING MINI BUTTON */}
      {!isOpen && !showPrompt && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform border border-[#333] animate-pop-up"
        >
          <Music size={18} />
        </button>
      )}

      {/* 4. EXPANDED PLAYER CARD */}
      {isOpen && !showPrompt && (
        <div className="w-70 bg-[#0a0a0a] text-white rounded-2xl shadow-2xl overflow-hidden border border-[#222] animate-pop-up">
          
          <div className="p-3 flex items-center justify-between border-b border-[#222]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse"></span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-gray-400 uppercase">Now Playing</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full bg-[#1a1a1a] hover:bg-[#333] text-gray-400 hover:text-white transition-colors"
            >
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="px-4 pt-3 pb-1">
            <h3 className="text-[15px] font-bold mb-0.5 line-clamp-1 text-white">{currentTrack.title}</h3>
            <p className="text-gray-400 text-[11px] font-medium line-clamp-1">{currentTrack.artist}</p>
          </div>

          <div className="px-4 pb-3 flex items-center justify-between">
            <button onClick={prevTrack} className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={14} fill="currentColor" />
            </button>
            
            <button 
              onClick={togglePlay} 
              className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
            </button>
            
            <button onClick={nextTrack} className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={14} fill="currentColor" />
            </button>
            
            <div className="flex items-center gap-1.5 group">
              <Volume2 size={13} className="text-gray-400 group-hover:text-white transition-colors" />
              <input 
                type="range" min="0" max="100" step="1" value={volume} 
                onChange={handleVolumeChange}
                className="w-10 h-1 bg-[#333] rounded-lg appearance-none cursor-pointer accent-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="bg-[#121212] p-1.5 space-y-0.5 border-t border-[#222] max-h-40 overflow-y-auto custom-scrollbar">
            {playlist.map((track, index) => (
              <div 
                key={index}
                onClick={() => changeTrack(index)}
                className={`group flex items-center justify-between p-1.5 rounded-lg cursor-pointer transition-all duration-200 ${
                  index === currentTrackIndex ? 'bg-[#222]' : 'hover:bg-[#1a1a1a]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center overflow-hidden border ${
                    index === currentTrackIndex ? 'bg-black border-[#333]' : 'bg-[#1a1a1a] border-transparent'
                  }`}>
                     {index === currentTrackIndex ? (
                       <div className="flex items-end gap-[1.5px] h-2.5">
                         <div className="w-[1.5px] bg-white rounded-full animate-music-bar"></div>
                         <div className="w-[1.5px] bg-white rounded-full animate-[music-bar_1.2s_ease-in-out_infinite_0.2s] h-1"></div>
                         <div className="w-[1.5px] bg-white rounded-full animate-[music-bar_0.8s_ease-in-out_infinite_0.4s] h-1.5"></div>
                       </div>
                     ) : (
                       <span className="text-gray-500 font-bold text-[8px]">{String(index + 1).padStart(2, '0')}</span>
                     )}
                  </div>
                  
                  <div>
                    <h4 className={`text-[10px] font-semibold line-clamp-1 ${
                      index === currentTrackIndex ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {track.title}
                    </h4>
                    <p className="text-[8px] text-gray-500 line-clamp-1">
                      {track.artist}
                    </p>
                  </div>
                </div>

                <a 
                  href={track.link} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  className="p-1 text-gray-500 hover:text-white hover:bg-[#333] rounded-md transition-colors"
                >
                  <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;