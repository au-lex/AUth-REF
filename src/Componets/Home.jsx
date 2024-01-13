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

    <section className="recommend hidden">
      <h1>recommended for you</h1>
      <div className='flex  justify-between '>
        <img src="https://i.pinimg.com/564x/81/39/43/813943d38d74cf2bc2a461e9a2cd257a.jpg" 
        className='w-full h-[100px]  rounded-[10px] object-cover'
        alt="" />
        <img src="https://cb.scene7.com/is/image/Crate/AnolonX10pcSetSSS23_VND/$web_pdp_main_carousel_med$/221221152327/anolon-x-10pc-set.jpg" 
          className='w-full h-[100px]  rounded-[10px] object-cover'
        alt="" />
        {/* <img src="https://i.pinimg.com/564x/30/88/64/3088644e00ee3b9bbb558e54a46b5211.jpg"
        className=''
        alt="" /> */}
      </div>
    </section>
        </main>
    </>
  )
}

export default Home