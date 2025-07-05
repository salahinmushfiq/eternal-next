import React, { use } from 'react';
import ProductData from '@/data/ProductData';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail/ProductDetail';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ unwrap Promise

  const productId = parseInt(id, 10);
  const product = ProductData.find(p => p.id === productId);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
