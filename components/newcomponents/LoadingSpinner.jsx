import {Heart} from "lucide-react";
import React from "react";

export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
                <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-600 animate-pulse" />
            </div>
        </div>
    );
}