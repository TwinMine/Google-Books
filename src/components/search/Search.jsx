import { useRef } from "react";

const Search = () => {
    const inputRef = useRef(null)

    function handleSubmit(){
        const value = inputRef.current.value;
    }

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