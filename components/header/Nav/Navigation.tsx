import styles from './navigationstyle.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import {LogoutButton} from "@/components/auth/logout-button";

export default function Navigation() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map( (link, i) => {
                        const { title, href, type } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div

                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    {
                                        type === "logout" ?
                                            <LogoutButton>
                                                {title}
                                            </LogoutButton>

                                            :
                                            <a href={href}>
                                                {title}
                                            </a>
                                    }
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
            <motion.div className={styles.footer}>
                {
                    footerLinks.map( (link, i) => {
                        const { title, href } = link;
                        return (
                            <motion.a
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                            >
                                {title}
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}