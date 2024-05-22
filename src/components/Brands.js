import React, { useEffect, useState } from "react";
import axios from "axios";


const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/brands')
      .then(response => {
        setBrands(response.data);
      })
      .catch(error => {
        console.error("Markaları alırken bir hata oluştu!", error);
      });
  }, []);

  return (
    <div className=" py-12 mx-6 xxl:mx-40 ">
      <h2 className="text-3xl font-bold text-center mb-2">BRANDS</h2>
      <div className='h-1 w-40 flex items-center justify-center text-center mx-auto bg-orange-500 mb-6'></div>
      <div className="flex w-full items-center py-4 gap-6 overflow-x-scroll md:overflow-x-auto ">
        {brands.map((brand, index) => (
          <div key={index} >
            <img src={brand.image} alt={brand.name} className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
