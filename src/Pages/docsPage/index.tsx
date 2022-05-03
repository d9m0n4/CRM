import Button from '../../Components/Button';

const Documents = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <Button name="Добавить документ" />
        </div>
        <div>
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className=" bg-white  text-gray-900 text-sm rounded-lg focus:border-none outline-none drop-shadow-md block w-60 py-2 px-4 "
            placeholder="Поиск"
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="">
          <h2 className="text-lg mb-4">Договоры управления</h2>
          <div className="flex items-center  flex-wrap">
            <div className="flex flex-col p-4 rounded-lg shadow-md bg-white m-2">
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
                        <td>ООО Аврора</td> <td>Собственники объекта жилищного фонда</td>
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
            <div className="flex flex-col p-4 rounded-lg shadow-md bg-white m-2">
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
                        <td>ООО Аврора</td>
                        <td>Собственники объекта жилищного фонда</td>
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
        </div>
      </div>
    </div>
  );
};

export default Documents;
