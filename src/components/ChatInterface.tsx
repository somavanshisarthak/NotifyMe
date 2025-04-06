
import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "@/types/types";
import { messages as initialMessages } from "@/data/mockData";
import { Send } from "lucide-react";

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      userId: 'current-user',
      userName: 'You',
      content: newMessage,
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[600px] rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Community Chat</h2>
        <p className="text-sm text-muted-foreground">
          Connect with event organizers and attendees
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.userId === 'current-user' ? 'flex-row-reverse' : ''
            }`}
          >
            <Avatar className="h-8 w-8">
              {message.userImage ? (
                <AvatarImage src={message.userImage} alt={message.userName} />
              ) : null}
              <AvatarFallback>
                {message.userName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.userId === 'current-user'
                  ? 'bg-vibePurple-500 text-white'
                  : 'bg-muted'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`text-xs font-medium ${
                  message.userId === 'current-user' ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {message.userId === 'current-user' ? 'You' : message.userName}
                </span>
                <span className={`text-xs ${
                  message.userId === 'current-user' ? 'text-white/70' : 'text-muted-foreground'
                }`}>
                  {formatTimestamp(message.timestamp)}
                </span>
              </div>
              <p className="text-sm break-words">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
