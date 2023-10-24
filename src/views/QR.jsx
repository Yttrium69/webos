import { useEffect, useRef, useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { Navigate } from "react-router-dom";
import $ from "jquery";
import { string } from "prop-types";

function Qrpage(props) {
  const video_style = {
    padding: 0,
    margin: " auto",
    "width": "30rem",
    "height": "30rem",
    top: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
  };

  function post_qrcode(data){
    const headers = new Headers({
      'Content-Type': 'application/json',
  });
  
    const request = new Request('http://165.246.44.97:8080/api/qrdata', {
      method: 'POST',
      headers,
      body: JSON.stringify({"qr":data}),
  });
  
    fetch(request)
          .then((response) => {
            if(response.ok) {
              return response.json();
            }  
            throw new Error('Network response was not ok.');
          })
          .then((res)=>{console.log(res);})
          .catch((error) => {
            console.log(`error: ${error}`)
        });
  }

 
  return (
    <div className="page_QR" style={{ height: "80vh", overflow: "hidden" }}>
      <p className="address_span">QR을 스캔하세요</p>
      <a href=""></a>
      <QrScanner
        videoStyle={video_style}
        constraints={"user"}
        onDecode={(result) => {
          $("a").attr("href", result);
          $("a").text(result);
          post_qrcode(result);
          window.location.href='/backwork';
        }}
        onError={(error) => console.log(error)}
      />
    </div>
  );
}

export default Qrpage;
