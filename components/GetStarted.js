export default function GetStarted() {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition duration-200 hover:scale-105">
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src="https://raw.githubusercontent.com/adrianhajdin/project_hoobank/45b4958981ea82423693f6f31524ec8ef08651cb/src/assets/arrow-up.svg"
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}
