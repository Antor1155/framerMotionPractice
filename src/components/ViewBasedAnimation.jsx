import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

const ViewBasedAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})

    useEffect(()=>{
        console.log("its in view", isInView)
    }, [isInView])

    return (
        <>
            <div
                style={{
                    height: "150vh"
                }}
            ></div>

            <motion.div
                style={{
                    height: "100vh",
                    background: "black",
                }}

                initial={{
                    opacity: 0
                }}

                whileInView={{
                    opacity: 1
                }}

                transition={{
                    duration: 2,
                }}
            ></motion.div>

            <div ref={ref}
                style={{
                    height: "100vh",
                    background: isInView ? "red" : "blue",
                    transition: "background 3s"
                }}
            ></div>
        </>
    );
};

export default ViewBasedAnimation;