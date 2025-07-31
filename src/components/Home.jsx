const { useState, useEffect } = React;

const romanticMessages = [
  'You\'re my forever flower, blooming in my heart every day, Riri. 🌸',
  'Your smile is the sweetest recipe for my happiness, my darling Riri. 💕',
  'With every song you sing, my love for you grows stronger, Riri. 🎵',
  'You\'re my teddy bear, soft and warm, making every moment cozy, Riri. 🧸',
  'Our love is a poem, written in the stars with pink and purple ink, Riri. ✨',
  'You make every day feel like a garden full of roses and kisses, Riri. 🌹',
  'In your eyes, I see the most beautiful sunset painted in pink and purple, Riri. 🌅',
  'Your laughter is the melody that makes my heart dance with joy, Riri. 💃',
  'Every moment with you is like a fairy tale come true, Riri. 🧚‍♀️',
  'You\'re not just my love, you\'re my best friend, my soulmate, my everything, Riri. 💖',
  'With you, every day is Valentine\'s Day filled with love and magic, Riri. 💝',
  'Your love is the most beautiful flower in my garden of dreams, Riri. 🌺'
];

const specialQuotes = [
  '"In all the world, there is no heart for me like yours, Riri. In all the world, there is no love for you like mine." - Maya Angelou',
  '"I have loved you for a thousand years, and I\'ll love you for a thousand more, Riri." - Christina Perri',
  '"You are my today and all of my tomorrows, Riri." - Leo Christopher',
  '"Every love story is beautiful, but ours is my favorite, Riri." - Unknown',
  '"You don\'t marry someone you can live with, you marry the person who you cannot live without, Riri." - Unknown'
];

function Home() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showSpecial, setShowSpecial] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % romanticMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextMessage = () => {
    setMessageIndex(prev => (prev + 1) % romanticMessages.length);
    setClickCount(prev => prev + 1);
    if (clickCount >= 5) {
      setShowSpecial(true);
    }
  };

  const nextQuote = () => {
    setQuoteIndex(prev => (prev + 1) % specialQuotes.length);
  };

  return React.createElement('div', { className: 'w-full max-w-6xl mx-auto p-6 mt-20' },
    React.createElement('header', { className: 'text-center mb-12' },
      React.createElement('div', { className: 'glass-card p-8 rounded-3xl glow-effect' },
        React.createElement('h1', { className: 'text-6xl font-bold romantic-text mb-6 floating-element' }, 'Happy Girlfriend\'s Day, My Love Riri! 💕'),
        React.createElement('div', { className: 'text-2xl mb-6' },
          React.createElement('span', { className: 'text-pink-600 font-semibold' }, 'To the most amazing woman in my life'),
          React.createElement('br'),
          React.createElement('span', { className: 'text-purple-700' }, 'who makes every day magical ✨')
        ),
        React.createElement('div', { className: 'bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl mb-6' },
          React.createElement('p', { className: 'text-xl text-purple-800 font-medium italic' }, romanticMessages[messageIndex])
        ),
        React.createElement('button', {
          onClick: nextMessage,
          className: 'magical-button text-lg px-8 py-3'
        }, '💝 Another Sweet Message 💝')
      )
    ),

    React.createElement('section', { className: 'grid md:grid-cols-2 gap-8 mb-12' },
      React.createElement('div', { className: 'glass-card p-6 rounded-2xl' },
        React.createElement('h2', { className: 'text-3xl font-bold text-pink-600 mb-4' }, '💕 Why I Love You, Riri 💕'),
        React.createElement('ul', { className: 'space-y-3 text-lg' },
          React.createElement('li', { className: 'flex items-center' }, '🌸 Your beautiful smile that lights up my world'),
          React.createElement('li', { className: 'flex items-center' }, '🎵 The way you sing and make my heart dance'),
          React.createElement('li', { className: 'flex items-center' }, '🌺 Your love for flowers and gardening'),
          React.createElement('li', { className: 'flex items-center' }, '✍️ Your creative writing that touches my heart'),
          React.createElement('li', { className: 'flex items-center' }, '🧸 Your cuddly teddy bear personality'),
          React.createElement('li', { className: 'flex items-center' }, '🌺 Your love for flowers and all things beautiful')
        )
      ),
      React.createElement('div', { className: 'glass-card p-6 rounded-2xl' },
        React.createElement('h2', { className: 'text-3xl font-bold text-purple-600 mb-4' }, '💝 Special Quotes for You, Riri 💝'),
        React.createElement('div', { className: 'bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl mb-4' },
          React.createElement('p', { className: 'text-lg italic text-purple-800' }, specialQuotes[quoteIndex])
        ),
        React.createElement('button', {
          onClick: nextQuote,
          className: 'magical-button'
        }, '💫 New Quote 💫')
      )
    ),

    showSpecial && React.createElement('section', { className: 'glass-card p-8 rounded-3xl text-center mb-12 glow-effect' },
      React.createElement('h2', { className: 'text-4xl font-bold romantic-text mb-4' }, '🌟 Special Message for You, Riri 🌟'),
      React.createElement('p', { className: 'text-xl text-purple-800 mb-4' }, 'You\'ve clicked so many times, you must really love me! 💕'),
      React.createElement('p', { className: 'text-lg text-pink-700' }, 'Just like I love you more than words can express, Riri...'),
      React.createElement('div', { className: 'text-6xl mt-4' }, '💖💕💖💕💖')
    ),

    React.createElement('section', { className: 'glass-card p-8 rounded-3xl text-center' },
      React.createElement('h2', { className: 'text-3xl font-bold text-pink-600 mb-6' }, '🎀 Explore Your Special Sections, Riri 🎀'),
      React.createElement('div', { className: 'grid md:grid-cols-3 gap-6' },
        React.createElement('div', { className: 'recipe-card text-center' },
          React.createElement('div', { className: 'text-4xl mb-2' }, '🌸'),
          React.createElement('h3', { className: 'text-xl font-bold text-purple-600' }, 'Flower Garden'),
          React.createElement('p', { className: 'text-gray-700' }, 'Learn to plant beautiful flowers')
        ),
        React.createElement('div', { className: 'recipe-card text-center' },
          React.createElement('div', { className: 'text-4xl mb-2' }, '✍️'),
          React.createElement('h3', { className: 'text-xl font-bold text-purple-600' }, 'Poetry Haven'),
          React.createElement('p', { className: 'text-gray-700' }, 'Let your words bloom beautifully')
        ),
        React.createElement('div', { className: 'recipe-card text-center' },
          React.createElement('div', { className: 'text-4xl mb-2' }, '💝'),
          React.createElement('h3', { className: 'text-xl font-bold text-purple-600' }, 'My Love & Promise'),
          React.createElement('p', { className: 'text-gray-700' }, 'My commitment to you forever')
        )
      )
    ),

    React.createElement('footer', { className: 'text-center text-xl text-purple-700 mt-12' },
      React.createElement('p', { className: 'mb-2' }, 'Made with all my love for you, my forever flower Riri. 🌸'),
      React.createElement('p', { className: 'mb-2' }, 'Happy Girlfriend\'s Day, my one and only Riri. 💕'),
      React.createElement('p', { className: 'text-2xl footer-heart' }, '💖 I Love You Forever Riri 💖')
    )
  );
}