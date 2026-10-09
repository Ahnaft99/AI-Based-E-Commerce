
import { useState } from "react";

const ProductUpload = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  const [aiMessage, setAiMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAI = (action) => {
    setAiMessage(
      `${action} button is ready. Connect your AI API to enable this feature.`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product data:", formData);
    setAiMessage(
      "Demo only: connect your product API to save this product."
    );
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-7">
        <h2 className="text-xl font-bold text-slate-900">
          Add New Product
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Upload product images and enter product details.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Product Name
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter product name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
            >
              <option value="">Select category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home & Living">Home & Living</option>
              <option value="Beauty">Beauty</option>
              <option value="Sports">Sports</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Price (৳)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              required
              placeholder="0.00"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              required
              placeholder="Available quantity"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Product Image
          </label>

          <div className="rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center">
            {image ? (
              <img
                src={image}
                alt="Product preview"
                className="mx-auto mb-4 h-48 max-w-full rounded-xl object-contain"
              />
            ) : (
              <div className="py-6">
                <p className="text-3xl">▧</p>
                <p className="mt-3 text-sm text-slate-500">
                  Select an image from your computer
                </p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="mx-auto block max-w-full text-sm"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleAI("AI Image Enhance")}
              className="rounded-xl bg-violet-100 px-4 py-3 text-sm font-semibold text-violet-700 hover:bg-violet-200"
            >
              ✨ Enhance Image with AI
            </button>

            <button
              type="button"
              onClick={() => handleAI("AI Image Modify")}
              className="rounded-xl bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-200"
            >
              ✨ Modify Image with AI
            </button>
          </div>
        </div>

        <div>
          <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
            <label className="text-sm font-semibold">
              Product Description
            </label>
            <button
              type="button"
              onClick={() => handleAI("AI Description Generator")}
              className="rounded-lg bg-violet-100 px-3 py-2 text-xs font-semibold text-violet-700 hover:bg-violet-200"
            >
              ✨ Generate with AI
            </button>
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            placeholder="Write product details here..."
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        {aiMessage && (
          <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
            {aiMessage}
          </p>
        )}

        <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-6">
          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Upload Product
          </button>

          <button
            type="button"
            onClick={() => {
              setFormData({
                title: "",
                category: "",
                price: "",
                stock: "",
                description: "",
              });
              setImage(null);
              setAiMessage("");
            }}
            className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;