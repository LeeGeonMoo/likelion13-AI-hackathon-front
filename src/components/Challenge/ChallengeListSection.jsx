import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import challenges from "../../dummy/challenges";

export default function ChallengeListSection() {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <Card
          key={challenge.id}
          className="flex flex-col justify-between p-6 bg-white rounded-xl border border-solid border-[#e9ecef] h-full"
        >
          <CardHeader className="p-0 pb-3">
            <div className="flex items-center justify-between w-full">
              <div className="font-bold text-[#2f9e44] text-xs">{challenge.challenge_type}</div>
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