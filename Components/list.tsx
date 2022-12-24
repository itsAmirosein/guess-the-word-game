import React from "react";
import { ListData, ListProps } from "./types";

function List({ listData, tableHead }: ListProps) {
  return (
    <table className="mt-8">
      <thead>
        <tr>
          {tableHead
            .sort((a, b) => a.order - b.order)
            .map((item) => (
              <th className="text-center px-5 py-2 border-b-2 border-gray-800">
                {item.title}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {listData.map((item: ListData) => (
          <tr>
            {tableHead.map((head) => (
              <td
                className={`text-center py-2 border-b font-bold ${
                  item[head.title as keyof ListData] === true
                    ? " text-green-800"
                    : head.title === "corrected"
                    ? "text-red-800"
                    : "text-with"
                }`}
              >{`${item[head.title as keyof ListData]}`}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
