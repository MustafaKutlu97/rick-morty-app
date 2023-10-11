import React from "react";
import Link from "next/link";
import {
  BsFillCalendarCheckFill,
  BsFillCalendar2EventFill,
} from "react-icons/bs";
import moment from "moment";
import "moment/locale/tr.js";

async function getBolum(id) {
  const response = await fetch("https://rickandmortyapi.com/api/episode/" + id);
  const epo = await response.json();
  return epo;
}

export default async function bolum({ id }) {
  const bolum = await getBolum(id);
  return (
    <>
      <h2>
        <u>Bölüm Adı</u> : {bolum.name}
      </h2>
      <p>{bolum.episode}</p>
      <div className="card-stats">
        <div className="card-stat">
          <span>
            <BsFillCalendarCheckFill /> {moment(bolum.air_date).format("LL")}{" "}
          </span>
        </div>
        <div className="card-stat">
          <span>
            <BsFillCalendar2EventFill /> {moment(bolum.created).format("LL")}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
