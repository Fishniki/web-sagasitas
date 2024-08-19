import { useState } from "react";
import Herro from "../components/Herro";
import MyTeam from "../components/Myteam";
import Navbar from "../components/Navbar";
import Tenka from "../components/Tenka";
import Type from "../components/Type";
import Footer from "../components/Footer";
import Conskas2 from "../components/pageconkas/Conskas2";
import Conskas3 from "../components/pageconkas/Conskas3";
import Conskas4 from "../components/pageconkas/Conskas4";
import Conskas5 from "../components/pageconkas/Conskas5";
import Content2 from "../components/pagecontent/Content2";
import Content3 from "../components/pagecontent/Content3";
import Content4 from "../components/pagecontent/Content4";
import Content5 from "../components/pagecontent/Content5";
import Conskas from "../components/pageconkas/Conskas";
import Content from "../components/pagecontent/Content";

const Home = () => {
  const [selectedType, setSelectedType] = useState(1);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const renderContent = () => {
    switch (selectedType) {
      case 1:
        return <Content2 />;
      case 2:
        return <Content3 />;
      case 3:
        return <Content4 />;
      case 4:
        return <Content />;
      case 5:
        return <Content5 />;
      default:
        return <Content />;
    }
  };

  const renderConskas = () => {
    switch (selectedType) {
      case 1:
        return <Conskas2 />;
      case 2:
        return <Conskas3 />;
      case 3:
        return <Conskas4 />;
      case 4:
        return <Conskas />;
      case 5:
        return <Conskas5 />;
      default:
        return <Conskas />;
    }
  };

  return (
    <div>
      <Navbar />
      <Herro />
      <Tenka />
      <Type onTypeClick={handleTypeClick} />
      {renderContent()}
      {renderConskas()}
      <MyTeam />
      <Footer />
    </div>
  );
};

export default Home;
