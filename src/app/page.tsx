"use client"
import Sidebar from "../components/Sidebar";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation";
import { useState } from "react";

const tabs = ["Published", "Archived", "Players", "Prices"];

const programs = [
  {
    id: "smash-101",
    title: "Smash 101",
    batches: 4,
    description:
      "Beginner level badminton training with professional coaches. Learn basic techniques and fundamentals...",
    image: "/images/Batch1.png",
    tag: "Beginner",
  },
  {
    id: "smash-102",
    title: "Smash 102",
    batches: 6,
    description: "Intermediate level training focusing on advanced techniques and competitive strategies...",
    image: "/images/Batch2.png",
    tag: "Intermediate",
  },
  {
    id: "smash-103",
    title: "Smash 103",
    batches: 8,
    description: "Advanced professional training for competitive players. Master advanced techniques and tactics...",
    image: "/images/Batch3.png",
    tag: "Advanced",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("Published");
  const router = useRouter();

  return (
    <div className="bg-gray-100 md:flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8">
        {/* Header */}

        <div className="flex flex-col">
          <h1 className="text-black font-semibold text-lg mb-4 lg:mb-0">Brisbane Badminton Club</h1>
        </div>

        {/* Program Tabs */}
        <div className="mb-6 md:mt-6 bg-[#f6f6f6]  rounded-[17px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

            {/* Left Side: Title + Tabs */}
            <div>
              <h2 className="text-base font-semibold mb-2">Programs</h2>
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={` text-sm font-medium rounded-full border w-[72px] h-[31px] md:w-[82px] md:h-[31px] ${activeTab === tab
                        ? "bg-gray-800 text-white border-gray-800"
                        : "text-gray-600 border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex gap-3 max-md:hidden">
              <Button
                variant="outline"
                className="bg-white border border-[#00B2D9] text-[#00B2D9] hover:bg-[#e6f9fc] px-4 py-2 rounded-full"
              >
                Upload Media
              </Button>
              <Button className="bg-[#00B2D9] hover:bg-[#00A5CB] text-white px-4 py-2 rounded-full flex items-center gap-1">
                <span className="text-xl leading-none">+</span> Add Program
              </Button>
            </div>

          </div>
        </div>


        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                    <Badge variant="outline" className="text-gray-600">
                      Badminton
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-700 mb-3 font-semibold">{program.batches} Batches</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{program.description}</p>
                </div>

                <Button
                  className="w-[101px] bg-[#FC9117F0] hover:bg-orange-600 text-white"
                  onClick={() => router.push(`/programs/${program.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden fixed bottom-13 left-6 right-6 z-50">
        {/* Blur backdrop */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl"

        > </div>

        {/* Buttons container */}
        <div className="relative p-4 flex gap-3 justify-center">
          <Button
            variant="outline"

            className="flex-1 max-w-[140px] bg-white border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg rounded-[28px]"
          >

            Upload Media
          </Button>
          <Button

            className="flex-1 max-w-[140px] bg-[#00B2D9] hover:bg-[#00B2D9] text-white shadow-lg rounded-[28px]"
          >

            Add Program
          </Button>
        </div>
      </div>
    </div>
  );
}
