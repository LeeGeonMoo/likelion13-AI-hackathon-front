import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
// import challenges from "../../dummy/challenges";

// const useChallengeList = () => {
//   const [challengeList, setChallengeList] = useState([])

//   useEffect(()=>{
//     const fetchChallengeList = async () => {
//       //some fetch Logic
//       setChallengeList(challenges)
//     }

//   },[])

//   return challengeList
// }

export default function ChallengeListSection() {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/challenges/");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setChallenges(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchChallenges();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <Card
          key={challenge.id}
          className="flex flex-col justify-between p-6 bg-white rounded-xl border border-solid border-[#e9ecef] h-full cursor-pointer"
          onClick={() => {
            if (challenge.challenge_type === "코드 생성" || challenge.challenge_type === "CODE") {
              navigate(`/create-code/${challenge.id}`);
            } else {
              navigate(`/create-image/${challenge.id}`);
            }
          }}
        >
          <CardHeader className="p-0 pb-3">
            <div className="flex items-center justify-between w-full">
              <div className="font-bold text-[#2f9e44] text-xs">
                {challenge.challenge_type}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex-1">
            <h3 className="font-bold text-2xl text-[#212529] mb-2 leading-snug">
              {challenge.title}
            </h3>
            <p className="text-sm text-[#495057] mb-4">
              {challenge.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
