
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './Components/Service';

function App() {
  return (
<Router>
<NavBar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/service" element={<Service/>}/>
  </Routes>
  <Footer/>
   </Router>
 );
}

export default App;
