import { motion } from 'framer-motion';
import styles from "@/components/header/Button/buttonstyle.module.scss"
import {CircleUserRound} from "lucide-react";

export default function MenuButton  ({isActive, toggleMenu, color, id, label, icon }: {isActive: boolean, toggleMenu: () => void, color: string, id: number, label: string, icon: any}){
    return (
        <div className={styles.button} style={
            {
                right: id * 105 + "px"
            }
        }>
            <motion.div
                className={styles.slider}
                animate={{top: isActive ? "-100%" : "0%"}}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
            >
                <div
                    className={styles.el}
                    style={{backgroundColor: color}}
                    onClick={toggleMenu}
                >
                    <PerspectiveText label={label} color={["black", "black"]} icon={icon}/>
                </div>
                <div
                    className={styles.el}
                    onClick={toggleMenu}
                >
                    <PerspectiveText label="Close" color={[color, color]} icon={icon} />
                </div>
            </motion.div>
        </div>
    )
}

function PerspectiveText({label, icon,  color}: {label: string, icon: any, color: string[]}) {
    return (
        <div className={styles.perspectiveText}>
            <div style={
                {
                    color: color[0]
                }
            }>

                {
                    icon ? <span className={"flex flex-row items-center justify-center"}>
                    {label.toLowerCase() !== "close" && icon}
                        {label}
                </span> : label
                }
            </div>
            <div style={
                {
                    color: color[1]
                }
            }>
                {
                    icon ? <span className={"flex flex-row items-center justify-center"}>
                    {label.toLowerCase() !== "close" && icon}
                        {label}
                </span> : label
                }
            </div>
        </div>
    )
}