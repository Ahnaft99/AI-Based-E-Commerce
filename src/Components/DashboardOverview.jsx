
const stats = [
  { title: "Total Products", value: "248", icon: "▤", color: "bg-blue-100 text-blue-700" },
  { title: "Total Categories", value: "12", icon: "▦", color: "bg-violet-100 text-violet-700" },
  { title: "Total Orders", value: "156", icon: "▣", color: "bg-amber-100 text-amber-700" },
  { title: "Monthly Sales", value: "৳ 1,25,500", icon: "↗", color: "bg-emerald-100 text-emerald-700" },
];

const recentOrders = [
  { id: "#ORD-1001", customer: "Rahim Ahmed", amount: "৳2,500", status: "Delivered" },
  { id: "#ORD-1002", customer: "Nusrat Jahan", amount: "৳1,850", status: "Pending" },
  { id: "#ORD-1003", customer: "Karim Hasan", amount: "৳3,200", status: "Processing" },
];

const DashboardOverview = ({ setActivePage }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">{stat.title}</p>
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${stat.color}`}>
                {stat.icon}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-bold text-slate-900">Sales Overview</h2>
              <p className="mt-1 text-sm text-slate-500">
                Demo sales activity
              </p>
            </div>
            <button
              onClick={() => setActivePage("Sales Report")}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
            >
              View Report
            </button>
          </div>

          <div className="mt-8 flex h-48 items-end justify-around gap-3 border-b border-slate-100 pb-2">
            {[40, 65, 45, 80, 55, 95, 70].map((height, index) => (
              <div key={index} className="flex h-full flex-1 flex-col justify-end">
                <div
                  className="w-full rounded-t-lg bg-indigo-500 transition hover:bg-indigo-700"
                  style={{ height: `${height}%` }}
                />
                <p className="mt-2 text-center text-xs text-slate-400">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Illustrative chart only — connect sales API for actual figures.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="font-bold text-slate-900">Quick Actions</h2>
          <div className="mt-5 space-y-3">
            <button
              onClick={() => setActivePage("Upload Product")}
              className="w-full rounded-xl bg-indigo-600 p-4 text-left text-sm font-semibold text-white hover:bg-indigo-700"
            >
              + Upload New Product
              <span className="mt-1 block text-xs font-normal text-indigo-100">
                Add product and images
              </span>
            </button>

            <button
              onClick={() => setActivePage("Inventory")}
              className="w-full rounded-xl border border-slate-200 p-4 text-left text-sm font-semibold hover:bg-slate-50"
            >
              View Inventory
              <span className="mt-1 block text-xs font-normal text-slate-500">
                Check stock and categories
              </span>
            </button>

            <button
              onClick={() => setActivePage("Order History")}
              className="w-full rounded-xl border border-slate-200 p-4 text-left text-sm font-semibold hover:bg-slate-50"
            >
              Manage Orders
              <span className="mt-1 block text-xs font-normal text-slate-500">
                Check customer orders
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-bold text-slate-900">Recent Orders</h2>
          <button
            onClick={() => setActivePage("Order History")}
            className="text-sm font-semibold text-indigo-600"
          >
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead>
              <tr className="border-b text-slate-500">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-0">
                  <td className="py-4 font-medium">{order.id}</td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">{order.amount}</td>
                  <td className="py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
                      {order.status}
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

export default DashboardOverview;