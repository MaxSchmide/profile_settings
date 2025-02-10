interface NotificationBannerProps {
  onClose: () => void;
}

export const NotificationBanner = ({ onClose }: NotificationBannerProps) => {
  return (
    <div className="flex w-full flex-col border-l-[#25a249] mt-4 pl-4 border-l-[3px] border-[rgba(37,162,73,1)] border-solid">
      <div className="flex w-full gap-4 flex-wrap">
        <div className="flex min-h-12 items-center gap-2.5 justify-center w-6">
          <i className="ti ti-check text-[#25a249] text-2xl" />
        </div>
        <div className="flex min-w-60 flex-col text-sm text-[#21272a] flex-1 basis-[0%] pt-3.5">
          <div className="flex w-full items-center gap-1 flex-wrap">
            <div className="font-medium leading-[1.1] self-stretch my-auto">
              Successfully Saved.
            </div>
            <div className="font-normal leading-[1.4] self-stretch flex-1 basis-[0%] my-auto">
              Your profile settings have been saved.
            </div>
          </div>
        </div>
        <button onClick={onClose} className="flex min-h-12 items-center w-12">
          <div className="self-stretch flex min-h-12 w-12 items-center gap-2.5 justify-center my-auto">
            <i className="ti ti-x text-2xl text-[#697077]" />
          </div>
        </button>
      </div>
    </div>
  );
};
