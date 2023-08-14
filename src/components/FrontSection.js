import React from "react";
import img1 from "../images/front.png";

export default function FrontSection(){
    const containerstyle = {
        background: "#f6fcff",
        padding: "15vh 8vw",
        borderRadius: "0px 0px 20px 20px",
    }
    const makemecenter = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alingItem: "center",
    }
    const buttonstyle = {
        margin: "10px 18px",
        padding: "8px 14px",
        background: "#2563EB",
        borderRadius: "20px",
        width: "25%",
        color: "#fff",
        fontSize: "1.3rem",
    }
    // const gradientMe = {
    //     backgroundImage: "linear-gradient(to right, pink, orange)",
    //     color: "transparent",
    //     webkitBackgroundClip: "text",
    //     backgroundClip: "text",
    // }
    return (
        <>
            <div style={containerstyle} className="container-fluid" >
                <div className="columns-2 flex flex-row">
                    <div className="imageArea basis-2/5"  style={makemecenter}>
                        <img src={img1} alt="imgHere" style={{height: ""}}/>
                    </div>
                    <div className="textArea basis-3/5 items-center" style={makemecenter}>
                        <h1 style={{fontSize: "6rem", lineHeight: "1.2", color: "#fff"}} className="font-bold" > <span style={{color:"red"}}>Google</span>  <span style={{color:"green"}}>Development</span> <br /> <span style={{color:"blue"}}>Student</span>  <span style={{color:"yellow"}}>Club</span></h1>
                        <p style={{fontSize: "1rem", lineHeight: "1.2", color: "#616759",margin: "2rem 0rem"}}>Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.</p>
                        <button className=" hover:animate-pulse" style={buttonstyle}> Join Our Community</button>
                        <p style={{fontSize: "1rem", lineHeight: "1.2", color: "#93ADB5",margin: "2rem 0rem"}}>A basic React and Tailwind based website developed by <span className="font-bold">Dev Chouhan</span> .</p>
                    </div>
                </div>
            </div>
        </>
    )
}