import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Overview from './page/Overview/Overview';
import Product from './page/Products/Product';
import User from './page/Users/User';

function App() {
  return (
    <div style={{width:'100%'}} className="App">
      <Layout>
        <Routes>
          <Route index element={<Overview />} />
          <Route path={'/overview'} element={<Overview />} />
          <Route path={'/users'} element={<User />} />
          <Route path={'/products'} element={<Product />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
