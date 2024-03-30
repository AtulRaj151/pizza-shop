import { useState } from 'react';
import './App.css';
import MainTracker from './screens/mainTracker/MainTracker';
import Header from './screens/header/Header';
import OrderStage from './screens/orderStage/OrderStage';
import Footer from './screens/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <OrderStage />
      <MainTracker />
      <Footer />
    </>
  )
}

export default App
