const { useState, useEffect } = React;

const reassuranceMessages = [
  'Riri, you are my today, my tomorrow, and all of my forever. 💕',
  'With you, every day feels like a beautiful dream come true. ✨',
  'You are not just my love, you are my best friend, my soulmate, my everything. 💖',
  'I promise to love you more with each passing day, Riri. 🌸',
  'Our love story is my favorite story, and it\'s only just beginning. 📖',
  'You make me believe in love, in magic, in forever. 🧚‍♀️',
  'Every moment with you is a gift I cherish deeply. 🎁',
  'You are the missing piece that makes my life complete. 🧩',
  'I will always choose you, in every lifetime, in every universe. 🌌',
  'Your love is the greatest blessing I have ever received. 🙏',
  'Together, we are unstoppable, unbreakable, and forever. 💪',
  'You are my home, my safe place, my everything. 🏠'
];

const commitmentPromises = [
  'I promise to always be there for you, through every storm and every sunshine. 🌈',
  'I promise to love you unconditionally, flaws and all. 💝',
  'I promise to make you smile every single day. 😊',
  'I promise to be your biggest supporter and your strongest protector. 🛡️',
  'I promise to grow with you, learn with you, and build a beautiful future together. 🌱',
  'I promise to always choose us, no matter what life brings. 🤝',
  'I promise to love you more tomorrow than I do today. 📈',
  'I promise to be patient, understanding, and kind always. 🤗',
  'I promise to make every day feel like Valentine\'s Day. 💕',
  'I promise to be the person you can always count on. 🎯'
];

const futureDreams = [
  'I dream of building a beautiful home with you, filled with love and laughter. 🏡',
  'I dream of growing old together, holding your hand every step of the way. 👫',
  'I dream of creating a family with you, raising children who know what true love looks like. 👨‍👩‍👧‍👦',
  'I dream of traveling the world with you, making memories that last a lifetime. ✈️',
  'I dream of waking up next to you every morning for the rest of my life. 🌅',
  'I dream of celebrating every milestone together, big and small. 🎉',
  'I dream of being your rock, your comfort, your safe place always. 🪨',
  'I dream of making you the happiest woman in the world. 👑',
  'I dream of a love that grows stronger with each passing year. 💪',
  'I dream of a future so bright, it makes the sun jealous. ☀️'
];

