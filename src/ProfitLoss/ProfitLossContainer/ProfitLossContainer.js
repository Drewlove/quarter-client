import React from "react";
import ProfitLoss from "../ProfitLoss/ProfitLoss";
import FetchData from "../../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function ProfitLossContainer() {
  const { user } = useAuth0();
  let userId = user.sub.split("auth0|")[1];

  return (
    <>
      <main className="main">
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
