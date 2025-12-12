'use client'
import React, { useState } from 'react';
import {
    Search,
    Send,
    Paperclip,
    Smile,
    MoreVertical,
    Phone,
    Video,
    Info,
    Image,
    File,
    Check,
    CheckCheck,
    Clock,
    Star,
    Archive,
    Trash2
} from 'lucide-react';

const ModernMessagesPage = () => {
    const [selectedChat, setSelectedChat] = useState(1);
    const [message, setMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [openinfo, setOpeninfo] = useState(false);

    // Mock conversations data
    const conversations = [
        {
            id: 1,
            name: "Ahmed Hassan",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
            lastMessage: "Thank you doctor, I'm feeling much better now",
            time: "2m ago",
            unread: 2,
            online: true,
            type: "patient"
        },
        {
            id: 2,
            name: "Sara Ahmed",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            lastMessage: "When should I come for the follow-up?",
            time: "15m ago",
            unread: 0,
            online: true,
            type: "patient"
        },
        {
            id: 3,
            name: "Mohamed Ali",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
            lastMessage: "I have the test results ready",
            time: "1h ago",
            unread: 1,
            online: false,
            type: "patient"
        },
        {
            id: 4,
            name: "Fatima Ibrahim",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
            lastMessage: "The medication is working well",
            time: "3h ago",
            unread: 0,
            online: false,
            type: "patient"
        },
        {
            id: 5,
            name: "Karim Rashid",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            lastMessage: "Can I schedule an appointment?",
            time: "5h ago",
            unread: 0,
            online: true,
            type: "patient"
        }
    ];

    // Mock messages data
    const messages = [
        {
            id: 1,
            sender: "patient",
            text: "Hello Doctor, I wanted to ask about my test results",
            time: "10:30 AM",
            status: "read"
        },
        {
            id: 2,
            sender: "doctor",
            text: "Hello Ahmed! Yes, I've reviewed your test results. Everything looks good overall.",
            time: "10:32 AM",
            status: "read"
        },
        {
            id: 3,
            sender: "doctor",
            text: "Your cholesterol levels have improved significantly since the last visit. Keep up with the diet plan we discussed.",
            time: "10:32 AM",
            status: "read"
        },
        {
            id: 4,
            sender: "patient",
            text: "That's great news! Should I continue with the current medication?",
            time: "10:35 AM",
            status: "read"
        },
        {
            id: 5,
            sender: "doctor",
            text: "Yes, continue with the same dosage for another month. We'll reassess during your next appointment.",
            time: "10:36 AM",
            status: "delivered"
        },
        {
            id: 6,
            sender: "patient",
            text: "Thank you doctor, I'm feeling much better now",
            time: "10:38 AM",
            status: "sent"
        }
    ];

    const selectedConversation = conversations.find(c => c.id === selectedChat);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            console.log("Sending message:", message);
            setMessage('');
        }
    };

    return (
        <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex">
            {/* Conversations List */}
            <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Messages</h1>

                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                    </div>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((conversation) => (
                        <button
                            key={conversation.id}
                            onClick={() => setSelectedChat(conversation.id)}
                            className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-l-4 ${
                                selectedChat === conversation.id
                                    ? 'bg-blue-50 border-blue-500'
                                    : 'border-transparent'
                            }`}
                        >
                            <div className="relative flex-shrink-0">
                                <img
                                    src={conversation.image}
                                    alt={conversation.name}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200"
                                />
                                {conversation.online && (
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
                                )}
                                {conversation.unread > 0 && (
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                        {conversation.unread}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0 text-left">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className={`font-semibold truncate ${
                                        conversation.unread > 0 ? 'text-gray-900' : 'text-gray-700'
                                    }`}>
                                        {conversation.name}
                                    </h3>
                                    <span className="text-xs text-gray-500">{conversation.time}</span>
                                </div>
                                <p className={`text-sm truncate ${
                                    conversation.unread > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'
                                }`}>
                                    {conversation.lastMessage}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-white">
                {selectedConversation ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={selectedConversation.image}
                                            alt={selectedConversation.name}
                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500"
                                        />
                                        {selectedConversation.online && (
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></div>
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-gray-800">{selectedConversation.name}</h2>
                                        <p className="text-sm text-gray-600">
                                            {selectedConversation.online ? 'Active now' : 'Offline'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                        <Phone className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                        <Video className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                        <Info onClick={()=>setOpeninfo((prev) => !prev)} className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                        <MoreVertical className="w-5 h-5 text-gray-600" />
                                    </button>


                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-md ${msg.sender === 'doctor' ? 'order-2' : 'order-1'}`}>
                                        <div
                                            className={`px-4 py-3 rounded-2xl ${
                                                msg.sender === 'doctor'
                                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                                    : 'bg-white text-gray-800 border border-gray-200'
                                            }`}
                                        >
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                        </div>
                                        <div className={`flex items-center gap-2 mt-1 px-2 ${
                                            msg.sender === 'doctor' ? 'justify-end' : 'justify-start'
                                        }`}>
                                            <span className="text-xs text-gray-500">{msg.time}</span>
                                            {msg.sender === 'doctor' && (
                                                <span className="text-blue-600">
                          {msg.status === 'read' ? (
                              <CheckCheck className="w-4 h-4" />
                          ) : msg.status === 'delivered' ? (
                              <CheckCheck className="w-4 h-4 text-gray-400" />
                          ) : (
                              <Check className="w-4 h-4 text-gray-400" />
                          )}
                        </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t border-gray-200 bg-white">
                            <div className="flex items-center gap-3">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Paperclip className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Image className="w-5 h-5 text-gray-600" />
                                </button>

                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
                                        placeholder="Type a message..."
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all pr-12"
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors">
                                        <Smile className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>

                                <button
                                    onClick={handleSendMessage}
                                    disabled={!message.trim()}
                                    className={`p-3 rounded-xl transition-all ${
                                        message.trim()
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    // No chat selected state
                    <div className="flex-1 flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send className="w-16 h-16 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Conversation Selected</h2>
                            <p className="text-gray-600">Select a conversation to start messaging</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Patient Info Sidebar */}

            {openinfo && (
            <div className="hidden xl:block w-80 bg-white border-l border-gray-200 p-6">
                {selectedConversation && (
                    <div >
                        <button onClick={()=>setOpeninfo(false)}>X</button>
                        <div className="text-center mb-6">
                            <img
                                src={selectedConversation.image}
                                alt={selectedConversation.name}
                                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-blue-500"
                            />
                            <h3 className="text-xl font-bold text-gray-800">{selectedConversation.name}</h3>
                            <p className="text-sm text-gray-600">Patient</p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Quick Actions
                                </h4>
                                <div className="space-y-2">
                                    <button className="w-full px-4 py-2 bg-white hover:bg-gray-50 rounded-lg text-left text-sm font-medium text-gray-700 transition-colors">
                                        Schedule Appointment
                                    </button>
                                    <button className="w-full px-4 py-2 bg-white hover:bg-gray-50 rounded-lg text-left text-sm font-medium text-gray-700 transition-colors">
                                        View Medical Records
                                    </button>
                                    <button className="w-full px-4 py-2 bg-white hover:bg-gray-50 rounded-lg text-left text-sm font-medium text-gray-700 transition-colors">
                                        Send Prescription
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl">
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <Star className="w-4 h-4" />
                                    Shared Files
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                            <File className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-800 truncate">Lab Results.pdf</p>
                                            <p className="text-xs text-gray-500">2 days ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="p-2 bg-green-100 rounded-lg">
                                            <Image className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-800 truncate">X-Ray.jpg</p>
                                            <p className="text-xs text-gray-500">1 week ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <button className="w-full px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <Archive className="w-4 h-4" />
                                    Archive Chat
                                </button>
                                <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <Trash2 className="w-4 h-4" />
                                    Delete Chat
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>)}
        </div>
    );
};

export default ModernMessagesPage;