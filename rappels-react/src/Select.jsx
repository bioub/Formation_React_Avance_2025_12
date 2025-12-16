import { memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import style from './Select.module.css';
import clsx from 'clsx';

console.log(style);
// {
//  Select: 'Select_Select__3fX9K',
//  value: 'Select_value__1vX2Y',
//  menu: 'Select_menu__2aB3C',
//  option: 'Select_option__1bC4D',
//  selected: 'Select_selected__3dE5F'
// }

// function useListener(element, eventType, listener) {
//   const listenerRef = useRef(listener);

//   useEffect(() => {
//     const listenerRefCurrent = listenerRef.current;
//     if (!element) return;
//     element.addEventListener(eventType, listenerRefCurrent);

//     return () => {
//       element.removeEventListener(eventType, listenerRefCurrent);
//     };
//   }, [element, eventType]);
// }

function Select({ value, items, onValueChange, ref, renderItem }) {
  console.log('Render Select', { value, items });  
  const [isOpen, setIsOpen] = useState(false);
  const hostRef = useRef(null);

  // useListener(window, 'click', (event) => {
  //   if (!hostRef.current?.contains(event.target) && !event.target.classList.contains(style.option)) {
  //     setIsOpen(false)
  //   }
  // });

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

  useImperativeHandle(ref, () => ({
    openMenu() {
      console.log('Open menu');
      setIsOpen(true);
    }
  }), []);

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
              className={clsx(style.option, { [style.selected]: item === value })}
              onClick={() => handleOptionClick(item)}
            >
              {renderItem ? renderItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(Select, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value && prevProps.items === nextProps.items;
});
