import React, { useRef, useEffect, useCallback } from 'react';
import anime from 'animejs';

const Scroll3DEffect = () => {
  const sceneRef = useRef(null);
  const layersRef = useRef([]);
  const animationRef = useRef(null);

  // Layer data (different depths)
  const layers = [
    { depth: 50, color: 'bg-orange-400', text: 'Foreground' },
    { depth: 0, color: 'bg-teal-400', text: 'Midground' },
    { depth: -50, color: 'bg-red-500', text: 'Background' },
  ];

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    // Cancel previous animation to prevent queue buildup
    if (animationRef.current) animationRef.current.pause();
    
    animationRef.current = anime({
      targets: layersRef.current,
      translateY: (el, i) => scrollY * (0.3 * (i + 1)),
      translateZ: (el, i) => layers[i].depth,
      rotateY: (el, i) => scrollY * 0.1,
      easing: 'easeOutQuad',
      duration: 1000,
      update: function() {
        // Force hardware acceleration
        layersRef.current.forEach(layer => {
          layer.style.willChange = 'transform';
        });
      }
    });
  }, []);

  useEffect(() => {
    // Throttle scroll events
    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (animationRef.current) animationRef.current.pause();
    };
  }, [handleScroll]);

  return (
    <div 
      ref={sceneRef}
      className="h-[300vh] perspective-1000 overflow-x-hidden relative"
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          ref={el => (layersRef.current[i] = el)}
          className={`
            fixed w-[80%] h-[60vh] top-[20%] left-[10%]
            p-8 rounded-2xl flex flex-col justify-center items-center
            shadow-xl transition-transform duration-100 transform-style-preserve-3d
            ${layer.color} ${i === 0 ? 'blur-0' : i === 1 ? 'blur-sm' : 'blur-md'}
            text-white font-bold will-change-transform
          `}
          style={{
            transform: `translateZ(${layer.depth}px)`,
            zIndex: layers.length - i
          }}
        >
          <h2 className="text-3xl mb-4">{layer.text}</h2>
          <p className="text-xl">Scroll to see 3D effect</p>
        </div>
      ))}
    </div>
  );
};

// Simple throttle function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export default Scroll3DEffect;