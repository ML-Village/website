import naruto from "./assets/naruto-crop.png";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen bg-orange-200 py-5 font-Rubik">
      <Navbar></Navbar>
      <div className="flex justify-center gap-20 py-14">
        <div>
          <h1 className="text-7xl font-bold text-[#1E4387] mb-4 font-NjNaruto mt-4">
            ML Village
          </h1>
          <h2 className="text-5xl font-semibold text-[#fff] mb-2 py-10 leading-tight">
            A MarketPlace For Open <br /> Source AI Models & Agents <br /> on{" "}
            <span className="text-[#0C0C4F]">Starknet</span>
          </h2>
          <p className="text-xl text-gray-600">
            - Ushering in the age of AI and Gaming -
          </p>
          <button
            className=" text-xl mt-14 h-16 w-96 border-2 rounded-3xl bg-[#BCBFD2] text-[#0C0C4F] opacity-50"
            disabled
          >
            Notion Page Coming Soon ...
          </button>
        </div>
        <img src={naruto} alt="naruto" className="h-[550px] mr-10" />
      </div>
    </div>
  );
}

export default App;
