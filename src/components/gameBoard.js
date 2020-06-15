import React from 'react';
import Food from './food';
import Snake from './snake'

class GameBoard extends React.Component{
    render(){
        return(
            <>
                <div className="gameBoard">
                    <Food />
                    <Snake />
                </div> 
            </>
        );
    }
}

export default GameBoard;