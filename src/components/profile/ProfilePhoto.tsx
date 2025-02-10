export const ProfilePhoto = () => {
  return (
    <div className="border border-[#dde1e6] bg-white flex w-full flex-col p-4 border-solid">
      <h2 className="w-full text-lg text-[#21272a] font-bold leading-[1.1]">
        Profile Photo
      </h2>
      <div className="flex w-full gap-[40px_48px] flex-wrap mt-6">
        <div className="items-center border-r-[#dde1e6] flex min-w-60 gap-6 pr-12 border-r border-solid">
          <div className="justify-center items-center bg-[#f2f4f8] self-stretch flex min-h-24 gap-2.5 w-24 h-24 my-auto rounded-[100px]">
            <i className="ti ti-user text-5xl text-[#697077]" />
          </div>
          <div className="self-stretch flex flex-col items-center text-base my-auto">
            <button className="self-stretch gap-2.5 min-h-12 text-[#204bb4] font-medium tracking-[0.5px] leading-none px-3 p-4 border-[rgba(32,75,180,1)] border-solid border-2">
              Upload Photo
            </button>
            <button className="text-[#001d6c] font-normal leading-[1.4] mt-2">
              remove
            </button>
          </div>
        </div>
        <div className="flex min-w-60 flex-col text-[#21272a] font-normal justify-center flex-1 basis-[0%] pr-12">
          <div className="text-lg leading-[1.4]">Image requirements:</div>
          <div className="text-sm leading-5 mt-2">
            <span>Min. 400 x 400px</span>
            <br />
            <span>Max. 2MB</span>
            <br />
            <span>Your face or company logo</span>
          </div>
        </div>
      </div>
    </div>
  );
};
