import React from "react";
import ChallengeListSection from "../components/Challenge/ChallengeListSection";
import HeaderSection from "../components/Header/HeaderSection";
// import UserProfileSection from "../components/User/UserProfileSection";
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
        <div className="flex flex-1 w-full max-w-7xl mx-auto gap-8 px-8">
          {/* 왼쪽: 챌린지 카드 목록 */}
          <section className="flex-1">
            <div className="flex flex-col max-w-[1248px] w-full items-start gap-5 p-6 relative">
              <HeaderSection />
              <ChallengeListSection />
            </div>
          </section>
          {/* 오른쪽: 개인정보/프로필 */}
          {/* <aside className="w-[320px] flex-shrink-0">
            <UserProfileSection />
          </aside> */}
        </div>
      </main>
    </>
  );
}
