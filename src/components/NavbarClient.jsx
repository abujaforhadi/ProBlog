"use client"
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function NavbarClient({ user }) {



    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a href="/login">Login</a></li> */}
                    {/* <li></li>
                    <li></li> */}
                    {
                        user ? <><li><a href="/profile">profile</a></li> <LogoutLink>Log out</LogoutLink></> : <> <LoginLink>Sign in</LoginLink>
                            <RegisterLink>Sign up</RegisterLink></>
                    }




                </ul>
            </div>
        </div>
    );
}
