import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from "./Repos.module.css"
import BackBtn from '../components/BackBtn'
import { RepoProps } from '../types/repo'
import Loader from '../components/Loader'

const Repos = () => {

    const { username } = useParams();
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const loadRepos = async function (username: string) {

            setIsLoading(true);

            const response = await fetch(`https://api.github.com/users/${username}/repos`);

            const data = await response.json();

            setIsLoading(false);

            setRepos(data);
            
        }

        if (username) {
            loadRepos(username);
        }

    }, [])

    if (!repos && isLoading) return <Loader />;

    return (
        <div>
            <BackBtn />
            <h2>Explore user repositories: {username}</h2>
            {repos && repos.length === 0 && <p>There are no repositories.</p>}
            {repos && repos.length > 0 && (
                <div>
                    {repos.map((repo: RepoProps) => (
                        <p>{repo.name}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Repos