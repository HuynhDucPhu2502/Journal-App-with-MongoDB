interface InfoBarProps {
  message: string;
  color: string;
}

export const InfoMessage: React.FC<InfoBarProps> = ({ message, color }) => {
  return (
    <div
      className={`fixed flex flex-row items-center justify-center px-5 py-2 text-white z-40 rounded-full border-2 border-gray-300 ${color} top-5`}
    >
      {message}
    </div>
  );
};
