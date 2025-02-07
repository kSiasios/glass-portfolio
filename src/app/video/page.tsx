const VideoPage = () => {
  return (
    <div>
      <video className="w-full h-full max-h-screen" controls>
        <source src="/public_assets/videos/video.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
