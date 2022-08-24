import { Toaster } from "react-hot-toast";
import "./App.css";
import Router from "./router";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState<boolean>(false);
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router logged={logged} setLogged={setLogged}/>
    </div>
  );
}

export default App;
