import Card from "./Bootstrap/Card";
import FBBox from "./FBBox";

const Feed = ({ Birthdays }) => {
  return (
    <div className="col-3 Feed">
      <FBBox>
        <div className="BirthdayContainer">
          <img src="https://i.imgur.com/6AoNBzI.png" alt="Gift" />
          {Birthdays.map(user => (
            <>
              <a href={user.ProfileURL}>{user.FullName}</a>
              {", "}
            </>
          ))}
          and 3 others.
        </div>
      </FBBox>
      <FBBox>
        <div className="PagesContainer">
          <h4>
            Your Pages <span>(2)</span>
          </h4>
          <ul>
            <li>
              <img src="https://i.imgur.com/SrTKlVe.png" alt="Edusera" />
              <div className="PageMeta">
                <a href="/">
                  <strong>Edusera</strong>
                </a>
                <a href="/">
                  <img src="https://i.imgur.com/bwVSUrj.png" alt="Messages" />
                  Messages (20+)
                </a>
                <a href="/">
                  <img
                    src="https://i.imgur.com/iU3hjYR.png"
                    alt="Notifications"
                  />
                  Notifications (20+)
                </a>
              </div>
            </li>
            <li>
              <img src="https://i.imgur.com/QDBSMr2b.jpg" alt="Zucku Mama" />
              <div className="PageMeta">
                <a href="/">
                  <strong>Zucku Mama</strong>
                </a>
                <a href="/">
                  <img src="https://i.imgur.com/bwVSUrj.png" alt="Messages" />
                  Messages (20+)
                </a>
                <a href="/">
                  <img
                    src="https://i.imgur.com/iU3hjYR.png"
                    alt="Notifications"
                  />
                  Notifications (20+)
                </a>
              </div>
            </li>
          </ul>
        </div>
      </FBBox>
      <FBBox>
        <div className="FeedsContainer">
          <h4>News Feed</h4>
          <ul>
            {[
              {
                Image: "https://i.imgur.com/nOT5zBD.jpeg"
              },
              {
                Image: "https://i.imgur.com/BipVIkJ.jpeg"
              },
              {
                Image: "https://i.imgur.com/ZM5xWH9.jpeg"
              },
              {
                Image: "https://i.imgur.com/Kjd7ny4.jpeg"
              },
              {
                Image: "https://i.imgur.com/hLqq0M7.jpeg"
              },
              {
                Image: "https://i.imgur.com/HLsczhZ.jpeg"
              }
            ].map((card, key) => (
              <li key={key}>
                <Card Image={card.Image} ImgAlign="top">
                  <a href="/">Some Cute Cat Stuff</a>
                  <p className="m-0 text-muted">
                    Posted <abbr title="12th Sunday September 2021">today</abbr>
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </FBBox>
    </div>
  );
};

export default Feed;