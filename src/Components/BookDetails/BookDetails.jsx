import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook, getStoredWishlistBook, saveReadBook, saveRequestBook, saveWishlistBook } from "../Utility/localStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    

    const book = books.find(book => book.bookId === idInt);
    

    const handleRead = () => {

        const bookRead = getStoredReadBook().find(book => book === idInt)
        
        
        if (!bookRead) {
            saveReadBook(idInt);
            toast.success('Book Added to Read List')
        }
        else {
            toast.error('You have already read this book ')
        } 

    }
    const handleWishList = () => {


        const bookRead = getStoredReadBook().find(book => book === idInt)

        const wishListAdded = getStoredWishlistBook().find(book => book === idInt)

        if (!bookRead) {
            saveWishlistBook(idInt);
            toast.success('Book Added to Wishlist')
        }
        else if(wishListAdded){
            toast.error('Book Already Added to Wishlist')
        }
        else{
            toast.error('Sorry, You have already read this book. cannot add it to your wishlist.')
        }

    }

    const handleRequest = () => {
        saveRequestBook(idInt)

    }
    return (
        <div className="lg:grid grid-cols-2 gap-12 mb-12 lg:mt-12">
            <div className="bg-[#1313130D] flex justify-center rounded-3xl">
                <img className="w-[425px] h-[564px]" src={book.image} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-playfair font-bold text-4xl">{book.bookName}</h1>
                <p className="font-worksans font-medium text-xl">By : {book.author}</p>
                <hr />
                <p className="font-worksans font-medium text-xl">{book.category}</p>
                <hr />
                <div className="flex flex-col gap-8">
                    <p className="font-worksans font-normal text-base text-[#131313B3]"><span className="text-[#131313] font-worksans font-bold text-base">Review :</span> {book.review}</p>

                    <div className="  flex font-worksans font-medium text-base gap-3 text-sky-500 items-center">
                        <span className="text-[#131313] font-worksans font-bold text-base">Tag</span>
                        {book.tags.map(tag => <div className="flex" key={book.tags.bookId}><p className="bg-[#0a58be0d] rounded-2xl  px-4 py-1">{tag}</p></div>)}
                    </div>

                </div>
                <hr />
                <div>
                    <table className="table">
                        <tr className="">
                            <td className="font-worksans font-normal text-base text-[#131313B3]">Number of Pages:</td>
                            <td className="text-[#131313] font-worksans font-bold text-base">{book.totalPages}</td>
                        </tr>
                        <tr className="">
                            <td className="font-worksans font-normal text-base text-[#131313B3]">Publisher:</td>
                            <td className="text-[#131313] font-worksans font-bold text-base">{book.publisher}</td>
                        </tr>
                        <tr className="">
                            <td className="font-worksans font-normal text-base text-[#131313B3]">Year of Publishing:</td>
                            <td className="text-[#131313] font-worksans font-bold text-base">{book.yearOfPublishing}</td>
                        </tr>
                        <tr className="">
                            <td className="font-worksans font-normal text-base text-[#131313B3]">Rating:</td>
                            <td className="text-[#131313] font-worksans font-bold text-base">{book.rating}</td>
                        </tr>
                    </table>
                </div>
                <div className="flex gap-3">
                    <a onClick={handleRead} className="btn font-worksans lg:font-semibold lg:text-lg bg-green-500 text-white">Read</a>
                    <a onClick={handleWishList} className="btn font-worksans lg:font-semibold lg:text-lg bg-sky-500 text-white">Wishlist</a>
                    <a onClick={handleRequest} className="btn font-worksans lg:font-semibold lg:text-lg bg-red-500 text-white">Request</a>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default BookDetails;