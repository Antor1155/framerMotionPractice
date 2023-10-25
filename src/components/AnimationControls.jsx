import {motion, useAnimationControls} from "framer-motion"
import { useState } from "react";


const AnimationControls = () => {
    const [clicked, setClicked] = useState(false)
    const flipControls = useAnimationControls();

    const handleClick = () =>{
        flipControls.start("flip")
        setClicked(prev => !prev)
        console.log(clicked)
    }


    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem",
            }}
        >
            <button className="example-button"
                onClick={handleClick}
            >Flip it !</button>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    background: "black",
                    color: "white",
                    display: "flex",
                    alignItems:"center",
                    justifyContent: "center",
                    
                }}

                variants={{
                    initial: {
                        rotate: "0deg",
                    },
                    flip:{
                        rotate: "180deg",
                        background: "red",
                    },
                    banana: {
                        scaleX: 4,
                    }
                }}

                initial="initial"
                animate={flipControls}
                // animate={clicked ? "flip" : {}} 
                transition={{
                    type:"just"
                }}
            > mok</motion.div>
        </div>
    );
};

export default AnimationControls;