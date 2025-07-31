const { useState, useEffect } = React;

const teddyMessages = [
  'You\'re as cuddly as a teddy bear, Riri! 🧸',
  'Give me a big teddy bear hug, Riri! 💕',
  'You make every day feel warm and cozy, Riri! 🌸',
  'You\'re my favorite cuddle buddy, Riri! 💖',
  'Your hugs are the best medicine, Riri! 💝',
  'You\'re soft, warm, and absolutely perfect, Riri! ✨'
];

const teddyFacts = [
  '🧸 Teddy bears were named after President Theodore Roosevelt',
  '💕 The first teddy bear was created in 1902',
  '🌸 Teddy bears are symbols of comfort and love',
  '💖 They\'re perfect for cuddling and sharing secrets',
  '💝 Every teddy bear has a special personality',
  '✨ You\'re my favorite teddy bear in the whole world, Riri!'
];

function TeddyBearHug() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [hugCount, setHugCount] = useState(0);
  const [showSpecial, setShowSpecial] = useState(false);
  const [isHugging, setIsHugging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % teddyMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex(prev => (prev + 1) % teddyFacts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const giveHug = () => {
    setHugCount(prev => prev + 1);
    setIsHugging(true);
    setTimeout(() => setIsHugging(false), 1000);
    
    if (hugCount >= 10) {
      setShowSpecial(true);
    }
  };

  return React.createElement('div', { className: 'w-full max-w-6xl mx-auto p-6 mt-20' },
    React.createElement('section', { className: 'mb-12 glass-card p-8 rounded-3xl text-center' },
      React.createElement('h2', { className: 'text-4xl font-bold romantic-text mb-6' }, '🧸 A Magical Teddy Bear Hug for Riri 🧸'),
      React.createElement('p', { className: 'text-xl text-purple-700 mb-8' }, 'A dreamy teddy bear surrounded by flowers and kisses, just for you, Riri! 💕'),

      React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 mb-8' },
        React.createElement('div', { className: 'text-center' },
          React.createElement('div', { className: 'teddy-container' },
            React.createElement('div', { 
              className: `teddy ${isHugging ? 'scale-150' : ''}`,
              style: { transition: 'transform 0.3s ease' }
            }, '🧸'),
            React.createElement('div', { className: 'flower', style: { animationDelay: '0s' } }, '🌸'),
            React.createElement('div', { className: 'flower', style: { animationDelay: '2s' } }, '🌷'),
            React.createElement('div', { className: 'flower', style: { animationDelay: '4s' } }, '🌹'),
            React.createElement('div', { className: 'kiss', style: { animationDelay: '1s' } }, '💋'),
            React.createElement('div', { className: 'kiss', style: { animationDelay: '3s' } }, '💋'),
            React.createElement('div', { className: 'kiss', style: { animationDelay: '5s' } }, '💋'),
            React.createElement('div', { className: 'flower', style: { animationDelay: '6s' } }, '🌺'),
            React.createElement('div', { className: 'flower', style: { animationDelay: '8s' } }, '🌻')
          ),
          React.createElement('button', {
            onClick: giveHug,
            className: 'magical-button text-lg px-8 py-3 mt-6'
          }, '🤗 Give Teddy Bear Hug 🤗'),
          React.createElement('p', { className: 'text-lg text-purple-700 mt-4' }, `Hugs given: ${hugCount} 💕`)
        ),

        React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', { className: 'bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl' },
            React.createElement('h3', { className: 'text-2xl font-bold text-pink-600 mb-4' }, '💕 Teddy Bear Messages for Riri 💕'),
            React.createElement('p', { className: 'text-lg text-purple-800 italic' }, teddyMessages[messageIndex])
          ),
          React.createElement('div', { className: 'bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl' },
            React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4' }, '📚 Fun Teddy Facts for Riri 📚'),
            React.createElement('p', { className: 'text-lg text-purple-800' }, teddyFacts[factIndex])
          )
        )
      ),

      React.createElement('div', { className: 'grid md:grid-cols-3 gap-6 mb-8' },
        React.createElement('div', { className: 'recipe-card text-center' },
          React.createElement('div', { className: 'text-4xl mb-2' }, '🤗'),
          React.createElement('h3', { className: 'text-xl font-bold text-purple-600' }, 'Warm Hugs'),
          React.createElement('p', { className: 'text-gray-700' }, 'Soft and comforting')
        ),
        React.createElement('div', { className: 'recipe-card text-center' },
          React.createElement('div', { className: 'text-4xl mb-2' }, '💝'),
          React.createElement('h3', { className: 'text-xl font-bold text-purple-600' }, 'Sweet Love'),
          React.createElement('p', { className: 'text-gray-700' }, 'Pure and unconditional')
        ),
        React.createElement('div', { className: 'recipe-card text-center' },
          React.createElement('div', { className: 'text-4xl mb-2' }, '✨'),
          React.createElement('h3', { className: 'text-xl font-bold text-purple-600' }, 'Magic Comfort'),
          React.createElement('p', { className: 'text-gray-700' }, 'Magical and healing')
        )
      ),

      showSpecial && React.createElement('div', { className: 'bg-gradient-to-r from-pink-200 to-purple-200 p-8 rounded-3xl mb-8 glow-effect' },
        React.createElement('h3', { className: 'text-3xl font-bold romantic-text mb-4' }, '🌟 Special Teddy Bear Surprise for Riri! 🌟'),
        React.createElement('p', { className: 'text-xl text-purple-800 mb-4' }, 'You\'ve given so many hugs! You must really love teddy bears, Riri! 🧸'),
        React.createElement('p', { className: 'text-lg text-pink-700 mb-4' }, 'Just like I love you more than all the teddy bears in the world...'),
        React.createElement('div', { className: 'text-6xl space-x-4' },
          React.createElement('span', { className: 'floating-element' }, '🧸'),
          React.createElement('span', { className: 'floating-element' }, '💕'),
          React.createElement('span', { className: 'floating-element' }, '🧸'),
          React.createElement('span', { className: 'floating-element' }, '💖'),
          React.createElement('span', { className: 'floating-element' }, '🧸')
        )
      ),

      React.createElement('div', { className: 'text-center' },
        React.createElement('h3', { className: 'text-2xl font-bold text-pink-600 mb-4' }, '💕 Why You\'re My Favorite Teddy Bear, Riri 💕'),
        React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 text-left' },
          React.createElement('ul', { className: 'space-y-2 text-lg' },
            React.createElement('li', { className: 'flex items-center' }, '🧸 You\'re always there to comfort me'),
            React.createElement('li', { className: 'flex items-center' }, '💕 Your hugs make everything better'),
            React.createElement('li', { className: 'flex items-center' }, '🌸 You\'re soft and gentle like a flower'),
            React.createElement('li', { className: 'flex items-center' }, '💖 You listen to all my secrets')
          ),
          React.createElement('ul', { className: 'space-y-2 text-lg' },
            React.createElement('li', { className: 'flex items-center' }, '✨ You bring magic to my life'),
            React.createElement('li', { className: 'flex items-center' }, '💝 You\'re perfect for cuddling'),
            React.createElement('li', { className: 'flex items-center' }, '🌟 You make me feel safe and loved'),
            React.createElement('li', { className: 'flex items-center' }, '💕 You\'re my forever teddy bear')
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