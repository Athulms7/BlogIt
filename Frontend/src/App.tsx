
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import { NotPage } from './pages/pagenotfound';
import { SignUp } from './pages/signup';
import { SignIn } from './pages/signin';
import Community from './pages/community';
import BlogitLandingPage from './pages/landingpage';
import { BlogPost } from './pages/Blogpost';
import { Profile } from './pages/profile';


function App() {
  return (
    <BrowserRouter>
    
      
          <Routes>
            <Route path="/" element={<BlogitLandingPage />}/>
            <Route path="/signin" element={<SignIn/>}/>
             <Route path="*" element={<NotPage/>}/>
             <Route path='/blog' element={<BlogPost/>}/>
              <Route path="/signup" element={<SignUp/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/community" element={<Community/>}/>
              <Route path="/profile" element={<Profile/>}/>

          </Routes>
        
    
    </BrowserRouter>
  )
}

export default App; 