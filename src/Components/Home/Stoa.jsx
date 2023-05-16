import React from "react";
import useData from "../../hooks/useData";

function Stoa() {
  const { stoa, stoas } = useData();
  return (
    <>
      <div className="flex flex-col justify-center items-center shadow hover:shadow-2xl text-center border border-gray-300 p-2 rounded hover:border-gray-400">
        <div className="flex flex-col items-center w-[300px]">
          <span className="text-black font-bold">{stoa?.author}:</span>
          <p className="text-justify	w-[200px] text-gray-500">{stoa?.quote}</p>
        </div>
        <button
          onClick={stoas}
          className="border mt-4 border-blue-500 bg-blue-500 text-white p-2 w-[70px] text-sm rounded mt-2 hover:bg-blue-700"
        >
          Changed
        </button>
      </div>
    </>
  );
}

export default Stoa;
