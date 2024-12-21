import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Navbar = () => {
    const { fetchImageByCatgory, setQuery } = useContext(PixabayContext)
    return (
        <>
            <div className='container text-center my-3'>
                <button onClick={() => fetchImageByCatgory("science")} type="button" className="btn btn-outline-warning mx-3">Science</button>
                <button onClick={() => fetchImageByCatgory("nature")} type="button" className="btn btn-outline-primary mx-3">Nature</button>
                <button onClick={() => fetchImageByCatgory("buildings")} type="button" className="btn btn-outline-info mx-3">Buildings</button>
                <button onClick={() => fetchImageByCatgory("sports")} type="button" className="btn btn-outline-warning mx-3">Sports</button>
                <button onClick={() => fetchImageByCatgory("computer")} type="button" className="btn btn-outline-light mx-3">Computer</button>
                <button onClick={() => fetchImageByCatgory("transpotation")} type="button" className="btn btn-outline-info mx-3">Transpotation</button>
                <button onClick={() => fetchImageByCatgory("travel")} type="button" className="btn btn-outline-light mx-3">Travel</button>
                <button onClick={() => fetchImageByCatgory("food")} type="button" className="btn btn-outline-primary mx-3">Food</button>
            </div>
            <div className="container" style={{ width: "800px" }}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} className="form-control bg-dark text-light"></input>
            </div>
        </>
    )
}

export default Navbar