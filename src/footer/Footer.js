function Footer() {
    return (
        <>
            <section id="section_contact">
                <footer className="mt-[100px] footer p-10 bg-[#0B2B55;] text-white">

                    <div className="lg:pl-[150px]">
                        <a href="/" className="font-bold normal-case text-lg lg:text-3xl"><i className="fa-solid fa-bicycle"></i> BonBike</a>
                        <p>lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy <br /> eirmod tempor .</p>
                        <div className="flex flex-row space-x-5 text-2xl">
                            <a href="/" className="hover:text-slate-400"> <i className="fa-brands fa-facebook"></i></a>
                            <a href="/" className="hover:text-slate-400"> <i className="fa-brands fa-instagram"></i></a>
                            <a href="/" className="hover:text-slate-400"> <i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <span className="uppercase text-white text-3xl mb-3">Pages</span>
                        <a href="/" className="link link-hover uppercase ">about</a>
                        <a href="/" className="link link-hover uppercase">service</a>
                        <a href="/" className="link link-hover uppercase">product</a>
                        <a href="/" className="link link-hover uppercase">contact</a>
                    </div>
                    <div className="space-y-3">
                        <span className="uppercase text-3xl text-white mb-3">Links</span>
                        <a href="/" className="link link-hover uppercase">gallery </a>
                        <a href="/" className="link link-hover uppercase">rent a bike</a>
                        <a href="/" className="link link-hover uppercase">gears</a>
                        <a href="/" className="link link-hover uppercase">faq`s</a>
                    </div>
                    <div>
                        <span className="uppercase text-3xl text-white mb-3">SUBSCRIBES</span>
                        <p>Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy</p>
                        <div>
                            <input type="text" placeholder="Your Email..." className="bg-[#0B2B55] w-full px-5 py-3 border-b-2 outline-none" /></div>
                        <button className=" mt-3 bg-red-500 border-solid border-2 border-red-500 text-white px-6 py-2 hover:bg-white hover:text-red-500">SUBSCRIBES</button>
                    </div>

                </footer>

                <footer className="footer footer-center p-4 bg-[#0B2B55] text-white">
                    <div>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer