import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './reduxx/store.js'
import CenterBox from './componnents/home/center_box.jsx'
import { Login } from './componnents/login/login.jsx'
import { Workscomp } from './componnents/pages/worksComp/workscomp.jsx';
import { Sidebar } from './componnents/sidebar/sidebar.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<App />}>
        <Route path='/' element={
          <>
            <CenterBox />
            <Outlet />
          </>
        }>
          <Route path='login' element={<Login />}>
          </Route>
        </Route>
        <Route path='myworks' element={<Workscomp/>} />
      </Route>
    </Route> 
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
