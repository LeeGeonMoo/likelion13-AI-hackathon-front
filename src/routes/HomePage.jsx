import React from "react";

const challenges = [
  {
    id: 11,
    title: "Challenge #11",
    subtitle: "귀여운 비숑 사진 만들기",
    desc: "귀여운 비숑의 사진을 최대한 리얼리스틱하게 프롬프팅을 적절히 잘 사용해서 만들어봅시다!",
    type: "코딩",
    status: "진행중",
    level: "초급",
    levelColor: "bg-green-500",
    typeColor: "bg-blue-100 text-blue-500",
    levelTextColor: "text-white",
    participants: 1043,
  },
  {
    id: 12,
    title: "Challenge #12",
    subtitle: "BFS 알고리즘",
    desc: "여름 휴가 시즌을 겨냥하여 '혼자서도 잘 즐기는 나만의 바캉스' 컨셉의...",
    type: "코딩",
    status: "진행중",
    level: "중급",
    levelColor: "bg-yellow-400",
    typeColor: "bg-blue-100 text-blue-500",
    levelTextColor: "text-white",
    participants: 128,
  },
  {
    id: 12,
    title: "Challenge #12",
    subtitle: "나무 위 개구리 만들기",
    desc: "아마존 정글 속 나무에 앉아 있는 개구리를 표현해봅시다. 촉촉한 개구리의 표면 질감을 구현해봐요!",
    type: "이미지",
    status: "진행중",
    level: "중급",
    levelColor: "bg-yellow-400",
    typeColor: "bg-blue-100 text-blue-500",
    levelTextColor: "text-white",
    participants: 251,
  },
  {
    id: 13,
    title: "Challenge #13",
    subtitle: "유리 보석 푸딩 만들기",
    desc: "곳곳에 보석이 박힌 영롱한 반투명 유리 푸딩을 만들어봅시다! 쉽지 않습니다!",
    type: "이미지",
    status: "진행중",
    level: "고급",
    levelColor: "bg-red-500",
    typeColor: "bg-blue-100 text-blue-500",
    levelTextColor: "text-white",
    participants: 1043,
  },
  {
    id: 11,
    title: "Challenge #11",
    subtitle: "알파벳 문자열",
    desc: "알파벳 대문자로만 이루어진 문자열 S가 있고, 길이는 N이다. S[i]는 S의 i번째 문자를 나타내고...",
    type: "코딩",
    status: "진행중",
    level: "고급",
    levelColor: "bg-red-500",
    typeColor: "bg-blue-100 text-blue-500",
    levelTextColor: "text-white",
    participants: 1043,
  },
  {
    id: 12,
    title: "Challenge #12",
    subtitle: "BFS 알고리즘",
    desc: "귀여운 비숑의 사진을 최대한 리얼리스틱하게 프롬프팅을 적절히 잘 사용해서 만들어봅시다!",
    type: "코딩",
    status: "진행중",
    level: "고급",
    levelColor: "bg-red-500",
    typeColor: "bg-blue-100 text-blue-500",
    levelTextColor: "text-white",
    participants: 1043,
  },
];

const filterList = [
  { label: "최신순", active: true },
  { label: "인기순", active: false },
  { label: "난이도순", active: false },
  { label: "코딩 문제", active: false },
  { label: "이미지 문제", active: false },
];

function HomePage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen font-noto">
      {/* 헤더 */}
      <header className="bg-white border-b border-[#e9ecef] px-8 py-4">
        <h1 className="text-xl font-bold text-neutral-800">Prompteer</h1>
      </header>

      {/* 상단 카드 영역 */}
      <div className="max-w-6xl mx-auto mt-8 flex gap-6">
        <div className="flex-1 bg-blue-500 rounded-xl p-10 flex flex-col gap-2 min-w-[300px]">
          <div className="text-white text-3xl font-bold mb-2">Challenge #11</div>
          <div className="text-white opacity-90 text-base mb-4">알파벳 문자열</div>
          <button className="bg-white text-blue-600 font-bold rounded-lg px-6 py-2 w-fit border border-blue-500">지금 도전하기 →</button>
        </div>
        <div className="flex-1 bg-blue-500 rounded-xl p-10 flex flex-col gap-2 min-w-[300px] justify-center">
          <div className="text-white text-3xl font-bold mb-2">이름</div>
          <div className="text-white opacity-90 text-base">코딩 랭킹. 10</div>
          <div className="text-white opacity-90 text-base">이미지 인기 순위. 943</div>
        </div>
      </div>

      {/* 검색/필터 영역 */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex flex-col gap-4">
          <input
            className="w-72 px-4 py-2 bg-white rounded-md border border-gray-300 text-base text-neutral-700 focus:outline-none placeholder:text-gray-400"
            placeholder="문제 검색..."
          />
          <div className="flex gap-2">
            {filterList.map((f, i) => (
              <button
                key={f.label}
                className={`px-4 py-2 rounded-md text-sm font-inter border-none outline-none ${f.active ? "bg-blue-600 text-white font-bold" : "bg-gray-100 text-gray-600 font-normal"}`}
                style={{ boxShadow: "none" }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 챌린지 카드 리스트 */}
      <div className="max-w-6xl mx-auto mt-8 pb-16">
        <div className="grid grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full" style={{ boxShadow: "none" }}>
              {/* 상태/타입 */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-green-600 text-xs font-bold">● {c.status}</span>
                <span className={`px-2.5 py-1 rounded-2xl text-blue-500 text-xs font-medium bg-blue-100`}>{c.type}</span>
              </div>
              {/* 제목 */}
              <div className="text-neutral-800 text-lg font-bold mb-1 text-left leading-tight">{c.title}</div>
              <div className="text-neutral-800 text-base font-bold mb-1 text-left leading-tight">{c.subtitle}</div>
              {/* 설명 */}
              <div className="text-zinc-600 text-sm leading-tight mb-4 text-left">{c.desc}</div>
              {/* 난이도 */}
              <div className="mb-6">
                <span className={`px-2.5 py-1 rounded-2xl text-white text-xs font-bold ${c.levelColor}`}>{c.level}</span>
              </div>
              {/* 참가자 */}
              <div className="border-t border-gray-200 pt-4 mt-auto text-left">
                <span className="text-zinc-600 text-sm">🧑 {c.participants}명 참가 중</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
