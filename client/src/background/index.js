import React from 'react';
import image from "./background.png"
import "./style.css";

class Background extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener("resize", ()=>
        {
            this.setState(
                {
                    "height": window.innerHeight < window.innerWidth * 0.5 ? window.innerWidth * 0.5 : window.innerHeight,
                    "width": window.innerWidth > window.innerHeight * 1.75 ? window.innerWidth : window.innerHeight * 1.75
                });
        });
    }

    render()
    {
        return (
            <div className="fill-screen" on='true'>
                <img alt = "" src={image} width = {this.state.width}  height = {this.state.height} ></img>
            </div>
        )
    }
}

export default Background;

