import Footer from "./components/footer"
import Header from "./components/header"
import Logo from "./components/header/logo"
import Home from "./components/home"
import Cardinfo from "./components/home/cardinfo"
import Evolution from "./components/home/cardinfo/evolution"
import Logoo from "./components/home/cardinfo/logoo"
import Typeeffect from "./components/home/cardinfo/typeeffect"
import Search from "./components/home/search"


const App = () => {
  return (
        <>
       
       <Logo/>
       <Header/>
       <Footer/>
       <Home/>
       <Search/>
       <Cardinfo/>
       <Evolution/>
       <Logoo/>
       <Typeeffect/>   

      </>
    )
  }
export default App
