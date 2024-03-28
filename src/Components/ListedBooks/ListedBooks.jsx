import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishlistBook } from "../Utility/localStorage";


const ListedBooks = () => {

    const [tabIndex, setTabindex] = useState(0);

    const [readBooks, setReadBooks] = useState([]);

    const [wishlistBooks, setWishlistBooks] = useState([]);

    const books = useLoaderData();
    

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if(books.length > 0){
            const booksRead = books.filter(book => storedBookIds.includes(book.bookId))

            setReadBooks(booksRead)
           
        }
    }, [])

    useEffect(() => {
        const storedBookIds = getStoredWishlistBook();
        
        if(books.length > 0){
            const booksWishlist = books.filter(book => storedBookIds.includes(book.bookId))

            setWishlistBooks(booksWishlist)
           
        }
    }, [])



    // const wbooks = useLoaderData();
    /* useEffect(() => {
        const storedBookIds = getStoredWishlistBook();
        if(books.length > 0){
            const booksWishlist = books.filter(book => storedBookIds.includes(book.bookId))

            setWishlistBooks(booksWishlist)
            // console.log(booksWishlist)
        }
    },[]) */


    return (
        <div className="mb-12">
            <div className="mb-12 flex flex-col items-center gap-8">
                <div className="bg-[#1313130D] p-4 rounded-2xl w-full">
                    <h2 className='font-worksans font-bold text-4xl text-center'>Listed Books</h2>
                </div>

                <div>
                    <button className="btn btn-primary bg-sky-500">Sort By</button>
                </div>
            </div>
            <div className="flex">
                <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link to=''
                    onClick={() => setTabindex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to={`wishlist-books`} onClick={() => setTabindex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg> 
                        <span>Wishlist Books</span>
                    </Link>

                </div>
            </div>
            <Outlet context={[readBooks, wishlistBooks]}></Outlet>
        </div>
    );
};

export default ListedBooks;