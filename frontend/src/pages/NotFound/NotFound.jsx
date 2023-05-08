import './NotFound.css';
import notFoundImg from '../../img/notFound.avif';

const NotFound = () => {
  return (
    <div className='notfound_container'>
      <div className='notfound_items'>
        <div className='notfound_text'>Сторінку не знайдено</div>
        <div>
          <img
            className='notfound_img'
            src={notFoundImg}
            alt='Not Found Img'
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
