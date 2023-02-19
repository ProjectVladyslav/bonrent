function New({ bike, img, id, price }) {
    return (
        <>

            <div key={id}>
                <img className="w-full" src={img} alt="" />
                <h1 className="mt-5 font-bold text-center uppercase text-2xl md:text-lg lg:text-2xl text-[#04162E]">{bike}</h1>
                <p className="mt-3 font-bold text-center uppercase text-2xl text-red-500">{price}/day</p>
                <button data-key={id} className="lg:ml-[70px] md:ml-[40px] ml-[130px] mt-8 bg-red-500 border-solid border-2 border-red-500 text-white px-5 py-2 hover:bg-white hover:text-red-500">RENT NOW</button>
            </div>


        </>
    )
}

export default New