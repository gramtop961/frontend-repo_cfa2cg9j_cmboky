import React, { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import RBACPanel from './components/RBACPanel.jsx';

const seedProducts = [
  { id: 'p1', name: 'Honeycrisp Apples', category: 'Fruits', price: 2.49 },
  { id: 'p2', name: 'Organic Bananas', category: 'Fruits', price: 1.19 },
  { id: 'p3', name: 'Sourdough Bread', category: 'Bakery', price: 4.99 },
  { id: 'p4', name: 'Free-range Eggs', category: 'Dairy', price: 3.79 },
  { id: 'p5', name: 'Oat Milk', category: 'Dairy', price: 2.99 },
  { id: 'p6', name: 'Spinach', category: 'Vegetables', price: 1.89 },
  { id: 'p7', name: 'Cherry Tomatoes', category: 'Vegetables', price: 2.29 },
  { id: 'p8', name: 'Greek Yogurt', category: 'Dairy', price: 1.49 },
  { id: 'p9', name: 'Basmati Rice', category: 'Pantry', price: 6.99 },
  { id: 'p10', name: 'Almond Butter', category: 'Pantry', price: 7.49 },
];

export default function App() {
  const [role, setRole] = useState('guest');
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);

  const canAddToCart = role === 'customer';

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return seedProducts;
    const q = query.toLowerCase();
    return seedProducts.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  const handleAdd = (product) => {
    if (!canAddToCart) {
      alert('Only customers can add items to cart. Switch role to Customer to proceed.');
      return;
    }
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemove = (product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header
        role={role}
        onRoleChange={setRole}
        onCartOpen={() => alert(`Cart has ${cart.reduce((s,i)=>s+(i.qty||1),0)} item(s). Checkout flow coming soon!`)}
        query={query}
        onQueryChange={setQuery}
      />

      <Hero />

      <ProductGrid
        products={filteredProducts}
        onAdd={handleAdd}
        onRemove={handleRemove}
        cart={cart}
      />

      <RBACPanel role={role} />

      <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-12 text-sm text-neutral-500">
        © {new Date().getFullYear()} GreenBasket. Fresh, fast, and friendly.
      </footer>
    </div>
  );
}
