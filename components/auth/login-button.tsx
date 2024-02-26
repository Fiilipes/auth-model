"use client"

import { useRouter } from "next/navigation"
import {Button} from "@/components/ui/button";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {Badge} from "@/components/ui/badge";
import {LuScanFace} from "react-icons/lu";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
                                children,
                                mode = "redirect",
                                asChild
                            }: LoginButtonProps) => {

    const router = useRouter()

    const onClick = () => {
        router.push("/auth/login")
    }

    if (mode === "modal") {
        return (
            <div>
                TODO: Implement modal
            </div>
        )
    }

    return (
        <span onClick={onClick} className={"cursor-pointer"}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant={"secondary"} size={"lg"} className={"rounded-full bg-[#111] font-semibold text-white hover:bg-[#222]"}>
                        {children}
                    </Button>
                </TooltipTrigger>
                <TooltipContent className={"flex flex-row items-center justify-center"}>
                    <LuScanFace className={"mr-2"} />
                    Continue to login
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </span>
    )
}