import React, { useState } from "react";
import GuidCard from "./GuidCard";

const GuidList = () => {
  const [guids, setGuids] = useState([
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      name: "guid1",
      stars: 4,
      experience: 4,
      desc: "lorem ipsum",
      id: 1,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      name: "guid1",
      stars: 4,
      experience: 4,
      desc: "lorem ipsum",
      id: 2,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      name: "guid1",
      stars: 4,
      experience: 4,
      desc: "lorem ipsum",
      id: 3,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      name: "guid1",
      stars: 4,
      experience: 4,
      desc: "lorem ipsum",
      id: 4,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      name: "guid1",
      stars: 4,
      experience: 4,
      desc: "lorem ipsum",
      id: 5,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      name: "guid1",
      stars: 4,
      experience: 4,
      desc: "lorem ipsum",
      id: 6,
    },
  ]);
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
