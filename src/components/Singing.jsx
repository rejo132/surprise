const { useState } = React;

const loveSongs = [
  {
    title: 'My Flower\'s Song',
    lyrics: `My love, you're my rose, in pink and purple glow, Riri,
With every note you sing, my heart will always know,
That you're the melody that makes my soul complete,
Your voice is like an angel's, so pure and oh so sweet.

In every song you sing, I hear our love story,
A beautiful symphony of you and me in harmony,
Your laughter is the chorus, your smile the perfect tune,
Together we create the most beautiful love song ever sung.`,
    mood: 'Romantic 💕',
    difficulty: 'Easy'
  },
  {
    title: 'Purple Dreams',
    lyrics: `Beneath the purple sky, where starlight dances free,
I hear your voice calling out, like a sweet melody, Riri,
In every word you speak, I find a piece of heaven,
Your song is like a prayer, that keeps my heart believing.

Oh, sing to me my darling, let your voice be my guide,
Through all the storms of life, you'll always be by my side,
Your music is the magic, that makes my world complete,
In every note you sing, our love will never retreat.`,
    mood: 'Dreamy ✨',
    difficulty: 'Medium'
  },
  {
    title: 'Butterfly Kisses',
    lyrics: `Like butterfly kisses on a summer breeze,
Your voice floats through the air with such sweet ease, Riri,
Every word you sing is like a gentle touch,
That makes me love you oh so very much.

Your melody is like the morning dew,
Fresh and pure, so beautiful and true,
In every song you sing, I find my home,
Your voice is where my heart will always roam.`,
    mood: 'Sweet 🦋',
    difficulty: 'Easy'
  }
];

const singingTips = [
  '🎵 Take deep breaths and relax your shoulders',
  '🎤 Stand tall and imagine your voice floating up',
  '💕 Sing from your heart, not just your throat',
  '🎶 Practice the melody slowly at first',
  '✨ Let your emotions guide your expression',
  '🎵 Record yourself to hear your beautiful voice',
  '💖 Sing like no one is listening (except me!)',
  '🎤 Your voice is unique and beautiful, just like you, Riri'
];

function Singing() {
  const [currentSong, setCurrentSong] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % loveSongs.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return React.createElement('div', { className: 'w-full max-w-6xl mx-auto p-6 mt-20' },
    React.createElement('section', { className: 'mb-12 glass-card p-8 rounded-3xl' },
      React.createElement('div', { className: 'text-center mb-8' },
        React.createElement('h2', { className: 'text-4xl font-bold romantic-text mb-4' }, '🎵 Sing Your Heart Out, Riri 🎵'),
        React.createElement('p', { className: 'text-xl text-purple-700 mb-6' }, 'Your voice is my favorite melody. Let it soar like a beautiful bird, Riri! 💕'),
        React.createElement('div', { className: 'flex flex-wrap justify-center gap-4 mb-6' },
          React.createElement('button', {
            onClick: () => setShowLyrics(!showLyrics),
            className: 'magical-button'
          }, showLyrics ? '💝 Hide Lyrics 💝' : '📖 Show Lyrics 📖'),
          React.createElement('button', {
            onClick: () => setShowTips(!showTips),
            className: 'magical-button'
          }, showTips ? '💫 Hide Tips 💫' : '💡 Singing Tips 💡'),
          React.createElement('button', {
            onClick: togglePlay,
            className: 'magical-button'
          }, isPlaying ? '⏸️ Pause Music ⏸️' : '▶️ Play Music ▶️')
        )
      ),

      React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 mb-8' },
        React.createElement('div', { className: 'text-center' },
          React.createElement('div', { className: 'bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl mb-4' },
            React.createElement('h3', { className: 'text-2xl font-bold text-pink-600 mb-2' }, loveSongs[currentSong].title),
            React.createElement('div', { className: 'flex justify-center gap-4 mb-3' },
              React.createElement('span', { className: 'bg-pink-200 px-3 py-1 rounded-full text-sm' }, loveSongs[currentSong].mood),
              React.createElement('span', { className: 'bg-purple-200 px-3 py-1 rounded-full text-sm' }, loveSongs[currentSong].difficulty)
            ),
            React.createElement('div', { className: 'text-4xl mb-4' }, '🎤'),
            React.createElement('button', {
              onClick: nextSong,
              className: 'magical-button'
            }, '🎵 Next Song 🎵')
          )
        ),

        React.createElement('div', { className: 'space-y-4' },
          React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4' }, '💕 Why I Love Your Voice, Riri 💕'),
          React.createElement('ul', { className: 'space-y-3 text-lg' },
            React.createElement('li', { className: 'flex items-center' }, '🎵 Your voice is like honey, sweet and smooth'),
            React.createElement('li', { className: 'flex items-center' }, '✨ Every note you sing makes my heart flutter'),
            React.createElement('li', { className: 'flex items-center' }, '💖 Your singing voice is pure magic'),
            React.createElement('li', { className: 'flex items-center' }, '🎤 You express emotions so beautifully'),
            React.createElement('li', { className: 'flex items-center' }, '🌟 Your voice lights up any room'),
            React.createElement('li', { className: 'flex items-center' }, '💕 When you sing, I feel like I\'m in heaven')
          )
        )
      ),

      showLyrics && React.createElement('div', { className: 'mb-8' },
        React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4 text-center' }, '📖 Song Lyrics for You, Riri 📖'),
        React.createElement('div', { className: 'bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl' },
          React.createElement('pre', { className: 'whitespace-pre-wrap text-gray-700 font-serif text-lg leading-relaxed' }, loveSongs[currentSong].lyrics)
        )
      ),

      showTips && React.createElement('div', { className: 'mb-8' },
        React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4 text-center' }, '💡 Singing Tips for You, Riri 💡'),
        React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
          singingTips.map((tip, i) => 
            React.createElement('div', { key: i, className: 'recipe-card text-center' },
              React.createElement('p', { className: 'text-gray-700' }, tip)
            )
          )
        )
      ),

      React.createElement('div', { className: 'text-center' },
        React.createElement('h3', { className: 'text-2xl font-bold text-pink-600 mb-4' }, '🎶 Musical Notes for You, Riri 🎶'),
        React.createElement('div', { className: 'text-4xl space-x-4' },
          React.createElement('span', { className: 'music-note' }, '♪'),
          React.createElement('span', { className: 'music-note' }, '♫'),
          React.createElement('span', { className: 'music-note' }, '♬'),
          React.createElement('span', { className: 'music-note' }, '♩'),
          React.createElement('span', { className: 'music-note' }, '♪'),
          React.createElement('span', { className: 'music-note' }, '♫')
        ),
        React.createElement('p', { className: 'text-lg text-purple-700 mt-4' }, 'Your voice is the most beautiful music I\'ve ever heard, Riri! 💕')
      )
    ),

    React.createElement('footer', { className: 'text-center text-xl text-purple-700' },
      React.createElement('p', { className: 'mb-2' }, 'Made with all my love for you, my forever flower Riri. 🌸'),
      React.createElement('p', { className: 'mb-2' }, 'Happy Girlfriend\'s Day, my one and only Riri. 💕'),
      React.createElement('p', { className: 'text-2xl footer-heart' }, '💖 I Love You Forever Riri 💖')
    )
  );
}