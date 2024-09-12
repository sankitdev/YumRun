import "../../index.css";

function BannerShimmer() {
  return (
    <>
      <div className="my-2 px-2 h-48 flex gap-5 items-center overflow-x-auto hide-scrollbar bg-slate-400 animate-pulse">
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="h-32 w-32 bg-slate-300 rounded-full flex-shrink-0 animate-pulse pulse-bg"
            ></div>
          ))}
      </div>
    </>
  );
}

export default BannerShimmer;
