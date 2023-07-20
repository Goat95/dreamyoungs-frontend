import axios from "axios";
import { useEffect, useState } from "react";

const InitialPage = () => {
  // 서버로 부터 받아온 data를 저장한 state
  const [infoData, setInfoData] = useState(undefined);

  const config = {
    method: "get",
    url: "https://api-jobtest.json2bot.chat/test",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => setInfoData(res.data))
      .catch((error) => {
        if (error.response.status === 400) {
          alert(`400에러: ${error}`);
        }
        if (error.response.status === 500) {
          alert(`500에러: ${error}`);
        }
      });
  }, []);

  return (
    <div>
      {infoData ? (
        <>
          <h3>{infoData.data.info1}</h3>
          <h3>{infoData.data.info2}</h3>
          <h3>{infoData.data.info3}</h3>
          <h3>{infoData.data.info4}</h3>
          <h3>{infoData.data.date}</h3>
          <h3>{infoData.data.info5}</h3>
          <h3>{infoData.data.info6}</h3>
        </>
      ) : (
        <h3>...Waiting</h3>
      )}
    </div>
  );
};

export default InitialPage;
