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
    <div className="w-full grid grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <Card
          key={challenge.id}
          className="flex flex-col justify-between p-6 bg-white rounded-xl border border-solid border-[#e9ecef] h-full"
        >
          <CardHeader className="p-0 pb-3">
            <div className="flex items-center justify-between w-full">
              <div className="font-bold text-[#2f9e44] text-xs">● {challenge.status}</div>
              <Badge className={`${challenge.categoryBg} ${challenge.categoryColor} text-xs`} variant="outline">
                {challenge.category}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex-1">
            <h3 className="font-bold text-2xl text-[#212529] mb-2 leading-snug">
              {challenge.title} <br />
              {challenge.subtitle}
            </h3>
            <p className="text-sm text-[#495057] mb-4">
              {challenge.description}
            </p>
            <Badge className={`${challenge.difficultyColor} text-xs`} variant="solid">
              {challenge.difficulty}
            </Badge>
          </CardContent>

          <CardFooter className="p-0 pt-4 border-t border-[#e9ecef]">
            <span className="text-sm text-[#495057]">🧑 {challenge.participants}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}