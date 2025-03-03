export default function LevelUpBanner() {
  return (
    <div className="bg-blue-400 p-8 relative overflow-hidden border border-black rounded-none hidden sm:block">
      <div className="max-w-2xl relative z-10">
        <h2 className="text-2xl font-bold text-black mb-2">增強遊戲體驗!</h2>
        <p className="text-black/80">
          探索遊戲內容的世界。發現新遊戲、向專家學習並了解最新趨勢和新聞。
        </p>
      </div>
      <div className="absolute top-0 right-0 w-64 h-full">
        <div className="relative w-full h-full">
          <div className="absolute top-4 right-4 animate-pulse">
            <span className="text-3xl">⚡</span>
          </div>
          <div className="absolute top-12 right-12 animate-bounce">
            <span className="text-3xl">⭐</span>
          </div>
          <div className="absolute top-8 right-24">
            <span className="text-3xl">❤️</span>
          </div>
          <div className="absolute top-20 right-8">
            <span className="text-3xl">💎</span>
          </div>
          <div className="absolute top-16 right-20">
            <span className="text-3xl">🗡️</span>
          </div>
          <div className="absolute top-4 right-32">
            <span className="text-3xl">🛡️</span>
          </div>
        </div>
      </div>
    </div>
  );
}
