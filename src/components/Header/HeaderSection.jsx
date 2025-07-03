import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import user from "../../dummy/user";
// import challenges from "../../dummy/challenges";
import { useNavigate } from "react-router-dom";

export default function HeaderSection() {
  const navigate = useNavigate();
  const [firstChallenge, setFirstChallenge] = useState(null);
  // user는 더미 데이터 사용
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 챌린지 목록에서 첫 번째 챌린지 가져오기
        const challengeRes = await fetch("http://localhost:8000/api/challenges/");
        if (!challengeRes.ok) throw new Error("Failed to fetch challenges");
        const challenges = await challengeRes.json();
        setFirstChallenge(challenges[0] || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!firstChallenge) return <div>데이터 없음</div>;

  const handleChallengeClick = () => {
    if (firstChallenge.challenge_type === "코드 생성" || firstChallenge.challenge_type === "CODE") {
      navigate("/create-code");
    } else {
      navigate(`/create-image/${firstChallenge.id}`);
    }
  };

  return (
    <div className="flex w-[1199px] items-start gap-5 relative">
      {/* Challenge Card */}
      <Card
        className="flex flex-col w-[792px] items-start gap-2 pt-12 pb-9 px-12 rounded-xl bg-[linear-gradient(90deg,rgba(34,139,230,1)_100%)] border-0 shadow-none cursor-pointer"
        onClick={handleChallengeClick}
      >
        <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
          <div className="flex flex-col items-start w-full">
            <h2 className="text-white text-[32px] self-stretch mt-[-1.00px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
              {firstChallenge.title}
            </h2>
            <p className="text-white text-base mt-2 opacity-90">
              {firstChallenge.challenge_type}
            </p>
          </div>
          <Button
            className="mt-2 text-[#1971c2]  hover:text-[#1971c2] rounded-lg px-6 py-0 hover:scale-105 h-auto"
          >
            <span className="[font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-base tracking-[0] leading-[normal] whitespace-nowrap">
              지금 도전하기 →
            </span>
          </Button>
        </CardContent>
      </Card>

      {/* Profile Card */}
      <Card className="flex flex-col items-start justify-center gap-2 pt-12 pb-9 px-12 flex-1 self-stretch rounded-xl bg-[linear-gradient(90deg,rgba(34,139,230,1)_100%)] border-0 shadow-none">
        <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
          <div className="flex flex-col items-start w-full">
            <h2 className="mt-[-1.00px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
              {user.nickname}
            </h2>
            <p className="[font-family:'Noto_Sans_KR-DemiLight',Helvetica] font-light text-white text-base leading-[normal] tracking-[0]">
              {user.email}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
