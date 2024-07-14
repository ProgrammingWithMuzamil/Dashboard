import Image from "next/image";
import { card } from "@/data/Card";

export default function Home() {
  return (
    <>
      <div className="p-6 h-[950px] bg-slate-300 flex">
        <div className="w-full lg:w-[950px] lg:pl-[50px] lg:px-0">
          <h1 className="text-2xl lg:text-[24px] font-bold">Your Projects</h1>
          <div className="flex flex-wrap justify-evenly ">
            {card.map((e) => (
              <div key={e.id} className="w-full md:w-[370px] mb-8 md:mb-0">
                <div className="w-full h-[216px] bg-white shadow-lg mt-10 mb-9 rounded-xl p-4 border-l-indigo-400 border-l-8 flex flex-col justify-between">
                  <div>
                    <div className="text-sm lg:text-base font-bold">{e.title}</div>
                    <div className="text-sm pt-4">{e.p}</div>
                  </div>
                  <div className="flex justify-end items-end mt-auto">
                    <div>
                      <Image src={e.img1} alt="star" width={22} height={22} />
                    </div>
                    <div className="mx-4">
                      <Image src={e.img2} alt="star" width={22} height={22} />
                    </div>
                    <div>
                      <Image src={e.img3} alt="star" width={14.67} height={22} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[233px] h-[818px]">
          <div>
            <h1 className="text-2xl lg:text-[24px] font-bold">Announcements</h1>
            <div className="w-[220px] h-[370px] mt-10 rounded-xl bg-white p-4 shadow-lg">
              <div className="pb-2">
                <h1 className=" font-semibold ">Site Maintenance</h1>
                <p className="text-xs border-b-2 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet mattis nisl nisi, pellentesq...</p>
              </div>
              <div className="pb-2">
                <h1 className=" font-semibold ">Community Share Day</h1>
                <p className="text-xs border-b-2 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet mattis nisl nisi, pellentesq...</p>
              </div>
              <div>
                <h1 className=" font-semibold">Updated Privacy Policy</h1>
                <p className="text-xs border-b-2 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet mattis nisl nisi, pellentesq...</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl lg:text-[24px] font-bold">Trending</h1>
            <div className="w-[220px] h-[320px] mt-10 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex pt-5">
                <div><Image src="/logo-lizzie.jpg" alt="star" width={40} height={40} /></div>
                <div className="pl-3"><h1 className="font-semibold">@lizzie</h1>
                <p className="text-sm">World Peace Builder</p>
                </div>
              </div>
              <div className="flex pt-5">
                <div><Image src="/logo-worthyag.jpg" alt="star" width={40} height={40} /></div>
                <div className="pl-3"><h1 className="font-semibold">@worthyag</h1>
                <p className="text-sm">Super Cool Project</p>
                </div>
              </div>
              <div className="flex pt-5">
                <div><Image src="/logo-daniel.jpg" alt="star" width={40} height={40} /></div>
                <div className="pl-3"><h1 className="font-semibold">@daniel</h1>
                <p className="text-sm">Life Changing App</p>
                </div>
              </div>
              <div className="flex pt-5">
                <div><Image src="/logo-angelica.jpg" alt="star" width={40} height={40} /></div>
                <div className="pl-3"><h1 className="font-semibold">@angelica</h1>
                <p className="text-sm">No Traffic Maker</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
