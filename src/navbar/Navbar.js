import React, { useEffect, useState } from 'react';
import data from "./data.json"
function Navbar() {



    const [activeSection, setActiveSection] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        const results = data.filter((item) =>
            item.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(results);
    };


    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            for (let i = sections.length - 1; i >= 0; i--) {
                const rect = sections[i].getBoundingClientRect();
                const sectionTop = rect.top + window.pageYOffset;
                if (scrollPosition >= sectionTop) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function goToHome() {
        const section = document.getElementById('section1');
        section.scrollIntoView({ behavior: 'smooth' });
    }
    function goToAbout() {
        const section = document.getElementById('section_about');
        section.scrollIntoView({ behavior: 'smooth' });
    }
    function goToService() {
        const section = document.getElementById('section_servic');
        section.scrollIntoView({ behavior: 'smooth' });
    }
    function goToTeam() {
        const section = document.getElementById('section_team');
        section.scrollIntoView({ behavior: 'smooth' });
    }
    function goToContact() {
        const section = document.getElementById('section_contact');
        section.scrollIntoView({ behavior: 'smooth' });
    }
    function goToRent() {
        const section = document.getElementById('section3');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="navbar bg-base-100 fixed z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section1' ? 'text-red-500' : ''}`}><a href onClick={goToHome}>HOMEPAGE</a></li>
                            <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section2' ? 'text-red-500' : ''}`}><a href onClick={goToAbout}>ABOUT</a></li>
                            <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section3' ? 'text-red-500' : ''}`}><a href onClick={goToService}>SERVICE</a></li>
                            <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section4' ? 'text-red-500' : ''}`}><a href onClick={goToTeam}>TEAM</a></li>
                            <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section5' ? 'text-red-500' : ''}`}><a href onClick={goToContact}>CONTACT</a></li>
                        </ul>
                    </div>
                    <a href="/" className="font-bold normal-case text-lg lg:text-3xl lg:px-5 "><i className="fa-solid fa-bicycle"></i> BonBike</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 space-x-10 font-bold">
                        <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section1' ? 'text-red-500' : ''}`}><a href onClick={goToHome}>HOMEPAGE</a> </li>
                        <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section2' ? 'text-red-500' : ''}`}><a href onClick={goToAbout}>ABOUT</a></li>
                        <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section3' ? 'text-red-500' : ''}`}><a href onClick={goToService}>SERVIC</a></li>
                        <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section4' ? 'text-red-500' : ''}`}><a href onClick={goToTeam}>TEAM</a></li>
                        <li className={`active:text-red-500 hover:text-gray-500 ${activeSection === 'section5' ? 'text-red-500' : ''}`}><a href onClick={goToContact}>CONTACT</a></li>
                    </ul>
                </div>
                <div className="navbar-end lg:space-x-10 space-x-5">
                    <label htmlFor="modal-search" className="hover:text-gray-500"><i className="fa-solid fa-magnifying-glass"></i></label>
                    <a className="bg-red-600 border-red-600 border-2 hover:bg-white hover:text-red-500 text-white px-5 py-1 lg:py-2" href onClick={goToRent}>RENT A BIKE</a>
                </div>
            </div>


            <input type="checkbox" id="modal-search" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl mb-5">Search</h3>
                    <div className='lg:ml-10 flex flex-col'>
                        <div className="flex flex-row">
                            <input onChange={handleInputChange} type="text" placeholder="Find something" value={searchTerm} className="input border-2 border-red-600 w-full max-w-xs outline-none" />
                            <button className='py-3 px-4 bg-red-600 ml-4 text-white'><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <ul className='mt-5 list-disc text-gray-500'>
                            {searchResults.map((item) => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="modal-search" className="bg-red-600 border-red-600 border-2 hover:bg-white hover:text-red-500 text-white px-5 py-1 lg:py-2">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
