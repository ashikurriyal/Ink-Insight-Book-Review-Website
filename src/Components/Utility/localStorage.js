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

/* Request Books */

const getStoredRequestBook = () => {
    const storedReadBook = localStorage.getItem('request-books')
    if(storedReadBook){
        return JSON.parse(storedReadBook)
    }
    return [];
}

const saveRequestBook = id => {
    const storedReadBooks = getStoredRequestBook();
    const exits = storedReadBooks.find(bookid => bookid === id)
    if(!exits){ 
        storedReadBooks.push(id);
        localStorage.setItem('request-books', JSON.stringify(storedReadBooks))
    }
}





export {getStoredReadBook, saveReadBook, getStoredWishlistBook, saveWishlistBook, getStoredRequestBook, saveRequestBook}