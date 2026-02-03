import React from 'react'
import Cards from './Cards'
import teamData from './team.json'

const Team = () => {
    return (
        <>
            <div className='container my-5'>
                <Cards session={"Team 2024-25"} teamData={teamData["Team 2024-25"]} />
                <Cards session={"Team 2023-24"} teamData={teamData["Team 2023-24"]} />
                <Cards session={"Team 2022-23"} teamData={teamData["Team 2022-23"]} />
            </div>
        </>
    )
}

export default Team