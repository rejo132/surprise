const { useState } = React;

const poemStarters = [
  'In the garden of my heart, where pink roses bloom, Riri...',
  'When the moon whispers your name in silver light, Riri...',
  'With every beat of my soul, I think of you, Riri...',
  'Beneath a sky of purple dreams and starlit nights, Riri...',
  'Your love is a melody that dances in my mind, Riri...',
  'Among the petals of dawn, I find your smile, Riri...',
  'In the soft glow of sunset, I see your eyes, Riri...',
  'With every breath I take, I breathe in your love, Riri...',
  'In the gentle rain, I hear your laughter, Riri...',
  'Among the butterflies, I see your grace, Riri...',
  'In the morning dew, I find your tears of joy, Riri...',
  'With every step I take, I walk towards your heart, Riri...'
];

const poetryThemes = [
  'Love and Romance 💕',
  'Nature and Flowers 🌸',
  'Dreams and Magic ✨',
  'Music and Melody 🎵',
  'Sunset and Stars 🌅',
  'Butterflies and Beauty 🦋'
];

const samplePoems = [
  {
    title: 'My Flower\'s Song',
    content: 'In the garden of my heart,\nWhere pink roses bloom,\nI find your love, Riri,\nLike a sweet perfume.\n\nYour smile lights up my world,\nLike the morning sun,\nAnd every moment with you,\nIs pure magic spun.',
    theme: 'Love and Romance 💕'
  },
  {
    title: 'Purple Dreams',
    content: 'Beneath a sky of purple dreams,\nWhere starlight dances free,\nI see your eyes reflecting back,\nThe love you have for me, Riri.\n\nIn every petal, every bloom,\nI find a piece of you,\nAnd in the gentle evening breeze,\nI hear your voice so true.',
    theme: 'Nature and Flowers 🌸'
  }
];

