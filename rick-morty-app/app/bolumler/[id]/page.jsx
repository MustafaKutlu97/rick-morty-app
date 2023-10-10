import React from 'react'
import Bolum from '@/app/components/bolum';
import Link from 'next/link';

export default function BolumDetay({params}) {
    const id= params.id;
  return (
    <div className='card'>
        <Link href="/bolumler" className='btn btn-back'>
        Bölümlere Geri Dön
        </Link>
        <Bolum id={id} />
    </div>
  )
}
