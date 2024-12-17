import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

async function productList(): Promise<Product[]> {
  try {
    let data = await fetch("https://dummyjson.com/products");
    let jsonData = await data.json();
    return jsonData.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
}

export default async function Page() {
  const products = await productList(); 
  console.log(products);

  return (
    <div className="text-xl font-extrabold text-center">
      <h1>Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
          
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
        
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
