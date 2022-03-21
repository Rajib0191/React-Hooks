import { useEffect, useState } from "react";

export const useFetchApi = (url, initialState) => {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        setLoding(false);
        setData(info);
      });
  }, []);

  return {
    data,
    loding,
  };
};
