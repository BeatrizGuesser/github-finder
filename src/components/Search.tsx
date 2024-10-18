import { BsSearch } from "react-icons/bs"
import { useState } from "react";

import styles from "./Search.module.css"

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {

    const [userName, setUserName] = useState("");
    return (
        <div className={styles.search}>
            <h2>Search for a user:</h2>
            <p>Know your best repositories</p>
            <div className={styles.search_container}>
                <input
                    type="text"
                    placeholder="Enter the username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search