import Navbar from "./components/navbar";

import Question1 from "./components/question1"
import Question2 from "./components/question2"
import Question3 from "./components/question3"
import Question4 from "./components/question4"




import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
function App() {
  return (
<div>
<Router>
  <Routes>
    <Route path="/" exact element={<Navbar/>}></Route>
    <Route path="/question1" exact element={<Question1/>}></Route>
    <Route path="/question2" exact element={<Question2/>}></Route>
    <Route path="/question3" exact element={<Question3/>}></Route>
    <Route path="/question4" exact element={<Question4/>}></Route>
  </Routes>
</Router>

</div>
  );
}

export default App;
