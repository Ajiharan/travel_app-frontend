import React, { useState, useEffect } from "react";
import GuidCard from "./GuidCard";
import { useStateValue } from "../../StateProvider";
const GuidList = () => {
  const [{ guideDetails }] = useStateValue();
  const [guids, setGuids] = useState([]);

  useEffect(() => {
    setGuids(guideDetails);
  }, [guideDetails]);
  return (
    <div className="hotel_list_container">
      <h4 className="m-4">BOOK TOURIST GUIDES</h4>
      <div className="hotel__list">
        {guids.map((res, i) => (
          <GuidCard key={i} guide={res} />
        ))}
      </div>
    </div>
  );
};

export default GuidList;
