import React, { useEffect, useState } from "react";

function Video() {
  const [video, setVideo] = useState({});

  const fetchVideo = async () => {
    try {
      const response = await fetch(
        "https://images-api.nasa.gov/search?media_type=video"
      );
      const vidres = await response.json();
      const videos = vidres.collection.items;
      let random = Math.floor(Math.random() * videos.length);
      const randomvideo = videos[random].href;
      console.log(videos);
      console.log(randomvideo);
      const videores = await fetch(randomvideo);
      const responsevideo = await videores.json();
      console.log(responsevideo);

      const mp4file = responsevideo.find((item) => item.endsWith(".mp4"));
      console.log(mp4file);
      
      setVideo(mp4file);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div>
      <video className="video" src={video} width="100%" height="500" controls />
    </div>
  );
}

export default Video;
