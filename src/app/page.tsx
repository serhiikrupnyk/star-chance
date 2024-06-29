"use client";
import Footer from "@/components/Footer";
import GamesButtonsBar from "@/components/GamesButtonsBar";
import GamesList from "@/components/GamesList";
import MainSlider from "@/components/MainSlider";
import NavBar from "@/components/NavBar";
import WinsList from "@/components/WinsList"

export default function Home() {
  return (
    <main>
      <NavBar />
      <MainSlider />
      <GamesButtonsBar />
      <div className="flex flex-row pl-2 pr-2 space-between pt-[20px]">
        <div className="mx-auto flex flex-row container bg-[#271248]">
          <GamesList />
          <div className="min-h-[1em] w-0.5 self-stretch bg-gray-600 dark:bg-gray/10 hidden lg:block"></div>
          <WinsList />
        </div>
      </div>
      <Footer />
    </main>
  );
}
