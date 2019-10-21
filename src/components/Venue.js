import React from 'react';
import { Stage, Layer, Rect, Text, Tag, Label, Circle } from 'react-konva';
import Konva from 'konva';



class Venue extends React.Component {
    state = {
        newText: [
            {
                text: "New Text",
                x: 25,
                y: 25,
            }
        ],
        square: [
            {
                x: 125,
                y: 25,
                width: 25,
                height: 25
            }
        ],
        circular: [
            {
                x: 175,
                y: 35,
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

    createText = () => ({
        text: "New Text",
        x: 25,
        y: 25,
    })

    createRectangle = () => ({
        x: 25,
        y: 25,
        width: 25,
        height: 25
    });

    createCircle = () => ({
        x: 100,
        y: 35,
        width: 25,
        height: 25
    })

    handleDragStart = (e) => {
        e.target.setAttrs({
            shadowOffset: {
                x: 1,
                y: 1
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
        })
    }

    handleNewText = () => {
        this.setState(prevState => ({
            newText: [...prevState.newText, {...this.createText()}]
        }))
    }

    handleNewSquare = () => {
        this.setState(prevState => ({
            square: [...prevState.square, { ...this.createRectangle() }]
        }));
    }

    handleNewCircle = () => {
        this.setState(prevState => ({
            circular: [...prevState.circular, {...this.createCircle() }]
        }));
    }

    render(){
   
        return(
            <div>
            <Stage width={900} height={700} drawBorder={true}>
                <Layer>
                    <Text text="Palette" fontSize={20} x={10} y={0} fill="white"/>
                    {this.state.newText.map(({text, x, y}, key) => (
                        <Text key={key} text={text} x={x} y={y} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onClick={this.handleNewText}/>
                    ))}
                    {this.state.square.map(({ height, width, x, y }, key) => (
                        <Rect key={key} x={x} y={y} width={width} height={height} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onClick={this.handleNewSquare}/>
                        // <Circle key={key} x={x} y={y} width={width} height={height} fill="white" draggable={true}/>
                    ))}
                    {this.state.circular.map(({ height, width, x, y }, key) => (
                        <Circle key={key} x={x} y={y} width={width} height={height} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onClick={this.handleNewCircle}/>
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