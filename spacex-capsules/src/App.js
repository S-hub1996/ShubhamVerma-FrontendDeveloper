import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Nav from "./Components/Navbar";

function App() {
  return (
<div>
  <Nav zIndex={999}/>
<Banner/>
<Card/>
</div>
  );
}

export default App;
