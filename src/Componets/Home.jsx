import React from 'react'

const Home = () => {
  return (
    <>
    <main>

    <div className="img pt-[2rem]">
        <img src="https://www.firepit.co.uk/cdn/shop/products/CookKingAfricaCookingPot9litreslidoff_1400x.jpg?v=1684821533"
        
        className='w-full h-[250px] object-cover'
        alt=""  />
    </div>

<div>
  <div className="category flex justify-between px-2 my-[1rem]">
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full"></div>
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full"></div>
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full"></div>
    <div className="spoon w-[4rem] h-[4rem] bg-slate-300 rounded-full"></div>
    
  </div>
</div>

    <section className="recommend hi px-[.5rem]">
      <h1 className='capitalize text-[1.3rem] my-[.5rem]'>recommended </h1>

      <section className="cont flex">

      
      <div className='justify-center px-[.4rem] mb-[2rem]'>
  <div className=''>
    <img
      src="https://i.pinimg.com/564x/81/39/43/813943d38d74cf2bc2a461e9a2cd257a.jpg"
      className='h-[160px] mr-1 rounded-[10px] object-cover'
      alt=""
    />
  </div>
  <div className='w-[100%] bg-gray-100  '>
    <div>
    
      <ul className="list-none text-gray-700">
        <li>Sauce pot</li>
        <li>Material: Copper</li>
        <li>Capacity:5 Liters</li>
        <li> Price:$20 per day</li>
        <button className=" w-full border-orange-600 border py-1 mt-2 px-6 rounded-[5px]
         hover:scale-105 transform transition-transform duration-300 ease-in-out
          focus:outline-none">
        Hire Now
      </button>
      </ul>
     
    </div>
  </div>
</div>

<div className='justify-center px-[.4rem]  '>
  <div className=''>
   <img src="https://cb.scene7.com/is/image/Crate/AnolonX10pcSetSSS23_VND/$web_pdp_main_carousel_med$/221221152327/anolon-x-10pc-set.jpg" 
          className=' h-[160px]  rounded-[10px] object-cover'
          alt="" />
  </div>
  <div className='w-[100%] b-orange-300 pb-[1rem]  '>
    <div>
     
      <ul className="list-none text-gray-700 ">
        <li>Fullop pot</li>
        <li>Material: Copper</li>
        <li>Capacity:5 Liters</li>
        <li> Price:$20 per day</li>
        <button className="  border-orange-600 border-[1.8px] w-full mt-2  py-1 px-6 rounded-[5px]
         hover:scale-105 transform transition-transform duration-300 ease-in-out
          focus:outline-none">
        Hire Now
      </button>
      </ul>
     
    </div>
  </div>
</div>
</section>
    </section>
        </main>
    </>
  )
}

export default Home