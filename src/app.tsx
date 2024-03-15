import { Paper } from "./components/paper";


import "./app.css";

function App() {
  return (
    <div className="container flex p-4">
      <div className="flex flex-row w-[200px]">
        <h1 className="">Graph Paper</h1>
      </div>
      <div className="px-5">
        <div
          id="printable"
          className="flex w-full h-full items-center justify-center"
        >
          <Paper />
        </div>
      </div>
    </div>
  );
}

export default App;
