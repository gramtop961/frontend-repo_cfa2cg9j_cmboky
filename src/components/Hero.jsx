import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-lime-100" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 text-emerald-700 px-3 py-1 text-xs font-medium">
            <Sparkles size={14} /> Freshness, delivered fast
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Grocery delivery with tastefully crafted experience
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg">
            Order farm-fresh produce, pantry staples, and household essentials with a delightful interface. Track orders in real-time and enjoy role-based access tailored for you.
          </p>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow hover:bg-emerald-700 transition">
              <Rocket size={18} /> Start shopping
            </button>
            <button className="px-5 py-3 rounded-xl border border-neutral-300 bg-white hover:shadow transition">Browse categories</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-4 grid grid-cols-3 gap-3">
            {['Apples','Bread','Milk','Eggs','Spinach','Tomatoes','Yogurt','Rice','Bananas'].map((name, i) => (
              <div key={name} className="rounded-xl border border-neutral-200 p-3 flex flex-col items-center text-center bg-gradient-to-br from-white to-neutral-50">
                <div className="h-12 w-12 rounded-full bg-emerald-100 mb-2" />
                <div className="text-sm font-medium">{name}</div>
                <div className="text-xs text-neutral-500">From $1.{i}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
