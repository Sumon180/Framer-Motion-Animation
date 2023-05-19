/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

const FramerMotion = () => {

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            >

                <h2>Scroll Demo</h2>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </>
    )
}

const Box = () => {
    return (
        <motion.div
            style={{
                margin: "200px 0px",
                width: "200px",
                height: "200px",
                background: "blue"
            }}
            initial={{ opacity: 0, scale: 0, x: 500 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
        >

        </motion.div>
    )
}

export default FramerMotion