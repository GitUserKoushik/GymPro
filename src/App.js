
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Compos.jsx/Home';
import Regitser from './Auth/Regitser';
import Login from './Auth/Login';
import Allblog from './Compos.jsx/Allblog';
import Blogdetails from './Compos.jsx/Blogdetails';
import Member from './Compos.jsx/Member';
import Profile from './Compos.jsx/Profile';
import ServiceDet from './Compos.jsx/ServiceDet';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';



function App() {

  function PrivateRoute ({children}){
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    
    return token!== null && token!== undefined && token!=="" ? (
      children):
      (
        <>
        <Navigate to="/login" />
       
        </>
      )
    
    
    }

    const PrivateRouteNames = [
      {
        path:"/member",
        Component: <Member />,
      },
      {
        path:"/profile",
        Component: <Profile />
      },
      
    ];

    const PublicRouteNames = [
      {
        path:"/",
        Component: <Home />,
      },
      {
        path:"/blog",
        Component: <Allblog />,
      },
      {
        path:"/Login",
        Component: <Login />,
      },
      {
        path:"/register",
        Component: <Regitser />,
      },
      {
        path:"/blogdet/:id",
        Component:<Blogdetails/>
      },
      {
        path:"/serdet/:id",
        Component:<ServiceDet/>
      }
    ];
 



  


  return (
    <div className="App">
      <Suspense  fallback={<h2> Loading....</h2>}>
        <Router>
          <Toaster reverseOrder={false} position='top-center' />
          <Routes>

            {PublicRouteNames?.map((route,index)=>{
              return( <Route key={index} exact path={route.path} element={route.Component} />)
            })

            };

            {PrivateRouteNames?.map((route,index)=>{
              return( <Route key={index} path={route.path} element={<PrivateRoute> {route.Component} </PrivateRoute>}  />)
            })}

            {/* <Route path='/'  element={ <Home/>}  /> */}

          </Routes>
         
        </Router>

      </Suspense>
    




    </div>


  );
}

export default App;
