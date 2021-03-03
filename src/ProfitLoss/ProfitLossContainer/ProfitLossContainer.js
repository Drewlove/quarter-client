import React from "react";
import ProfitLoss from "../ProfitLoss/ProfitLoss";
import FetchListData from "../../FetchListData/FetchListData";
import MenuAuthenticated from "../../Header/MenuAuthenticated/MenuAuthenticated";

function ProfitLossContainer() {
  return (
    <>
      <MenuAuthenticated />
      <main className="main">
        <FetchListData endpointStr="line_items, shifts">
          <ProfitLoss />
        </FetchListData>
      </main>
    </>
  );
}

export default ProfitLossContainer;
