import { useEffect, useRef, useState } from 'react';
import style from './Select.module.css';

function Select({ value, items, onValueChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!hostRef.current?.contains(event.target) && !event.target.classList.contains(style.option)) {
        setIsOpen(false)
      }
    };
    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, []);


  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(item) {
    onValueChange(item);
    setIsOpen(false);
  }

  return (
    <div className={style.Select} ref={hostRef}>
      <div className={style.value} onClick={handleClick}>{value}</div>
      {isOpen && (
        <div className={style.menu}>
          {items.map((item) => (
            <div
              key={item}
              className={style.option + (item === value ? ` ${style.selected}` : '')}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
