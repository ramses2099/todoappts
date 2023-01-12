import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    // content wrapper
    <div className="container">
     <form>
      <div className="space-x-1 mt-5 px-5">
        <div className="inline-block"><input type="text" className="border h-16"/></div>
        <div className="inline-block"><button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold border rounded-xl h-16 w-32">Add Todo</button></div>
      </div>
     </form>
    </div>
  );
}

export default App;
