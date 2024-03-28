

const ContactUs = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 lg:gap-12 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#1313130D] dark:text-gray-800 mb-12 shadow-2xl">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    
                </div>
                <img src="https://i.ibb.co/7YFZdVp/vector1-removebg-preview.png" alt="" className=" " />
            </div>
            <form novalidate="" className="space-y-6 lg:mt-16">
                {/* <div className="space-y-2 flex items-center">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact Us</h2>

                </div> */}
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100" spellcheck="false"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-500 text-gray-50">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;