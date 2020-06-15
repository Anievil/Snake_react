import React from 'react';

class Snake extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            styleLeft: 50,
            styleTop: 50,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event){
        let left = this.state.styleLeft, 
            top = this.state.styleTop;
        switch(event.key){
            case 's':
                if(top >= 92){
                    top++;
                }      
                else if(top < 94){
                    top+=2;
                }      
                if(top >= 94){
                    top = 0;
                } 
                break;
            case 'w':
                if(top <= 1){
                    top--;
                }
                else if(top > 0){
                    top -=2;
                }
                if(top < 0){
                    top = 93;
                } 
                break;
            case 'd':
                if(left >= 96){
                    left = 0;
                }       
                else if(left < 96){
                    left++;
                }
                break;
            case 'a':
                if(left <= 0){
                    left = 97;
                } 
                if(left > 0){
                    left--;
                }
                break;
            default: 
                break;      
        }
        this.setState({
            styleLeft: left,
            styleTop: top
        })      
    }

    render(){
        const styleLeft = this.state.styleLeft, 
              styleTop = this.state.styleTop;
              document.addEventListener('keydown', this.handleKeyPress);
        return(
            <>
                <div className="pacmen"
                style={{left: styleLeft + '%', top: styleTop + '%'}}>
                </div>
            </>
        );
    }
}

export default Snake;