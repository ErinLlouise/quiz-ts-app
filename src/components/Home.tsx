import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
          <h1>ANZAC Trivia</h1>
          <Link to='/quiz/1'>
            <button>Lets Go</button>
          </Link>
        </>
    )
}

export default Home