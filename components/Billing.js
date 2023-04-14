export default function Billing() {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse sm:py-16 py-6"
    >
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src="https://github.com/adrianhajdin/project_hoobank/blob/main/src/assets/bill.png?raw=true"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src="https://raw.githubusercontent.com/adrianhajdin/project_hoobank/45b4958981ea82423693f6f31524ec8ef08651cb/src/assets/apple.svg"
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src="https://raw.githubusercontent.com/adrianhajdin/project_hoobank/45b4958981ea82423693f6f31524ec8ef08651cb/src/assets/google.svg"
            alt="google_play"
            className="w-[144px] h-[43px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
