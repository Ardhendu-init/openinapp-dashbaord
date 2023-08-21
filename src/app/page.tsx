import ActivitesChart from "@/components/ActivitesChart";
import Chart from "@/components/Chart";
import InfoSection from "@/components/InfoSection";
import Menu from "@/components/Menu";
import PageLayout from "@/components/PageLayout";
import ScheduleCard from "@/components/ScheduleCard";
import TopProductCard from "@/components/TopProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <main className="font-mont flex flex-col pt-5 w-full gap-10">
        {/* nav */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 w-full">
          <div className=" flex items-center justify-between h-full">
            <h1 className="text-2xl font-bold ">Dashboard</h1>
            <div className="md:hidden">
              <Menu />
            </div>
          </div>
          <div className="flex justify-between md:justify-normal md:gap-8 items-center">
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
              <div className="relative group">
                <Image
                  src="/user_icon.svg"
                  alt="User Icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
                {/* User dropdown */}
                <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black py-2 px-4 space-y-2 border border-gray-200 rounded-lg shadow-lg z-10">
                  <p>xxxx.yyyy@xmail.com</p>
                  <button className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info section */}
        <InfoSection />
        {/* chartsection */}

        <ActivitesChart />
        {/* product and schedule card */}
        <div className="w-full flex-col lg:flex-row  flex gap-10  justify-between">
          <TopProductCard />
          <ScheduleCard />
        </div>
      </main>
    </PageLayout>
  );
}
