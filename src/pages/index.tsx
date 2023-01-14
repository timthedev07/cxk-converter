import type { NextPage } from "next";
import { ConverterPanel } from "../components/ConverterPanel";
import { timeUnits } from "../lib/units";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-[80vh]">
        <ConverterPanel units={timeUnits} />
      </div>
    </>
  );
};

export default Home;
