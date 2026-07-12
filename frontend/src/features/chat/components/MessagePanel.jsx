const MessagePanel = () => {
  return (
    <div
      className="
        flex-1
        flex
        flex-col
        min-h-0
        h-full
        bg-gray-700
        rounded-none
        sm:rounded-xl
        shadow-md
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="border-b px-3 py-3 sm:px-4 sm:py-4 md:px-5">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          Messages
        </h2>
      </div>

      {/* Chat Area */}
      <div
        className="
          flex-1
          overflow-y-auto
          px-3
          py-4
          sm:px-4
          md:px-5
        "
      >
        Messages...
      </div>

      {/* Input */}
      <div className="border-t p-3 sm:p-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="
            w-full
            rounded-lg
            border
            px-3
            py-2.5
            sm:px-4
            text-sm
            sm:text-base
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>
    </div>
  );
};

export default MessagePanel;