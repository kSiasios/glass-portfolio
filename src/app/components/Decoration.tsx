const Decoration = () => {
  return (
    <div
      aria-hidden
      className="max-w-[1440px] aspect-video mx-auto pointer-events-none overflow-hidden blur-[200px] saturate-200 z-0 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
    >
      <div className="absolute top-0 left-0 pointer-events-none aspect-video w-[500px] bg-gradient-conic to-[#FF7676] from-[#A128FF]"></div>
      <div className="absolute bottom-0 left-0 pointer-events-none aspect-video w-[500px] bg-gradient-conic from-[#57FFF5] to-[#57FFF5]/0 rotate-[135deg]"></div>
      <div className="absolute bottom-0 right-0 pointer-events-none aspect-video w-[500px] bg-gradient-conic from-[#57FFF5] to-[#FF00C7] rotate-[135deg]"></div>
    </div>
  );
};

export default Decoration;
