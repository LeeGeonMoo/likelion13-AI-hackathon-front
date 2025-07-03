import React from "react";
import user from "../../dummy/user";

export default function UserProfileSection() {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-200">
      <div className="text-lg font-bold mb-1">{user.nickname}</div>
      <div className="text-gray-500 text-sm">{user.email}</div>
    </div>
  );
}