'use client';
import { useEffect, useState } from 'react';

const ScrambleText = () => {
  const titleText = 'ALVA';
  const sloganText = 'Futuro digital en tus manos.';
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let interval;
    let iteration = 0;

    const animateTitle = (currentIndex = 0) => {
      if (currentIndex >= titleText.length) {
        setTimeout(() => setShowSlogan(true), 400); // mostrar slogan con retraso suave
        return;
      }

      iteration = 0;
      interval = setInterval(() => {
        const scramble = titleText
          .split('')
          .map((char, i) => {
            if (i < currentIndex) return titleText[i];
            if (i === currentIndex) return chars[Math.floor(Math.random() * chars.length)];
            return '';
          })
          .join('');

        setDisplayedTitle(scramble);

        iteration++;
        if (iteration > 5) {
          clearInterval(interval);
          setDisplayedTitle(titleText.slice(0, currentIndex + 1));
          animateTitle(currentIndex + 1);
        }
      }, 50);
    };

    animateTitle();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container_title">
      <h1 className="alva">{displayedTitle}</h1>
      <p className={`slogan ${showSlogan ? 'visible' : ''}`}>{sloganText}</p>
    </div>
  );
};

export default ScrambleText;
