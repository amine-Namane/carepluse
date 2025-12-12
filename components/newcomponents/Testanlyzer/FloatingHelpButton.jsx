import React from 'react';
import { HelpCircle } from 'lucide-react';

const FloatingHelpButton = () => {
    return (
        <button className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110">
            <HelpCircle className="w-6 h-6" />
        </button>
    );
};

export default FloatingHelpButton;