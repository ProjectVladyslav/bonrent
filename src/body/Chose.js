import road from "../img/road.png"
import urban from "../img/urban.png"
import mountain from "../img/mountain.png"

function Chose() {
    function goToBikes() {
        const section = document.getElementById('section5');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <section id="section2">
            <div className="mt-8 flex mx-auto flex-col">
                <h1 className="mx-auto text-4xl lg:text-6xl font-bold">CHOOSE YOUR BIKE</h1>
                <div className="w-11/12 lg:w-1/4 mx-auto mt-5 text-center">
                    lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod
                </div>
                <div className="flex flex-col md:flex-row lg:space-x-10 md:space-y-0 space-y-5 mx-auto mt-10">

                    <div className="w-11/12 h-96 hover:opacity-90" onClick={goToBikes}>
                        <img className="w-11/12 mx-auto " src={mountain} alt="mountain bike" />
                        <p className="z-10 absolute -mt-[65px] ml-[14px] bg-black bg-opacity-75 font-bold text-white text-2xl py-4 px-4">Mountain</p>
                    </div>

                    <div className="w-11/12 h-96 hover:opacity-90" onClick={goToBikes}>
                        <img className="w-11/12 mx-auto " src={road} alt="road bike" />
                        <p className="z-10 absolute -mt-[65px] ml-[14px] bg-black bg-opacity-75 font-bold text-white text-2xl py-4 px-11">Road</p>
                    </div>

                    <div className="w-11/12 h-96 hover:opacity-90" onClick={goToBikes}>
                        <img className="w-11/12 mx-auto " src={urban} alt="urban bike" />
                        <p className="z-10 absolute -mt-[65px] ml-[14px] bg-black bg-opacity-75 font-bold text-white text-2xl py-4 px-9">Urban</p>
                    </div>
                </div>
            </div>
        </section>

    </>

    )
}

export default Chose
