import React from "react";

function AccountDetails({ userEmail = "shawn@example.com" }) {
    return (
        <div className="p-4 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-white">Account Details</h1>
            <p className="text-gray-400 mb-6">Email: {userEmail}</p>
        </div>
    );
}

export default AccountDetails;
