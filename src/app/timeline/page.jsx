"use client";

import Image from "next/image";
import CallImage from "../../Assets/Images/Call.png";
import TextMessage from "../../Assets/Images/text.png";
import VideoCall from "../../Assets/Images/video.png";
import { useHooks } from "@/Components/Context/ProveiderContext";
import { useState } from "react";

const icons = {
  call: <Image src={CallImage} alt="handImage" />,
  text: <Image src={TextMessage} alt="handImage" />,
  video: <Image src={VideoCall} alt="handImage" />,
};

const TimelinePage = () => {
  const { clicks } = useHooks();

  const [filterType, setFilterType] = useState("all");

  const filtered = clicks.filter(
    (item) => filterType === "all" || item.type === filterType,
  );

  return (
    <section>
      <div className="container mx-auto px-2 pt-5 pb-10">
        <header className="space-y-5">
          <h2 className="text-5xl font-bold">Timeline</h2>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="mb-6 w-68 rounded-md border border-gray-300 bg-white px-3 py-2 text-2xl font-semibold text-gray-700 shadow-sm transition focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option value="all" disabled hidden>
              Filter timeline
            </option>

            <option value="all">All Activity</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </header>

        {filtered.length === 0 ? (
          <div className="flex items-center justify-center h-100">
            <p className="text-3xl font-bold">
              No call, text, or video available
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mt-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-base-300 p-5 border border-gray-200 rounded-xl"
              >
                <div className="flex items-center gap-5">
                  {icons[item.type]}

                  <div>
                    <h4 className="text-2xl font-semibold">
                      <span className="text-[#244d3f] capitalize">
                        {item.type}
                      </span>{" "}
                      with {item.friendName}
                    </h4>

                    <p className="text-xl font-semibold">{item.date}</p>
                  </div>
                </div>

                <h2 className="text-lg font-bold">{item.time}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TimelinePage;
