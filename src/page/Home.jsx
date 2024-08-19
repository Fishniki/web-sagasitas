import Conskas from "../components/Conskas"
import Herro from "../components/Herro"
import MyTeam from "../components/Myteam"
import Navbar from "../components/Navbar"
import Tenka from "../components/Tenka"
import Type from "../components/Type"
import Content2 from "../components/pagecontent/Content2"

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
    </div>
  )
}

export default Home
