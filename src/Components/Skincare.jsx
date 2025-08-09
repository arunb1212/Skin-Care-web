import React from "react";

const Skincare = () => {
  return (
    <div className="grid grid-cols-2 px-[100px] gap-[80px] mt-[100px]">
      <div className="">
        <div>
          <button className="w-[260px] h-[60px] flex justify-center items-center gap-[20px] border rounded-[30px]">
            <div className="w-[20px] h-[20px] bg-black rounded-[50px]">
            </div>
            Why Our Products</button>
          <h1 className="text-[50px] mt-[20px] leading-[60px]">YOUR SKIN DESERVES THE BEST CARE.</h1>
          <p className="text-[18px] mt-[20px] font-[200]">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our rage crafted
            with love backed by science, and inspired by nature.
          </p>
        </div>
        <div>
          <div>
            <div className="flex  justify-left gap-[30px] items-center">
            <p className="text-[60px] font-[200px] bg-gradient-to-t from-[#FEFFF4] to-[#293330] bg-clip-text text-transparent ">01</p>
            <h1 className="text-[40px] font-[400]">Bio Ingredients</h1>
            </div>

            <p className=" text-[18px] font-[200] pl-[100px]">
              Get naturally beautiful and transform with our bio ingredients
              creams for healthy, radiant skin.
            </p>
          </div>

          <div>
            <div className="flex  justify-left gap-[30px] items-center">
            <p className="text-[60px] font-[200px] bg-gradient-to-t from-[#FEFFF4] to-[#293330] bg-clip-text text-transparent ">02 </p>
            <h1 className="text-[40px] font-[400]">Everything Natural</h1>
            </div>

            <p className=" text-[18px] font-[200] pl-[100px]">
              Pure ingredients for pure skin. The Perfect solution for your skin
              care needs.
            </p>
          </div>

          <div>
            <div className="flex  justify-left gap-[30px] items-center">
                            <p className="text-[60px] font-[200px] bg-gradient-to-t from-[#FEFFF4] to-[#293330] bg-clip-text text-transparent ">03</p>

            <h1 className="text-[40px] font-[400]">All Handmade</h1>

            </div>

            <p className="text-[18px] font-[200] pl-[100px]">
              Made with love and care. Just for you. Give your skin the tender
              loving care it deserves.
            </p>
          </div>
        </div>
      </div>
      {/* img */}

      <div className="className=w-[850px] ">
        <img className="object-cover rounded-lg" src="./src/assets/Jun 15, 2025, 11_52_20 PM 2.png" alt="" />
      </div>
    </div>
  );
};

export default Skincare;
