import { useState } from "react";
import { InfiniteScroll, List } from "antd-mobile";
import { BiFilter } from "react-icons/bi";

import "./style.css";
import RoommateCard from "../RoommateCard/RoommateCard";
import { useSelector } from "react-redux";
import PropertyCard from "../PropertyCard/PropertyCard";

const HomeResultSection = () => {
  const currentState = useSelector((state) => state.global.isRoommate);

  const [hasMore, setHasMore] = useState(true);
  const loadMore = () => {
    console.log("IDK WHAT TO DO");
  };
  return (
    <div className="hts-container">
      <div className="hts-top">
        <p>Top {currentState ? "Roommates" : "Properties"}</p>
        <BiFilter style={{ fontSize: 28 }} />
      </div>
      {currentState ? (
        <div style={{ marginTop: 20 }}>
          <List>
            {Array(5)
              .fill()
              .map((ele, i) => (
                <RoommateCard key={i} />
              ))}
          </List>
          {/* <InfiniteScroll loadMore={loadMore} hasMore={hasMore} /> */}
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>
          <List>
            {Array(5)
              .fill()
              .map((ele, i) => (
                <PropertyCard key={i} />
              ))}
          </List>
          {/* <InfiniteScroll loadMore={loadMore} hasMore={hasMore} /> */}
        </div>
      )}
    </div>
  );
};

export default HomeResultSection;
