import { useContext, useRef, useState } from "react";
import { bookFetch } from "../../functions/functions";
import BookData from "../context/BookData";

const Search = () => {
    const inputRef = useRef(null)
    const {bookData, setBookData} = useContext(BookData)

   async function handleSubmit(e){
        e.preventDefault()
        const newBook = await bookFetch(inputRef.current.value)
        setBookData(newBook)
    }

    console.log(bookData);
    

    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <label>Search your book:</label>
            <input type="text" ref={inputRef}/>
            <input type="submit" value="Go" />
        </form>
        </>
    )
}

export default Search;