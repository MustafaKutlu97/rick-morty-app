"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Loading from "../loading";

export default async function Karakterler() {
  const [sayfa, setSayfa] = useState(1);
  const [karakterler, setKarakterler] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getKarakterler = async (page) => {
      const res = await fetch(
        "http://localhost:3000/api/karakterler?page=" + page
      );
      const data = await res.json();
      setKarakterler(data);
      setLoading(false);
    };

    getKarakterler(sayfa);
  }, [sayfa]);

  const handleIleri = (e) => {
    e.preventDefault();
    setSayfa(sayfa + 1);
  };

  const handleGeri = (e) => {
    e.preventDefault();
    setSayfa(sayfa - 1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="karakterler">
      <h2>Rick And Morty Karakterler -- Sayfa {sayfa}</h2>
      {karakterler.results.map((k) => (
        <div className="card" key={k.id}>
          <h2>{k.name}</h2>
          <div className="card-stat">
            <Image src={k.image} width={100} height={100} />
            <div>
              <p>Durum: {k.status}</p>
              <p>Tür: {k.species}</p>
              <p>Cinsiyet: {k.gender}</p>
            </div>
            <div>
              <b>Konum</b>
              <p>{k.location.name}</p>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        {karakterler.info.prev && (
          <button className="btn" onClick={handleGeri}>
            Geri
          </button>
        )}
        {karakterler.info.next && (
          <button className="btn" onClick={handleIleri}>
            İleri
          </button>
        )}
      </div>
    </div>
  );
}
