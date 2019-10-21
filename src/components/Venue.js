import React from 'react';
import { Stage, Layer, Rect, Text, Tag, Label, Circle } from 'react-konva';
import Konva from 'konva';

class Venue extends React.Component {
    state = {
        mouseX: 0,
        mouseY: 0,
        newText: [],
        square: [],
        circular: [],
        selectedItem: ""
    }

    createText = () => ({
        text: "Instrument",
        x: 45,
        y: 55,
    })

    createRectangle = () => ({
        x: 125,
        y: 75,
        width: 25,
        height: 25
    });

    createCircle = () => ({
        x: 175,
        y: 75,
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
        console.log(e)
        this.setState({
            selectedItem: e.currentTarget
        })
        console.log(this.state.selectedItem)
        // this.setState({
        //     selectedItem.attrs.text: this.props.selectedStageInstrument;
        // })
        if(this.props.selectedStageInstrument && (this.props.selectedStageInstrument !== "Move") && (this.props.selectedStageInstrument !== "Delete"))
        e.target.setAttrs({
            text: this.props.selectedStageInstrument
        })
        console.log(this.state.newText);
        //debugger;

        if(this.props.selectedStageInstrument === "Delete"){
            console.log(e.target.index);
            console.log(this.state.newText);
            console.log(this.state.newText[e.target.index - 2])
            let result = window.confirm("Are you sure you want to delete this object?");

            if(result){
                this.handleDelete(e.target.index - 2);
            }
            // if(window.confirm("Are you sure you want to delete this object?")){
            //     window.alert("Yay", "Nay");
            // }

        }
    }

    handleDelete = (item) => {
        console.log("Deleting " + item);
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
    
    clickingMe = (e, data) => {
        console.log(e, data);
    }

    render(){
   
        return(
            <div>
            <Stage width={900} height={700} drawBorder={true}>
                <Layer>
                    <Text text="Palette" fontSize={20} x={10} y={0} fill="white"/>
                    {/* New Text Control Palette */}
                    <Text x={25} y={30} text="New Instrument" fill="white" draggable={false} onClick={this.handleNewText}/>
                    {this.state.newText.map(({text, x, y}, key) => (
                        <Text key={key} text={text} x={x} y={y} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} />
                    ))}

                    {/* New Square Control Palette */}
                    <Rect x={125} y={25} width={25} height={25} fill="white" draggable={false} onClick={this.handleNewSquare}/>
                    {this.state.square.map(({ height, width, x, y }, key) => (
                        <Rect key={key} x={x} y={y} width={width} height={height} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}/>

                    ))}

                    {/* New Circle Control Palette */}
                    <Circle x={175} y={35} width={25} height={25} fill="white" draggable={false} onClick={this.handleNewCircle}/>
                    {this.state.circular.map(({ height, width, x, y }, key) => (
                        <Circle key={key} x={x} y={y} width={width} height={height} fill="white" draggable onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}/>

                    ))}


                    <Rect x={0} y={550} width={900} height={500} fill="black"/>
                    <Text text="Audience" x={200} y={600} fill="white"/>
                </Layer>
            </Stage>
            </div>
        )
    }
}

export default Venue;