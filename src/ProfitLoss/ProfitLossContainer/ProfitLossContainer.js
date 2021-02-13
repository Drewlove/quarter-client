import React from "react";
import ProfitLoss from "../ProfitLoss/ProfitLoss";
import FetchListData from "../../FetchListData/FetchListData";

function ProfitLossContainer() {
  return (
    <main className="main">
      <FetchListData endpointStr="line_items, shifts">
        <ProfitLoss />
      </FetchListData>
    </main>
  );
}

export default ProfitLossContainer;
