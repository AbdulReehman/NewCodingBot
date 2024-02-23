import React from "react";
import "./Table.css";

const Table = ({ tabledata }) => {
  const header = Object.keys(tabledata[0]);
  return (
    <div>
      <table>
        <tr></tr>
        <tr>
          {header.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {tabledata.map((row, index) => (
          <tr key={index}>
            {header.map((item, key) => (
              <td>{row[item]}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
