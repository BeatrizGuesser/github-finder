import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from "./Repos.module.css"
import BackBtn from '../components/BackBtn'
import { RepoProps } from '../types/repo'
import Loader from '../components/Loader'
import Repo from '../components/Repo'

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
        <div className={styles.repos}>
            <BackBtn />
            <h2>Explore user repositories: {username}</h2>
            {repos && repos.length === 0 && <p>There are no repositories.</p>}
            {repos && repos.length > 0 && (
                <div className={styles.repos_container}>
                    {repos.map((repo: RepoProps) => (
                        <Repo key={repo.name} {...repo} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Repos