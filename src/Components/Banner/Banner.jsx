import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="lg:h-[554px] h-auto bg-[#1313130D] rounded-2xl flex items-center lg:justify-evenly flex-col-reverse lg:flex-row  gap-2 pt-4 lg:pr-0 lg:pt-0">
            <div className="lg:w-1/2 w-auto flex flex-col lg:gap-12 gap-4 p-4 lg:p-0 text-center lg:text-left">
                <h1 className=" font-playfair font-bold lg:text-5xl text-3xl">Enlight the mirror of your soul with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-600 to-blue-800">Ink Insight</span></h1>
                <Link to={'/listed-books'} className="btn font-worksans font-semibold text-lg bg-sky-500 text-white lg:w-[190px]">View The List</Link>
            </div>
            <img className="lg:w-[318px] lg:h-[394px] w-auto h-[300px]" src="https://i.ibb.co/JBbD9P8/The-Great-Gatsby-removebg-preview.png" alt="" />
        </div>
    );
};

export default Banner;