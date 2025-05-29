/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, Send } from "lucide-react"
import { notFound } from "next/navigation"
import { programsData } from "@/app/data/programData"
import { batchesData } from "@/app/data/BatchData"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"
import { FiEdit2 } from "react-icons/fi"
import { RiDeleteBinFill } from "react-icons/ri"
import { FaPlus } from "react-icons/fa6"

const tabs = ["Overview", "Batches", "Players", "Prices"]

function BatchesTab({ programId }: { programId: string }) {
  const batches = batchesData[programId as keyof typeof batchesData] || []

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {batches.map((batch) => (
        <div
          key={batch.id}
          className="bg-white rounded-lg border border-gray-200 p-4 w-[full] max-w-sm mx-auto h-[377px]"
        >
          <div className="mb-3">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900">{batch.title}</h4>
              <span className="text-xs text-gray-600">{batch.capacity}</span>
            </div>

            <Badge
              variant="secondary"
              className={`${batch.level === "Beginner"
                ? "bg-green-100 text-green-700"
                : batch.level === "Intermediate"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-red-100 text-red-700"
                }`}
            >
              {batch.level}
            </Badge>
          </div>

          <div className="space-y-4 text-sm text-gray-600 mb-4">
            <div>{batch.dateRange}</div>
            <div>{batch.location}</div>
            <div>{batch.sessions} Sessions</div>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{batch.description}</p>

          <div className="flex gap-2">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600">View Details</Button>
            <Button variant="outline" className="flex-1">
              Pricelist
            </Button>
          </div>
        </div>
      ))}

      <div className="lg:hidden fixed bottom-13 left-6 right-6 z-50">
        {/* Blur backdrop */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-lg border border-white/20  "

        ></div>

        {/* Buttons container */}
        <div className="relative w-full p-2 flex gap-3 justify-center ">
          <Button className="w-[125px] h-[38px] rounded-[28px] bg-[#00B2D9] text-white"><FaPlus />Add Batch</Button>
          
        </div>
      </div>
    </div>
  )
}
/* interface PageProps {
  params: {
    id: string;
  };
} */

export default function Page({ params }: any) {
  const [activeTab, setActiveTab] = useState("Overview")
  const programData = programsData[params.id as keyof typeof programsData]

  if (!programData) notFound()

  const renderTabContent = () => {
    switch (activeTab) {
      case "Batches":
        return <BatchesTab programId={params.id} />
      case "Players":
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Players</h3>
            <p className="text-gray-600">Players management coming soon...</p>
          </div>
        )
      case "Prices":
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Prices</h3>
            <p className="text-gray-600">Pricing information coming soon...</p>
          </div>
        )
      default:
        return (
          <div className="bg-white border border-gray-200 rounded-lg">
            {/* Hero Image */}
            <div className="relative w-full h-[294px] rounded-[16px] overflow-hidden">
              <Image
                src="/images/smash101.png"
                alt={`${programData.title} Hero`}
                fill
                className="object-cover object-top rounded-[26px] p-[10px]"
                priority
              />
            </div>


            {/* Gallery */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="flex gap-3 overflow-x-auto">
                {[1, 2].map((i) => (
                  <Image
                    key={i}
                    src="/images/smash101.png"
                    alt={`Gallery ${i}`}
                    width={120}
                    height={80}
                    className="rounded-lg "
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{programData.description}</p>
            </div>

            {/* Discussions */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Discussions</h3>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2 border rounded-lg p-4 border-[#E7E7E7]">
                {programData.discussions.map((discussion) => (
                  <div key={discussion.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {discussion.user.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{discussion.user}</span>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${discussion.role === "Coach"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                            }`}
                        >
                          {discussion.role}
                        </Badge>
                        <span className="text-xs text-gray-500">{discussion.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{discussion.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2 border border-[#E7E7E7] mt-4 p-2 rounded-2xl">
                <Input placeholder="Type a message..." className="border-none flex-1" />
                <Button size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="bg-gray-100 md:flex min-h-screen">
      <Sidebar />
      <div className="p-4 sm:p-4 flex-1 w-full">
        {/* Breadcrumb */}
        <div className="mb-6 pt-6">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700 text-base">
              Programs
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-semibold text-base">{programData.title}</span>
          </div>

          {/* Title & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex justify-between items-center md:block">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {programData.title}
                </h1>

  
                {activeTab === "Overview" && (
                 <div className="flex gap-2 lg:hidden">
                  <FiEdit2 className="text-[20px]" />
                  <RiDeleteBinFill className="ml-3 text-[20px]" />
                </div>
                )} 


              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab
                      ? "bg-gray-800 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>


            </div>

            {activeTab === "Overview" && (
              <div className="max-lg:hidden">
              <Button className="w-[79px] h-[36px] rounded-[34px] border">Edit</Button>
              <Button className="w-[104px] h-[36px] rounded-[34px] border ml-2">Remove</Button>
              </div>
            )}

            {activeTab === "Batches" && (
              <Button className="w-[144px] h-[44px] rounded-[28px] bg-[#00B2D9] text-white max-md:hidden"><FaPlus />Add Batch</Button>
            )}
            

          </div>
        </div>

    
        {renderTabContent()}
      </div>
    </div>
  )
}
