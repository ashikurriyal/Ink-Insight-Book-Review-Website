import { useEffect, useState } from "react";
import { getStoredReadBook } from "../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import Chart from "../Chart/Chart";


const PagesToRead = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const booksRead = books.filter(book => storedBookIds.includes(book.bookId))

            setReadBooks(booksRead)

        }
    }, [])



    return (
        <div className="mb-12">
            <div className="mb-12 flex flex-col items-center gap-8">
                <div className="bg-[#1313130D] p-4 rounded-2xl w-full">
                    <h2 className='font-worksans font-bold lg:text-4xl text-2xl text-center'>Pages You Have Read</h2>
                </div>
            </div>
            <Chart readBooks={readBooks}></Chart>
        </div>
    );
};

export default PagesToRead;