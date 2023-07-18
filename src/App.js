



import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';

import Nav from './component/Navbar';
import { MovieDetail } from './Page/MovieDetail';
import Popular from './Page/Popular';
import Upcoming from './Page/Upcoming';
import NowPlay from './Page/NowPlay';
import TopRated from './Page/TopRated';
import Searched from './component/Searched';
import { Footer } from './Page/Footer';
// import Login from './Page/Login';
// import SignUp from './Page/Signup';
// import ProtectedRoute from './component/ProtectedRoute';



function App() {
  return (
    <div>
     <Nav />
     
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/popular' element={<Popular />}></Route>  
      <Route path='/upcoming' element={<Upcoming />}></Route> 
      <Route path='/now_playing' element={<NowPlay />}></Route>
      <Route path='/top_rated' element={<TopRated />}></Route>
      {/* <Route path='/signIn' element={<Login />}></Route>  */}
      {/* <Route path='/signUp' element={<SignUp />}> */}
        <Route element={<MovieDetail />} path="/:genre/:id" />
      {/* </Route> */}
      
     
      <Route path="/search/:title"  element={
      // <ProtectedRoute>
      <Searched />  
      // </ProtectedRoute>
    }/>
        
      
      
      </Routes>
      
    <Footer />
    </div>
  )}
export default App;
  