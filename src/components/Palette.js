import React from 'react';
import { Stage, Layer, Rect, Circle, Text, Tag, Label, Ellipse } from 'react-konva';
import Konva from 'konva';

class Palette extends React.Component{

    render(){
        return(  
            <Stage width={800} height={200} drawBorder={true} >
                <Layer>
                <Text text="Palette" x={10} y={0} fill="white"/>
                
                <Text text="New Text" fontSize={45} x={50} y={50} fill="blue"/>
                <Rect x={100} y={35} width={25} height={25} fill="white" draggable={true}/>
                <Circle x={125} y={45} width={25} height={25} fill="white" draggable={true}/>
                <Text text="PaletteII" x={20} y={30} fill="white"/>
                </Layer>
                
            </Stage>
        )
    }
}

export default Palette;