import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function UserProfileSection() {
  // Filter options data
  const filterOptions = [
    { id: "latest", label: "최신순", isActive: true },
    { id: "popular", label: "인기순", isActive: false },
    { id: "difficulty", label: "난이도순", isActive: false },
    { id: "coding", label: "코딩 문제", isActive: false },
    { id: "image", label: "이미지 문제", isActive: false },
  ];

  return (
    <div className="flex items-center gap-4 p-[25px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#e9ecef]">
      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div className="w-[300px]">
          <Input
            className="h-[42px] px-[17px] py-[10px] [font-family:'Inter-Regular',Helvetica] text-[15px] text-[#757575] border-[#ced4da]"
            placeholder="문제 검색..."
            type="search"
          />
        </div>
      </div>

      <div className="flex flex-col min-w-[266px] items-end pl-[568px] pr-0 py-0 relative flex-1 grow">
        <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] ml-[-181.00px]">
          {filterOptions.map((option) => (
            <Button
              key={option.id}
              variant="ghost"
              className={`h-auto pt-2.5 pb-3 px-4 rounded-md ${option.isActive
                  ? "bg-[#1971c2] text-white [font-family:'Inter-Bold',Helvetica] font-bold"
                  : "bg-[#f1f3f5] text-[#495057] [font-family:'Inter-Regular',Helvetica] font-normal"
                }`}
            >
              <span className="text-sm mt-[-1.00px]">{option.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}