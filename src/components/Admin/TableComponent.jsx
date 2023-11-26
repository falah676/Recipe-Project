const TableComponent = () => {
  return (
    <div className="flex flex-col ">
      <button type="button" onClick={() => { console.log("click"); }} className="self-end text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-4 py-2 text-center">Add Recipe</button>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">

            <table
              className="min-w-full border text-center text-sm font-light text-white border-neutral-500">
              <thead className="border-b font-medium border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    No
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Meal Name
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Category
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Country
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Meal Thumbnail
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Tags
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Source
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Youtube Link
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Instructions
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 border-neutral-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-500">
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 font-medium border-neutral-500">
                    1
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Mark
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    falah
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Otto
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Otto
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Otto
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Otto
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Otto
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Otto
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Otto
                  </td>
                </tr>
                <tr className="border-b border-neutral-500">
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 font-medium border-neutral-500">
                    2
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Jacob
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    yess
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Thornton
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Thornton
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Thornton
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Thornton
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Thornton
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Thornton
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 border-neutral-500">
                    Thornton
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
