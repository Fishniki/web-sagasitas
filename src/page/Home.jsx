import Herro from "../components/Herro"
import MyTeam from "../components/Myteam"
import Navbar from "../components/Navbar"
import Tenka from "../components/Tenka"
import Type from "../components/Type"
import Footer from "../components/Footer"
import Content2 from "../components/pagecontent/Content2"
import Conskas2 from "../components/pageconkas/Conskas2"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Herro/>
      <Tenka /> 
      <Type/>
      <Content5/>
      <Conskas2/>
      <MyTeam/>
      <Footer/>
    </div>
  )
}

export default Home
