import './App.css';
import pitch from './pitch.png';

import { useRef } from 'react';




const Field = (param) => {

    const images = [`url(${ pitch })`]
    console.log(param)

 return (
            <div                
                style={ {
                    backgroundColor: "#588f58",
                    backgroundImage: images,
                    backgroundPosition:'center',
                    backgroundRepeat: 'no-repeat',
                    width: "100%",
                    height:"700px", 
                } }
            ><img src={param} /></div>
        );

}

export default Field ;