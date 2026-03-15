'use client';

import { useState } from 'react';

export default function ShockwaveButton({ children, href = '#final-cta', secondary = false }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((current) => [...current, { x, y, id }]);
    setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, 900);
  };

  return (
    <a href={href} onClick={handleClick} className={`shockwave-button ${secondary ? 'secondary' : ''}`}>
      <span>{children}</span>
      {ripples.map((ripple) => (
        <span key={ripple.id} className="ripple" style={{ left: ripple.x, top: ripple.y }} />
      ))}
    </a>
  );
}
