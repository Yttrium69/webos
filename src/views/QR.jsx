import { useEffect, useRef, useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { Navigate } from "react-router-dom";
import $ from "jquery";

function Qrpage(props) {
  const video_style = {
    padding: 0,
    margin: " auto",
    "max-width": "30rem",
    "max-height": "30rem",
    top: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
  };
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
        }}
        onError={(error) => console.log(error)}
      />
    </div>
  );
}

export default Qrpage;
