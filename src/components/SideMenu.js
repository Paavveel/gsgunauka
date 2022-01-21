import React from 'react';
import { NavLink } from 'react-router-dom';
function SideMenu() {
  return (
    <div className='main-sidemenu'>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='naukaschools'>Научные школы</NavLink>
      <NavLink to='events'>Мероприятия</NavLink>
      <NavLink to='publication'>Издания</NavLink>
      <NavLink to='predmetschools'>Предметные школы</NavLink>
      <NavLink to='achievements'>Достижения</NavLink>
      <NavLink to='contact'>Контакты</NavLink>
    </div>
  );
}

export default SideMenu;
