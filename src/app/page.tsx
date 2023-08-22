import ActivitesChart from "@/components/ActivitesChart";
import InfoSection from "@/components/InfoSection";
import LoginUser from "@/components/LoginUser";
import Menu from "@/components/Menu";
import PageLayout from "@/components/PageLayout";
import ScheduleCard from "@/components/ScheduleCard";
import TopProductCard from "@/components/TopProductCard";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <PageLayout>
      <main className="font-mont flex flex-col pt-5 w-full gap-10">
        {/* nav */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 w-full">
          <div className=" flex items-center justify-between h-full">
            <h1 className="text-2xl font-bold ">Dashboard</h1>
            <div className="lg:hidden">
              <Menu />
            </div>
          </div>
          <div className="flex justify-between lg:justify-normal lg:gap-8 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 pr-8 rounded-xl border-2 border-white focus:outline-none max-w-[200px]"
              />
              <Image
                src="/search_icon.svg" // Replace with your search icon image location
                alt="Search Icon"
                width={15}
                height={15}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            </div>
            <div className="flex gap-4">
              <Image
                src="/notification_icon.svg"
                alt="Notification Icon"
                width={18}
                height={20}
                className="cursor-pointer"
              />

              {/* User login/logout */}
              <LoginUser />
            </div>
          </div>
        </div>
        {/* info section */}
        <InfoSection />
        {/* Linechart section */}
        <ActivitesChart />
        {/* product and schedule card */}
        <div className="w-full flex-col lg:flex-row  flex gap-10  justify-between">
          <TopProductCard />
          <ScheduleCard />
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
