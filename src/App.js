// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import  MyVideoList  from './videoPlayer/video player';
import VideoPlayer from './videoPlayer/video player';
// import MovieTickets from './component/movie-ticket';
// import { ProductListing } from './component/product-list';

// function App() {
// const videoList=[
//   {title:'Video 1',url:"https://youtu.be/vQPgEm9jAJI?si=hWRzss-ZdydKecMT"},
// {title:'video 2',url:"https://youtu.be/vQPgEm9jAJI?si=UP-9bKgLFBSWxRcG"},]
// return (
// <div className="App">
{/* <MovieTickets></MovieTickets> */ }
{/* <ProductListing></ProductListing> */ }
{/* <MyPlayer></MyPlayer> */ }
{/* <h1>React video player with List</h1> */ }
{/* <VideoPlayer videoList={videoList}></VideoPlayer> */ }
{/* <MyVideoList></MyVideoList> */ }
{/* </div> */ }
// );
// }

const App = () => {
  const videoList = [
    { title: 'Video 1', url:require("../src/videoPlayer/bird.mp4") },
    { title: 'Video 2', url:require("../src/videoPlayer/butterfly.mp4")},
    { title: 'video 3', url:require("../src/videoPlayer/nature.mp4")},
    
    // Add more videos as needed
  ];

  return (
    <div>
      <h1>React Video Player with List</h1>
      <VideoPlayer videoList={videoList} />
    </div>
  );
};

export default App;
