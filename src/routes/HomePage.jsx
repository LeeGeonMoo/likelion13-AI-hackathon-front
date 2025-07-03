import ChallengeListSection  from "../components/Challenge/ChallengeListSection";
import HeaderSection from "../components/Header/HeaderSection";
import  UserProfileSection  from "../components/User/UserProfileSection";

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <div className="flex flex-col items-center px-24 pt-0 pb-[396px]">
        <div className="flex flex-col max-w-[1248px] w-full items-start gap-5 p-6 relative">
          <HeaderSection />
          <UserProfileSection />
          <ChallengeListSection />
        </div>
      </div>
    </main>
  );
}