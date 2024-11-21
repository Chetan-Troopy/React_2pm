import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import { RouterProvider } from 'react-router-dom';
import router from './router/MyRouter.jsx';


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
