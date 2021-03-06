import React from "react";
import { useLocation } from "react-router-dom";

function SkeletonLoader() {
  const location = useLocation();

  const renderSkeletonCard = () => {
    console.log(location);

    return (
      <div className="card br">
        <div>
          <div className="comment animate"></div>
          <div className="comment animate"></div>
          <div className="comment animate"></div>
        </div>
      </div>
    );
  };

  return <>{renderSkeletonCard()}</>;
}

export default SkeletonLoader;
