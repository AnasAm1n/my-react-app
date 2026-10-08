import { useLoaderData } from "react-router";
import { ChatMessages, ChatInput } from "../components/Chat.jsx";

export async function clientLoader({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    threadId: params.threadId,
    messages: [
      {
        id: 1,
        type: "user",
        content: `This is the user's original message in thread ${params.threadId}`,
      },
      {
        id: 2,
        type: "bot",
        content: `This is the first bot response in thread ${params.threadId}`,
      },
    ],
  };
}

/**
 * Chat Thread Route Component
 *
 * This route displays the thread data returned by its clientLoader.
 */
export default function ChatThread() {
  const { threadId, messages } = useLoaderData();

  const addMessage = (content) => {
    console.log(
      "ChatThread: Message mutations will be implemented later:",
      content,
    );
  };

  return (
    <main className="chat-container">
      <div className="chat-thread-header">
        <h2>Conversation Thread #{threadId}</h2>
      </div>
      <ChatMessages messages={messages} />
      <ChatInput onAddMessage={addMessage} />
    </main>
  );
}
