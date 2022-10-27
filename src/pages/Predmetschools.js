import React from 'react';

import leftsideimg from '../img/leftsideimg.jpg';

function Predmetschools() {
  return (
    <div className='main-page main-container page-titles'>
      <div className='predmetschool-container'>
        <img src={leftsideimg} alt='Предметные школы' />
        <div className='predmetschool-container__right'>
          <a href='https://disk.yandex.ru/i/ggGnbNtQiPIoqQ'>
            Английский без границ
          </a>
          <a href='https://disk.yandex.ru/i/jmppNipPSRZ6WQ'>
            Педагогическая студия Я в мире детей
          </a>
          <a href='https://disk.yandex.ru/i/WrP_vLmDB9qmQA'>
            Школа Основы графической грамоты
          </a>
          <a href='https://disk.yandex.ru/i/Gbpz--0wtG8DBA'>Школа вокала</a>
          <a href='https://disk.yandex.ru/i/LQcTuBWDahmQ_A'>
            Школа молодого профессионала
          </a>
          <a href='https://disk.yandex.ru/i/whvfxgmMu3syWw'>
            Школа юного исследователя-химика
          </a>
          <a href='https://disk.yandex.ru/i/_S9yvjyztW5Trw'>
            Школа юного историка-обществоведа
          </a>
          <a href='https://disk.yandex.ru/i/5RyTgDuAq32Mgw'>
            Школа юного лингвиста-переводчика
          </a>
          <a href='https://disk.yandex.ru/i/oz0oZgFoF9XSuw'>
            Школа юного лингвокраеведа
          </a>
          <a href='https://disk.yandex.ru/i/qJPBE6ijHeSk1w'>
            Школа юного ученого 3D моделиста
          </a>
          <a href='https://disk.yandex.ru/i/eHUf3Ob47RbLSA'>
            Школа юного ученого (математика, физика, информатика)
          </a>
          <a href='https://disk.yandex.ru/i/_0WDJlaFL1wORg'>
            Школа юного экономиста
          </a>
          <a href='https://disk.yandex.ru/i/_1AIeCSxka29cA'>
            Профмастерская магистрантов
          </a>
        </div>
      </div>
    </div>
  );
}

export default Predmetschools;
