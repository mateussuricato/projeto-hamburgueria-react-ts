import { Toaster } from "react-hot-toast";
import "./App.css";
import Router from "./router";

function App() {

  return (
    <div className="App">
      <Toaster/>
      <Router />
    </div>
  );
}

export default App;
