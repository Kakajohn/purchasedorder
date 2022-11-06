import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import purchaseOrdersData from './data/purchaseorders.json';

import Layout from './components/layout/Layout';
import Spinner from './components/layout/Spinner';

const ordersUrl =
  'https://firebasestorage.googleapis.com/v0/b/gorgias-templates-production.appspot.com/o/attachments%2F3291ead6-82a2-43fa-ba6e-58328b4e02a1.json?alt=media&token=56fbe45a-2b91-4e35-bd1a-69f41f7d4363';

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    try {
      const ordersRes = await axios.get(ordersUrl);

      if (ordersRes.status === 200) {
        setOrders(ordersRes?.data?.mvPurchaseOrders);
        setLoading(false);
      } else {
        setOrders(purchaseOrdersData.mvPurchaseOrders);
        setLoading(false);
      }
    } catch (err) {
      console.error('Error fetching orders from firebase continuing with json file...');
      setOrders(purchaseOrdersData.mvPurchaseOrders);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!orders.length > 0) {
      fetchOrders();
    }
  }, [orders, fetchOrders]);

  return loading ? <Spinner /> : <Layout orders={orders} />;
}

export default App;
