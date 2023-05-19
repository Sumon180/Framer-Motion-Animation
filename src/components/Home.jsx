import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{
                color: "blue", fontSize: "30px", padding: "20px"
            }}
        >
            Home page for transition
        </motion.div>
    )
}

export default Home