import Image from "next/image";
import Button from "./Button";
export const Navbar = () => {
  return (
    <div className="ml-[287px] w-[1230px] h-[143px]">
      <div className=" h-[116px] pt-[11px] ml-[54px]">
        <div className="h-[40px] flex">
          <div className="cursor-pointer">
            <Image src="/search.png" alt="search" width={22} height={22} />
          </div>
          <input className="w-[719px] h-[27px] bg-slate-300 ml-[13px] rounded-full"></input>
          <div className="cursor-pointer ml-[86px]">
            <Image src="/alert.png" alt="search" width={24} height={24} />
          </div>
          <div className=" ml-[54px]">
            <Image src="/logo-usr.png" alt="search" width={40} height={40} />
          </div>
          <p className="ml-[60px] text-[18px] font-bold">Worthy AG</p>
        </div>

        <div className="flex justify-between h-[60px] ">
          <div className="flex">
            <Image src="/logo-usr.png" alt="search" width={60} height={60} />
            <div className="ml-[20px]">
              <h1>Hi there,</h1>
              <p className="text-[18px] font-bold pt-[11px]">
                Worthy AG (@worthyag)
              </p>
            </div>
          </div>

          <div className="pr-[45px] pt-[20px]">
            <Button 
              text="New"
              style="bg-sky-600 rounded-full w-[135px] h-[36px] text-white"
            />
            <Button 
              text="Upload"
              style="bg-sky-600 rounded-full w-[135px] h-[36px] text-white mx-[34px]"
            />
            <Button
              text="Share"
              style="bg-sky-600 rounded-full w-[135px] h-[36px] text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
