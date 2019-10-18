import React from 'react';
import { Stage, Layer, Rect, Text, Tag, Label, Circle } from 'react-konva';
import Konva from 'konva';



class Venue extends React.Component {
    state = {
        canvas: [
            {
                x: 25,
                y: 25,
                width: 25,
                height: 25
            }
        ]
        
    }

    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    }

    createRectangle = () => ({
        x: 25,
        y: 25,
        width: 25,
        height: 25
    });

    handleDragStart = (e) => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    }

    handleDragEnd = (e) => {
        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5 
        })
    }

    handleNewClick = () => {
        this.setState(prevState => ({
            canvas: [...prevState.canvas, { ...this.createRectangle() }]
        }));
    }

    render(){
   
        return(
            <div>
            <Stage width={900} height={700} drawBorder={true}>
                <Layer>
                    <Text text="Palette" x={10} y={0} fill="white"/>
                    {this.state.canvas.map(({ height, width, x, y }, key) => (
                        <Rect key={key} x={x} y={y} width={width} height={height} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onClick={this.handleNewClick}/>
                        // <Circle key={key} x={x} y={y} width={width} height={height} fill="white" draggable={true}/>
                    ))}
                    
                    {/* <Rect x={25} y={25} width={25} height={25} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onClick={this.handleNewClick}/>
                    <Circle x={100} y={35} width={25} height={25} fill="white" draggable={true}/> */}

                    <Rect x={0} y={550} width={900} height={500} fill="black"/>
                    <Text text="Audience" x={200} y={600} fill="white"/>
                </Layer>
            </Stage>
            </div>
        )
    }
}

export default Venue;