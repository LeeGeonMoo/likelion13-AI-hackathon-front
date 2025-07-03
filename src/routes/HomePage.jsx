import React from "react";
import ChallengeListSection from "../components/challenge/ChallengeListSection";
import HeaderSection from "../components/Header/HeaderSection";
import UserProfileSection from "../components/User/UserProfileSection";

export default function Index() {
  return (
    <>
      {/* 상단 고정 헤더 */}
      <header className="flex items-center justify-between bg-white border-b border-[#e9ecef] px-6 py-4">
        <h1 className="font-bold text-xl text-[#212529] [font-family:'Noto_Sans_KR-Bold',Helvetica]">
          Prompteer
        </h1>
        <div className="flex-1" />
      </header>

      <main className="flex flex-col min-h-screen bg-[#f8f9fa] pt-4">
        <div className="flex flex-col items-center px-24 pt-0 pb-[396px]">
          <div className="flex flex-col max-w-[1248px] w-full items-start gap-5 p-6 relative">
            <HeaderSection />
            <UserProfileSection />
            <ChallengeListSection />
          </div>
        </div>
      </main>
    </>
  );
}
