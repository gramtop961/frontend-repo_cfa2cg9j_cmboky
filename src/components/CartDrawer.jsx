import React from 'react';
import { X, Trash2 } from 'lucide-react';

export default function CartDrawer({ open, onClose, items, onClear }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 transition ${open ? 'bg-black/30' : 'bg-transparent'}`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Cart drawer"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <div className="text-lg font-semibold">Your Cart</div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-neutral-100">
            <X size={20} />
          </button>
        </div>
        <div className="p-4 space-y-3 max-h-[calc(100%-140px)] overflow-auto">
          {items.length === 0 ? (
            <div className="text-sm text-neutral-500">Your cart is empty.</div>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex items-center justify-between border rounded-xl p-3">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-neutral-500">${it.price.toFixed(2)}</div>
                </div>
                <div className="font-semibold">x{it.qty || 1}</div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-neutral-500">Subtotal</div>
            <div className="font-semibold">
              ${items.reduce((s, i) => s + i.price * (i.qty || 1), 0).toFixed(2)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onClear} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm">
              <Trash2 size={16} /> Clear
            </button>
            <button className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
