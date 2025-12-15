import { useState } from 'react';
import style from './Select.module.css';

console.log(style);
// {
//  Select: 'Select_Select__3fX9K',
//  value: 'Select_value__1vX2Y',
//  menu: 'Select_menu__2aB3C',
//  option: 'Select_option__1bC4D',
//  selected: 'Select_selected__3dE5F'
// }

function Select({ value, items, onColorChange }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.Select}>
      <div className={style.value} onClick={handleClick}>{value}</div>
      {isOpen && (
        <div className={style.menu}>
          {items.map((item) => (
            <div
              key={item}
              className={`${style.option} ${item === value ? style.selected : ''}`}
              onClick={() => onColorChange(item)}
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
