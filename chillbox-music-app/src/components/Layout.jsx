import React from "react";
import MusicControlBar from "./MusicControlBar";

function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen justify-between bg-gray-100">
            <main className="flex-shrink">{children}</main>
            <MusicControlBar />
        </div>
    );
}

export default Layout;
