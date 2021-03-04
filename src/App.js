import React from 'react';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from './Components/CardProduct/CardProduct';

const App = () => {
  return (
    <div>
      <Header></Header>
      <CardProduct></CardProduct>
    </div>
  );
};

export default App;