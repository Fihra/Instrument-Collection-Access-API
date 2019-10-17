import React from 'react';
import { Stage, Layer, Rect, Text, Tag, Label } from 'react-konva';
import Konva from 'konva';

class Venue extends React.Component {
    state = {
        color: Konva.Util.getRGB('#b3c5d7')
    }

    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    }

    render(){
        return(
            <div>
            <Stage width={900} height={700} drawBorder={true}>
                <Layer>
                                 
                    <Rect x={0} y={550} width={900} height={500} fill={this.state.color}
                     onClick={this.handleClick}

                    />
                    <Text text="Audience" x={200} y={600} fill="white"/>
                </Layer>
            </Stage>
            </div>
        )
    }
}

export default Venue;