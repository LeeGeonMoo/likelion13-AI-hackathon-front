import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

export default function ChallengeListSection() {
  const challenges = [
    {
      id: 1,
      status: "진행중",
      category: "코딩",
      categoryColor: "text-[#1971c2]",
      categoryBg: "bg-[#e7f5ff]",
      title: "Challenge #11",
      subtitle: "귀여운 비숑 사진 만들기",
      description:
        "귀여운 비숑의 사진을 최대한 리얼리스틱하게 프롬프팅을 적절히 잘 사용해서 만들어봅시다!",
      difficulty: "초급",
      difficultyColor: "bg-[#239238]",
      participants: "1043명 참가 중",
      position: { top: "0", left: "0" },
    },
    {
      id: 2,
      status: "진행중",
      category: "코딩",
      categoryColor: "text-[#1971c2]",
      categoryBg: "bg-[#e7f5ff]",
      title: "Challenge #12",
      subtitle: "BFS 알골리즘",
      description:
        "여름 휴가 시즌을 겨냥하여 '혼자서도 잘 즐기는 나만의 바캉스' 컨셉의...",
      difficulty: "중급",
      difficultyColor: "bg-[#ffc848]",
      participants: "128명 참가 중",
      position: { top: "0", left: "[408px]" },
    },
    {
      id: 3,
      status: "진행중",
      category: "이미지",
      categoryColor: "text-[#1971c2]",
      categoryBg: "bg-[#e7f5ff]",
      title: "Challenge #12",
      subtitle: "나무 위 개구리 만들기",
      description:
        "아마존 정글 속 나무에 앉아 있는 개구리를 표현해봅시다. 촉촉한 개구리의 표면 질감을 구현해봐요!",
      difficulty: "중급",
      difficultyColor: "bg-[#ffc848]",
      participants: "251명 참가 중",
      position: { top: "0", left: "[816px]" },
    },
    {
      id: 4,
      status: "진행중",
      category: "코딩",
      categoryColor: "text-[#1971c2]",
      categoryBg: "bg-[#e7f5ff]",
      title: "Challenge #11",
      subtitle: "알파벳 문자열",
      description:
        "알파벳 대문자로만 이루어진 문자열 S가 있고, 길이는 N이다. S[i]는 S의 i번째 문자를 나타내고...",
      difficulty: "고급",
      difficultyColor: "bg-[#ff4e4e]",
      participants: "1043명 참가 중",
      position: { top: "[302px]", left: "0" },
    },
    {
      id: 5,
      status: "진행중",
      category: "코딩",
      categoryColor: "text-[#1971c2]",
      categoryBg: "bg-[#e7f5ff]",
      title: "Challenge #12",
      subtitle: "BFS 알골리즘",
      description:
        "귀여운 비숑의 사진을 최대한 리얼리스틱하게 프롬프팅을 적절히 잘 사용해서 만들어봅시다!",
      difficulty: "고급",
      difficultyColor: "bg-[#ff4e4e]",
      participants: "1043명 참가 중",
      position: { top: "[302px]", left: "[408px]" },
    },
    {
      id: 6,
      status: "진행중",
      category: "이미지",
      categoryColor: "text-[#1971c2]",
      categoryBg: "bg-[#e7f5ff]",
      title: "Challenge #13",
      subtitle: "유리 보석 푸딩 만들기",
      description:
        "곳곳에 보석이 박힌 영롱한 반투명 유리 푸딩을 만들어봅시다! 쉽지 않습니다!",
      difficulty: "고급",
      difficultyColor: "bg-[#ff4e4e]",
      participants: "1043명 참가 중",
      position: { top: "[302px]", left: "[816px]" },
    },
  ];

  return (
    <div className="relative self-stretch w-full h-[581px]">
      {challenges.map((challenge) => (
        <Card
          key={challenge.id}
          className={`flex flex-col w-96 items-start justify-between p-[25px] absolute h-[278px] top-${challenge.position.top} left-${challenge.position.left} bg-white rounded-xl border border-solid border-[#e9ecef]`}
        >
          <CardHeader className="flex flex-col items-start pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] p-0">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="w-fit [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#2f9e44] text-[13px] leading-[normal] relative mt-[-1.00px] tracking-[0]">
                  ● {challenge.status}
                </div>
              </div>

              <Badge
                className={`inline-flex flex-col items-start px-2.5 py-1 relative flex-[0_0_auto] ${challenge.categoryBg} rounded-2xl`}
                variant="outline"
              >
                <div
                  className={`w-fit [font-family:'Noto_Sans_KR-Medium',Helvetica] font-medium ${challenge.categoryColor} text-[13px] leading-[normal] relative mt-[-1.00px] tracking-[0]`}
                >
                  {challenge.category}
                </div>
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex-1 w-full">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-[-3.38px]">
              <div className="text-[#212529] text-2xl relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
                {challenge.title} <br />
                {challenge.subtitle}
              </div>
            </div>

            <div className="flex flex-col items-start pt-2 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] mt-[-3.38px]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch [font-family:'Noto_Sans_KR-DemiLight',Helvetica] font-light text-[#495057] text-sm leading-[21px] relative mt-[-1.00px] tracking-[0]">
                  {challenge.description}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto] mt-[-3.38px]">
              <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Badge
                  className={`inline-flex flex-col items-start px-2.5 py-1 relative self-stretch flex-[0_0_auto] ${challenge.difficultyColor} rounded-2xl`}
                >
                  <div className="w-fit [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-white text-[13px] leading-[normal] relative mt-[-1.00px] tracking-[0]">
                    {challenge.difficulty}
                  </div>
                </Badge>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex items-start gap-4 pt-[17px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] mt-[-3.38px] border-t [border-top-style:solid] border-[#e9ecef] p-0">
            <div className="inline-flex flex-col min-w-[111.8px] items-start relative self-stretch flex-[0_0_auto]">
              <div className="w-fit [font-family:'Noto_Sans_KR-DemiLight',Helvetica] font-light text-[#495057] text-sm leading-[normal] relative mt-[-1.00px] tracking-[0]">
                🧑 {challenge.participants}
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}