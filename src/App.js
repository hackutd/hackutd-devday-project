import { useEffect, useState } from 'react';
// Introduce react-router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Video from './pages/Video';
import Home from './pages/Home';

// Since we moved the homepage into a seperate page we can get rid of these component imports


// 4. Show that we can use the browser router to get to our different pages
const router = createBrowserRouter([
  // 7. Since we learned about routing, we can make the homepage into an actual page
  // 8. Link the homepage to the navbar 
  {
      path: '/',
      element: <Home />,
  },
  // 5. We can go further into routing by getting custom values
  {
      path: '/video/:id',
      element: <Video />,
  },
]);


function App() {

  return (
    // 6. We can clean up our App.js and just use browser routing
    <RouterProvider router={router} />
  );
}

export default App;
