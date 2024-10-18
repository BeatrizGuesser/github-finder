import { BsSearch } from "react-icons/bs"

const Search = () => {
    return (
        <div>
            <h2>Search for a user:</h2>
            <p>Know your best repositories</p>
            <div>
                <input type="text" placeholder="Enter the username" />
                <button>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search