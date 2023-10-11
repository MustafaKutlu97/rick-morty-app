import React from "react";
import Link from "next/link";

async function getBolumKarakterler(id) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://rickandmortyapi.com/api/episode/" + id);
  const bolum = await response.json();
  return bolum.characters;
}

export default async function BolumKarakterler({ id }) {
  const karakterler = await getBolumKarakterler(id);
  return (
    <>
      <h3>Bölüm Karaterleri</h3>
      <ul>
        {karakterler.map((k) => (
          <li key={k}>
            <Link href="/karakterler"> {k} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
