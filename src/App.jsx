import { useState } from 'react';
import './App.css';
import MainTracker from './screens/mainTracker/MainTracker';
import Header from './screens/header/Header';
import OrderStage from './screens/orderStage/OrderStage';
import Footer from './screens/footer/Footer';

function App() {

  const orders = [
    {
      "id": 1,
      "stage": "Processing",
      "totalTimeSpent": "2 hours"
    },
    {
      "id": 2,
      "stage": "Shipped",
      "totalTimeSpent": "4 hours"
    },
    {
      "id": 3,
      "stage": "Delivered",
      "totalTimeSpent": "6 hours"
    },
    {
      "id": 4,
      "stage": "Processing",
      "totalTimeSpent": "3 hours"
    },
    {
      "id": 5,
      "stage": "Processing",
      "totalTimeSpent": "1 hour"
    }
  ]


  return (
    <>
      <Header />
      <OrderStage />
      <MainTracker orders={orders} />
      <Footer />
    </>
  )
}

export default App
