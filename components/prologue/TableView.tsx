import React from "react";

const TableView: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        층별 안내
      </h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "40px",
          fontSize: "1rem",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              층수
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              각층 정보
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              7F
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              로비 / 객실
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              8F
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              객실
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              9F
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              객실
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ position: "relative", marginBottom: "20px" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          객실 정보
        </h1>
        <div className="font-semibold">총 44 객실</div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "40px",
          fontSize: "1rem",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              객실 유형
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              객실 수
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              최대 수용 인원
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              STANDARD-A
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              18
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              2
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              STANDARD-B
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              6
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              2
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              STANDARD-C
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              10
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              2
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              SUITE
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              2
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              4
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              CORNER-SUITE
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              3
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              4
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              ROYALSUITE-A
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              1
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              6
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              ROYALSUITE-B
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              2
            </td>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              6
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
