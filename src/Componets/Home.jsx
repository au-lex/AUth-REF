import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Home = () => {
  return (
    <>
    <main>

    <div className="img pt-[2rem] mb-[1rem]">
        <img src="https://www.firepit.co.uk/cdn/shop/products/CookKingAfricaCookingPot9litreslidoff_1400x.jpg?v=1684821533"
        
        className='w-full h-[300px] object-cover'
        alt=""  />
    </div>









    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={1}
      slidesPerView={3.5}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain ml-4 rounded-full border-[2px] border-orange-600"
    src="https://i.pinimg.com/564x/7b/3e/73/7b3e730c7d543f77a8f05bab4f6c17d9.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Spoons</span>
  </span>
   </div>
</SwiperSlide>
     


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain ml-4 rounded-full border-[2px] border-orange-600"
    src="https://i.pinimg.com/564x/6c/ae/08/6cae088a55b534d491813e893615568c.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Plates</span>
  </span>
   </div>
</SwiperSlide>


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain ml-4 rounded-full border-[2px] border-orange-600"
    src="https://i.pinimg.com/564x/bd/1d/4a/bd1d4ab8b4132549699fa369f2d8dfcd.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Pot's</span>
  </span>
   </div>
</SwiperSlide>


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] ml-4 object-contain rounded-full border-[2px] border-orange-600"
    src="https://i.pinimg.com/564x/15/42/81/15428143cfd7ed83331a51e8b62d4a07.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Cooler's</span>
  </span>
   </div>
</SwiperSlide>

<SwiperSlide>
      <div className="bg-slate-000  flex   h-[8rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain rounded-full ml-4 border-[2px] border-orange-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Chicken</span>
  </span>
   </div>
</SwiperSlide>
      
    </Swiper>




{/* <div>
  <div className="category flex justify-between px-2 my-[1rem] mb-">
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full border-2 border-orange-500">
      <img src="https://i.pinimg.com/564x/7b/3e/73/7b3e730c7d543f77a8f05bab4f6c17d9.jpg" className='w-full h-[60px] object-cover rounded-full' alt="" />
      <h1 className='text-center text-[15px] font-meduim text-slate-900 capitalize'>spoon</h1>
    </div>
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full  border-2 border-orange-500">
    <img src='https://i.pinimg.com/564x/6c/ae/08/6cae088a55b534d491813e893615568c.jpg' className='w-full h-[60px] object-cover rounded-full' alt="" />
      <h1 className='text-center text-[15px] font-meduim text-slate-900 capitalize'>plates</h1>
    </div>
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full  border-2 border-orange-500">
    <img src="https://i.pinimg.com/564x/bd/1d/4a/bd1d4ab8b4132549699fa369f2d8dfcd.jpg" className='w-full h-[60px] object-cover rounded-full' alt="" />
      <h1 className='text-center text-[15px] font-meduim text-slate-900 capitalize'>pots</h1>
    </div>
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full  border-2 border-orange-500">
    <img src="https://i.pinimg.com/564x/15/42/81/15428143cfd7ed83331a51e8b62d4a07.jpg" className='w-full h-[60px] object-cover rounded-full' alt="" />
      <h1 className='text-center text-[15px] font-meduim text-slate-900 capitalize'>coolers</h1>
    </div>
    
  </div>
</div> */}

    <section className="recommend mb-[4rem] ">
      <h1 className='capitalize text-[1.3rem] ml-2 my-[.5rem]'>recommended </h1>

      <section className="container  flex flex-wrap justify-center gap-8 p-4">

<div className='flex  border'>
  <div className='mr-4'>
    <img
      src="https://i.pinimg.com/564x/81/39/43/813943d38d74cf2bc2a461e9a2cd257a.jpg"
      className='h-[178px] mr-2 rounded-[10px] object-cover shadow-lg'
      alt=""
    />
  </div>
  <div className='w-[50%] pb-2'>
    <div>
      <h3 className="text-2xl font-semibold mb-2">Sauce Pot</h3>
      <ul className="list-none text-gray-700">
        <li>Material: Copper</li>
        <li>Capacity: 5 Liters</li>
        <li>Price: $20 per day</li>
      </ul>
      <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-full mt-4 hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none">
        Hire Now
      </button>
    </div>
  </div>
</div>


<div className='flex  border'>
  <div className='mr-4 relative'>
    <img
      src="https://i.pinimg.com/564x/81/39/43/813943d38d74cf2bc2a461e9a2cd257a.jpg"
      className='h-[178px] mr-2 rounded-[10px] object-cover shadow-lg'
      alt=""
    />
    <div className="prof absolute bottom-[0rem] right-0">
      <div className="pr w-[3.5rem] h-[3.5rem] rounded-full bg-slate-200"></div>
    </div>
  </div>
  <div className='w-[50%] pb-2'>
    <div>
      <h3 className="text-2xl font-semibold mb-2">Sauce Pot</h3>
      <ul className="list-none text-gray-700">
        <li>Material: Copper</li>
        <li>Capacity: 5 Liters</li>
        <li>Price: $20 per day</li>
      </ul>
      <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-full mt-4 hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none">
        Hire Now
      </button>
    </div>
  </div>
</div>


{/* Add more items as needed */}
</section>

    </section>
        </main>
    </>
  )
}

export default Home