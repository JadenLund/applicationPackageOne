import { useState } from "react";
import PageSetup from "./components/PageSetup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-t from-bg-t via-bg-m to-bg-t space-y-8 w-full">
      <PageSetup />
    </div>
  );
}

export default App;
