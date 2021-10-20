import React, {useState, useEffect} from 'react'
import Api from '../../../api/api'

const GameDetails = ({gameId}) => {
    const [game, setGame] = useState(undefined)

    const fetchGame = async () => {
        const response = await Api.getById('games', gameId, true)
        const resGame = await response.json()
        setGame(resGame)
    }

    useEffect(() => fetchGame(), [])
    
    return (
        <div>
            Details
        </div>
    )
}

export default GameDetails