import React from 'react'
import localFont from 'next/font/local'
import {cn} from "@/lib/utils";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../fonts/Nohemi-Bold-BF6438cc577b524.woff" })

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={"flex justify-between flex-row w-[90%] h-[100vh] overflow-hidden"}>

            <div
                className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className={"w-[90%] p-32 h-full justify-left items-left"}>
                    <p className={cn("text-8xl sm:text-[175px] font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-br from-neutral-300 to-neutral-600 py-8", myFont.className)}>
                        Log in
                    </p>
                    <p className={cn("text-3xl sm:text-6xl font-medium  z-20 bg-clip-text text-transparent bg-gradient-to-br from-neutral-400 to-neutral-700 py-8", myFont.className)}>
                        Welcome back!
                    </p>
                </div>

            </div>
            <div className={"flex flex-row justify-center w-[50vw]"}>
                {children}
            </div>
        </div>

    )
}
export default AuthLayout
