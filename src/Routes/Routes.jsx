import Root from "../Components/Root/Root"
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PagesToRead from "../Components/PagesToRead/PagesToRead";
import BookDetails from "../Components/BookDetails/BookDetails";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import WishlistBooks from "../Components/WishlistBooks/WishlistBooks";
import RequestBooks from "../Components/RequestBooks/RequestBooks";
import ContactUs from "../Components/ContactUs/ContactUs";
import AboutUs from "../Components/AboutUs/AboutUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../data.JSON'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
            
          },

          {
            path: 'wishlist-books',
            element: <WishlistBooks></WishlistBooks>
          },
          {
            path: 'request-books',
            element: <RequestBooks></RequestBooks>
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../data.JSON')
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path:'/contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../data.JSON')
      }
    ]
  },
]);