function PoetryHaven() {
  const [poemPrompt, setPoemPrompt] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [currentPoem, setCurrentPoem] = useState('');
  const [savedPoems, setSavedPoems] = useState([]);
  const [showSamplePoems, setShowSamplePoems] = useState(false);
  const [poemTitle, setPoemTitle] = useState('');

  const generatePoemPrompt = () => {
    const randomPrompt = poemStarters[Math.floor(Math.random() * poemStarters.length)];
    setPoemPrompt(randomPrompt);
  };

  const generateThemePrompt = () => {
    const randomTheme = poetryThemes[Math.floor(Math.random() * poetryThemes.length)];
    setSelectedTheme(randomTheme);
  };

  const savePoem = () => {
    if (currentPoem.trim() && poemTitle.trim()) {
      const newPoem = {
        id: Date.now(),
        title: poemTitle,
        content: currentPoem,
        theme: selectedTheme || 'Personal Creation 💝',
        date: new Date().toLocaleDateString()
      };
      setSavedPoems([...savedPoems, newPoem]);
      setCurrentPoem('');
      setPoemTitle('');
      setSelectedTheme('');
    }
  };

  return React.createElement('div', { className: 'w-full max-w-6xl mx-auto p-6 mt-20' },
    React.createElement('section', { className: 'mb-12 glass-card p-8 rounded-3xl' },
      React.createElement('div', { className: 'text-center mb-8' },
        React.createElement('h2', { className: 'text-4xl font-bold romantic-text mb-4' }, '✍️ Your Poetry Haven, Riri ✍️'),
        React.createElement('p', { className: 'text-xl text-purple-700 mb-6' }, 'Let your words bloom with beauty and love, my darling poet Riri! 💕'),
        React.createElement('div', { className: 'flex flex-wrap justify-center gap-4 mb-6' },
          React.createElement('button', {
            onClick: generatePoemPrompt,
            className: 'magical-button'
          }, '✨ Get Poem Starter ✨'),
          React.createElement('button', {
            onClick: generateThemePrompt,
            className: 'magical-button'
          }, '🎨 Get Theme Inspiration 🎨'),
          React.createElement('button', {
            onClick: () => setShowSamplePoems(!showSamplePoems),
            className: 'magical-button'
          }, showSamplePoems ? '💝 Hide Sample Poems 💝' : '📖 Show Sample Poems 📖')
        )
      ),

      (poemPrompt || selectedTheme) && React.createElement('div', { className: 'bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl mb-6' },
        poemPrompt && React.createElement('div', { className: 'mb-4' },
          React.createElement('h3', { className: 'text-lg font-bold text-purple-600 mb-2' }, '💫 Poem Starter:'),
          React.createElement('p', { className: 'text-purple-800 italic' }, poemPrompt)
        ),
        selectedTheme && React.createElement('div', null,
          React.createElement('h3', { className: 'text-lg font-bold text-purple-600 mb-2' }, '🎨 Theme Inspiration:'),
          React.createElement('p', { className: 'text-purple-800 font-medium' }, selectedTheme)
        )
      ),

      React.createElement('div', { className: 'grid md:grid-cols-2 gap-8' },
        React.createElement('div', { className: 'space-y-4' },
          React.createElement('h3', { className: 'text-2xl font-bold text-purple-600' }, '✨ Write Your Poem, Riri ✨'),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Poem Title',
            value: poemTitle,
            onChange: (e) => setPoemTitle(e.target.value),
            className: 'w-full p-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
          }),
          React.createElement('textarea', {
            className: 'poetry-area w-full',
            placeholder: 'Write your beautiful poem here, my love Riri...\n\nLet your heart guide your words...',
            value: currentPoem,
            onChange: (e) => setCurrentPoem(e.target.value),
            rows: 12
          }),
          React.createElement('button', {
            onClick: savePoem,
            disabled: !currentPoem.trim() || !poemTitle.trim(),
            className: `magical-button w-full ${(!currentPoem.trim() || !poemTitle.trim()) ? 'opacity-50 cursor-not-allowed' : ''}`
          }, '💖 Save Poem 💖')
        ),

        React.createElement('div', null,
          React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4' }, '📚 Your Saved Poems, Riri 📚'),
          savedPoems.length === 0 ? 
            React.createElement('p', { className: 'text-gray-600 italic' }, 'No poems saved yet. Start writing your first masterpiece, Riri! ✨') :
            React.createElement('div', { className: 'space-y-4 max-h-96 overflow-y-auto' },
              savedPoems.map(poem => 
                React.createElement('div', { key: poem.id, className: 'recipe-card' },
                  React.createElement('div', { className: 'flex justify-between items-start mb-2' },
                    React.createElement('h4', { className: 'text-lg font-bold text-purple-600' }, poem.title),
                    React.createElement('span', { className: 'text-sm text-gray-600' }, poem.date)
                  ),
                  React.createElement('p', { className: 'text-sm text-pink-600 mb-2' }, poem.theme),
                  React.createElement('div', { className: 'bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg' },
                    React.createElement('pre', { className: 'whitespace-pre-wrap text-gray-700 font-serif text-sm' }, poem.content)
                  )
                )
              )
            )
        )
      ),

      showSamplePoems && React.createElement('div', { className: 'mt-8' },
        React.createElement('h3', { className: 'text-2xl font-bold text-purple-600 mb-4 text-center' }, '📖 Sample Poems for Inspiration, Riri 📖'),
        React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
          samplePoems.map((poem, i) => 
            React.createElement('div', { key: i, className: 'recipe-card' },
              React.createElement('h4', { className: 'text-lg font-bold text-purple-600 mb-2' }, poem.title),
              React.createElement('p', { className: 'text-sm text-pink-600 mb-3' }, poem.theme),
              React.createElement('div', { className: 'bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg' },
                React.createElement('pre', { className: 'whitespace-pre-wrap text-gray-700 font-serif text-sm italic' }, poem.content)
              )
            )
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