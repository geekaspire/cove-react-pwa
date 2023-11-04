import { useState } from "react";
import { InfiniteScroll, List } from "antd-mobile";
import { BiFilter } from "react-icons/bi";

import "./style.css";
import RoommateCard from "../RoommateCard/RoommateCard";

const HomeResultSection = () => {
  const [hasMore, setHasMore] = useState(true);
  // const loadMore = () => {
  //   console.log(setHasMore);
  //   console.log("IDK WHAT TO DO");
  // };
  return (
    <div className="hts-container">
      <div className="hts-top">
        <p>Top Roommates</p>
        <BiFilter style={{ fontSize: 28 }} />
      </div>
      <div style={{ marginTop: 20 }}>
        <List>
          {Array(5)
            .fill()
            .map((ele, i) => (
              <RoommateCard key={i} />
            ))}
        </List>
        <InfiniteScroll
          // loadMore={loadMore}
          hasMore={hasMore}
        />
      </div>
    </div>
  );
};

export default HomeResultSection;
