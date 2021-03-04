import React from 'react';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from './Components/CardProduct/CardProduct';
import FeatureProduct from './Components/FeatureProduct/FeatureProduct';

const App = () => {
  return (
    <div>
      <Header></Header>
      <CardProduct></CardProduct>
      <FeatureProduct></FeatureProduct>
    </div>
  );
};

export default App;