import Bolum from "@/app/components/Bolum";
import Link from "next/link";
import BolumKarakterler from "@/app/components/BolumKarakterler";
import { Suspense } from "react";

export default function BolumDetay({ params }) {
  const id = params.id;
  return (
    <div className="card">
      <Link href="/bolumler" className="btn btn-back">
        Bölümlere Geri Dön
      </Link>
      <Bolum id={id} />
      <Suspense fallback={<div>Karakterler Yükleniyor...</div>}>
        <BolumKarakterler id={id} />
      </Suspense>
    </div>
  );
}
