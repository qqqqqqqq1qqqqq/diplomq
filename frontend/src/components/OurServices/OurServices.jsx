import './OurServices.css';
import browsImg from '../../img/brows.avif';
import makeupImg from '../../img/makeup.avif';
import lashesImg from '../../img/lashes.avif';
import hairImg from '../../img/hair.avif';
import nailsImg from '../../img/nails.avif';
import { brows, lashes, makeup, hair, nails } from '../../data/text/services';

const OurServices = () => {
  return (
    <div
      id='ourservices'
      className='services_container'
    >
      <div className='services_title'>Послуги</div>
      <div className='services_items'>
        <img
          className='services_img'
          src={lashesImg}
          alt='lashes'
        />
        <div>
          <div className='services_subtitle'>Вії</div>
          <div className='services_text'>{lashes}</div>
        </div>
      </div>
      <div className='services_items'>
        <div>
          <div className='services_subtitle services_subtitle_reverse'>
            Макіяж
          </div>
          <div className='services_text'>{makeup}</div>
        </div>
        <img
          className='services_img'
          src={makeupImg}
          alt='makeup'
        />
      </div>
      <div className='services_items'>
        <img
          className='services_img'
          src={browsImg}
          alt='brows'
        />
        <div>
          <div className='services_subtitle'>Брови</div>
          <div className='services_text'>{brows}</div>
        </div>
      </div>
      <div className='services_items'>
        <div>
          <div className='services_subtitle services_subtitle_reverse'>
            Волосся
          </div>
          <div className='services_text'>{hair}</div>
        </div>
        <img
          className='services_img'
          src={hairImg}
          alt='hair'
        />
      </div>
      <div className='services_items'>
        <img
          className='services_img'
          src={nailsImg}
          alt='nails'
        />
        <div>
          <div className='services_subtitle'>Нігті</div>
          <div className='services_text'>{nails}</div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
