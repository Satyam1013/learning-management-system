import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center">
        <Image width={40} height={40} src="/logo.svg" alt="logo" />
        <h1 className="text-3xl font-bold ml-2 text-red-400">
          <span className="font-bold text-red-800">L</span>
          <span className="font-bold text-red-600">M</span>S
        </h1>
      </div>
    </div>
  );
};

export default Logo;
