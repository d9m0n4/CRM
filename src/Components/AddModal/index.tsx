import React, { MouseEventHandler, ReactElement } from 'react';

interface IModal {
  closeModal: MouseEventHandler;
  children: ReactElement | ReactElement[];
  header_name: string;
  button_name: string;
}

const AddModal: React.FC<IModal> = ({ closeModal, children, header_name, button_name }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative max-w-4xl my-6 mx-auto translate-x-32">
          {/*content*/}
          <div className="px-8 py-4 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between  mb-8 rounded-t">
              <div className="">
                <h3 className="text-2xl ">{header_name}</h3>
              </div>
              <button
                onClick={closeModal}
                className="group p-1 ml-auto  border-0 text-accentDark leading-none font-semibold outline-none focus:outline-none hover:text-accent">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0C3.58171 0 0 3.58171 0 8C0 12.4183 3.58171 16 8 16C12.4183 16 16 12.4183 16 8C15.9949 3.58384 12.4162 0.00512903 8 0ZM8 15.4839C3.86677 15.4839 0.516129 12.1332 0.516129 8C0.516129 3.86677 3.86677 0.516129 8 0.516129C12.1332 0.516129 15.4839 3.86677 15.4839 8C15.4793 12.1314 12.1314 15.4793 8 15.4839Z"
                    fill="#000"
                    className="group-hover:fill-accent transition-colors"
                  />
                  <path
                    d="M11.6495 4.35051C11.5487 4.24977 11.3854 4.24977 11.2846 4.35051L7.99994 7.63516L4.71529 4.35051C4.61629 4.248 4.45291 4.24516 4.35039 4.34416C4.24788 4.44316 4.24504 4.60655 4.34404 4.70906C4.3461 4.71122 4.34823 4.71332 4.35039 4.71542L7.63504 8.00006L4.35039 11.2847C4.24788 11.3837 4.24504 11.5471 4.34407 11.6496C4.4431 11.7521 4.60646 11.755 4.70897 11.6559C4.71113 11.6539 4.71323 11.6517 4.71529 11.6496L7.99994 8.36497L11.2846 11.6496C11.3871 11.7486 11.5505 11.7458 11.6495 11.6433C11.7461 11.5433 11.7461 11.3847 11.6495 11.2847L8.36484 8.00006L11.6495 4.71542C11.7502 4.61464 11.7502 4.45129 11.6495 4.35051Z"
                    fill="#000"
                    className="group-hover:fill-accent transition-colors"
                  />
                </svg>
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-col mb-4">{children}</div>
            {/*footer*/}

            <div className="flex items-center justify-end ">
              <button
                onClick={() => console.log(321)}
                className="text-white bg-green active:shadow-sm font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                {button_name}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-accentDark"></div>
    </>
  );
};

export default AddModal;
