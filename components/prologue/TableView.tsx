const TableView = () => {
  return (
    <div className="font-sans p-5 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">층별 안내</h1>
      <table className="w-full border-collapse mb-10 text-base">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">
              층수
            </th>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">
              각층 정보
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-center">7F</td>
            <td className="border border-gray-300 p-2 text-center">
              로비 / 객실
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">8F</td>
            <td className="border border-gray-300 p-2 text-center">객실</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">9F</td>
            <td className="border border-gray-300 p-2 text-center">객실</td>
          </tr>
        </tbody>
      </table>

      <div className="relative mb-5">
        <h1 className="text-2xl font-bold mb-5 text-center">객실 정보</h1>
        <div className="font-semibold">총 44 객실</div>
      </div>

      <table className="w-full border-collapse mb-10 text-base">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">
              객실 유형
            </th>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">
              객실 수
            </th>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">
              최대 수용 인원
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              STANDARD-A
            </td>
            <td className="border border-gray-300 p-2 text-center">18</td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              STANDARD-B
            </td>
            <td className="border border-gray-300 p-2 text-center">6</td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              STANDARD-C
            </td>
            <td className="border border-gray-300 p-2 text-center">10</td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">SUITE</td>
            <td className="border border-gray-300 p-2 text-center">2</td>
            <td className="border border-gray-300 p-2 text-center">4</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              CORNER-SUITE
            </td>
            <td className="border border-gray-300 p-2 text-center">3</td>
            <td className="border border-gray-300 p-2 text-center">4</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              ROYALSUITE-A
            </td>
            <td className="border border-gray-300 p-2 text-center">1</td>
            <td className="border border-gray-300 p-2 text-center">6</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              ROYALSUITE-B
            </td>
            <td className="border border-gray-300 p-2 text-center">2</td>
            <td className="border border-gray-300 p-2 text-center">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
