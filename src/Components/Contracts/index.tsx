import React from 'react';

function Contracts() {
  return (
    <div className="flex items-center flex-wrap">
      <div className="flex flex-col p-4 rounded-lg shadow-md bg-white m-2 min-w-fit">
        <div className="flex flex-col">
          <div className="flex w-full border-b-2 border-b-gray items-center justify-between pb-2">
            <h2 className="font-bold">Договор управления №1</h2>
            <span className="text-sm text-green">Действующий</span>
          </div>
          <table className="min-w-full mb-4 bg-white rounded-lg text-sm">
            <tbody>
              <tr>
                <td className="p-2 text-gray">Дата заключения</td>
                <td className="p-2 ">20.12.2020</td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Срок действия</td>
                <td className="p-2 ">1 год</td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Стороны договора</td>
                <td className="p-2 flex flex-col">
                  <div>ООО Аврора</div> <div>Собственники объекта жилищного фонда</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Основание заключения</td>
                <td className="p-2 ">Решения собрания собственников</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full text-xs">
            612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 rounded-lg shadow-md bg-white m-2 min-w-fit">
        <div className="flex flex-col">
          <div className="flex w-full border-b-2 border-b-gray items-center justify-between pb-2">
            <h2 className="font-bold">Договор управления №1</h2>
            <span className="text-sm text-red">Расторгнут</span>
          </div>
          <table className="min-w-full mb-4 bg-white rounded-lg text-sm">
            <tbody>
              <tr>
                <td className="p-2 text-gray">Дата заключения</td>
                <td className="p-2 ">20.12.2020</td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Срок действия</td>
                <td className="p-2 ">1 год</td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Стороны договора</td>
                <td className="p-2 flex flex-col">
                  <div>ООО Аврора</div>
                  <div>Собственники объекта жилищного фонда</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Основание заключения</td>
                <td className="p-2 ">Решения собрания собственников</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full text-xs">
            612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 rounded-lg shadow-md bg-white m-2  min-w-fit">
        <div className="flex flex-col">
          <div className="flex w-full border-b-2 border-b-gray items-center justify-between pb-2">
            <h2 className="font-bold">Договор управления №1</h2>
            <span className="text-sm text-red">Расторгнут</span>
          </div>
          <table className="min-w-full mb-4 bg-white rounded-lg text-sm">
            <tbody>
              <tr>
                <td className="p-2 text-gray">Дата заключения</td>
                <td className="p-2 ">20.12.2020</td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Срок действия</td>
                <td className="p-2 ">1 год</td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Стороны договора</td>
                <td className="p-2 flex flex-col">
                  <div>ООО Аврора</div>
                  <div>Собственники объекта жилищного фонда</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-gray">Основание заключения</td>
                <td className="p-2 ">Решения собрания собственников</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full text-xs">
            612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contracts;
