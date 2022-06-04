import React from 'react';

function Protokols() {
  return (
    <div className="flex items-center flex-wrap">
      <div className="p-4 w-full xl:w-1/2 ">
        <div className="flex flex-col p-4 rounded-lg shadow-md bg-white  min-w-fit ">
          <div className="flex flex-col">
            <div className="flex w-full border-b-2 border-b-gray items-center justify-between pb-2">
              <h2 className="font-bold">Протокол общего собрания собственников № 1</h2>
            </div>
            <table className="min-w-full mb-4 bg-white rounded-lg ">
              <tbody>
                <tr>
                  <td className="p-2 text-gray">Дата проведения</td>
                  <td className="p-2 ">20.12.2020</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray">Адрес</td>
                  <td className="p-2 ">г Яранск, ул Строительная, д. 9</td>
                </tr>

                <tr>
                  <td className="p-2 text-gray">Протокол</td>
                  <td className="p-2 ">Прокол Строительная.pdf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="p-4 w-full xl:w-1/2 ">
        <div className="flex flex-col p-4 rounded-lg shadow-md bg-white  min-w-fit ">
          <div className="flex flex-col">
            <div className="flex w-full border-b-2 border-b-gray items-center justify-between pb-2">
              <h2 className="font-bold">Протокол общего собрания собственников № 1</h2>
            </div>
            <table className="min-w-full mb-4 bg-white rounded-lg ">
              <tbody>
                <tr>
                  <td className="p-2 text-gray">Дата проведения</td>
                  <td className="p-2 ">20.12.2020</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray">Адрес</td>
                  <td className="p-2 ">г Яранск, ул Строительная, д. 9</td>
                </tr>

                <tr>
                  <td className="p-2 text-gray">Протокол</td>
                  <td className="p-2 ">Прокол Строительная.pdf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protokols;
