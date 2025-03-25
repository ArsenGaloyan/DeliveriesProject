'use client'
import dynamic from 'next/dynamic';

const DeliveryDetail = dynamic(() => import('../../components/DeliveryDetail'), { ssr: false });

export default function Page() {
  return <DeliveryDetail />;
}
