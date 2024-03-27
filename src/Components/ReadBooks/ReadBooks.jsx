

import ReadBooksList from "../ReadBooksList/ReadBooksList";
import { useOutletContext } from "react-router-dom";


const ReadBooks = () => {

    const[readBooks] = useOutletContext()



    return (
        <div>
            
            {
                readBooks.map(book => <ReadBooksList key={book.bookId} list={book}></ReadBooksList>)
            }
        </div>
    );
};

export default ReadBooks;