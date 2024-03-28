import { useEffect, useState } from "react";
import { getStoredReadBook } from "../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import BarChart from "../BarChart/BarChart";

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
        <div>
            <BarChart readBooks={readBooks}></BarChart>
        </div>
    );
};

export default PagesToRead;