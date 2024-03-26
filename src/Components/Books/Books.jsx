import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div className="text-center mb-10 mt-12">
                <h1 className="text-5xl font-playfair font-bold">Featured Books</h1>
            </div>
            <div className="lg:grid grid-cols-3 gap-6 mb-12 flex flex-col">
                {
                    books.map(book => <Book key={book.id}book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;