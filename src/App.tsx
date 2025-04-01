import { Home,Layout} from "./ui";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout children={<Home/>}/>} />
      </Routes>
    </div>
  );
}

export default App;
