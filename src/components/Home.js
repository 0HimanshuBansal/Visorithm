import React from 'react'
import DataChart from './DataChart'
import Selector from './Selector'

const Home = () => {
    return (
        <div className="d-flex">
            <div style={{width: "20%"}}>
                <Selector />
            </div>
            <div style={{width: "80%"}}>
                <DataChart />
            </div>
        </div>
    )
}

export default Home
