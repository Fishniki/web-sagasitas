import Conskas from "../components/Conskas"
import Herro from "../components/Herro"
import MyTeam from "../components/Myteam"
import Navbar from "../components/Navbar"
import Tenka from "../components/Tenka"
import Type from "../components/Type"
import Content2 from "../components/pagecontent/Content2"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Herro/>
      <Tenka /> 
      <Type/>
      <Content2/>
      <Conskas/>
      <MyTeam/>
      <Footer/>
    </div>
  )
}

export default Home
