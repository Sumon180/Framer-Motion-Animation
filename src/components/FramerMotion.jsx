/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { useState } from "react"

const FramerMotion = () => {
    const [showCard, setShowCard] = useState(false)
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "grey"
        }}
        >
            <motion.div
                style={{
                    background: "#fff",
                    padding: "3rem 2rem",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    cursor: "Pointer"
                }}
                whileHover={{
                    scale: 1.1
                }}
                transition={{
                    layout: {
                        duration: 1,
                        type: "spring"
                    }
                }}
                layout
                onClick={() => setShowCard(!showCard)}
            >
                <motion.h3>Hover or Click</motion.h3>
                {
                    showCard && (
                        <motion.p
                            style={{ width: "600px" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reprehenderit vero quibusdam cum nisi pariatur reiciendis ipsum, saepe aliquam fugit suscipit laboriosam repudiandae at sapiente tenetur tempora debitis illo voluptatibus! Enim suscipit natus veritatis ab excepturi nostrum, ipsam, dolorem itaque culpa unde illo? Assumenda error, soluta quis rerum fugit sit!
                        </motion.p>
                    )
                }
            </motion.div>
        </div>

    )
}

export default FramerMotion