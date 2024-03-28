import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 lg:gap-8 gap-4 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-800 lg:mb-12">
            <div className="flex flex-col justify-between bg-gray-200 p-8 rounded-2xl shadow-xl">
                <div className="space-y-12">
                    <h1 className=" font-playfair font-bold lg:text-5xl text-3xl">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-600 to-blue-800">Ink Insight!</span></h1>

                    <p className="font-worksans font-medium text-xl">
                        "Welcome to Ink Insight, where literature comes alive through our discerning reviews. At Ink Insight, we are passionate about delving into the heart of every story, uncovering its nuances, and sharing our insights with fellow book enthusiasts. Our mission is to provide thoughtful, honest, and engaging reviews that guide readers on their literary journeys. Whether you're seeking your next page-turner or looking to explore diverse genres, Ink Insight is your trusted companion in the world of books. Join us as we embark on a captivating exploration of literature's boundless wonders."
                    </p>
                    <Link to={'/contact-us'} className="btn font-worksans font-semibold text-lg bg-sky-500 text-white lg:w-[190px]">Contact Us</Link>


                </div>

            </div>
            <div>
                <img src="https://i.ibb.co/hCG8gGJ/kourosh-qaffari-Rrhhzit-Yizg-unsplash.jpg/*  */" alt="" className="rounded-2xl shadow-2xl" />
            </div>

        </div>
    );
};

export default AboutUs;