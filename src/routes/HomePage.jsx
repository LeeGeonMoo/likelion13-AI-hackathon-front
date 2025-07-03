import React from "react";
import ChallengeListSection from "../components/challenge/ChallengeListSection";
import HeaderSection from "../components/Header/HeaderSection";
import UserProfileSection from "../components/User/UserProfileSection";
import "../homepage_prompteer_style.css";

export default function Index() {
  return (
    <>
      {/* 상단 고정 헤더 */}
      <header className="header">
        <div className="frame">
          <h3>Prompteer</h3>
        </div>
      </header>

      <main className="homepage-prompteer">
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
