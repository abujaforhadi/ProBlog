
import { TbLoader3 } from "react-icons/tb";

const Loader = () => {
    return (
        <div className="flex justify-center items-center pt-20">
            <TbLoader3 className="text-[2.8rem] text-center animate-spin text-[#3B9DF8]" />
        </div>
    );
};

export default Loader;
