import React from "react";

export default function WhyJoinUs() {
    const card = {
        border: "1px solid black",
        borderRadius:"5px",
        margin: " 2rem 3rem",
        padding: "5rem 3rem",
        backgroundColor: "#212121",
        color: "#fff",
    }
    const cardBody = {
        height: "100%",
        width: "100%",
    }
    return (
        <>
            <div className="container" style={{maxWidth:" 100vw"}}>
                <div className="flex">
                    <div className="joinUs hover:animate-pulse">
                        <div style={card}>
                            <div style={cardBody}>
                                <h5 className="card-title font-bold py-2" style={{margin: "auto", padding:"2rem 0", fontSize:"2rem"}}>Why GDSC ?</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="joinUs hover:animate-pulse">
                        <div style={card}>
                            <div style={cardBody}>
                                <h5 className="card-title font-bold py-2" style={{margin: "auto", padding:"2rem 0", fontSize:"2rem"}}>Why GDSC ?</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="joinUs hover:animate-pulse">
                        <div style={card}>
                            <div style={cardBody}>
                                <h5 className="card-title font-bold py-2" style={{margin: "auto", padding:"2rem 0", fontSize:"2rem"}}>Why GDSC ?</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}