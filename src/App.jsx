import { useState } from "react";
import PageSetup from "./components/PageSetup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PageSetup />
      </div>
    </>
  );
}

export default App;
