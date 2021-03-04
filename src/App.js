import React from 'react';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from './Components/CardProduct/CardProduct';
import FeatureProduct from './Components/FeatureProduct/FeatureProduct';
import LatestNews from './Components/LatestNews/LatestNews';
import CustomerSaid from './Components/CustomerSaid/CustomerSaid';
import AnimateBookCollection from './Components/AnimateBookCollection/AnimateBookCollection';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <CardProduct></CardProduct>
      <FeatureProduct></FeatureProduct>
      <LatestNews></LatestNews>
      <CustomerSaid></CustomerSaid>
      <AnimateBookCollection></AnimateBookCollection>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default App;