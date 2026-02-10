


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }
});


function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', function(e) {
    createSparkles(e.target);
  });
});


function createSparkles(element) {
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('span');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 0.5 + 's';
    element.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 1500);
  }
}


document.querySelectorAll('.plant-card, .info-card, .video-card, .seed-category').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});


window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (header) {
    const scrolled = window.scrollY;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
  }
});


function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}


function createFloatingEmoji() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  
  const emojis = ['🌻', '🌷', '🌹', '🌺', '🌸', '🌼', '🌱', '🍀', '🌿', '🍃'];
  const emoji = document.createElement('span');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.cssText = `
    position: absolute;
    font-size: 24px;
    left: ${Math.random() * 100}%;
    bottom: 0;
    animation: floatUp 4s ease-out forwards;
    pointer-events: none;
  `;
  
  footer.appendChild(emoji);
  
  setTimeout(() => {
    emoji.remove();
  }, 4000);
}


const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      opacity: 1;
      transform: translateY(0) rotate(0deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-100px) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);

// Create floating emojis periodically
setInterval(createFloatingEmoji, 2000);

// Add ripple effect on button click
document.querySelectorAll('.end, .nav-link').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    
    ripple.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      animation: rippleEffect 0.6s ease-out;
      pointer-events: none;
      left: ${e.clientX - rect.left}px;
      top: ${e.clientY - rect.top}px;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});


const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes rippleEffect {
    to {
      transform: translate(-50%, -50%) scale(20);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

console.log('%c🌱 Grow a Garden Wiki 🌱', 'font-size: 24px; color: #00FF44; font-weight: bold;');
console.log('%cЗробив Михайло Кривенко', 'font-size: 14px; color: #6f00ff;');


let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(rainbowStyle);
    
    alert('🎉 Ви знайшли секретний режим! 🌈');
  }
});


document.querySelectorAll('main img').forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.5s ease';
  
  if (img.complete) {
    img.style.opacity = '1';
  } else {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
  }
});


let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', function(e) {
  if (cursorTrail.length > maxTrailLength) {
    const oldDot = cursorTrail.shift();
    if (oldDot) oldDot.remove();
  }
  

  if (Math.random() > 0.7) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: linear-gradient(135deg, #fbff00, #00FF44);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: ${e.clientX - 4}px;
      top: ${e.clientY - 4}px;
      animation: trailFade 0.5s ease-out forwards;
    `;
    
    document.body.appendChild(dot);
    cursorTrail.push(dot);
    
    setTimeout(() => {
      dot.remove();
      cursorTrail = cursorTrail.filter(d => d !== dot);
    }, 500);
  }
});


const trailStyle = document.createElement('style');
trailStyle.textContent = `
  @keyframes trailFade {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0); }
  }
`;
document.head.appendChild(trailStyle);
