import Carousel from '../Carousel/Carousel';
import './Welcome.css';
import { imagesWelcome } from '../../data/images';

const Welcome = () => {
  return (
    <div className='welcome_container'>
      <Carousel
        slides={imagesWelcome}
        width={'140vh'}
        height={'100%'}
        delay={20000}
        isPagintaion={false}
      />
    </div>
  );
};

export default Welcome;
