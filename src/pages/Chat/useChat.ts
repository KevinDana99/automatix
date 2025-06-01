import { useState } from "react";

const useChat = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async ({ prompt }: { prompt: string }) => {
    setData((prev) => [...prev, { question: prompt }]);

    try {
      setLoading(true);
      const req = await fetch("http://localhost:3000/api/v1/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const res = await req.json();
      setData((prev) => [...prev, { ...res }]);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return { handleSendMessage, data, loading };
};

export default useChat;
