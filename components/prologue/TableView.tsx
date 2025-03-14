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
              로비 / 카페테리아 / 테라스 / 객실
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
      </div>

      <table className="w-full border-collapse mb-10 text-base">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">
              객실 유형
            </th>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">
              최대 수용 인원
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              스탠다드 A
            </td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              스탠다드 B
            </td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">스탠다드 트윈</td>
            <td className="border border-gray-300 p-2 text-center">3</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              디럭스 A 테라스
            </td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">디럭스 B 테라스</td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">스위트 A</td>
            <td className="border border-gray-300 p-2 text-center">4</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">스위트 B</td>
            <td className="border border-gray-300 p-2 text-center">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              코너 스위트
            </td>
            <td className="border border-gray-300 p-2 text-center">4</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              로얄 스위트 A
            </td>
            <td className="border border-gray-300 p-2 text-center">4</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              로얄 스위트 B
            </td>
            <td className="border border-gray-300 p-2 text-center">4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
