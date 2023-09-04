



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
import Login from './Page/Login';
import SignUp from './Page/SignUp';
import ProtectedRoute from './component/ProtectedRoute';
import { AuthContextProvider } from './Context/AuthContext';
import Casts from './component/Cast';







function App() {
  return (
    <div>
      <AuthContextProvider>
        <Nav />

        <Routes>

          <Route path='/' element={<Home />}></Route>

          <Route path='/popular' element={
            <ProtectedRoute>
              <Popular />
            </ProtectedRoute>}>
          </Route>
          <Route path='/upcoming' element={
            <ProtectedRoute>
              <Upcoming />
            </ProtectedRoute>
          }></Route>
          <Route path='/now_playing' element={
            <ProtectedRoute>
              <NowPlay /></ProtectedRoute>}>

          </Route>
          <Route path='/top_rated' element={
            <ProtectedRoute>
              <TopRated /></ProtectedRoute>}>

          </Route>
          

          <Route path="/signIn" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>

          <Route element={<MovieDetail />} path="/:genre/:id" />
          <Route element={<Casts />} path='/:genre/:id' />

          <Route
            path="/search/:title"
            element={
              <ProtectedRoute>
                <Searched />
              </ProtectedRoute>
            }
          ></Route>








        </Routes>

        <Footer />
      </AuthContextProvider>
    </div>
  )
}
export default App;