function Reassurance() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [promiseIndex, setPromiseIndex] = useState(0);
  const [dreamIndex, setDreamIndex] = useState(0);
  const [showSpecial, setShowSpecial] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(function() {
    const interval = setInterval(function() {
      setMessageIndex(function(prev) {
        return (prev + 1) % reassuranceMessages.length;
      });
    }, 4000);
    return function() {
      clearInterval(interval);
    };
  }, []);

  useEffect(function() {
    const interval = setInterval(function() {
      setPromiseIndex(function(prev) {
        return (prev + 1) % commitmentPromises.length;
      });
    }, 5000);
    return function() {
      clearInterval(interval);
    };
  }, []);

  useEffect(function() {
    const interval = setInterval(function() {
      setDreamIndex(function(prev) {
        return (prev + 1) % futureDreams.length;
      });
    }, 6000);
    return function() {
      clearInterval(interval);
    };
  }, []);

  function handleHeartClick() {
    setClickCount(function(prev) {
      return prev + 1;
    });
    if (clickCount >= 5) {
      setShowSpecial(true);
    }
  }

  return React.createElement('div', { className: 'w-full max-w-6xl mx-auto p-6 mt-20' },
    React.createElement('section', { className: 'mb-12 glass-card p-8 rounded-3xl' },
      React.createElement('div', { className: 'text-center mb-8' },
        React.createElement('h2', { className: 'text-4xl font-bold romantic-text mb-4' }, '💕 My Love & Commitment to You, Riri 💕'),
        React.createElement('p', { className: 'text-xl text-purple-700 mb-6' }, 'A promise of forever, a commitment of love, and a dream of our beautiful future together. ✨'),
        React.createElement('div', { className: 'bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl mb-6' },
          React.createElement('p', { className: 'text-lg text-purple-800 italic' }, reassuranceMessages[messageIndex])
        ),
        React.createElement('button', {
          onClick: handleHeartClick,
          className: 'magical-button text-lg px-8 py-3'
        }, '💖 Click for More Love 💖')
      ),

      React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 mb-8' },
        React.createElement('div', { className: 'glass-card p-6 rounded-2xl' },
          React.createElement('h3', { className: 'text-2xl font-bold text-pink-600 mb-4' }, '🤝 My Promises to You 🤝'),
          React.createElement('div', { className: 'bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl mb-4' },
            React.createElement('p', { className: 'text-lg text-purple-800 italic' }, commitmentPromises[promiseIndex])
          ),
          React.createElement('ul', { className: 'space-y-3 text-lg' },
            React.createElement('li', { className: 'flex items-center' }, '💕 I will love you more each day'),
            React.createElement('li', { className: 'flex items-center' }, '🤗 I will always be your comfort'),
            React.createElement('li', { className: 'flex items-center' }, '🛡️ I will protect your heart always'),
            React.createElement('li', { className: 'flex items-center' }, '🌟 I will make you feel special every day'),
            React.createElement('li', { className: 'flex items-center' }, '💪 I will be strong for us both'),
            React.createElement('li', { className: 'flex items-center' }, '🎯 I will always choose you first')
          )
        ),
        React.createElement('div', { className: 'glass-card p-6 rounded-2xl' },
          React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4' }, '🌅 Our Beautiful Future 🌅'),
          React.createElement('div', { className: 'bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl mb-4' },
            React.createElement('p', { className: 'text-lg text-purple-800 italic' }, futureDreams[dreamIndex])
          ),
          React.createElement('ul', { className: 'space-y-3 text-lg' },
            React.createElement('li', { className: 'flex items-center' }, '🏡 Building our dream home together'),
            React.createElement('li', { className: 'flex items-center' }, '👫 Growing old hand in hand'),
            React.createElement('li', { className: 'flex items-center' }, '👨‍👩‍👧‍👦 Creating a beautiful family'),
            React.createElement('li', { className: 'flex items-center' }, '✈️ Traveling the world together'),
            React.createElement('li', { className: 'flex items-center' }, '💎 Making every day magical'),
            React.createElement('li', { className: 'flex items-center' }, '💕 Loving each other forever')
          )
        )
      ),

      React.createElement('div', { className: 'text-center mb-8' },
        React.createElement('h3', { className: 'text-3xl font-bold text-pink-600 mb-6' }, '💝 Why We Will Go Far Together 💝'),
        React.createElement('div', { className: 'grid md:grid-cols-3 gap-6' },
          React.createElement('div', { className: 'recipe-card text-center' },
            React.createElement('div', { className: 'text-4xl mb-2' }, '💕'),
            React.createElement('h4', { className: 'text-xl font-bold text-purple-600' }, 'Unconditional Love'),
            React.createElement('p', { className: 'text-gray-700' }, 'Our love knows no bounds or conditions')
          ),
          React.createElement('div', { className: 'recipe-card text-center' },
            React.createElement('div', { className: 'text-4xl mb-2' }, '🤝'),
            React.createElement('h4', { className: 'text-xl font-bold text-purple-600' }, 'Strong Partnership'),
            React.createElement('p', { className: 'text-gray-700' }, 'We support and lift each other up')
          ),
          React.createElement('div', { className: 'recipe-card text-center' },
            React.createElement('div', { className: 'text-4xl mb-2' }, '🌟'),
            React.createElement('h4', { className: 'text-xl font-bold text-purple-600' }, 'Shared Dreams'),
            React.createElement('p', { className: 'text-gray-700' }, 'We dream together and work together')
          )
        )
      ),

      showSpecial && React.createElement('div', { className: 'bg-gradient-to-r from-pink-200 to-purple-200 p-8 rounded-3xl mb-8 glow-effect' },
        React.createElement('h3', { className: 'text-3xl font-bold romantic-text mb-4' }, '🌟 Special Message for My Riri 🌟'),
        React.createElement('p', { className: 'text-xl text-purple-800 mb-4' }, 'You\'ve clicked so many times, you must really love me! 💕'),
        React.createElement('p', { className: 'text-lg text-pink-700 mb-4' }, 'Just like I love you more than words can ever express...'),
        React.createElement('p', { className: 'text-lg text-purple-800 mb-4' }, 'Riri, you are my everything. My past, my present, and my future.'),
        React.createElement('p', { className: 'text-lg text-pink-700' }, 'I promise to love you more with each passing day, and to make every moment with you magical.'),
        React.createElement('div', { className: 'text-6xl mt-4' }, '💖💕💖💕💖')
      ),

      React.createElement('div', { className: 'text-center' },
        React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4' }, '💕 My Final Promise to You, Riri 💕'),
        React.createElement('div', { className: 'bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl' },
          React.createElement('p', { className: 'text-xl text-purple-800 italic mb-4' }, 
            'I promise to love you more tomorrow than I do today, and more next year than I do this year. My love for you will never stop growing, never stop blooming, and never stop being the most beautiful thing in my life.'
          ),
          React.createElement('p', { className: 'text-lg text-pink-700 font-bold' }, 
            'You are my forever, Riri. And I am yours. 💕'
          )
        )
      )
    ),

    React.createElement('footer', { className: 'text-center text-xl text-purple-700' },
      React.createElement('p', { className: 'mb-2' }, 'Made with all my love for you, my forever flower Riri. 🌸'),
      React.createElement('p', { className: 'mb-2' }, 'Happy Girlfriend\'s Day, my one and only Riri. 💕'),
      React.createElement('p', { className: 'text-2xl footer-heart' }, '💖 I Love You Forever Riri 💖')
    )
  );
} 