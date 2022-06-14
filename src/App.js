import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import CheckOutPage from './routes/check-out-page/check-out-page.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='check-out' element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
