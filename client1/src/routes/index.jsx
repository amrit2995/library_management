import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "../pages/search";
import AddBookForm from "../pages/form/add_book";
import Books from "../pages/books";

function AllRoutes() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/form/add_book" element={<AddBookForm />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
    </div>
  )
}

export default AllRoutes;