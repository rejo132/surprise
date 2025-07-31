const { useState } = React;

const flowers = [
  {
    id: 'rose',
    name: 'Rose 🌹',
    scientificName: 'Rosa',
    description: 'The queen of flowers, perfect for expressing love and beauty.',
    plantingInstructions: 'Plant in well-drained soil with full sun. Water deeply but infrequently. Prune in early spring.',
    careTips: 'Fertilize monthly during growing season. Remove dead flowers to encourage new blooms.',
    bestTime: 'June to August (dry season)',
    waterNeeds: 'Moderate',
    sunNeeds: 'Full sun',
    height: '1-3 meters',
    color: 'Pink, Red, White, Yellow',
    animation: '🌹',
    message: 'Just like this rose, your love blooms beautifully in my heart, Riri! 💕'
  },
  {
    id: 'sunflower',
    name: 'Sunflower 🌻',
    scientificName: 'Helianthus annuus',
    description: 'Bright and cheerful, following the sun like your smile follows my heart.',
    plantingInstructions: 'Plant seeds directly in soil after last frost. Space 30cm apart. Water regularly.',
    careTips: 'Support tall varieties with stakes. Deadhead spent flowers. Harvest seeds when heads droop.',
    bestTime: 'March to May (long rains)',
    waterNeeds: 'Regular',
    sunNeeds: 'Full sun',
    height: '1-4 meters',
    color: 'Yellow, Orange, Red',
    animation: '🌻',
    message: 'Your smile brightens my day like a sunflower, Riri! ✨'
  },
  {
    id: 'lily',
    name: 'Lily 🌸',
    scientificName: 'Lilium',
    description: 'Elegant and graceful, symbolizing purity and devotion.',
    plantingInstructions: 'Plant bulbs in autumn. Well-drained soil, partial shade. Water moderately.',
    careTips: 'Mulch to keep soil cool. Remove spent flowers. Divide bulbs every 3-4 years.',
    bestTime: 'October to December (short rains)',
    waterNeeds: 'Moderate',
    sunNeeds: 'Partial shade',
    height: '0.5-1.5 meters',
    color: 'White, Pink, Orange, Yellow',
    animation: '🌸',
    message: 'Your grace and beauty remind me of this elegant lily, Riri! 💖'
  },
  {
    id: 'daisy',
    name: 'Daisy 🌼',
    scientificName: 'Bellis perennis',
    description: 'Simple yet beautiful, representing innocence and pure love.',
    plantingInstructions: 'Sow seeds in spring or autumn. Well-drained soil. Regular watering.',
    careTips: 'Deadhead regularly for continuous blooms. Divide clumps every 2-3 years.',
    bestTime: 'March to May or September to November',
    waterNeeds: 'Regular',
    sunNeeds: 'Full sun to partial shade',
    height: '10-30 cm',
    color: 'White, Pink, Yellow',
    animation: '🌼',
    message: 'Your pure heart shines like this beautiful daisy, Riri! 🌟'
  },
  {
    id: 'tulip',
    name: 'Tulip 🌷',
    scientificName: 'Tulipa',
    description: 'Spring\'s first bloom, bringing hope and new beginnings.',
    plantingInstructions: 'Plant bulbs in autumn, 15cm deep. Well-drained soil. Full sun.',
    careTips: 'Water during growth, reduce after flowering. Remove spent flowers. Lift bulbs in summer.',
    bestTime: 'October to December',
    waterNeeds: 'Moderate',
    sunNeeds: 'Full sun',
    height: '20-60 cm',
    color: 'Red, Pink, Yellow, Purple, White',
    animation: '🌷',
    message: 'Every day with you feels like spring, Riri! 🌱'
  },
  {
    id: 'orchid',
    name: 'Orchid 🌺',
    scientificName: 'Orchidaceae',
    description: 'Exotic and rare, symbolizing luxury and strength.',
    plantingInstructions: 'Use orchid potting mix. Bright indirect light. Water when soil is dry.',
    careTips: 'Mist regularly for humidity. Fertilize monthly. Repot every 2-3 years.',
    bestTime: 'Year-round (indoor)',
    waterNeeds: 'Low to moderate',
    sunNeeds: 'Bright indirect light',
    height: '20-60 cm',
    color: 'Purple, Pink, White, Yellow',
    animation: '🌺',
    message: 'You\'re as rare and precious as this beautiful orchid, Riri! 💎'
  }
];

