import React from 'react'
import '../common.css'

const Sorting = (props) => {
    var size = props.size;
    if (size == null) size = 200;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = i + 1;
    }
    shuffle(arr);
    console.log(arr);
    i = 0;

    return (
        <>
            <div className="d-flex align-items-stretch">
                {arr.map((element) => {
                    console.log(i++, " - ", element);
                    return <div key={element} className="bar align-self-end" style={{ height: `${element * (70 / size)}vh` }}>
                    </div>
                })}
            </div>
            <div className="d-grid" style={{ height: "1px", backgroundColor: "black" }}>
            </div>

            <div className="d-grid">
                <button className="btn btn-success mt-3" type="button">Sort</button>
            </div>
        </>
    )
}

export default Sorting
