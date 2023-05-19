/* eslint-disable react/prop-types */
import { motion, useScroll } from "framer-motion"

const FramerMotion = () => {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <motion.div style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                height: 10,
                background: "blue",
                transformOrigin: "0%"
            }}
            >

            </motion.div>
            <h2>Scroll Demo</h2><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur</p><br /><br />


        </>
    )
}

export default FramerMotion