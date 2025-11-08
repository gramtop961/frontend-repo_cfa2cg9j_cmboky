import React from 'react';
import { ShieldCheck, Package, Route, Users } from 'lucide-react';

const permissionsMap = {
  guest: ['Browse'],
  customer: ['Browse', 'Add to Cart', 'Place Order', 'Track Order'],
  courier: ['View Assigned Orders', 'Update Delivery Status', 'Route Optimization'],
  admin: ['Manage Inventory', 'Manage Users', 'View Analytics', 'System Settings'],
};

export default function RBACPanel({ role }) {
  const perms = permissionsMap[role] || [];
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="text-emerald-600" size={20} />
          <h3 className="text-lg font-semibold">Role-based access</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {perms.map((p) => (
            <div key={p} className="rounded-xl border border-neutral-200 p-4 bg-gradient-to-br from-white to-neutral-50">
              <div className="font-medium">{p}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-neutral-600">
          <div className="flex items-center gap-2"><Package size={16}/> Inventory</div>
          <div className="flex items-center gap-2"><Users size={16}/> Customers</div>
          <div className="flex items-center gap-2"><Route size={16}/> Deliveries</div>
          <div className="flex items-center gap-2"><ShieldCheck size={16}/> Security</div>
        </div>
      </div>
    </section>
  );
}
