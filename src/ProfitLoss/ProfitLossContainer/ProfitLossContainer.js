import React from "react";
import ProfitLoss from "../ProfitLoss/ProfitLoss";
import FetchData from "../../FetchData/FetchData";
import { useAuthId } from "../../Authentication/useAuthId";

function ProfitLossContainer() {
  const userId = useAuthId();

  return (
    <>
      <main className="main main_pnl">
        <FetchData
          endpointArr={[`line_items/${userId}`, `shifts/${userId}`]}
          skeletonNumber={7}
        >
          <ProfitLoss />
        </FetchData>
      </main>
    </>
  );
}

export default ProfitLossContainer;
