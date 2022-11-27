import Banner from "./Components/Banner";
import Data from "./Components/Data";
import Footer from "./Components/Footer";
import Nav from "./Components/Navbar";

function App() {
  return (
<div>
  <Nav zIndex={999}/>
<Banner/>
<Data/>
<Footer/>
</div>
  );
}

export default App;
