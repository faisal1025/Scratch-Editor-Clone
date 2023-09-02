import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Header from "./components/Utility/Header";
import Category from "./components/Category/Category";
import SpritManager from "./components/Sprit/SpritManager";
import Icon from "./components/Utility/Icon";

export default function App() {
  return (
    <>
    <Header />
    <div className="bg-blue-100 pt-4 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">

        <div className="flex-1 h-screen overflow-hidden flex flex-col bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <div className="bg-slate-600 h-15">
            <ul className="flex flex-row font-medium lg:flex-row lg:mt-0">
              <li className="border-4 p-3 rounded-t-lg">Code</li>
            </ul>
          </div>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Category />
            <Sidebar /> 
            <MidArea />
          </div>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <div className="bg-slate-600 h-15">
            <ul className="flex flex-row justify-start font-medium lg:flex-row lg:mt-0">
              <li className="border-4 p-3 rounded-t-lg ">
                <button class="rounded-full hover:rounded-lg"><Icon name="flag" size={15} className="text-green-600 mx-2" /></button>
              </li>
              <li className="border-4 p-3 rounded-t-lg ">
                <button class="rounded-full hover:rounded-lg"><Icon name="stop" size={15} className="text-red-600 mx-2" /></button>
              </li>
            </ul>
          </div>
          <div className="border-t border-green-100 border-4" style={{minHeight: '70vh'}}>
            <PreviewArea />
          </div>
          <div>
            <SpritManager />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
