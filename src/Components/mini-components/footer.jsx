import { FcLike } from "react-icons/fc";
import { FcImageFile } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="w-full h-[100px] pt-5 md:pt-0 md:h-[70px] bg-[#241e1e] text-white rounded-t-xl flex-col md:flex justify-center md:px-10 gap-1 items-center">
      <p className="flex justify-center md:justify-start  md:items-center gap-2">
        Made with <FcLike className="text:lg md:text-2xl" /> by rajeev
      </p>
      <div className="flex gap-1 text-xl justify-center md:justify-start mt-3 md:mt-0 items-center   " >
        <p className=" text-[13px] md:text-sm">Image Referals:</p>
        <a href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          <FcImageFile />
        </a>
        <a href="https://unsplash.com/photos/man-sitting-on-chair-and-looking-laptop-computer-vGgn0xLdy8s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"></a>
        <a href="https://unsplash.com/@amirvisuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><FcImageFile /></a><a href="https://unsplash.com/photos/man-in-black-long-sleeve-shirt-mzBfIKuNBxI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"></a>
        <a href="https://unsplash.com/@matosem?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><FcImageFile /></a><a href="https://unsplash.com/photos/low-angle-photography-of-four-high-rise-buildings-Nl_FMFpXo2g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"></a>
        <a href="https://www.freepik.com/free-vector/connected-world-concept-illustration_9793220.htm#fromView=search&term=contact&track=sph&regularType=vector&page=4&position=0&uuid=685f906c-41fc-4cfd-9728-ce0d1350ec25"><FcImageFile /></a>

      
      
      </div>
    </div>
  );
};

export default Footer;
