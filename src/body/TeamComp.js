
function TeamComp({ name, twitter, instagram, facebook, position, image, indkey }) {
    return (
        <>

            <div className="container mx-auto" >
                <section id="section_team">
                    <div >
                        <div className="card bg-base-100 shadow-xl w-10/12 mx-auto lg:mx-0 hover:transform hover:scale-110 " >
                            <figure><img className="w-96" src={image} alt="Team" /></figure>
                            <div className="card-body bg-[#04162E] text-white">
                                <h2 className="card-title">
                                    {name}
                                </h2>
                                <p className="text-slate-400">{position}</p>
                                <div className="flex flex-row space-x-3 text-2xl">
                                    <a href={facebook} className="hover:text-slate-400"> <i className="fa-brands fa-facebook"></i></a>
                                    <a href={instagram} className="hover:text-slate-400"> <i className="fa-brands fa-instagram"></i></a>
                                    <a href={twitter} className="hover:text-slate-400"> <i className="fa-brands fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>  </section>
            </div>

        </>
    );
}

export default TeamComp;
