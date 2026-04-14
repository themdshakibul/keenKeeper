import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCards = ({ friend }) => {
  const base = {
    almost_due: "bg-yellow-400 text-white",
    on_track: "bg-green-700 text-white",
    overdue: "bg-red-500 text-white",
  };

  return (
    <section>
      <Link
        href={`/${friend.id}`}
        className="bg-base-300 p-7 flex flex-col items-center gap-3 rounded-2xl border border-gray-200 h-full cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-gray-400 hover:bg-base-200"
      >
        <Image
          width={150}
          height={150}
          src={friend.image}
          alt={friend.name}
          className="rounded-full object-cover shrink-0"
        />

        <h3 className="text-2xl font-medium text-center w-full truncate">
          {friend.name}
        </h3>

        <p className="text-xl font-semibold text-gray-500 shrink-0">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 flex-1 content-center">
          {friend.tags.map((tag, ind) => (
            <span
              key={ind}
              className="px-3 py-0.5 rounded-full font-medium bg-green-100 text-green-800 uppercase whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`px-3 py-0.5 rounded-full font-medium uppercase shrink-0 ${
            base[friend.status] || "bg-gray-400 text-white"
          }`}
        >
          {friend.status}
        </span>
      </Link>
    </section>
  );
};

export default FriendsCards;
