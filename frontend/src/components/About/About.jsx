import {
  aboutIntroduction,
  aboutSalon,
  aboutStaff,
  aboutText,
  aboutWhyWait
} from '../../data/text/about';
import Carousel from '../Carousel/Carousel';
import './About.css';
import { imagesAbout } from '../../data/images';

const About = () => {
  return (
    <div
      id='about'
      className='about_wraper'
    >
      <div className='about_container'>
        <div className='about_main_title'>Про нас</div>
        <div className='about_text'>
          <div>{aboutIntroduction}</div>
          <br />
          <div>{aboutText}</div>
          <br />
          <div>{aboutStaff}</div>
          <br />
          <div>{aboutSalon}</div>
          <br />
          <div>{aboutWhyWait}</div>
        </div>
        <Carousel
          slides={imagesAbout}
          height={'28rem'}
          width={'45rem'}
          delay={10000}
        />
      </div>
    </div>
  );
};

export default About;
