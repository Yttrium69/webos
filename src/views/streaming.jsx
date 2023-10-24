import React, {useRef, useState, useEffect} from "react";
import Info_card from "../components/info_card";
import $ from 'jquery';

function Streaming(){

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      function getRandomNumber() {
        return Math.floor(Math.random() * 4)+1;
      }
    //let dot_list = [{"name":"1", "x":100, "y": 100, "dst":["2", "3"]}, {"name":"2", "x":100, "y": 300, "dst":["1", "3"]}, {"name":"3", "x":200, "y": 200, "dst":["3"]}, {"name":"4", "x":300, "y": 100, "dst":["3"]}, {"name":"5", "x":300, "y": 300, "dst":["3"]}];


    let dot_list_1=[
        {
            "name": "LWrist",
            "x": 202,
            "y": 399,
            "dst": [
                "LElbow"
            ]
        },
        {
            "name": "LElbow",
            "x": 224,
            "y": 442,
            "dst": [
                "LShoulder"
            ]
        },
        {
            "name": "LShoulder",
            "x": 235,
            "y": 468,
            "dst": [
                "RShoulder",
                "LHip"
            ]
        },
        {
            "name": "RShoulder",
            "x": 290,
            "y": 481,
            "dst": [
                "RElbow",
                "RHip"
            ]
        },
        {
            "name": "RElbow",
            "x": 315,
            "y": 438,
            "dst": [
                "RWrist"
            ]
        },
        {
            "name": "RWrist",
            "x": 321,
            "y": 410,
            "dst": [
                "RWrist"
            ]
        },
        {
            "name": "LHip",
            "x": 240,
            "y": 375,
            "dst": [
                "RHip",
                "LKnee"
            ]
        },
        {
            "name": "LKnee",
            "x": 234,
            "y": 282,
            "dst": [
                "LAnkle"
            ]
        },
        {
            "name": "LAnkle",
            "x": 234,
            "y": 214,
            "dst": [
                "LAnkle"
            ]
        },
        {
            "name": "RHip",
            "x": 290,
            "y": 372,
            "dst": [
                "RKnee"
            ]
        },
        {
            "name": "RKnee",
            "x": 298,
            "y": 289,
            "dst": [
                "RAnkle"
            ]
        },
        {
            "name": "RAnkle",
            "x": 296,
            "y": 215,
            "dst": [
                "RAnkle"
            ]
        }
    ]

    let dot_list_2=[
        {
            "name": "LWrist",
            "x": 199,
            "y": 400,
            "dst": [
                "LElbow"
            ]
        },
        {
            "name": "LElbow",
            "x": 221,
            "y": 438,
            "dst": [
                "LShoulder"
            ]
        },
        {
            "name": "LShoulder",
            "x": 236,
            "y": 470,
            "dst": [
                "RShoulder",
                "LHip"
            ]
        },
        {
            "name": "RShoulder",
            "x": 287,
            "y": 478,
            "dst": [
                "RElbow",
                "RHip"
            ]
        },
        {
            "name": "RElbow",
            "x": 312,
            "y": 439,
            "dst": [
                "RWrist"
            ]
        },
        {
            "name": "RWrist",
            "x": 322,
            "y": 411,
            "dst": [
                "RWrist"
            ]
        },
        {
            "name": "LHip",
            "x": 238,
            "y": 371,
            "dst": [
                "RHip",
                "LKnee"
            ]
        },
        {
            "name": "LKnee",
            "x": 237,
            "y": 285,
            "dst": [
                "LAnkle"
            ]
        },
        {
            "name": "LAnkle",
            "x": 234,
            "y": 213,
            "dst": [
                "LAnkle"
            ]
        },
        {
            "name": "RHip",
            "x": 292,
            "y": 373,
            "dst": [
                "RKnee"
            ]
        },
        {
            "name": "RKnee",
            "x": 299,
            "y": 286,
            "dst": [
                "RAnkle"
            ]
        },
        {
            "name": "RAnkle",
            "x": 296,
            "y": 215,
            "dst": [
                "RAnkle"
            ]
        }
    ]
    let dot_list_3 = [
        {
            "name": "LWrist",
            "x": 200,
            "y": 400,
            "dst": [
                "LElbow"
            ]
        },
        {
            "name": "LElbow",
            "x": 222,
            "y": 440,
            "dst": [
                "LShoulder"
            ]
        },
        {
            "name": "LShoulder",
            "x": 236,
            "y": 468,
            "dst": [
                "RShoulder",
                "LHip"
            ]
        },
        {
            "name": "RShoulder",
            "x": 288,
            "y": 480,
            "dst": [
                "RElbow",
                "RHip"
            ]
        },
        {
            "name": "RElbow",
            "x": 313,
            "y": 438,
            "dst": [
                "RWrist"
            ]
        },
        {
            "name": "RWrist",
            "x": 322,
            "y": 412,
            "dst": [
                "RWrist"
            ]
        },
        {
            "name": "LHip",
            "x": 238,
            "y": 373,
            "dst": [
                "RHip",
                "LKnee"
            ]
        },
        {
            "name": "LKnee",
            "x": 236,
            "y": 283,
            "dst": [
                "LAnkle"
            ]
        },
        {
            "name": "LAnkle",
            "x": 235,
            "y": 213,
            "dst": [
                "LAnkle"
            ]
        },
        {
            "name": "RHip",
            "x": 292,
            "y": 371,
            "dst": [
                "RKnee"
            ]
        },
        {
            "name": "RKnee",
            "x": 300,
            "y": 287,
            "dst": [
                "RAnkle"
            ]
        },
        {
            "name": "RAnkle",
            "x": 297,
            "y": 217,
            "dst": [
                "RAnkle"
            ]
        }
    ]

        function make_skeleton(dot_list) {
            $(".canv_container").empty();
            $(".canv_container").append('<canvas style="background-color:white;" id="myCanvas" width="1000" height="720"></canvas>');
            dot_list.forEach((src) => {
              const dst_list = src.dst;
              dst_list.forEach((dst_name) => {
                const dst = get_dot_from_dots(dst_name, dot_list);
                console.log(dst);
                if (dst) {
                  draw_line(src, dst);
                }
              });
            });
          }

        function draw_line(src, dst){

            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext("2d");
            ctx.lineWidth = 5;
            ctx.strokeStyle = getRandomColor();
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(src.x+300, 700-src.y+getRandomNumber());
            ctx.lineTo(dst.x+300, 700-dst.y+getRandomNumber());

            // ctx.moveTo(getRandomNumber(), getRandomNumber());
            // ctx.lineTo(getRandomNumber(), getRandomNumber());
            ctx.stroke();
            ctx.closePath();
        }

        function get_dot_from_dots(name, dot_list){
            const res = dot_list.find(item=>item.name == name);
            return res;
        }
    $(document).ready(function(){


        // setInterval(() => {
        //     // make_skeleton(dot_list);

        //     $(document).ready(function () {
        //         fetch('http://165.246.44.97:8080/cord/qrdata', {method:'POST', mode:'cors',})
        //         .then((response) => {
        //           if(response.ok) {
        //             return response.json();
        //           }  
        //           throw new Error('Network response was not ok.');
        //         }).then((data) => {
        //             // console.log(data.data[0]);
        //             make_skeleton(dot_list_1);
        //         })
        //         .catch((error) => {
        //           console.log(`error: ${error}`)
        //       });
        
        //     })
        //   }, 10 * 100);


        setInterval(()=>{
            make_skeleton(dot_list_1);
        }, 1*100)


      
    });




    return (
        <div id="page_streaming">
    <div className="grid_left">
        <div className="video_curtime_btn_pack">
            <div className="cur_time">2023. 10. 01 19:57:23</div>
            <div className="canv_container">
            <canvas style={{"backgroundColor":"white"}} id="myCanvas" width="1000" height="720"></canvas>
            </div>

            {/* <div className="video_container">
                <video className="streaming_video"></video>
            </div> */}
            <div className="btn_container">
                <button  onClick={()=>{window.location.href='/'}} className="btn_back">돌아가기</button>
            </div>
        </div>
    </div>
    <div className="grid_right">
        <Info_card name="kcs"></Info_card>
        <div className="btns_container">
            <button onClick={()=>{window.location.href='/backwork'}} className="backwork">Backwork 조치</button>
            <button onClick={()=>{window.location.href='/write_comment'}} className="write_comment">소견 작성</button>
        </div>
    </div>
</div>
    )
}

export default Streaming