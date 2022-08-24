import { useEffect, useState } from "react";

const useGetAnswer = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://yesno.wtf/api/");
      const json = await response.json();
      setData(json);
    };
    fetchData().catch(console.error);
  }, []);
  return data;
};

export default useGetAnswer;
