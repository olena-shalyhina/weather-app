import React, { useEffect, useState } from 'react';

function BackgroundPicker({ backgrounds, activeBackground, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="background-picker">
      <button
        className="background-picker__trigger"
        type="button"
        aria-label="Выбрать фоновое изображение"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
          <circle cx="9" cy="9.5" r="1.5" />
          <path d="m5 17 4.5-4.5 3 3 2.5-2.5 4 4" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="background-picker__backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            className="background-picker__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="background-picker-title"
          >
            <div className="background-picker__heading">
              <h2 id="background-picker-title">Выберите фон</h2>
              <button
                className="background-picker__close"
                type="button"
                aria-label="Закрыть"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="background-picker__grid">
              {backgrounds.map((background, index) => (
                <button
                  className="background-picker__option"
                  key={background.id}
                  type="button"
                  aria-pressed={activeBackground === background.id}
                  aria-label={`Фон ${index + 1}${activeBackground === background.id ? ', выбран' : ''}`}
                  onClick={() => onSelect(background)}
                >
                  <img
                    src={background.thumbnail}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span>Фон {index + 1}{activeBackground === background.id ? ' · Выбран' : ''}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default BackgroundPicker;
