import React from "react";

function SkeletonLoader(props) {
  const renderSkeletonNumber = () => {
    let skeletonArr = Array.from(Array(props.skeletonNumber).keys());
    return skeletonArr.map((key, index) => {
      return (
        <div className="skeleton-card br" key={index}>
          <div>
            <div className="skeleton-card__comment skeleton-card__animate"></div>
            <div className="skeleton-card__comment skeleton-card__animate"></div>
            <div className="skeleton-card__comment skeleton-card__animate"></div>
          </div>
        </div>
      );
    });
  };

  return <main className="main main_skeleton">{renderSkeletonNumber()}</main>;
}

export default SkeletonLoader;
