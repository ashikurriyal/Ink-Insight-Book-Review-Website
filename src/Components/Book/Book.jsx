import { FaRegStar } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const {bookId, image, tags, bookName, author, rating, category} = book
    return (
        <Link to={`/book/${bookId}`} className="shadow-xl rounded-2xl">
            <div className="flex flex-col  border-2 rounded-2xl p-6 gap-4">
            <div className="flex justify-center bg-[#F3F3F3] rounded-2xl">
            <img className="w-[326px] h-[330px] " src={image} alt="" />  
            </div>

            <div className="  flex font-worksans font-medium text-base gap-3 text-green-500">
                {tags.map(tag => <div className="flex" key={tag.bookId}><p className="bg-[#23BE0A0D] rounded-2xl  px-4 py-1">{tag}</p></div>)}
            </div>

            <h1 className="font-playfair font-bold text-2xl">
                {bookName}
            </h1>
            <h2 className="font-worksans font-medium text-base">
                By: {author}
            </h2>
            <hr className="border-dashed"/>
            <div className="flex justify-between">
                <p className="font-worksans font-medium text-base">
                    {category}
                </p>
                <div className="flex items-center gap-3">
                    <p>{rating}</p>
                    <FaRegStar />
                </div>
            </div>
        </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;