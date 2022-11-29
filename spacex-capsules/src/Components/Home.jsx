import Banner from "./Banner";
import Data from "./Data";
import Footer from "./Footer";
import Nav from "./Navbar";

function Home() {
  return (
<div>
  <Nav zIndex={999}/>
<Banner/>
<Data/>
<Footer/>
</div>
  );
}

export default Home;
