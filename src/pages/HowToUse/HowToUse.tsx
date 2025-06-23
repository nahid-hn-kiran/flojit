import MainLayout from "@/layouts/MainLayout";
import ReactPlayer from "react-player/lazy";

/**
 * A "How to Use" page that displays a title and a large, centered video player.
 * It uses the react-player library for robust video playback.
 * The styling is designed to match the provided image and uses the existing theme.
 */
const HowToUse = () => {
  return (
    <MainLayout>
      <div className="container py-12 md:py-16">
        <div>
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-8">
            Flogit.je - virtual tour and instructions
          </h1>

          {/* Video Player Section */}
          <div
            className="relative w-full overflow-hidden rounded-card shadow-lg bg-black"
            // This creates a 16:9 aspect ratio container for the video
            style={{ paddingTop: "56.25%" }}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=AA0UZVXJd2o&ab_channel=8KVIDEOSULTRAHD" // Example video URL
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              controls={true} // Show native video controls
              light={true} // Show a preview image and play icon
              playing={false}
              pip={true}
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 0,
                    modestbranding: 1,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowToUse;
