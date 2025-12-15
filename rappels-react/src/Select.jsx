import style from './Select.module.css';

console.log(style);
// {
//  Select: 'Select_Select__3fX9K',
//  value: 'Select_value__1vX2Y',
//  menu: 'Select_menu__2aB3C',
//  option: 'Select_option__1bC4D',
//  selected: 'Select_selected__3dE5F'
// }

function Select() {
  return (
    <div className={style.Select}>
      <div className={style.value}>Vert</div>
      <div className={style.menu}>
        <div className={style.option}>Rouge</div>
        <div className={`${style.option} ${style.selected}`}>Vert</div>
        <div className={style.option}>Bleu</div>
      </div>
    </div>
  );
}

export default Select;