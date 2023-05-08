import './Contacts.css';
import locationImg from '../../img/location.jpg';
import phoneImg from '../../img/phoneContacts.svg';
import mailImg from '../../img/emailContacts.svg';
import instagramImg from '../../img/instagramContacts.svg';

const Contacts = () => {
  return (
    <div
      id='contacts'
      className='contacts_container'
    >
      <div className='contacts_title'>Контакти</div>
      <div className='contacts_items'>
        <div className='contacts_numbers_wrapper'>
          <div className='contacts_subtitle'>Наші контактні дані</div>
          <div className='contacts_numbers_container'>
            <div className='contacts_numbers_items'>
              <p className='contacts_text'>+380963866061</p>
              <img
                className='contacts_image'
                src={phoneImg}
                alt='phoneImg'
              />
            </div>
            <div className='contacts_numbers_items'>
              <p className='contacts_text'>beautysalon@gmail.com</p>
              <img
                className='contacts_image'
                src={mailImg}
                alt='mailImg'
              />
            </div>
            <div className='contacts_numbers_items'>
              <a
                rel='noreferrer'
                target='_blank'
                className='contacts_text'
                href='https://www.instagram.com/valenti.browbar/'
              >
                Instagram
              </a>
              <img
                className='contacts_image'
                src={instagramImg}
                alt='instagramImg'
              />
            </div>
          </div>
        </div>
        <div className='contacts_numbers_wrapper'>
          <div className='contacts_subtitle'>Наше розташування</div>
          <img
            className='contacts_location'
            src={locationImg}
            alt='location'
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
