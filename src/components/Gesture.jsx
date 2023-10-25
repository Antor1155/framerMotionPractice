import { motion, MotionConfig } from "framer-motion"
const Gesture = () => {
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem",
            }}
        >
            <MotionConfig
                transition={{
                    duration: .25,
                    ease: "easeInOut",
                }}
            >
                <motion.button
                    className="example-button"
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                        rotate: "2.5deg",
                    }}
                >
                    Click me !
                </motion.button>

                <motion.button
                    className="example-button"
                    style={{
                        background: "black"
                    }}

                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                        rotate: "2.5deg",
                    }}
                >
                    Click me !
                </motion.button>
            </MotionConfig>
        </div>
    );
};

export default Gesture;