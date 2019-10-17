import React from 'react';
import { Stage, Layer, Rect, Circle, Text, Tag, Label, Ellipse } from 'react-konva';
import Konva from 'konva';

class Palette extends React.Component{
    render(){
        return(
            <Stage width={800} height={200} drawBorder={true}>
                <Layer>
                <Rect x={25} y={25} width={25} height={25} fill="white"/>
                <Circle x={100} y={35} width={25} height={25} fill="white"/>
                </Layer>
                
            </Stage>
        )
    }
}

export default Palette;