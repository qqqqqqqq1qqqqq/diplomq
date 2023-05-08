import './Main.css';
import OurServices from '../../components/OurServices/OurServices';
import About from '../../components/About/About';
import Welcome from '../../components/Welcome/Welcome';
import Prices from '../../components/Prices/Prices';
import Contacts from '../../components/Contacts/Contacts';
import Comments from '../../components/Comments/Comments';
import CreateOrderForm from '../../components/CreateOrderForm/CreateOrderForm'

const Main = () => {
  return (
    <div className='main_container'>
      <Welcome />
      <div className='main_items'>
        <About />
        <OurServices />
        <Prices />
        <CreateOrderForm />
        <Contacts />
        <Comments />
      </div>
    </div>
  );
};

export default Main;
