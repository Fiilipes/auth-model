import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
import Navigation from "@/components/header/Nav/Navigation";
import MenuButton from "@/components/header/Button/MenuButton";

const MenuWrap = ({color, id, label, icon, isActive, toggleMenu, activeButtonId}: {color: string, id: number, label: string, icon: React.ReactNode, isActive: boolean, toggleMenu: () => void, activeButtonId: null | number}) => {

    const menu = {
        open: {
            width: "480px",
            height: "650px",
            top:  id * 40 * -1 - 25 + "px",
            right: "-25px",
            transition: { duration: 0.75, delay: .2, type: "tween", ease: [0.76, 0, 0.24, 1]},
            opacity: 1,
        },
        closed: {
            width: "100px",
            height: "40px",
            top: id * 40 * -1 + "px",
            right: "0px",
            zIndex: 0,
            opacity: 0,
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    }

    return (
        <div >
            <motion.div
                className={`w-[480px] h-[650px] rounded-[25px] relative`}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
                style={{
                    backgroundColor: color,
                }}
            >
                <AnimatePresence>
                    {isActive && <Navigation/>}
                </AnimatePresence>
            </motion.div>
            <MenuButton label={label} color={color} icon={icon} id={id} isActive={isActive} toggleMenu={toggleMenu}/>
        </div>
    )
}
export default MenuWrap
