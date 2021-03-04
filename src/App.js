import React from 'react';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from './Components/CardProduct/CardProduct';
import FeatureProduct from './Components/FeatureProduct/FeatureProduct';
import LatestNews from './Components/LatestNews/LatestNews';

const App = () => {
  return (
    <div>
      <Header></Header>
      <CardProduct></CardProduct>
      <FeatureProduct></FeatureProduct>
      <LatestNews></LatestNews>
    </div>
  );
};

export default App;