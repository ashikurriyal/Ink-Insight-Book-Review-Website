import { FaRegStar } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Book = ({ book }) => {
    const { image, tags, bookName, author, rating, category} = book
    return (
        <div className="flex flex-col w-[374px] border-2 rounded-2xl p-6 gap-4">
            <img className="w-[326px] h-[330px] bg-[#F3F3F3] rounded-2xl" src={image} alt="" />

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
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;