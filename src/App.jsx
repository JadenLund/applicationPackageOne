import { useState } from "react";
import PageSetup from "./components/PageSetup";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PageSetup />
        <About />
      </div>
    </>
  );
}

export default App;
