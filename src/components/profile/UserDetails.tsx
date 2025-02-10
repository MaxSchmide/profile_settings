import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserDetailsForm {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  email: string;
}

export const UserDetails = () => {
  const { register, handleSubmit } = useForm<UserDetailsForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      companyName: "",
      email: "hello@mail.com",
    },
  });

  const onSubmit = (data: UserDetailsForm) => {
    console.log(data);
  };

  return (
    <div className="border border-[#dde1e6] bg-white flex w-full flex-col mt-4 p-4 border-solid">
      <h2 className="w-full text-lg text-[#21272a] font-bold leading-[1.1]">
        User Details
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-[616px] flex-col font-normal leading-[1.4] mt-6"
      >
        <div className="flex w-full gap-4 flex-wrap">
          <div className="flex min-w-60 flex-col flex-1 basis-[0%]">
            <label className="text-[#21272a] text-sm mb-2">First Name</label>
            <Input
              {...register("firstName")}
              className="self-stretch flex-1 border-b-[#c1c7cd] bg-[#f2f4f8] min-h-12 w-full gap-2 text-base text-[#697077] px-4 py-[13px] border-b border-solid"
              placeholder="First Name"
            />
          </div>
          <div className="flex min-w-60 flex-col flex-1 basis-[0%]">
            <label className="text-[#21272a] text-sm mb-2">Last Name</label>
            <Input
              {...register("lastName")}
              className="self-stretch flex-1 border-b-[#c1c7cd] bg-[#f2f4f8] min-h-12 w-full gap-2 text-base text-[#697077] px-4 py-[13px] border-b border-solid"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex w-full flex-col mt-4">
          <label className="text-[#21272a] text-sm mb-2">Job Title</label>
          <Input
            {...register("jobTitle")}
            className="self-stretch flex-1 border-b-[#c1c7cd] bg-[#f2f4f8] min-h-12 w-full gap-2 text-base text-[#697077] px-4 py-[13px] border-b border-solid"
            placeholder="Job Title"
          />
        </div>

        <div className="flex w-full flex-col mt-4">
          <label className="text-[#21272a] text-sm mb-2">Company Name</label>
          <Input
            {...register("companyName")}
            className="self-stretch flex-1 border-b-[#c1c7cd] bg-[#f2f4f8] min-h-12 w-full gap-2 text-base text-[#697077] px-4 py-[13px] border-b border-solid"
            placeholder="Company Name"
          />
        </div>

        <div className="flex w-full flex-col mt-4">
          <label className="text-[#21272a] text-sm mb-2">Email</label>
          <Input
            {...register("email")}
            type="email"
            className="self-stretch flex-1 border-b-[#c1c7cd] bg-[#f2f4f8] min-h-12 w-full gap-2 text-base text-[#697077] px-4 py-[13px] border-b border-solid"
            placeholder="hello@mail.com"
          />
        </div>

        <div className="flex w-full items-center gap-4 text-base text-white font-medium tracking-[0.5px] leading-none mt-4">
          <Button
            type="submit"
            className="self-stretch gap-2.5 bg-[rgba(32,75,180,1)] min-h-12 my-auto px-3 p-4 border-[rgba(32,75,180,1)] border-solid border-2"
          >
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
};
