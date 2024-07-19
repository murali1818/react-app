/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";

const useGetApiCall = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url);
    setLoading(true);
    if (response.status === 200) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
  };
    useEffect(() => {
    getData(url);
  }, []);
  
  return { data, loading,getData };
};

export default useGetApiCall;
