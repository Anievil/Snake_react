import React from 'react';

class Food extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            styleLeft: 15,
            styleTop: 15,
        }
        this.getNewCordinats = this.getNewCordinats.bind(this);
    }

    getNewCordinats(){
        this.setState({
            styleLeft:  Math.random() * (99 - 1) + 1,
            styleTop:  Math.random() * (99 - 1) + 1
        });
    }

    render(){
        const styleLeft = this.state.styleLeft, 
              styleTop = this.state.styleTop;
        return(
            <>
                <div className="food" onClick={this.getNewCordinats}
                    style={{left: styleLeft + '%', top: styleTop + '%'}}>

                </div>
            </>
        );
    }
}

export default Food;