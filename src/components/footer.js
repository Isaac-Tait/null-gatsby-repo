import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="heropattern-topography-indigo-400 text-gray-800 rounded-lg shadow-lg text-center px-2 py-2 text-xs flex items-center justify-between">
                © 1978-{new Date().getFullYear()}
            </footer>
        </div>
    );
}

export default Footer;
