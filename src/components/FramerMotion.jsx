/* eslint-disable react/prop-types */
import { motion } from "framer-motion"




const FramerMotion = ({ name }) => {
    return (
        <div>
            <h1
                style={{ textAlign: "center" }}
            >
                Draggable object with {name}
            </h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "200px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "120px"
            }}
            >
                <div>
                    <p>No Constraint</p>
                    <motion.div
                        style={{
                            width: "100px",
                            height: "100px",
                            background: "crimson"
                        }}
                        drag
                    >

                    </motion.div>
                </div>
                <div>
                    <p>Drag Y only Constraint</p>
                    <motion.div
                        style={{
                            width: "100px",
                            height: "100px",
                            background: "crimson"
                        }}
                        drag="y"
                    >

                    </motion.div>
                </div>
                <div>
                    <p>Drag X only Constraint</p>
                    <motion.div
                        style={{
                            width: "100px",
                            height: "100px",
                            background: "crimson"
                        }}
                        drag="x"
                    >

                    </motion.div>
                </div>
                <div>
                    <p>Drag Constraint</p>
                    <motion.div
                        style={{
                            width: "100px",
                            height: "100px",
                            background: "crimson"
                        }}
                        drag
                        dragConstraints={{
                            left: 0, right: 100, top: -100
                        }}
                    >

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FramerMotion