type EmptyAdapterProps = {
  title?: string;
  message: string;
  onClick: () => void;
};

const EmptyAdapter = ({ title, message, onClick }: EmptyAdapterProps) => {
  return (
    <div className="text-center h-[60vh] flex flex-col justify-center">
      {!!title && (
        <h2 className="text-center h-[60vh] flex flex-col justify-center">
          {title}
        </h2>
      )}
      <p className="text-gray-500 mt-4">{message}</p>
      <div className="mt-8">
        <button
          type="button"
          onClick={onClick}
          className="bg-rose-500 text-white rounded-xl px-4 py-2.5 hover:shadow-lg"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default EmptyAdapter;
