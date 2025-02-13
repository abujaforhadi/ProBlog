
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { redirect } from "next/navigation";

export default async function ProfileDetails() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
    return null;
  }

  const fallbackImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; 

  return (
    <div>
      <h1 className="text-center py-10">
        Welcome to your profile, {user?.family_name}!
      </h1>
      <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto shadow-md h-[500px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">
        <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
          <FaRegHeart className="text-[1.1rem] text-gray-600" />
          <div className="flex items-center gap-[5px]">
            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
            <p className="text-[1rem] text-orange-700">Pro</p>
          </div>
        </div>

        <img
          src={user.picture || fallbackImage}
          alt={`Profile picture of ${user?.family_name || "User"}`}
          className="w-full h-[70%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
        />

        <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
          <h3 className="text-[1.4rem] font-bold text-gray-900">{user?.family_name}</h3>
          <p className="text-[0.9rem] text-gray-600 mt-2">{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
