import { AspectRatio } from "@chakra-ui/react";
import Banner from "./Banner";
import Data from "./Data";
import Footer from "./Footer";
import Nav from "./Navbar";
import Falcon from '../Assets/Falcon.mp4'
function Home() {
  return (
<div>
  <Nav zIndex={999}/>
<Banner/>

<Data/>
<AspectRatio maxW='100%' ratio={1}>
<video src={Falcon}autoPlay loop muted ></video>
</AspectRatio>
<Footer/>
</div>
  );
}

export default Home;
