
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../Components/Slice/ProductSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const NewArrival = () => {
  const dispatch = useDispatch();
const { data, isLoading, isError, errorMessage } = useSelector(
  (state) => state.product
);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

 if (isError) {
  return <h2>Error: {errorMessage}</h2>;
}

  return (
    <section className="py-8">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-[30px] font-semibold text-black font-poppins">
            New Arrival
          </h2>
        </div>

        {/* Product Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={4}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={data.length > 4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => {
            const discountPrice = Number(item.new_price);
            const oldPrice = Number(item.old_price);

            const discountPercentage =
              oldPrice > discountPrice
                ? ((oldPrice - discountPrice) / oldPrice) * 100
                : 0;

            return (
              <SwiperSlide key={item.id}>

                {/* Product Card */}
                <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-4">

                  {/* Image */}
                  <div className="relative h-[180px] bg-gray-100 flex items-center justify-center p-4">

                    <img
                      src={item.primary_image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />

                    {/* Discount */}
                    {discountPercentage > 0 && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        -{Math.round(discountPercentage)}%
                      </span>
                    )}

                  </div>

                  {/* Product Details */}
                  <div className="p-4">

                    {/* Name */}
                    <h3 className="text-[15px] font-semibold text-gray-800 line-clamp-2 min-h-[44px]">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-lg font-bold text-black">
                        ৳{discountPrice.toFixed(2)}
                      </span>

                      {oldPrice > discountPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ৳{oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div className="mt-2">
                      <span
                        className={`text-xs font-medium ${
                          item.is_in_stock
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {item.is_in_stock
                          ? "In Stock"
                          : "Out of Stock"}
                      </span>
                    </div>

                    {/* Button */}
                    <button className="w-full mt-3 bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                      View Details
                    </button>

                  </div>
                </div>

              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default NewArrival;
