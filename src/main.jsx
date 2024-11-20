import { createRoot } from 'react-dom/client';
import './index.css';
import router from './router/router.jsx';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store/Store.js';
 

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  
);
