const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-books')
    if(storedReadBook){
        return JSON.parse(storedReadBook)
    }
    return [];
}

const saveReadBook = id => {
    const storedReadBooks = getStoredReadBook();
    const exits = storedReadBooks.find(bookid => bookid === id)
    if(!exits){ 
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
    }
}

/* Wishlist Books */


const getStoredWishlistBook = () => {
    const storedReadBook = localStorage.getItem('wishlist-book')
    if(storedReadBook){
        return JSON.parse(storedReadBook)
    }
    return [];
}

const saveWishlistBook = id => {
    const storedReadBooks = getStoredWishlistBook();
    const exits = storedReadBooks.find(bookid => bookid === id)
    if(!exits){ 
        storedReadBooks.push(id);
        localStorage.setItem('wishlist-book', JSON.stringify(storedReadBooks))
    }
}



/* const getStoredWishlistBook = () => {
    const storedWishlistBook = localStorage.getItem('wishlist-book')
    if(storedWishlistBook){
        return JSON.parse(storedWishlistBook)
    }
    return [];
}

const saveWishlistBook = id => {
    const storedWishlistBooks = getStoredWishlistBook();
    const exits = storedWishlistBooks.find(bookid => bookid === id)
    if(!exits){
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks))
    }

} */

export {getStoredReadBook, saveReadBook, getStoredWishlistBook, saveWishlistBook}