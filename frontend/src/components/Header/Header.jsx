import './Header.css';

const Header = () => {
  return (
    <nav className='header'>
      <a
        className='header_title'
        href='/'
      >
        Beauty Poltava
      </a>
      <span className='header_links'>
        <a
          className='header_link'
          href='#about'
        >
          Про нас
        </a>
        <a
          className='header_link'
          href='#ourservices'
        >
          Послуги
        </a>
        <a
          className='header_link'
          href='#prices'
        >
          Ціни
        </a>
        <a
          className='header_link'
          href='#createOrder'
        >
          Створити запис
        </a>
        <a
          className='header_link'
          href='#contacts'
        >
          Контакти
        </a>
        <a
          className='header_link'
          href='#comments'
        >
          Коментарі
        </a>
      </span>
    </nav>
  );
};

export default Header;
