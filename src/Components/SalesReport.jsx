
import { useState } from "react";

const SalesReport = () => {
  const [period, setPeriod] = useState("Weekly");

  const weeklyData = [35, 55, 45, 75, 60, 90, 70];
  const monthlyData = [40, 65, 50, 85, 70, 95, 80, 60, 75, 90, 55, 85];

  const data = period === "Weekly" ? weeklyData : monthlyData;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm">
        <div>
          <h2 className="text-lg font-bold">Sales Analytics</h2>
          <p className="mt-1 text-sm text-slate-500">
            Review sales performance
          </p>
        </div>

        <div className="flex rounded-xl bg-slate-100 p-1">
          {["Weekly", "Monthly"].map((item) => (
            <button
              key={item}
              onClick={() => setPeriod(item)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                period === item
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Total Revenue", value: period === "Weekly" ? "৳32,500" : "৳1,25,500" },
          { label: "Orders", value: period === "Weekly" ? "38" : "156" },
          { label: "Average Order Value", value: period === "Weekly" ? "৳855" : "৳804" },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <h3 className="mt-3 text-2xl font-bold">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-bold">
          {period} Sales Performance
        </h2>

        <div className="mt-8 flex h-64 items-end justify-around gap-2 border-b border-slate-100 pb-2">
          {data.map((height, index) => (
            <div
              key={`${period}-${index}`}
              className="flex h-full flex-1 flex-col justify-end"
            >
              <div
                className="w-full rounded-t-md bg-indigo-500 hover:bg-indigo-700"
                style={{ height: `${height}%` }}
                title="Demo value"
              />
              <p className="mt-2 text-center text-xs text-slate-400">
                {period === "Weekly" ? `Day ${index + 1}` : `W${index + 1}`}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-slate-400">
          Demo figures only. Actual reports require order and payment data from your API.
        </p>

        <button
          onClick={() =>
            window.alert("Connect your sales API to generate a real report.")
          }
          className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default SalesReport;