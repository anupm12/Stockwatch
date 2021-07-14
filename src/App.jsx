import axios from "axios";
import React, { useState } from "react";

function App() {
  let [data, setData] = useState();

  const getData = async (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}.BSE&outputsize=full&apikey=63L861E13NFZMZE3`;

    const res = await axios.get(url);
    setData(res.data["Time Series (Daily)"]);
  };

  return (
    <div className="App">
      <div className="flex justify-between w-full shadow-xl">
        <h2 className="text-2xl my-4">
          <span className="px-10 text-indigo-600">STOCKWATCH</span>
        </h2>
        <h4 className="text-lg my-6">
          <span className="px-10 text-gray-600">About</span>
        </h4>
      </div>

      <div className="w-full flex justify-center py-2">
        <form
          className="flex justify-center py-5 w-3/5"
          onSubmit={(e) => getData(e)}
        >
          <input
            className="p-2 w-full text-lg text-center bg-gray-100"
            id="searchText"
            type="text"
            placeholder="Stock name"
          />
          <button
            className="p-2 px-8 w-4/12 text-lg text-white bg-indigo-600"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="w-full flex justify-center">
        <table className="w-4/5 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
              >
                Date
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider "
              >
                Open price
              </th>
              <th
                scope="col"
                className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
              >
                Close price
              </th>
              <th
                scope="col"
                className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
              >
                High
              </th>
              <th
                scope="col"
                className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
              >
                Low
              </th>
              <th
                scope="col"
                className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
              >
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              ? Object.keys(data)
                  .slice(0, 50)
                  .map((key) => {
                    return (
                      <tr className="hover:bg-indigo-100">
                        <td
                          className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                        >
                          {key}
                        </td>
                        <td
                          className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                        >
                          {data[key]["1. open"]}
                        </td>
                        <td
                          className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                        >
                          {data[key]["4. close"]}
                        </td>
                        <td
                          className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                        >
                          {data[key]["2. high"]}
                        </td>
                        <td
                          className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                        >
                          {data[key]["3. low"]}
                        </td>
                        <td
                          className="
                        px-6
                        py-3
                        text-left text-sm
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                        >
                          {data[key]["6. volume"]}
                        </td>
                      </tr>
                    );
                  })
              : console.log("No data")}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
