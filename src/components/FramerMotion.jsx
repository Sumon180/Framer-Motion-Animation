/* eslint-disable react/prop-types */
import { motion } from "framer-motion"


const FramerMotion = ({ name }) => {
    return (
        <div>
            <motion.h1
                initial={{ x: -450 }}
                animate={{ x: 0 }}
                transition={{
                    duration: "2",
                    delay: "0.5"
                }}
            >
                Hello, {name}
            </motion.h1>
        </div>
    )
}

export default FramerMotion