import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from "./Repos.module.css"

const Repos = () => {

    const { username } = useParams();

    return (
        <div>Repos {username}</div>
    )
}

export default Repos