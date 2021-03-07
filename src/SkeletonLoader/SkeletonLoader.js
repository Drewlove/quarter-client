import React from "react";
import { useLocation } from "react-router-dom";

function SkeletonLoader(props) {
  const location = useLocation();
  let pathnameArr = location.pathname.split("/");

  const switchSkeleton = () => {
    console.log(pathnameArr[2]);
    switch (pathnameArr[2]) {
      case "pnl":
        return renderSkeletonMultiple();
      case "schedule":
        return renderSkeletonMultiple();
      default:
        return renderSkeletonSingle();
    }
  };

  const renderSkeletonMultiple = () => {
    return (
      <>
        {renderSkeletonSingle()}
        {renderSkeletonSingle()}
        {renderSkeletonSingle()}
        {renderSkeletonSingle()}
        {renderSkeletonSingle()}
        {renderSkeletonSingle()}
        {renderSkeletonSingle()}
      </>
    );
  };

  const renderSkeletonSingle = () => {
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

  return <main className="main main_skeleton">{switchSkeleton()}</main>;
}

export default SkeletonLoader;
