const { useState, useEffect } = React;

const loveQuizQuestions = [
  {
    question: "What's Riri's favorite color?",
    options: ["Pink", "Purple", "Both Pink and Purple", "Blue"],
    correct: 2,
    explanation: "Riri loves both pink and purple - just like this website! 💕"
  },
  {
    question: "What does Riri love most?",
    options: ["Flowers", "Singing", "Writing", "All of the above"],
    correct: 3,
    explanation: "Riri loves everything - she's a beautiful soul! 🌸"
  },
  {
    question: "How much do I love Riri?",
    options: ["A little", "A lot", "More than words can express", "Infinitely"],
    correct: 3,
    explanation: "My love for Riri is infinite and beyond measure! 💖"
  },
  {
    question: "What's our future together?",
    options: ["Unknown", "Bright and beautiful", "Full of love", "All of the above"],
    correct: 3,
    explanation: "Our future is bright, beautiful, and full of endless love! ✨"
  }
];

const hiddenMessages = [
  { id: 1, message: "💕 I love you more than yesterday but less than tomorrow 💕", location: "top" },
  { id: 2, message: "🌸 You make every day feel like spring 🌸", location: "bottom" },
  { id: 3, message: "💖 You're my favorite person in the whole world 💖", location: "left" },
  { id: 4, message: "✨ You're the magic in my life ✨", location: "right" },
  { id: 5, message: "🌹 Every moment with you is precious 🌹", location: "center" }
];

