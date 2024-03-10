"use client"
import {useState} from "react";



import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import {LoginButton} from "@/components/auth/login-button";
import {RegisterButton} from "@/components/auth/register-button";
import {useCurrentUser} from "@/hooks/use-current-user";

import {authprefix} from "@/assets/auth";
import MenuWrap from "@/components/header/MenuWrap";
import {CircleUserRound} from "lucide-react";

export const Navbar = () => {

    const pathname = usePathname();
    const user = useCurrentUser();
    const [activeButtonId, setActiveButtonId] = useState<number | null>(null);

    return (
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] bg-white">
            <div className="flex gap-x-2">
                <Button
                    asChild
                    variant={pathname === "/server" ? "default" : "outline"}
                >
                    <Link href="/server">
                        Server
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/client" ? "default" : "outline"}
                >
                    <Link href="/client">
                        Client
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/admin" ? "default" : "outline"}
                >
                    <Link href="/admin">
                        Admin
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/settings" ? "default" : "outline"}
                >
                    <Link href="/settings">
                        Settings
                    </Link>
                </Button>
            </div>
            {
                user ?
                    <UserButton/>
                    :
                    <>
                        <LoginButton>
                            {authprefix.buttons.login.label}
                        </LoginButton>
                        <RegisterButton>
                            {authprefix.buttons.register.label}
                        </RegisterButton>
                    </>
            }
            {activeButtonId}
            <header className={"fixed right-[50px] top-[50px]"}>
                <MenuWrap color={"#c9fd74"} id={0} label={"Menu"} icon={undefined} activeButtonId={activeButtonId} isActive={activeButtonId === 0} toggleMenu={() => setActiveButtonId(activeButtonId !== 0 ? 0 : null)}/>
                <MenuWrap color={"#d28ff8"} id={1} label={"You"} icon={<CircleUserRound className={"size-4 mr-1"}/>} activeButtonId={activeButtonId} isActive={activeButtonId === 1} toggleMenu={() => setActiveButtonId(activeButtonId !== 1 ? 1 : null)}/>
            </header>
        </nav>)
}