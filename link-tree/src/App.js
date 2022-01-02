import "./App.css";

//component imports
import Topper from "./Components/Topper";
import Link from "./Components/Link"

function App() {
  const links = ["LinkedIn","Github","Youtube"]
  return (
    <div className="App">
      <Topper />
      <div>
        {links.map(item =>(
          <Link name={item}></Link>
        ))}
      </div>
    </div>
  );
}

export default App;
