import React from 'react'
import Head from './Component/Head'
import Body from './Component/Body'
import { Provider } from 'react-redux'
import Store from './Utill/Store'
import WatchPage from './Component/WatchPage'
import Maincontainer from './Component/Maincontainer'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const App = () => {
   const approuter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />
      },
      {
        path:"/watch/",
        element: <WatchPage />
      }]
  }])
  return (
    <>
      <Provider store={Store}>
        <Head />
        <RouterProvider router={approuter} />
      </Provider>

    </>
  )
}

export default App;
