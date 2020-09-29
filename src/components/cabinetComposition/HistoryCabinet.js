import React, { useState } from "react";
import { HistoryItem } from "./HistoryItem";

import axios from "axios";
export const HistoryCabinet = () => {
  const [dataHistory, setDataHistory] = useState([]);
  React.useEffect(() => {
    const url = "https://newsitetesting.ru/test";
    axios
      .post(url, {
        method: "getOrder",
        id: localStorage.getItem("id"),
      })
      .then(({ data }) => {
        setDataHistory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="history-cabinet">
      {dataHistory.map((e, i) => (
        <HistoryItem data={e} key={i} />
      ))}
    </div>
  );
};
