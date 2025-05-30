import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import { GiShuttlecock } from 'react-icons/gi';
import { IoSettingsSharp } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import { TbReportSearch } from 'react-icons/tb';
export default function Sidebar() {
  return (
    <div>
      {/* for desktop */}
      <div className="w-[194px] h-full hidden md:block  bg-white border-r border-gray-200 min-h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-cyan-500">TDINGO</h1>
        </div>

        <nav className="px-4 space-y-2">
          <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg">
            <div className="w-4 h-4 mr-3" />
            Programs
          </div>
          <div className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-4 h-4 mr-3" />
            Reports
          </div>
          <div className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-4 h-4 mr-3" />
            Settings
          </div>
        </nav>
      </div>

      {/* for mobile */}
      <div className='md:hidden'>
        <div className="flex items-center justify-between  p-6">
            <h1 className="text-[30px] font-bold text-cyan-500">TDINGO</h1>
          
           <FaRegBell className="w-5 h-5 text-gray-600 text-[30px]" />
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden z-50">
        <div className="flex justify-around">
          <div className="flex flex-col items-center py-2 ">
            <GiShuttlecock />
            <span className="text-xs text-gray-900 mt-1 font-bold">Programs</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <TbReportSearch />
            <span className="text-xs text-gray-400 mt-1 font-semibold">Reports</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <IoSettingsSharp />
            <span className="text-xs text-gray-400 mt-1 font-semibold">Settings</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <RxAvatar />
            <span className="text-xs text-gray-400 mt-1 font-semibold">Profile</span>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