function FlowerGarden() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFlowerClick = function(flower) {
    setSelectedFlower(flower);
    setShowAnimation(true);
    setTimeout(function() {
      setShowAnimation(false);
    }, 3000);
  };

  const filteredFlowers = flowers.filter(function(flower) {
    return flower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           flower.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return React.createElement('div', { className: 'w-full max-w-6xl mx-auto p-6 mt-20' },
    React.createElement('section', { className: 'mb-12 glass-card p-8 rounded-3xl' },
      React.createElement('div', { className: 'text-center mb-8' },
        React.createElement('h2', { className: 'text-4xl font-bold romantic-text mb-4' }, '🌸 Riri\'s Flower Garden 🌸'),
        React.createElement('p', { className: 'text-xl text-purple-700 mb-6' }, 'Discover the beauty of flowers and learn how to plant them in Kenya, my darling gardener! 💕'),
        React.createElement('div', { className: 'bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl mb-6' },
          React.createElement('p', { className: 'text-lg text-purple-800 italic' }, 'Click on any flower to see it bloom with love and get planting instructions! 🌺')
        ),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Search flowers...',
          value: searchTerm,
          onChange: function(e) {
            setSearchTerm(e.target.value);
          },
          className: 'w-full max-w-md p-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
        })
      ),

      React.createElement('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8' },
        filteredFlowers.map(function(flower) {
          return React.createElement('div', { 
            key: flower.id, 
            className: 'recipe-card cursor-pointer hover:scale-105 transition-transform duration-300',
            onClick: function() {
              handleFlowerClick(flower);
            }
          },
            React.createElement('div', { className: 'text-center' },
              React.createElement('div', { className: 'text-6xl mb-4' }, flower.animation),
              React.createElement('h3', { className: 'text-xl font-bold text-purple-600 mb-2' }, flower.name),
              React.createElement('p', { className: 'text-sm text-gray-600 mb-2' }, flower.scientificName),
              React.createElement('p', { className: 'text-gray-700 mb-3' }, flower.description),
              React.createElement('div', { className: 'flex flex-wrap gap-2 justify-center' },
                React.createElement('span', { className: 'bg-pink-100 px-2 py-1 rounded text-xs' }, flower.waterNeeds),
                React.createElement('span', { className: 'bg-purple-100 px-2 py-1 rounded text-xs' }, flower.sunNeeds),
                React.createElement('span', { className: 'bg-green-100 px-2 py-1 rounded text-xs' }, flower.bestTime)
              )
            )
          );
        })
      ),

      selectedFlower && React.createElement('div', { className: 'bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl mb-8' },
        React.createElement('div', { className: 'text-center mb-6' },
          React.createElement('div', { className: 'text-8xl mb-4' }, selectedFlower.animation),
          React.createElement('h3', { className: 'text-3xl font-bold text-purple-600 mb-2' }, selectedFlower.name),
          React.createElement('p', { className: 'text-lg text-pink-600 italic mb-4' }, selectedFlower.message)
        ),
        React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
          React.createElement('div', null,
            React.createElement('h4', { className: 'text-xl font-bold text-purple-600 mb-3' }, '🌱 Planting Instructions'),
            React.createElement('p', { className: 'text-gray-700 mb-4' }, selectedFlower.plantingInstructions),
            React.createElement('h4', { className: 'text-xl font-bold text-purple-600 mb-3' }, '💧 Care Tips'),
            React.createElement('p', { className: 'text-gray-700' }, selectedFlower.careTips)
          ),
          React.createElement('div', null,
            React.createElement('h4', { className: 'text-xl font-bold text-purple-600 mb-3' }, '📊 Flower Details'),
            React.createElement('div', { className: 'space-y-2' },
              React.createElement('p', { className: 'text-gray-700' }, '🌡️ Best Time: ' + selectedFlower.bestTime),
              React.createElement('p', { className: 'text-gray-700' }, '💧 Water Needs: ' + selectedFlower.waterNeeds),
              React.createElement('p', { className: 'text-gray-700' }, '☀️ Sun Needs: ' + selectedFlower.sunNeeds),
              React.createElement('p', { className: 'text-gray-700' }, '📏 Height: ' + selectedFlower.height),
              React.createElement('p', { className: 'text-gray-700' }, '🎨 Colors: ' + selectedFlower.color)
            )
          )
        )
      ),

      React.createElement('div', { className: 'text-center' },
        React.createElement('h3', { className: 'text-2xl font-bold text-pink-600 mb-4' }, '💕 Why I Love Flowers for You, Riri 💕'),
        React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 text-left' },
          React.createElement('ul', { className: 'space-y-2 text-lg' },
            React.createElement('li', { className: 'flex items-center' }, '🌸 Flowers remind me of your natural beauty'),
            React.createElement('li', { className: 'flex items-center' }, '🌺 Your love makes my life bloom like a garden'),
            React.createElement('li', { className: 'flex items-center' }, '🌹 You\'re as precious as the rarest flower'),
            React.createElement('li', { className: 'flex items-center' }, '🌻 Your smile brightens my world like sunshine')
          ),
          React.createElement('ul', { className: 'space-y-2 text-lg' },
            React.createElement('li', { className: 'flex items-center' }, '🌷 Every day with you is like spring'),
            React.createElement('li', { className: 'flex items-center' }, '🌼 Your heart is as pure as a daisy'),
            React.createElement('li', { className: 'flex items-center' }, '🌺 You bring color to my life'),
            React.createElement('li', { className: 'flex items-center' }, '💐 You\'re my favorite flower in the garden of life')
          )
        )
      )
    ),

    showAnimation && selectedFlower && React.createElement('div', { 
      className: 'fixed inset-0 flex items-center justify-center z-50 pointer-events-none',
      style: { animation: 'fadeInOut 3s ease-in-out' }
    },
      React.createElement('div', { 
        className: 'text-9xl',
        style: { 
          animation: 'flowerBloom 3s ease-in-out',
          filter: 'drop-shadow(0 0 20px rgba(255, 192, 203, 0.8))'
        }
      }, selectedFlower.animation)
    ),

    React.createElement('footer', { className: 'text-center text-xl text-purple-700' },
      React.createElement('p', { className: 'mb-2' }, 'Made with all my love for you, my forever flower Riri. 🌸'),
      React.createElement('p', { className: 'mb-2' }, 'Happy Girlfriend\'s Day, my one and only Riri. 💕'),
      React.createElement('p', { className: 'text-2xl footer-heart' }, '💖 I Love You Forever Riri 💖')
    )
  );
} 