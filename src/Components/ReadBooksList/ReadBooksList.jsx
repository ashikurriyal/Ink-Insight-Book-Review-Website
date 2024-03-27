import PropTypes from 'prop-types';
import { GrLocation } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import { IoMdListBox } from "react-icons/io";

const ReadBooksList = ({ list }) => {
    const { bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = list;
    // console.log(list)
    return (
        <div className='flex border-2 shadow-sm p-5 gap-10 rounded-2xl my-8'>
            <div>
                <img className='w-[230px] h-[230px] bg-[#1313130D] rounded-2xl' src={image} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-fairply font-bold text-2xl'>{bookName}</h1>
                <p className='font-worksans font-medium text-base'>By: {author}</p>
                <div className='flex gap-5'>
                <div className="  flex font-worksans font-medium text-base gap-3 text-green-500 items-center">
                        <span className="text-[#131313] font-worksans font-bold text-base">Tag</span>
                        {tags.map(tag => <div className="flex" key={tag.bookId}><p className="bg-[#23BE0A0D] rounded-2xl  px-4 py-1">{tag}</p></div>)}
                    </div>
                    <div className='flex font-worksans font-normal text-base items-center gap-2'>
                        <GrLocation />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex font-worksans font-normal text-base gap-5">
                    <div className='flex items-center gap-2'>
                        <IoPeople />
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoMdListBox />
                        <p>Page: {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-3 font-worksans font-normal text-base'>
                    <button className='btn rounded-full bg-[#328EFF26] text-sky-500'>Category: {category}</button>
                    <button className='btn rounded-full bg-[#FFAC3326] text-[#FFAC33]'>Rating: {rating}</button>
                    <button className='btn rounded-full bg-green-500'>View Details</button>
                    
                </div>
            </div>
        </div>
    );
};

ReadBooksList.propTypes = {
    list: PropTypes.object
}

export default ReadBooksList;