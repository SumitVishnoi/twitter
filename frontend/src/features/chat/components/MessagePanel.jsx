const MessagePanel = () => {
  return (
    <div
      className="
      flex-1
      bg-gray-700
      rounded-xl
      shadow-md
      flex
      flex-col
      h-full
      min-h-0
      "
    >
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">Messages</h2>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        Messages...
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border rounded-lg px-4 py-2 outline-none"
        />
      </div>
    </div>
  );
};

export default MessagePanel;