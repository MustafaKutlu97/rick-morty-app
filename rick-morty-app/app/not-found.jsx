import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Aradığınız sayfa bulunamadı.</h1>
      <p>Hatanın nedenini bulmak için aramalara başladık bile.</p>
      <Link className="btn-back" href="/">
        Anasayfa
      </Link>
    </div>
  );
}
