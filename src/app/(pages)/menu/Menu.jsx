"use client"
import CheckoutBox from "./CheckoutBox";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Menu() {
    return (
        <>
            <div className="mb-6 flex flex-col gap-6">
                <Sidebar />
                <Content />
            </div>
            <CheckoutBox />
        </>
    )
}
