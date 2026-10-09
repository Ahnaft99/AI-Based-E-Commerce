import { useState } from "react";

import AdminSidebar from "../Components/AdminSidebar";
import DashboardOverview from "../Components/DashboardOverview";
import ProductUpload from "../Components/ProductUpload";
import Inventory from "../Components/Inventory";
import SalesReport from "../Components/SalesReport";
import OrderHistory from "../Components/OrderHistory";

const Admin = () => {
  const [activePage, setActivePage] = useState("Overview");

  const renderPage = () => {
    switch (activePage) {
      case "Upload Product":
        return <ProductUpload />;

      case "Inventory":
        return <Inventory />;

      case "Sales Report":
        return <SalesReport />;

      case "Order History":
        return <OrderHistory />;

      default:
        return <DashboardOverview setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <AdminSidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">
              Admin Panel / {activePage}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              {activePage}
            </h1>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              A
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Admin
              </p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </header>

        {renderPage()}
      </main>
    </div>
  );
};

export default Admin;