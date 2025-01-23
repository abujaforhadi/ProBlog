import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user);
     return <NavbarClient user={user} />
};

export default Navbar;