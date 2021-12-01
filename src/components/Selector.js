import React from 'react'
import './common.css'

const Selector = () => {
    return (
        <div className="bg-primary homeDiv d-flex flex-column justify-content-between">
            <button className="btn btn-danger" type="button">Generate New Array</button>
            <div className="d-grid gap-1">
                <button className="btn btn-dark" type="button">Bubble Sort</button>
                <button className="btn btn-dark" type="button">Merge Sort</button>
                <button className="btn btn-dark" type="button">Insertion Sort</button>
                <button className="btn btn-dark" type="button">Selection Sort</button>
                <button className="btn btn-dark" type="button">Quick Sort</button>
            </div>
            <div className="bg-dark" style={{ borderRadius: "0.3rem", padding: "0.5rem" }}>
                <label htmlFor="arrsize" className="form-label text-white">Array Size</label>
                <input type="range" className="form-range" min="5" max="100" id="arrsize" />
            </div>
        </div>
    )
}

export default Selector
