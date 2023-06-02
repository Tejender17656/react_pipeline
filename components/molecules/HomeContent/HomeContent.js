import React from "react";
import { useAppContext } from "@context/Context";
import SimpleButton from "@components/atom/SimpleButton/SimpleButton";

function HomeContent() {
    const [over, setOver] = React.useState(false);
    const { setOpen, setCurrentModal } = useAppContext();

    return (
        <div className="grid grid-cols-3 gap-4 text-center mb-5">
            <div className="place-self-center">
                <div className="table-cell align-middle">
                    <div className="text-[#7b51a1]">USA-Canada</div>
                    <SimpleButton onClick={()=>{setOpen(prev => !prev); setCurrentModal("login");}} variant="contained" className="bg-[#330060] normal-case mt-2">Login</SimpleButton>
                </div>
            </div>
            <div 
                className="place-self-center min-h-[481px]" 
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
            >
                <img src={!over ? "https://uvdistage.mobileprogramming.net/device.jpg" : "/images/lampglow.png"} width="250" className="learn-more"/>
            </div>
            <div className="place-self-center">
                <div className="table-cell align-middle">
                    <div className="text-[#7b51a1]">International</div>
                    <SimpleButton onClick={()=>{setOpen(prev => !prev); setCurrentModal("login");}} variant="contained" className="bg-[#330060] normal-case mt-2">Login</SimpleButton>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;