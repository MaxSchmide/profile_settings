export const Footer = () => {
  return (
    <footer className="bg-[rgba(0,6,102,1)] flex w-full flex-col justify-center mt-[100px] px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-10">
      <div className="flex w-full items-center gap-[40px_48px] justify-between flex-wrap">
        <div className="self-stretch flex flex-col text-2xl text-white font-bold leading-[1.1] my-auto">
          <div className="flex items-center gap-1">
            <i className="ti ti-hexagon-filled text-2xl text-white" />
            <div>Fuel Sure</div>
          </div>
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-4 text-base text-white font-medium whitespace-nowrap leading-none flex-wrap flex-1 basis-[0%] my-auto max-md:max-w-full">
          <div className="self-stretch gap-2 my-auto px-2 py-3">Support</div>
          <div className="self-stretch gap-2 my-auto px-2 py-3">
            47685787583
          </div>
        </div>
      </div>

      <div className="bg-[#c1c7cd] flex min-h-px w-full mt-12 max-md:max-w-full max-md:mt-10" />

      <div className="flex w-full items-center gap-[40px_48px] justify-between flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        <div className="text-white text-sm font-normal leading-[1.4]">
          Fuel Sure @ 2025. All rights reserved.
        </div>
        <div className="flex min-w-60 items-center gap-4 flex-wrap flex-1 basis-[0%]">
          <i className="ti ti-brand-youtube text-2xl text-white" />
          <i className="ti ti-brand-facebook text-2xl text-white" />
          <i className="ti ti-brand-twitter text-2xl text-white" />
          <i className="ti ti-brand-instagram text-2xl text-white" />
          <i className="ti ti-brand-linkedin text-2xl text-white" />
        </div>
      </div>
    </footer>
  );
};
