import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { Card } from "./Card";
import { Filters } from "./Filters";
import "./Home.css";

export const Home = () => {
  const {
    state: { data },
  } = useContext(AppContext);
  const [d, setD] = useState([]);
  useEffect(() => {
    setD(data);
  }, [data]);

  return (
    <div>
      <div className="flex">
        <Filters setD={setD} />
        <div className="cards-div">
          {d.map((e) => {
            return <Card e={e} key={e.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
