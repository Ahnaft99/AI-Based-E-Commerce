
const inventory = [
  { category: "Electronics", products: 85, stock: 320 },
  { category: "Fashion", products: 64, stock: 210 },
  { category: "Home & Living", products: 38, stock: 95 },
  { category: "Beauty", products: 42, stock: 12 },
  { category: "Sports", products: 19, stock: 0 },
];

const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Products</p>
          <h2 className="mt-2 text-3xl font-bold">248</h2>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Low Stock Categories</p>
          <h2 className="mt-2 text-3xl font-bold text-amber-600">1</h2>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Out of Stock Categories</p>
          <h2 className="mt-2 text-3xl font-bold text-red-600">1</h2>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-5 text-lg font-bold">Category-wise Inventory</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead>
              <tr className="border-b text-slate-500">
                <th className="pb-4">Category</th>
                <th className="pb-4">Products</th>
                <th className="pb-4">Total Stock</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.category} className="border-b last:border-0">
                  <td className="py-4 font-medium">{item.category}</td>
                  <td className="py-4">{item.products}</td>
                  <td className="py-4">{item.stock}</td>
                  <td className="py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.stock === 0
                          ? "bg-red-100 text-red-700"
                          : item.stock < 20
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {item.stock === 0
                        ? "Out of Stock"
                        : item.stock < 20
                        ? "Low Stock"
                        : "In Stock"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;