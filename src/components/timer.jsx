import React, { useEffect, useState } from "react";

const STARTTIME = new Date('2022-03-22T00:00:00').getTime();

const formatLeftTime = ts => {
  const days = Math.floor(ts / 86400);
  const hours = Math.floor((ts % 86400) / 3600);
  const minutes = Math.floor((ts % 3600) / 60);
  const seconds = ts % 60;

  return `${days} : ${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
}

export const MintTimer = () => {

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => {
        const now = new Date().getTime();
        if (now < STARTTIME) {
          setTimeLeft(Math.floor((STARTTIME - now) / 1000));
        }
      }, 1000
    );

    return () => clearInterval(timer);
  }, []);

  return timeLeft > 0 ? <h3 className='text-center text-white mt-5 pt-5' >
    Minting will start in<br />
    {formatLeftTime(timeLeft)}
  </h3> : null;
}