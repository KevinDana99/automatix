import { ReactNode, useEffect, useState } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

import theme from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
const ChatBubble = ({
  children,
  type,
}: {
  children: ReactNode | string;
  type: "response" | "question";
}) => {
  function useTypingEffect(text: string, speed = 20) {
    const [displayedText, setDisplayedText] = useState("");
    const handleEndTyping = (interval: number) => {
      clearInterval(interval);
    };
    useEffect(() => {
      let index = -1;
      const interval = setInterval(() => {
        index++;
        setDisplayedText((prev) => prev + text.charAt(index));
      }, speed);

      if (index >= text.length) handleEndTyping(interval);
      return () => handleEndTyping(interval);
    }, [text, speed]);

    return displayedText;
  }
  const text = useTypingEffect(String(children));
  return (
    children && (
      <>
        {type === "response" ? (
          <div className="self-start mr-60 relative rounded-xl w-auto mt-10 p-5  dark:text-white/90 h-auto  break-words">
            <Markdown
              children={text}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={theme}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        ) : (
          <div className="self-end ml-60 bg-brand-500 relative rounded-xl w-auto mt-10 p-5  dark:text-white/90 h-auto  break-words">
            <Markdown>{children.toString()}</Markdown>
          </div>
        )}
      </>
    )
  );
};

export default ChatBubble;
