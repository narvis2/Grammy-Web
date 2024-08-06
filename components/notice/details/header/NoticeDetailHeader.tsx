import React from "react";

const NoticeDetailHeader = () => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
      공지사항
    </h1>
  );
};

export default React.memo(NoticeDetailHeader);
