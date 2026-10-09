
const AdminSidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { name: "Overview", icon: "▦" },
    { name: "Upload Product", icon: "＋" },
    { name: "Inventory", icon: "▤" },
    { name: "Sales Report", icon: "↗" },
    { name: "Order History", icon: "▣" },
  ];

  return (
    <aside className="w-full shrink-0 bg-slate-950 p-5 text-white md:min-h-screen md:w-64">
      <div className="mb-8 border-b border-slate-800 pb-5">
        <h2 className="text-xl font-bold">
          Shop<span className="text-indigo-400">Admin</span>
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          E-commerce Management
        </p>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Management
      </p>

      <nav className="flex gap-2 overflow-x-auto md:flex-col">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
              activePage === item.name
                ? "bg-indigo-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4">
        <p className="font-semibold">AI Product Assistant</p>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          Enhance product images and generate product descriptions.
        </p>
        <button
          onClick={() => setActivePage("Upload Product")}
          className="mt-4 w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium hover:bg-indigo-500"
        >
          Open Assistant
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;