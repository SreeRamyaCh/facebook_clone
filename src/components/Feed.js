import FBBox from "./Bootstrap/FBBox";

const Feed = () => {
  return (
    <div className="col-3">
      <FBBox>
        <div className="BirthdayContainer">
          <img src="https://i.imgur.com/BSMfLfb.png" alt="Gift" />
          <a href="/">Ramya</a>,<a href="/">Datta</a>,<a href="/">Sravya</a> and
          3 others.
        </div>
      </FBBox>
      <FBBox>Pages</FBBox>
      <FBBox>Feed</FBBox>
    </div>
  );
};

export default Feed;
