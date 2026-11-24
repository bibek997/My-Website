import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Music, ChevronDown, SkipBack, SkipForward, Play, Pause, Volume2, ExternalLink } from 'lucide-react';

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(50);

  // Hardcoded playlist with 4 songs. Replace the 'id' with real YouTube IDs.
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

  const currentTrack = playlist[currentTrackIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Hidden YouTube Player */}
      <div className="hidden">
        <YouTube
          videoId={playlist[currentTrackIndex].id}
          opts={{ height: '0', width: '0', playerVars: { autoplay: 1, controls: 0 } }}
          onReady={onReady}
          onStateChange={onStateChange}
        />
      </div>

      {/* Floating Mini Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
        >
          <Music size={20} />
        </button>
      )}

      {/* Expanded Player Card - Compact Size */}
      {isOpen && (
        <div className="w-75 bg-[#0a0a0a] text-white rounded-2xl shadow-2xl overflow-hidden border border-[#222] animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 flex items-center justify-between border-b border-[#222]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse"></span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase">Now Playing</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-[#1a1a1a] hover:bg-[#333] text-gray-400 hover:text-white transition-colors"
            >
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Current Track Info */}
          <div className="px-4 pt-4 pb-2">
            <h3 className="text-lg font-bold mb-0.5 line-clamp-1 text-white">{currentTrack.title}</h3>
            <p className="text-gray-400 text-xs font-medium line-clamp-1">{currentTrack.artist}</p>
          </div>

          {/* Controls */}
          <div className="px-4 pb-4 flex items-center justify-between">
            <button onClick={prevTrack} className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={16} fill="currentColor" />
            </button>
            
            <button 
              onClick={togglePlay} 
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
            </button>
            
            <button onClick={nextTrack} className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={16} fill="currentColor" />
            </button>
            
            {/* Volume */}
            <div className="flex items-center gap-2 group">
              <Volume2 size={14} className="text-gray-400 group-hover:text-white transition-colors" />
              <input 
                type="range" min="0" max="100" step="1" value={volume} 
                onChange={handleVolumeChange}
                className="w-12 h-1 bg-[#333] rounded-lg appearance-none cursor-pointer accent-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Playlist - Scrollable Area */}
          <div className="bg-[#121212] p-2 space-y-1 border-t border-[#222] max-h-45 overflow-y-auto custom-scrollbar">
            {playlist.map((track, index) => (
              <div 
                key={index}
                onClick={() => changeTrack(index)}
                className={`group flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  index === currentTrackIndex ? 'bg-[#222]' : 'hover:bg-[#1a1a1a]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {/* Thumbnail / Live Icon */}
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center overflow-hidden border ${
                    index === currentTrackIndex ? 'bg-black border-[#333]' : 'bg-[#1a1a1a] border-transparent'
                  }`}>
                     {index === currentTrackIndex ? (
                       // Custom Live Equalizer Icon
                       <div className="flex items-end gap-0.5 h-3">
                         <div className="w-0.5 bg-white rounded-full animate-music-bar"></div>
                         <div className="w-0.5 bg-white rounded-full animate-[music-bar_1.2s_ease-in-out_infinite_0.2s] h-1.5"></div>
                         <div className="w-0.5 bg-white rounded-full animate-[music-bar_0.8s_ease-in-out_infinite_0.4s] h-2"></div>
                       </div>
                     ) : (
                       <span className="text-gray-500 font-bold text-[9px]">{String(index + 1).padStart(2, '0')}</span>
                     )}
                  </div>
                  
                  {/* Track Text */}
                  <div>
                    <h4 className={`text-[11px] font-semibold line-clamp-1 ${
                      index === currentTrackIndex ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {track.title}
                    </h4>
                    <p className="text-[9px] text-gray-500 line-clamp-1">
                      {track.artist}
                    </p>
                  </div>
                </div>

                {/* External Link to YT Music */}
                <a 
                  href={track.link} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  className="p-1.5 text-gray-500 hover:text-white hover:bg-[#333] rounded-md transition-colors"
                >
                  <ExternalLink size={12} />
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