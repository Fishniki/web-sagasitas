import Conskas from "../components/Conskas"
import Herro from "../components/Herro"
import MyTeam from "../components/Myteam"
import Navbar from "../components/Navbar"
import Tenka from "../components/Tenka"
import Type from "../components/Type"
import Content2 from "../components/pagecontent/Content2"
import Content3 from "../components/pagecontent/Content3"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Herro/>
      <Tenka /> 
      <Type/>
      <Content3/>
      <Conskas/>
      <MyTeam/>
    </div>
  )
}

export default Home
