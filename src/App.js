
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Compos.jsx/Home';
import Regitser from './Auth/Regitser';
import Login from './Auth/Login';
import Navbar from './Compos.jsx/Navbar';
import Allblog from './Compos.jsx/Allblog';
import Blogdetails from './Compos.jsx/Blogdetails';
import Member from './Compos.jsx/Member';
import Profile from './Compos.jsx/Profile';
import ServiceDet from './Compos.jsx/ServiceDet';
import { Suspense,lazy } from 'react';




function App() {

  function PrivateRoute ({children}){
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    
    return token!== null && token!== undefined? (
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
