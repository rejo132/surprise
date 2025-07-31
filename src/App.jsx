const { useState, useEffect } = React;

function Sparkles() {
  const [sparkles, setSparkles] = useState([]);
  
  useEffect(() => {
    const createSparkle = () => {
      const newSparkle = {
        id: Math.random(),
        left: Math.random() * window.innerWidth,
        top: Math.random() * window.innerHeight,
        delay: Math.random() * 2,
        size: Math.random() * 6 + 2
      };
      setSparkles(prev => [...prev, newSparkle]);
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== newSparkle.id)), 3000);
    };
    
    const interval = setInterval(createSparkle, 800);
    return () => clearInterval(interval);
  }, []);

  return React.createElement('div', null,
    sparkles.map(sparkle => 
      React.createElement('div', {
        key: sparkle.id,
        className: 'sparkle',
        style: {
          left: sparkle.left,
          top: sparkle.top,
          width: sparkle.size + 'px',
          height: sparkle.size + 'px',
          animationDelay: sparkle.delay + 's'
        }
      })
    )
  );
}

function Hearts() {
  const [hearts, setHearts] = useState([]);
  
  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * window.innerWidth,
        size: Math.random() * 15 + 10,
        color: ['#ff99cc', '#ff69b4', '#da70d6', '#dda0dd'][Math.floor(Math.random() * 4)]
      };
      setHearts(prev => [...prev, newHeart]);
      setTimeout(() => setHearts(prev => prev.filter(h => h.id !== newHeart.id)), 8000);
    };
    
    const interval = setInterval(createHeart, 1200);
    return () => clearInterval(interval);
  }, []);

  return React.createElement('div', null,
    hearts.map(heart => 
      React.createElement('div', {
        key: heart.id,
        className: 'heart',
        style: { 
          left: heart.left, 
          top: '100vh',
          width: heart.size + 'px',
          height: heart.size + 'px',
          background: `linear-gradient(45deg, ${heart.color}, ${heart.color}dd)`
        }
      })
    )
  );
}

function FloatingFlowers() {
  const [flowers, setFlowers] = useState([]);
  
  useEffect(() => {
    const createFlower = () => {
      const flowerTypes = ['🌸', '🌷', '🌹', '🌺', '🌻', '🌼'];
      const newFlower = {
        id: Math.random(),
        left: Math.random() * window.innerWidth,
        emoji: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        size: Math.random() * 20 + 15,
        delay: Math.random() * 3
      };
      setFlowers(prev => [...prev, newFlower]);
      setTimeout(() => setFlowers(prev => prev.filter(f => f.id !== newFlower.id)), 10000);
    };
    
    const interval = setInterval(createFlower, 2000);
    return () => clearInterval(interval);
  }, []);

  return React.createElement('div', null,
    flowers.map(flower => 
      React.createElement('div', {
        key: flower.id,
        className: 'floating-element',
        style: {
          position: 'absolute',
          left: flower.left,
          top: '100vh',
          fontSize: flower.size + 'px',
          animationDelay: flower.delay + 's',
          animation: 'float 10s infinite'
        }
      }, flower.emoji)
    )
  );
}

function SimpleNavbar({ currentTab, setCurrentTab }) {
  const tabs = [
    { id: 'home', name: '💕 Romantic Messages', component: Home },
    { id: 'flowers', name: '🌸 Flower Garden', component: FlowerGarden },
    { id: 'poetry', name: '✍️ Poetry Haven', component: PoetryHaven },
    { id: 'singing', name: '🎵 Sing Your Heart', component: Singing },
    { id: 'teddy', name: '🧸 Teddy Bear Hug', component: TeddyBearHug },
    { id: 'reassurance', name: '💝 My Love & Promise', component: Reassurance }
  ];

  return React.createElement('nav', { className: 'navbar text-white p-4 shadow-lg' },
    React.createElement('div', { className: 'max-w-6xl mx-auto' },
      React.createElement('ul', { className: 'flex justify-center space-x-4 flex-wrap' },
        tabs.map(tab => 
          React.createElement('li', { key: tab.id },
            React.createElement('button', {
              onClick: () => setCurrentTab(tab.id),
              className: `hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                currentTab === tab.id ? 'bg-white bg-opacity-20' : ''
              }`
            }, tab.name)
          )
        )
      )
    )
  );
}

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const tabs = {
    home: Home,
    flowers: FlowerGarden,
    poetry: PoetryHaven,
    singing: Singing,
    teddy: TeddyBearHug,
    reassurance: Reassurance
  };

  const CurrentComponent = tabs[currentTab];

  return React.createElement('div', null,
    React.createElement(Sparkles),
    React.createElement(Hearts),
    React.createElement(FloatingFlowers),
    React.createElement(SimpleNavbar, { currentTab, setCurrentTab }),
    React.createElement(CurrentComponent)
  );
}