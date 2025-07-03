import React from "react";

const challenges = [
  {
    id: 11,
    title: "Challenge #11",
    subtitle: "알파벳 문자열",
    desc: "알파벳 대문자로만 이루어진 문자열 S가 있고, 길이는 N이다. S[i]는 S의 i번째 문자를 나타내고...",
    type: "코딩",
    status: "진행중",
    level: "고급",
    levelColor: "bg-[#FF4E4E]",
    typeColor: "bg-[#E7F5FF] text-[#1971C2]",
    levelTextColor: "text-white",
    participants: 1043,
    levelBg: "bg-[#FF4E4E]",
    levelText: "text-white",
  },
  {
    id: 12,
    title: "Challenge #12",
    subtitle: "BFS 알고리즘",
    desc: "여름 휴가 시즌을 겨냥하여 '혼자서도 잘 즐기는 나만의 바캉스' 컨셉의...",
    type: "코딩",
    status: "진행중",
    level: "중급",
    levelColor: "bg-[#FFC848]",
    typeColor: "bg-[#E7F5FF] text-[#1971C2]",
    levelTextColor: "text-white",
    participants: 128,
    levelBg: "bg-[#FFC848]",
    levelText: "text-white",
  },
  {
    id: 12,
    title: "Challenge #12",
    subtitle: "나무 위 개구리 만들기",
    desc: "아마존 정글 속 나무에 앉아 있는 개구리를 표현해봅시다. 촉촉한 개구리의 표면 질감을 구현해봐요!",
    type: "이미지",
    status: "진행중",
    level: "중급",
    levelColor: "bg-[#FFC848]",
    typeColor: "bg-[#E7F5FF] text-[#1971C2]",
    levelTextColor: "text-white",
    participants: 251,
    levelBg: "bg-[#FFC848]",
    levelText: "text-white",
  },
  {
    id: 13,
    title: "Challenge #13",
    subtitle: "유리 보석 푸딩 만들기",
    desc: "곳곳에 보석이 박힌 영롱한 반투명 유리 푸딩을 만들어봅시다! 쉽지 않습니다!",
    type: "이미지",
    status: "진행중",
    level: "고급",
    levelColor: "bg-[#FF4E4E]",
    typeColor: "bg-[#E7F5FF] text-[#1971C2]",
    levelTextColor: "text-white",
    participants: 1043,
    levelBg: "bg-[#FF4E4E]",
    levelText: "text-white",
  },
  {
    id: 11,
    title: "Challenge #11",
    subtitle: "귀여운 비숑 사진 만들기",
    desc: "귀여운 비숑의 사진을 최대한 리얼리스틱하게 프롬프팅을 적절히 잘 사용해서 만들어봅시다!",
    type: "코딩",
    status: "진행중",
    level: "초급",
    levelColor: "bg-[#249339]",
    typeColor: "bg-[#E7F5FF] text-[#1971C2]",
    levelTextColor: "text-white",
    participants: 1043,
    levelBg: "bg-[#249339]",
    levelText: "text-white",
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
    <div className="bg-[#F8F9FA] min-h-screen font-noto">
      {/* 헤더 */}
      <div className="bg-white flex flex-col items-start overflow-hidden">
        <div className="w-full h-[61px] px-6 pb-[1px] bg-white border-b border-[#E9ECEF] flex items-center justify-between">
          <div className="flex flex-col justify-start items-start">
            <div className="text-[#212529] text-[20px] font-bold font-noto">Prompteer</div>
          </div>
        </div>
        {/* 메인 컨테이너 */}
        <div className="w-full min-h-[1178px] px-24 pb-[396px] bg-[#F8F9FA] flex flex-col items-center gap-8">
          <div className="w-[1248px] max-w-[1248px] p-6 flex flex-col items-start gap-5">
            {/* 상단 카드 */}
            <div className="w-[1199px] flex gap-5">
              <div className="w-[792px] px-12 pt-12 pb-9 bg-gradient-to-r from-[#228BE6] to-[#228BE6] rounded-xl flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="text-white text-[32px] font-bold font-noto leading-tight">Challenge #11</div>
                </div>
                <div className="opacity-90 flex flex-col">
                  <div className="text-white text-[16px] font-light font-noto">알파벳 문자열</div>
                </div>
                <div className="px-6 pt-4 pb-3 bg-white rounded-lg inline-flex items-center mt-4">
                  <div className="text-[#1971C2] text-base font-bold font-noto">지금 도전하기 →</div>
                </div>
              </div>
              <div className="flex-1 px-12 pt-12 pb-9 bg-gradient-to-r from-[#228BE6] to-[#228BE6] rounded-xl flex flex-col justify-center gap-2">
                <div className="flex flex-col">
                  <div className="text-white text-[32px] font-bold font-noto">이름</div>
                </div>
                <div className="opacity-90 flex flex-col">
                  <div className="text-white text-[16px] font-light font-noto">코딩 랭킹. 10</div>
                  <div className="text-white text-[16px] font-light font-noto">이미지 인기 순위. 943</div>
                </div>
              </div>
            </div>
            {/* 검색/필터 */}
            <div className="w-full p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E9ECEF] flex items-center gap-4">
              <div className="flex flex-col">
                <div className="w-[300px] px-[17px] pt-[11px] pb-[9px] bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-[#CED4DA] flex items-center">
                  <input
                    className="w-full bg-transparent text-[#757575] text-[15px] font-normal font-inter focus:outline-none placeholder:text-[#757575]"
                    placeholder="문제 검색..."
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[266px] pl-[568px] flex flex-col items-end">
                <div className="flex gap-2">
                  {filterList.map((f, i) => (
                    <button
                      key={f.label}
                      className={`px-4 pt-[10px] pb-[12px] rounded-md flex flex-col items-center outline-none border-none ${f.active ? "bg-[#1971C2]" : "bg-[#F1F3F5]"}`}
                      style={{ boxShadow: "none" }}
                    >
                      <div className={`text-center text-[14px] font-inter ${f.active ? "text-white font-bold" : "text-[#495057] font-normal"}`}>{f.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* 챌린지 카드 리스트 */}
            <div className="w-full flex gap-5 flex-wrap">
              {challenges.map((c, i) => (
                <div key={i} className="w-[384px] p-[25px] bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E9ECEF] flex flex-col justify-between items-start mb-4" style={{ boxShadow: "none" }}>
                  <div className="w-full pb-3 flex flex-col">
                    <div className="w-full flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="text-[#2F9E44] text-[13px] font-bold font-noto">● {c.status}</div>
                      </div>
                      <div className="px-[10px] py-[4px] rounded-2xl bg-[#E7F5FF] flex flex-col">
                        <div className="text-[#1971C2] text-[13px] font-medium font-noto">{c.type}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col">
                    <div className="text-[#212529] text-[20px] font-bold font-noto leading-tight">{c.title}<br/>{c.subtitle}</div>
                  </div>
                  <div className="w-full pt-2 pb-4 flex flex-col">
                    <div className="text-[#495057] text-[14px] font-light font-noto leading-[21px]">{c.desc}</div>
                  </div>
                  <div className="w-full pb-6 flex flex-col">
                    <div className="flex gap-2">
                      <div className={`px-[10px] py-[4px] rounded-2xl flex flex-col`} style={{ background: c.levelColor.replace('bg-', '') }}>
                        <div className={`text-[13px] font-bold font-noto text-white`}>{c.level}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pt-[17px] border-t border-[#E9ECEF] flex gap-4">
                    <div className="min-w-[111.8px] flex flex-col">
                      <div className="text-[#495057] text-[14px] font-light font-noto">🧑 {c.participants}명 참가 중</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
