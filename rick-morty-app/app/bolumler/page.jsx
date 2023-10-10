import React from 'react'
import Link from 'next/link';
import {BsFillCalendarCheckFill,BsFillCalendar2EventFill} from 'react-icons/bs'
import moment from "moment";
import 'moment/locale/tr.js'



async function getBolumler(){

    const res= await fetch('https://rickandmortyapi.com/api/episode')

    return res.json(); 
}

export default async function Bolumler() {
    const bolumler= await getBolumler()
  return (
    <div className='episodes-container'>
        <h2>Rick and Morty Bölümleri</h2>
        <ul className='episode-list'>
            {bolumler.results.map((bolum)=>(
                <li key={bolum.id}>
                    <Link href={`/bolumler/${bolum.id}`}>
                        <h3>{bolum.name}</h3>
                        <p>{bolum.episode}</p>
                        <div className='episode-details'>
                            <span>
                                <BsFillCalendarCheckFill/> {moment(bolum.air_date).
                                format('LL')}
                            </span>
                            <span>
                                <BsFillCalendar2EventFill /> {moment(bolum.created).
                                format('LL')}
                            </span>
                        </div>
                    </Link>

                </li>
            ))}
        </ul>
    </div>
  );
}
