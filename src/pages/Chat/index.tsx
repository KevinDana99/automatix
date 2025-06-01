import { useEffect, useRef, useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import ChatBubble from "../../components/ui/chat/bubble";
import useChat from "./useChat";

const Chat = () => {
  const { data, handleSendMessage, loading: loadingResponse } = useChat();
  const [textValue, setTextValue] = useState("");

  const sendMessage = () => {
    handleSendMessage({ prompt: textValue });
    setTextValue("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e.key);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.key === "Enter" && sendMessage();
  };

  const chatContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainer.current)
      chatContainer.current.scrollTop = chatContainer?.current?.scrollHeight;
  }, [textValue]);

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <div className="mt-3">
        <div className="flex flex-col justify-end h-180 relative w-full justify-center items-center">
          <div
            ref={chatContainer}
            className="custom-scrollbar p-20 pt-0 absolute dark:bg-dark-900 top-0 flex flex-col w-[calc(100%-20%)] min-h-[120px] max-h-[470px] items-center mb-20 overflow-y-scroll"
          >
            {data?.map(({ response, question }, index) => {
              return (
                <>
                  <ChatBubble type="question">{question}</ChatBubble>
                  <ChatBubble type="response">
                    {index === data.length - 1 && loadingResponse
                      ? "Pensando.."
                      : response}
                  </ChatBubble>
                </>
              );
            })}
          </div>
          <div className="flex justify-center absolute bottom-0 w-full z-30 ">
            <div className="absolute bottom-10 w-[calc(100%-50%)] dark:bg-white/[0.03] p-5 box-border rounded-xl">
              <textarea
                onKeyDown={(e) => handleKeyPress(e)}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                id="event-title"
                placeholder="Escribe la lista de tareas que deseas realizar"
                className="overflow-hidden h-auto w-full h-[200px] resize-none rounded-lg px-4 py-2.5 text-lg text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden dark:text-white/90 dark:placeholder:text-white/30"
              ></textarea>
              <div className="flex self-end items-center gap-3 mt-3 modal-footer sm:justify-end">
                <button
                  onClick={() => sendMessage()}
                  type="button"
                  className=" flex self-end relative bottom-0 btn btn-success btn-update-event w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
