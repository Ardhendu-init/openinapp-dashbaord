import InfoSection from "@/components/InfoSection";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <main className="font-mont flex flex-col pt-5 w-full gap-10">
        {/* nav */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex gap-[30px] items-center">
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
              <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black py-2 px-4 space-y-2 border border-gray-200 rounded-lg shadow-lg">
                <p>xxxx.yyyy@xmail.com</p>
                <button className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* info section */}
        <InfoSection />
      </main>
    </PageLayout>
  );
}
