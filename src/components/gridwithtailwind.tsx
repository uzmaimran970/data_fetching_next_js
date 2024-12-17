import React from 'react';
import Image from 'next/image';

const GridWithTailwind = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* Image 1 */}
      <div className="bg-red-300 md:col-span-2 p-10 relative h-[400px] sm:h-[200px] md:h-[300px] w-full group overflow-hidden">
        <Image
          src="/img1.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Image 2 */}
      <div className="bg-red-300 row-span-2 h-[400px] sm:h-full md:h-full lg:h-full p-10 relative w-full group overflow-hidden">
        <Image
          src="/img2.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Image 3 */}
      <div className="bg-red-300 p-10 relative h-[300px] w-full group overflow-hidden">
        <Image
          src="/img3.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Image 4 */}
      <div className="bg-red-300 p-10 relative h-[300px] w-full group overflow-hidden">
        <Image
          src="/img4.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Image 5 */}
      <div className="bg-red-300 p-10 relative h-[300px] w-full group overflow-hidden">
        <Image
          src="/img5.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Image 6 */}
      <div className="bg-red-300 p-10 relative h-[300px]  w-full group overflow-hidden">
        <Image
          src="/img6.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Image 7 (larger height) */}
      <div className="bg-red-300 p-10 relative h-[500px] sm:h-[300px] md:h-[700px] w-full group overflow-hidden">
        <Image
          src="/img9.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Image 8 (larger, spanning multiple rows and columns) */}
      <div className="bg-red-300 col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 h-[500px] sm:h-[600px] md:h-[700px] p-10 relative w-full group overflow-hidden" >
        <Image
          src="/img8.avif" 
          alt="Example Image"
          layout="fill" 
          objectFit="contain md:cover" 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default GridWithTailwind;
