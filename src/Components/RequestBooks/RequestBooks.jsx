import { useOutletContext } from "react-router-dom";
import RequestBookList from "../RequestBookList/RequestBookList";


const RequestBooks = () => {

    const [readBooks, requestBooks, wishlistBooks] = useOutletContext()
    return (
        <div>
            {
                requestBooks.map(book => <RequestBookList key={book.bookId} rlist={book}></RequestBookList>)
            }
        </div>
    );
};

export default RequestBooks;