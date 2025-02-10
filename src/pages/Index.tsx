import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProfilePhoto } from "@/components/profile/ProfilePhoto";
import { UserDetails } from "@/components/profile/UserDetails";
import { NotificationBanner } from "@/components/profile/NotificationBanner";

const Index = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="bg-[rgba(242,244,248,1)] flex flex-col overflow-hidden">
      <Header />

      <main className="self-center flex w-[752px] max-w-full flex-col mt-[50px] p-6 max-md:mt-10 max-md:p-5 max-sm:mt-6 max-sm:p-4">
        <div className="flex w-full gap-6 text-[42px] text-[#21272a] font-bold whitespace-nowrap leading-[1.1] max-md:max-w-full max-sm:text-[32px]">
          <h1 className="w-full min-w-60 flex-1 max-md:max-w-full">Settings</h1>
        </div>

        <div className="flex w-full gap-6 mt-6 max-md:max-w-full">
          <div className="flex min-w-60 w-[700px] flex-col max-sm:w-full">
            <ProfilePhoto />
            <UserDetails />
            {showNotification && (
              <NotificationBanner onClose={() => setShowNotification(false)} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
