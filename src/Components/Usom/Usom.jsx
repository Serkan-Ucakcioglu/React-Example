import React, { useEffect, useState } from "react";
import { getUsom } from "../../api/api";
import UsomTable from "./UsomTable";

function Usom() {
  const [page, setPage] = useState(0);
  const [usom, setUsom] = useState();

  const getUsoms = async () => {
    const data = await getUsom(0);
    setUsom(data?.models);
  };

  useEffect(() => {
    getUsoms();
  }, [page]);
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="min-w-[500px]">
        {usom?.length > 1 && <UsomTable data={usom} />}
      </div>
    </div>
  );
}

export default Usom;
