
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="h-screen w-screen bg-[#1E1E1E]">
        <Image src={`/bg2.svg`} alt="Background" fill objectFit="cover" />
        <div className="flex flex-row gap-[6rem] bg-[#323231] px-4 py-3 justify-center absolute left-[49%] -translate-x-1/2 top-4 translate-y-1/2 rounded-[27px]">

          <div className="flex flex-row gap-10 items-center">
            <Link href={`/`}>
              <Image src={`/logo.svg`} alt="logo" width={50} height={50} />
            </Link>
            <Link href={`/about`}>
              <Image src={`/user.svg`} alt="user" width={30} height={30} />
            </Link>
            <Link href={`/`}>
              <Image src={`/artboard.svg`} alt="artboard" width={25} height={25} />
            </Link>

          </div>
          <div>
            <div className="bg-white px-5 py-3 rounded-full"> React Us </div>
            <Image src={`/Ellipse 2.svg`} alt="ellipse" width={122} height={170} className="absolute top-[0.125rem] -right-0  -translate-x-2 -z-20 " />
          </div>
        </div>
        <div className="flex flex-col gap-4 absolute left-1/2 -translate-x-[52%] top-1/2 -translate-y-[35%] ">
          <h1 className="text-[64px] font-extrabold text-[#AFACA2]">
            ECS LABORATORY
          </h1>
          <div className="flex flex-row items-center gap-5 absolute left-1/2 -translate-x-[50%] top-[90%] translate-y-[20%]">
            <h1 className="text-nowrap text-[#AFACA2]">
              The world where we explore
            </h1>
            <div className="text-nowrap text-[#AFACA2] border border-[#AFACA2] rounded-full px-5 py-[0.4rem]">
              Internet of Things
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row gap-5 bottom-20 -translate-y-[70%] left-1/2 -translate-x-1/2">
          <Image src={`/linkedin.svg`} alt="linkedin" width={25} height={25} />
          <Image src={`/instagram.svg`} alt="instagram" width={25} height={25} />
          <Image src={`/google.svg`} alt="google" width={25} height={25} />
          <Image src={`/wa.svg`} alt="wa" width={25} height={25} />
        </div>

      </div>
    </div>
  );
}
