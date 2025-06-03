const useDetails = () => {
  const handleCopyToClipboard = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLInputElement;
    const text = element.value;
    navigator.clipboard.writeText(text);
    element.select();
  };

  return {
    handleCopyToClipboard,
  };
};

export default useDetails;
