import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{
                color: "green", fontSize: "30px", padding: "20px"
            }}
        >
            About page for transition
        </motion.div>
    )
}

export default About