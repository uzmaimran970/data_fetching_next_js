// "use client";
// import React, { useEffect, useState } from "react";


// interface Product {
//     id: number;
//     title: string;
//     description: string;
//     thumbnail: string;
// }

// const Page = () => {
//     const [products, setProducts] = useState<Product[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://dummyjson.com/products");
//                 const data = await response.json();
//                 console.log("Fetched data:", data);
//                 setProducts(data.products);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="bg-gray-100 min-h-screen p-8">
//             <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Product List</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((item) => (
//                     <div
//                         key={item.id}
//                         className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                     >
//                         <img
//                             src={item.thumbnail}
//                             alt={item.title}
//                             className="w-full h-48 object-cover"
//                         />
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold text-gray-800 truncate">
//                                 {item.title}
//                             </h3>
//                             <p className="text-sm text-gray-600 mt-2 line-clamp-2">
//                                 {item.description}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Page;













