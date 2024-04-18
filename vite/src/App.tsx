import { motion } from "framer-motion";
import naruto from "./assets/blurr-crop.png";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="hidden sm:inline">
        <div className="h-screen bg-orange-200 py-5 font-Rubik">
          <Navbar></Navbar>
          <div className="flex justify-center py-14">
            <div>
              <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-7xl font-bold text-[#1E4387] my-4 font-NjNaruto">
                  ML Village
                </h1>
                <h2 className="text-5xl font-semibold text-[#1F1C12] mb-2 py-10 leading-tight">
                  A MarketPlace For Open <br /> Source AI Models & Agents <br />{" "}
                  on <span className="text-orange-600">Starknet</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <p className="text-xl text-gray-700">
                  - Ushering in the age of AI and Gaming -
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  className="text-xl mt-14 h-16 w-80 border-2 rounded-full bg-[#BCBFD2] text-[#0C0C4F] opacity-50"
                  disabled
                >
                  White Paper Coming Soon ...
                </button>
              </motion.div>
            </div>
            <img src={naruto} alt="naruto" className="h-[555px] mr-10" />
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="h-full bg-orange-200 py-5 font-Rubik">
          <Navbar></Navbar>
          <div className="flex flex-col justify-center gap-10 py-12 px-10">
            <div>
              <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl font-bold text-[#1E4387] font-NjNaruto mb-10">
                  ML Village
                </h1>
                <h2 className="text-3xl font-semibold text-[#1F1C12] leading-tight mb-8">
                  A MarketPlace For Open Source AI Models & Agents <br /> on
                  <span className="text-orange-600"> Starknet</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <p className="text-sm text-gray-600 mb-6">
                  - Ushering in the age of AI and Gaming -
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  className=" text-xs h-12 w-48 border-2 rounded-full bg-[#BCBFD2] text-[#0C0C4F] opacity-50"
                  disabled
                >
                  White Paper Coming Soon ...
                </button>
              </motion.div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={naruto}
                alt="naruto"
                className="h-[350px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
