import Conskas from "../components/Conskas"
import Content from "../components/Content"
import Herro from "../components/Herro"
import MyTeam from "../components/Myteam"
import Navbar from "../components/Navbar"
import Tenka from "../components/Tenka"
import Type from "../components/Type"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Herro/>
      <Tenka /> 
      <Type/>
      <Content/>
      <Conskas/>
      <MyTeam/>
    </div>
  )
}

export default Home
