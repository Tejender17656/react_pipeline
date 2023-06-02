import { useState } from "react";
import { useAppContext } from "@context/Context";
import SimpleButton from "@components/atom/SimpleButton/SimpleButton";
import Link from 'next/link';

function DashboardContent() {
    const [over, setOver] = useState(false);
    const { setOpen } = useAppContext();

    return (
        <div className="grid grid-cols-3 gap-4 text-center mb-5">
            <div className="place-self-center">
                <div className="align-middle w-[12rem]">
                    <div className="text-[#7b51a1]">Smart Data Reporting Registered Users</div>
                    <a href="/cms/dashboard">
                        <SimpleButton variant="contained" className="bg-[#330060] mt-2 normal-case">
                            View
                        </SimpleButton>
                    </a>
                </div>
                <div className="align-middle mt-[6rem]">
                    <div className="text-[#7b51a1]">Education Portal</div>
                    <a href="https://uvdistage.mobileprogramming.net/usa-canada/educationportal">
                        <SimpleButton variant="contained" className="bg-[#330060] mt-2 normal-case">
                            View
                        </SimpleButton>
                    </a>
                </div>
            </div>
            <div
                className="place-self-center min-h-[481px]"
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
            >
                <img src={!over ? "https://uvdistage.mobileprogramming.net/device.jpg" : "/images/lampglow.png"} width="250" className="learn-more" />
            </div>
            <div className="place-self-center">
                <div className="align-middle w-[12rem]">
                    <div className="text-[#7b51a1]">Content Management System Registered Users</div>
                    <Link href="/cms/dashboard">
                        <SimpleButton variant="contained" className="bg-[#330060] mt-2 normal-case">
                            View
                        </SimpleButton>
                    </Link>
                </div>
                <div className="align-middle mt-[6rem]">
                    <div className="text-[#7b51a1]">UVDI.com</div>
                    <Link href="https://www.uvdi.com/">
                        <SimpleButton variant="contained" className="bg-[#330060] mt-2 normal-case">
                            View
                        </SimpleButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DashboardContent;