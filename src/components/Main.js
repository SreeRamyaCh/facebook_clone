import React from "react";
import FBBox from "./FBBox";

const Main = ({ FeedData }) => {
  return (
    <div className="col-7">
      <FBBox Heading="Create a Post"></FBBox>
      <pre className="bg-light border rounderdp-2">
        {JSON.stringify(FeedData, null, 2)}
      </pre>
    </div>
  );
};

export default Main;
