/* eslint-disable react/prop-types */
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "./Button"



const FramerMotion = ({ name }) => {
    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center"
            }}
        >
            <h1
                style={{
                    marginTop: "30px"
                }}
            >
                Hello, {name}
            </h1>
            <AnimatePresence>
                {show && <motion.div
                    style={{
                        width: "100px",
                        height: "100px",
                        color: "#fff",
                        background: "blue"
                    }}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 100 }}
                    exit={{ opacity: 0, x: -150 }}
                    transition={{
                        duration: "1"
                    }}
                >
                    <h2>Hi, There...</h2>
                </motion.div>}
            </AnimatePresence>
            <Button onClick={handleClick} show={show} />
        </div>
    )
}

export default FramerMotion