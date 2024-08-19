import Herro from "../components/Herro"
import MyTeam from "../components/Myteam"
import Navbar from "../components/Navbar"
import Tenka from "../components/Tenka"
import Type from "../components/Type"
import Footer from "../components/Footer"
import Conskas2 from "../components/pageconkas/Conskas2"
import Content4 from "../components/pagecontent/Content4"
import Conskas4 from "../components/pageconkas/Conskas4"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Herro/>
      <Tenka /> 
      <Type/>
      <Content4/>
      <Conskas4/>
      <MyTeam/>
      <Footer/>
    </div>
  )
}

export default Home
