import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="flex flex-col overflow-hidden">
      <div className="justify-center border-b-[#dde1e6] bg-white flex w-full flex-col border-b border-solid">
        <div className="bg-[rgba(242,244,248,1)] flex w-full items-center gap-6 flex-wrap px-20 py-6 max-md:max-w-full max-md:px-5 max-sm:gap-3 max-sm:p-4">
          <Link
            to="/"
            className="self-stretch flex flex-col text-2xl text-[#000666] font-bold leading-[1.1] w-[141px] my-auto max-sm:w-auto"
          >
            <div className="flex items-center gap-1">
              <i className="ti ti-hexagon-filled text-2xl text-[#000666]" />
              <div>Fuel Sure</div>
            </div>
          </Link>

          <div className="items-center border-b-[#c1c7cd] bg-white self-stretch flex min-w-60 min-h-12 gap-2 text-base text-[#697077] font-normal leading-[1.4] flex-wrap flex-1 basis-[0%] my-auto px-4 py-3 border-b border-solid max-md:max-w-full max-sm:hidden">
            <i className="ti ti-search text-2xl text-[#697077]" />
            <Input
              type="text"
              placeholder="Search Suppliers"
              className="border-none bg-transparent focus:outline-none flex-1"
            />
          </div>

          <div className="self-stretch flex min-w-60 items-center gap-4 my-auto max-sm:min-w-0 max-sm:gap-2">
            <div className="self-stretch flex min-h-12 items-center gap-4 text-xs text-white font-normal whitespace-nowrap text-center leading-[1.4] justify-center my-auto pl-3 pr-1.5 pt-2 pb-[22px]">
              <div className="self-stretch bg-[#da1e28] gap-2.5 w-[18px] h-[18px] my-auto pl-1.5 pr-[5px] rounded-xl">
                9
              </div>
            </div>
            <button className="self-stretch flex min-h-12 items-center gap-4 justify-center w-12 my-auto p-3">
              <i className="ti ti-settings text-2xl text-[#000666]" />
            </button>
            <button className="self-stretch flex min-h-12 items-center gap-4 text-base text-[#000666] font-medium tracking-[0.5px] leading-none justify-center my-auto px-2 py-3">
              <i className="ti ti-user-circle text-2xl" />
              <span>Emma Lee</span>
            </button>
          </div>
        </div>

        <nav className="bg-white flex w-full gap-2 text-base font-medium leading-none justify-between flex-wrap px-20 py-2 max-md:max-w-full max-md:px-5 max-sm:px-4 max-sm:py-3">
          <div className="flex min-w-60 items-center gap-2 text-[#21272a] flex-wrap flex-1 basis-10 my-auto max-md:max-w-full max-sm:hidden">
            <Link
              to="/insights"
              className="self-stretch bg-white gap-2 my-auto px-4 py-1"
            >
              Supplier Insights
            </Link>
            <Link
              to="/saved"
              className="self-stretch bg-white gap-2 my-auto px-4 py-1"
            >
              My Saved Suppliers
            </Link>
            <Link
              to="/reviews"
              className="self-stretch bg-white gap-2 my-auto px-4 py-1"
            >
              My Reviews
            </Link>
          </div>
          <button className="self-stretch bg-[rgba(32,75,180,1)] gap-2 text-white h-full p-5 border-[rgba(32,75,180,1)] border-solid border-2 max-sm:w-full max-sm:p-3">
            Add a Review +
          </button>
        </nav>
      </div>
    </header>
  );
};
