import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Admin from './pages/Admin/Admin';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/admin'
          element={<Admin />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};

export default App;
