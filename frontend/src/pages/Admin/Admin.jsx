import Orders from '../../components/Orders/Orders';
import './Admin.css';

const Admin = () => {
  return (
    <div className='admin_container'>
      <div className='admin_items'>
        <Orders />
      </div>
    </div>
  );
};

export default Admin;
