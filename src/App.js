import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "./Components/NotFound";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
     
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
