import React from 'react';
import { ShoppingCart, Leaf, User, Shield } from 'lucide-react';

const roles = [
  { value: 'guest', label: 'Guest', icon: User },
  { value: 'customer', label: 'Customer', icon: ShoppingCart },
  { value: 'courier', label: 'Courier', icon: Leaf },
  { value: 'admin', label: 'Admin', icon: Shield },
];

export default function Header({ role, onRoleChange, onCartOpen, query, onQueryChange }) {
  const CurrentIcon = roles.find(r => r.value === role)?.icon || User;
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center gap-3">
        <div className="flex items-center gap-2 select-none">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-lime-500 to-emerald-500 grid place-items-center text-white shadow">
            <Leaf size={18} />
          </div>
          <div className="font-extrabold text-lg tracking-tight">GreenBasket</div>
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-72">
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search fresh items..."
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 border rounded-xl px-2 py-1.5 bg-neutral-50">
            <CurrentIcon size={16} className="text-neutral-700" />
            <select
              value={role}
              onChange={(e) => onRoleChange(e.target.value)}
              className="bg-transparent text-sm focus:outline-none"
              aria-label="Select role"
            >
              {roles.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={onCartOpen}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition"
          >
            <ShoppingCart size={18} />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
