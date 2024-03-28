import { useOutletContext } from "react-router-dom";
import WishBooksList from "../WishBooksList/WishBooksList";


const WishlistBooks = () => {

    const [readBooks, wishlistBooks] = useOutletContext()

    console.log(wishlistBooks)
    return (
        <div>
            {
                wishlistBooks.map(book => <WishBooksList key={book.bookId} wlist={book}></WishBooksList>)
            }

        </div>
    );
};

export default WishlistBooks;