function InteractiveGames() {
  const [currentGame, setCurrentGame] = useState('menu');
  const [quizState, setQuizState] = useState({ currentQuestion: 0, score: 0, showResult: false });
  const [foundMessages, setFoundMessages] = useState([]);
  const [loveCalculator, setLoveCalculator] = useState({ name1: 'Me', name2: 'Riri', result: null });
  const [particles, setParticles] = useState([]);

  useEffect(function() {
    const interval = setInterval(function() {
      setParticles(function(prev) {
        const newParticle = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          emoji: ['✨', '💕', '💖', '🌸', '💫', '🌟'][Math.floor(Math.random() * 6)],
          delay: Math.random() * 2
        };
        return [...prev.slice(-10), newParticle];
      });
    }, 1000);

    return function() {
      clearInterval(interval);
    };
  }, []);

  function startQuiz() {
    setCurrentGame('quiz');
    setQuizState({ currentQuestion: 0, score: 0, showResult: false });
  }

  function startScavengerHunt() {
    setCurrentGame('scavenger');
    setFoundMessages([]);
  }

  function startLoveCalculator() {
    setCurrentGame('calculator');
    setLoveCalculator({ name1: 'Me', name2: 'Riri', result: null });
  }

  function handleQuizAnswer(selectedAnswer) {
    const currentQ = loveQuizQuestions[quizState.currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correct;
    
    if (isCorrect) {
      setQuizState(function(prev) {
        return { ...prev, score: prev.score + 1 };
      });
    }

    if (quizState.currentQuestion + 1 < loveQuizQuestions.length) {
      setQuizState(function(prev) {
        return { ...prev, currentQuestion: prev.currentQuestion + 1 };
      });
    } else {
      setQuizState(function(prev) {
        return { ...prev, showResult: true };
      });
    }
  }

  function findHiddenMessage(messageId) {
    if (!foundMessages.includes(messageId)) {
      setFoundMessages(function(prev) {
        return [...prev, messageId];
      });
    }
  }

  function calculateLove() {
    const result = Math.floor(Math.random() * 30) + 70; // Always high for Riri! 💕
    setLoveCalculator(function(prev) {
      return { ...prev, result: result };
    });
  }

  function renderMenu() {
    return React.createElement('div', { className: 'text-center space-y-6' },
      React.createElement('h2', { className: 'text-4xl font-bold romantic-text mb-8' }, '🎮 Fun Games for My Riri 🎮'),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
        React.createElement('div', { 
          className: 'quiz-card glass-card p-6 cursor-pointer magic-pulse',
          onClick: startQuiz
        },
          React.createElement('h3', { className: 'text-2xl font-bold text-purple-700 mb-4' }, '💕 Love Quiz'),
          React.createElement('p', { className: 'text-gray-600' }, 'Test how well you know our love story!')
        ),
        React.createElement('div', { 
          className: 'quiz-card glass-card p-6 cursor-pointer magic-pulse',
          onClick: startScavengerHunt
        },
          React.createElement('h3', { className: 'text-2xl font-bold text-pink-700 mb-4' }, '🔍 Scavenger Hunt'),
          React.createElement('p', { className: 'text-gray-600' }, 'Find hidden love messages throughout the site!')
        ),
        React.createElement('div', { 
          className: 'quiz-card glass-card p-6 cursor-pointer magic-pulse',
          onClick: startLoveCalculator
        },
          React.createElement('h3', { className: 'text-2xl font-bold text-purple-700 mb-4' }, '💖 Love Calculator'),
          React.createElement('p', { className: 'text-gray-600' }, 'Calculate our love compatibility!')
        )
      ),
      React.createElement('button', {
        className: 'magical-button mt-8',
        onClick: function() { setCurrentGame('menu'); }
      }, '🏠 Back to Menu')
    );
  }

  function renderQuiz() {
    if (quizState.showResult) {
      const percentage = (quizState.score / loveQuizQuestions.length) * 100;
      return React.createElement('div', { className: 'text-center' },
        React.createElement('h3', { className: 'text-3xl font-bold romantic-text mb-6' }, '🎉 Quiz Complete! 🎉'),
        React.createElement('div', { className: 'love-calculator mb-6' },
          React.createElement('p', { className: 'text-2xl mb-2' }, 'Your Score: ' + quizState.score + '/' + loveQuizQuestions.length),
          React.createElement('p', { className: 'text-4xl font-bold' }, percentage + '%'),
          React.createElement('p', { className: 'text-lg mt-4' }, 'You know our love perfectly, Riri! 💕')
        ),
        React.createElement('button', {
          className: 'magical-button',
          onClick: function() { setCurrentGame('menu'); }
        }, '🏠 Back to Menu')
      );
    }

    const currentQ = loveQuizQuestions[quizState.currentQuestion];
    return React.createElement('div', { className: 'max-w-2xl mx-auto' },
      React.createElement('h3', { className: 'text-2xl font-bold romantic-text mb-6' }, '💕 Love Quiz - Question ' + (quizState.currentQuestion + 1) + ' of ' + loveQuizQuestions.length),
      React.createElement('div', { className: 'glass-card p-6 mb-6' },
        React.createElement('p', { className: 'text-xl mb-6' }, currentQ.question),
        React.createElement('div', { className: 'space-y-3' },
          currentQ.options.map(function(option, index) {
            return React.createElement('button', {
              key: index,
              className: 'magical-button w-full text-left',
              onClick: function() { handleQuizAnswer(index); }
            }, option);
          })
        )
      ),
      React.createElement('button', {
        className: 'magical-button',
        onClick: function() { setCurrentGame('menu'); }
      }, '🏠 Back to Menu')
    );
  }

  function renderScavengerHunt() {
    return React.createElement('div', { className: 'text-center' },
      React.createElement('h3', { className: 'text-3xl font-bold romantic-text mb-6' }, '🔍 Scavenger Hunt 🔍'),
      React.createElement('p', { className: 'text-lg mb-6' }, 'Find all the hidden love messages! Found: ' + foundMessages.length + '/' + hiddenMessages.length),
      
      // Hidden messages positioned around the page
      React.createElement('div', { className: 'hidden-message absolute top-20 left-10 text-2xl', onClick: function() { findHiddenMessage(1); } }, '💕 I love you more than yesterday but less than tomorrow 💕'),
      React.createElement('div', { className: 'hidden-message absolute bottom-20 right-10 text-2xl', onClick: function() { findHiddenMessage(2); } }, '🌸 You make every day feel like spring 🌸'),
      React.createElement('div', { className: 'hidden-message absolute top-1/2 left-5 text-2xl', onClick: function() { findHiddenMessage(3); } }, '💖 You\'re my favorite person in the whole world 💖'),
      React.createElement('div', { className: 'hidden-message absolute top-1/3 right-5 text-2xl', onClick: function() { findHiddenMessage(4); } }, '✨ You\'re the magic in my life ✨'),
      React.createElement('div', { className: 'hidden-message absolute bottom-1/3 left-1/2 text-2xl', onClick: function() { findHiddenMessage(5); } }, '🌹 Every moment with you is precious 🌹'),
      
      React.createElement('div', { className: 'mt-8' },
        React.createElement('p', { className: 'text-lg mb-4' }, 'Hover over different areas to find hidden messages!'),
        React.createElement('button', {
          className: 'magical-button',
          onClick: function() { setCurrentGame('menu'); }
        }, '🏠 Back to Menu')
      )
    );
  }

  function renderLoveCalculator() {
    return React.createElement('div', { className: 'max-w-md mx-auto text-center' },
      React.createElement('h3', { className: 'text-3xl font-bold romantic-text mb-6' }, '💖 Love Calculator 💖'),
      React.createElement('div', { className: 'love-calculator mb-6' },
        React.createElement('div', { className: 'mb-4' },
          React.createElement('label', { className: 'block text-lg mb-2' }, 'Your Name:'),
          React.createElement('input', {
            type: 'text',
            value: loveCalculator.name1,
            onChange: function(e) { setLoveCalculator(function(prev) { return { ...prev, name1: e.target.value }; }); },
            className: 'w-full p-3 rounded-lg border-2 border-purple-300 focus:border-purple-500'
          })
        ),
        React.createElement('div', { className: 'text-4xl mb-4' }, '💕'),
        React.createElement('div', { className: 'mb-4' },
          React.createElement('label', { className: 'block text-lg mb-2' }, 'Riri\'s Name:'),
          React.createElement('input', {
            type: 'text',
            value: loveCalculator.name2,
            onChange: function(e) { setLoveCalculator(function(prev) { return { ...prev, name2: e.target.value }; }); },
            className: 'w-full p-3 rounded-lg border-2 border-pink-300 focus:border-pink-500'
          })
        ),
        React.createElement('button', {
          className: 'magical-button w-full',
          onClick: calculateLove
        }, '💕 Calculate Our Love 💕'),
        
        loveCalculator.result && React.createElement('div', { className: 'mt-6' },
          React.createElement('p', { className: 'text-2xl font-bold mb-2' }, loveCalculator.name1 + ' + ' + loveCalculator.name2),
          React.createElement('p', { className: 'text-6xl font-bold text-pink-600' }, loveCalculator.result + '%'),
          React.createElement('p', { className: 'text-lg mt-2' }, 'Perfect match! Our love is infinite! 💖')
        )
      ),
      React.createElement('button', {
        className: 'magical-button',
        onClick: function() { setCurrentGame('menu'); }
      }, '🏠 Back to Menu')
    );
  }

  return React.createElement('div', { className: 'w-full max-w-6xl mx-auto p-6 mt-20 relative' },
    // Particle effects
    particles.map(function(particle) {
      return React.createElement('div', {
        key: particle.id,
        className: 'particle',
        style: {
          left: particle.x + 'px',
          animationDelay: particle.delay + 's'
        }
      }, particle.emoji);
    }),
    
    currentGame === 'menu' && renderMenu(),
    currentGame === 'quiz' && renderQuiz(),
    currentGame === 'scavenger' && renderScavengerHunt(),
    currentGame === 'calculator' && renderLoveCalculator(),
    
    React.createElement('footer', { className: 'text-center text-xl text-purple-700 mt-12' },
      React.createElement('p', { className: 'mb-2' }, 'Made with all my love for you, my forever flower Riri. 🌸'),
      React.createElement('p', { className: 'mb-2' }, 'Happy Girlfriend\'s Day, my one and only Riri. 💕'),
      React.createElement('p', { className: 'text-2xl footer-heart' }, '💖 I Love You Forever Riri 💖')
    )
  );
} 