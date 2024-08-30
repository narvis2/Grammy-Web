import { stringToDateFormat } from "@/data/mapper";
import { NoticeModel } from "@/data/model/notice/types";
import parse, { domToReact } from "html-react-parser";

type NoticeInfoAdapterProps = {
  model: NoticeModel;
};

const NoticeInfoAdapter = ({ model }: NoticeInfoAdapterProps) => {
  const imageList = model.imageList;

  const options = {
    replace: ({ name, children }: any) => {
      // <b> </b> 태그 별도 스타일 지정
      if (name === "b") {
        return <b className="text-lg sm:text-xl">{domToReact(children)}</b>;
      }
    },
  };

  return (
    <>
      <div className="w-full border-t-2 border-t-[#262E39] border-b border-b-[#DADADA] h-24 flex flex-col md:flex-row justify-between items-center outline-none px-4 py-4">
        <span className="text-lg sm:text-xl md:text-2xl mb-2 md:mb-0 ml-4">
          {`${model.title}`}
        </span>
        <span className="text-sm sm:text-base md:text-lg text-gray-500 font-normal mr-4 text-start">
          {`작성 날짜: ${stringToDateFormat(model.createdAt)}`}
        </span>
      </div>

      {imageList.length > 0 && (
        <div className="mt-8 px-2 sm:px-4 md:px-6 lg:px-8">
          <img
            src={imageList[0]}
            className="w-full h-auto object-cover"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
        </div>
      )}

      <div className="mt-8 w-full text-gray-700 font-normal text-start">
        {parse(model.description, options)}
      </div>
    </>
  );
};

export default NoticeInfoAdapter;
