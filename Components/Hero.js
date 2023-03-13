import Link from "next/link";

const Hero = ({ headings, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[10rem] ">
        <h1 className="text-5xl font-bold">{headings}</h1>
        <p className="py-5 text-xl">{message}</p>
        <Link href="/contact">
          <button className="px-8 py-2 bg-red-400 hover:bg-red-500 rounded-md">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
