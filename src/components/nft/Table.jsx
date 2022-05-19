import React from "react";
import vector from "../../ui/Vector.png";
export const Table = () => {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>Time</th>
            <th>Bidding Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09x95asd2191....</td>
            <td>1 day ago</td>
            <td>
              <img style={{ marginRight: "7px" }} src={vector} alt="vector" />
              0.532216 ETH = $ 1449.75
            </td>
          </tr>
          <tr>
            <td>09x95asd2191....</td>
            <td>1 day ago</td>
            <td>
              <img style={{ marginRight: "7px" }} src={vector} alt="vector" />
              0.532216 ETH = $ 1449.75
            </td>
          </tr>
          <tr>
            <td>09x95asd2191....</td>
            <td>1 day ago</td>
            <td>
              <img style={{ marginRight: "7px" }} src={vector} alt="vector" />
              0.532216 ETH = $ 1449.75
            </td>
          </tr>
          <tr>
            <td>09x95asd2191....</td>
            <td>1 day ago</td>
            <td>
              <img style={{ marginRight: "7px" }} src={vector} alt="vector" />
              0.532216 ETH = $ 1449.75
            </td>
          </tr>
          <tr>
            <td>09x95asd2191....</td>
            <td>1 day ago</td>
            <td>
              <img style={{ marginRight: "7px" }} src={vector} alt="vector" />
              0.532216 ETH = $ 1449.75
            </td>
          </tr>
          <tr>
            <td>09x95asd2191....</td>
            <td>1 day ago</td>
            <td>
              <img style={{ marginRight: "7px" }} src={vector} alt="vector" />
              0.532216 ETH = $ 1449.75
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ width: "682px" }} className="hider-table"></div>
    </div>
  );
};
