import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const initialMessages = [
  {
    id: 1,
    sender: "You",
    text: "Hi Sarah! Are you still interested in sharing a room in New York?",
    time: "09:15 AM",
  },
  {
    id: 2,
    sender: "Sarah Johnson",
    text: "Hi! Yes, I am. Are your dates still July 15-22?",
    time: "09:16 AM",
  },
  {
    id: 3,
    sender: "You",
    text: "Exactly! I’m looking for someone tidy and quiet. Your profile looks like a great fit.",
    time: "09:17 AM",
  },
  {
    id: 4,
    sender: "Sarah Johnson",
    text: "Thank you! I’m the same. Should we discuss the details?",
    time: "09:18 AM",
  },
];

const ChatConversation = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "You",
        text: input,
        time,
      },
    ]);
    setInput("");
  };

  // Theme-based classes
  const bgMain = theme === "dark" ? "bg-travel-dark" : "bg-travel-background";
  const cardBg = theme === "dark" ? "bg-card border-gray-700" : "bg-white border-gray-200";
  const bubbleOther = theme === "dark"
    ? "bg-travel-dark/70 text-gray-100"
    : "bg-travel-background text-gray-900";

  return (
    <div className={`flex min-h-screen flex-col ${bgMain}`}>
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-8">
        <div className={`w-full max-w-md rounded-lg shadow p-6 flex flex-col border ${cardBg}`}>
          <div className="mb-4 border-b pb-2">
            <h2 className="text-xl font-semibold">Chat with Sarah Johnson</h2>
            <span className="text-sm text-muted-foreground">Room Partner</span>
          </div>
          <div className="flex-1 space-y-4 mb-4 overflow-y-auto" style={{ minHeight: 200 }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    msg.sender === "You"
                      ? "bg-travel-primary text-white"
                      : bubbleOther
                  }`}
                >
                  <span>{msg.text}</span>
                </div>
                <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
              </div>
            ))}
          </div>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type your message..."
              className={`flex-1 border rounded px-3 py-2 text-sm ${theme === "dark" ? "bg-travel-dark text-white border-gray-700" : ""}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <Button type="submit" disabled={!input.trim()}>
              Send
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatConversation;