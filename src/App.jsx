import Navbar from "./Components/Navbar"
import News from "./Components/News"
import {Route,Routes} from 'react-router-dom'
import NewsFull from "./Components/NewsFull"



function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/main" element={<NewsFull/>}/>
    </Routes>

    
    
    </>
  )
}

export default App
