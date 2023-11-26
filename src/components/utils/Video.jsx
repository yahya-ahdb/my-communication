import React, { useRef, useEffect } from 'react';
import { apiUrl } from '../../constans/url';
import { Avatar } from '@mui/material';

function VideoPlayer({ id }) {
  

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    document.onkeydown = function (e) {
      if (e.keyCode === 123) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        e.preventDefault();
      }
    };
  }, []);

  return (
    <>

    <div className='p-5' data-vjs-player>
      <iframe src={id} style={{position: "relative"}}  className="video-js vjs-default-skin" width="640" height="360" />
      <Avatar sx={{position : "absolute", top: 20 , left :12 ,width: "100px", height: "100px", zIndex : 10000}} src='logo.svg' />
    </div>
    </>
  );
}

export default VideoPlayer;
