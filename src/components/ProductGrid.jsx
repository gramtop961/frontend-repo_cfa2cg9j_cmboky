import React from 'react';
import { Plus, Check } from 'lucide-react';

export default function ProductGrid({ products, onAdd, onRemove, cart }) {
  const inCart = (id) => cart.some((p) => p.id === id);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">Popular picks</h2>
        <div className="text-sm text-neutral-500">{products.length} items</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm hover:shadow transition flex flex-col">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-100 to-lime-100 mb-3" />
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-neutral-500">{p.category}</div>
            <div className="mt-2 flex items-center justify-between">
              <div className="font-semibold">${p.price.toFixed(2)}</div>
              {inCart(p.id) ? (
                <button
                  onClick={() => onRemove(p)}
                  className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg text-sm"
                >
                  <Check size={16} /> Added
                </button>
              ) : (
                <button
                  onClick={() => onAdd(p)}
                  className="inline-flex items-center gap-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm"
                >
                  <Plus size={16} /> Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
