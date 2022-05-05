import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Avatar from './Components/Avatar';
import Contracts from './Components/Contracts';
import EditModal from './Components/EditModal';
import Protokols from './Components/Protocols';
import Documents from './Pages/docsPage';
import MainPage from './Pages/mainPage';

function App() {
  return (
    <div className="flex h-screen container mx-auto">
      {/* navbar */}
      <aside className="flex w-16 lg:w-64 flex-col bg-accentDark">
        <div className="w-100 flex justify-center lg:justify-start items-center my-4 lg:ml-4">
          <i>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.3333 9.66667L11 10.8333M11 10.8333L8.66667 9.66667M11 10.8333V13.75M20.3333 6.16667L18 7.33333M20.3333 6.16667L18 5M20.3333 6.16667V9.08333M13.3333 2.66667L11 1.5L8.66667 2.66667M1.66667 6.16667L4 5M1.66667 6.16667L4 7.33333M1.66667 6.16667V9.08333M11 22.5L8.66667 21.3333M11 22.5L13.3333 21.3333M11 22.5V19.5833M4 19L1.66667 17.8333V14.9167M18 19L20.3333 17.8333V14.9167"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <h1 className="ml-2 text-2xl text-white hidden lg:block">CRM</h1>
        </div>
        <nav className=" my-4 text-white">
          <ul className="text-lg font-thin">
            <li>
              <NavLink
                className="py-2 px-4 flex items-center justify-center lg:justify-start"
                to="/">
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 2.61035C1 1.50902 1.89543 0.616211 3 0.616211H5C6.10457 0.616211 7 1.50902 7 2.61035V4.60449C7 5.70583 6.10457 6.59863 5 6.59863H3C1.89543 6.59863 1 5.70583 1 4.60449V2.61035Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 2.61035C11 1.50902 11.8954 0.616211 13 0.616211H15C16.1046 0.616211 17 1.50902 17 2.61035V4.60449C17 5.70583 16.1046 6.59863 15 6.59863H13C11.8954 6.59863 11 5.70583 11 4.60449V2.61035Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 12.5811C1 11.4797 1.89543 10.5869 3 10.5869H5C6.10457 10.5869 7 11.4797 7 12.5811V14.5752C7 15.6765 6.10457 16.5693 5 16.5693H3C1.89543 16.5693 1 15.6765 1 14.5752V12.5811Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 12.5811C11 11.4797 11.8954 10.5869 13 10.5869H15C16.1046 10.5869 17 11.4797 17 12.5811V14.5752C17 15.6765 16.1046 16.5693 15 16.5693H13C11.8954 16.5693 11 15.6765 11 14.5752V12.5811Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Главная</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'py-2 px-4 flex items-center justify-center lg:justify-start'}
                to="/objects">
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.2222 17.4346V3.25401C15.2222 2.27505 14.4263 1.48145 13.4444 1.48145H4.55556C3.57372 1.48145 2.77778 2.27505 2.77778 3.25401V17.4346M15.2222 17.4346L17 17.4345M15.2222 17.4346H10.7778M2.77778 17.4346L1 17.4345M2.77778 17.4346H7.22222M6.33333 5.02656H7.22222M6.33333 8.5717H7.22222M10.7778 5.02656H11.6667M10.7778 8.5717H11.6667M7.22222 17.4346V13.0031C7.22222 12.5136 7.62019 12.1168 8.11111 12.1168H9.88889C10.3798 12.1168 10.7778 12.5136 10.7778 13.0031V17.4346M7.22222 17.4346H10.7778"
                      stroke="#F2F2F2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Объекты</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'py-2 px-4 flex items-center justify-center lg:justify-start'}
                to="/accaunts">
                <i className="flex items-center">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.22222 3.66667H2.77778C1.79594 3.66667 1 4.46261 1 5.44445V13.4445C1 14.4263 1.79594 15.2222 2.77778 15.2222H15.2222C16.2041 15.2222 17 14.4263 17 13.4445V5.44445C17 4.46261 16.2041 3.66667 15.2222 3.66667H10.7778M7.22222 3.66667V2.77778C7.22222 1.79594 8.01816 1 9 1C9.98184 1 10.7778 1.79594 10.7778 2.77778V3.66667M7.22222 3.66667C7.22222 4.64851 8.01816 5.44445 9 5.44445C9.98184 5.44445 10.7778 4.64851 10.7778 3.66667M6.33333 10.7778C7.31517 10.7778 8.11111 9.98184 8.11111 9C8.11111 8.01816 7.31517 7.22223 6.33333 7.22223C5.35149 7.22223 4.55556 8.01816 4.55556 9C4.55556 9.98184 5.35149 10.7778 6.33333 10.7778ZM6.33333 10.7778C7.49442 10.7778 8.48214 11.5198 8.84822 12.5556M6.33333 10.7778C5.17225 10.7778 4.18444 11.5198 3.81836 12.5556M11.6667 8.11111H14.3333M11.6667 11.6667H13.4444"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Лицевые счета</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'py-2 px-4 flex items-center justify-center lg:justify-start'}
                to="/docs">
                <i className="flex items-center">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 10H11M5 14H11M13 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1H8.58579C8.851 1 9.10536 1.10536 9.29289 1.29289L14.7071 6.70711C14.8946 6.89464 15 7.149 15 7.41421V17C15 18.1046 14.1046 19 13 19Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Документы</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'py-2 px-4 flex items-center justify-center lg:justify-start'}
                to="/requests">
                <i className="flex items-center">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 9.5C7.72386 9.5 7.5 9.72386 7.5 10C7.5 10.2761 7.72386 10.5 8 10.5V9.5ZM11 10.5C11.2761 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.2761 9.5 11 9.5V10.5ZM8 13.5C7.72386 13.5 7.5 13.7239 7.5 14C7.5 14.2761 7.72386 14.5 8 14.5V13.5ZM11 14.5C11.2761 14.5 11.5 14.2761 11.5 14C11.5 13.7239 11.2761 13.5 11 13.5V14.5ZM5 9.5C4.72386 9.5 4.5 9.72386 4.5 10C4.5 10.2761 4.72386 10.5 5 10.5V9.5ZM5.01 10.5C5.28614 10.5 5.51 10.2761 5.51 10C5.51 9.72386 5.28614 9.5 5.01 9.5V10.5ZM5 13.5C4.72386 13.5 4.5 13.7239 4.5 14C4.5 14.2761 4.72386 14.5 5 14.5V13.5ZM5.01 14.5C5.28614 14.5 5.51 14.2761 5.51 14C5.51 13.7239 5.28614 13.5 5.01 13.5V14.5ZM14.5 5V17H15.5V5H14.5ZM13 18.5H3V19.5H13V18.5ZM1.5 17V5H0.5V17H1.5ZM3 3.5H5V2.5H3V3.5ZM11 3.5H13V2.5H11V3.5ZM3 18.5C2.17157 18.5 1.5 17.8284 1.5 17H0.5C0.5 18.3807 1.61929 19.5 3 19.5V18.5ZM14.5 17C14.5 17.8284 13.8284 18.5 13 18.5V19.5C14.3807 19.5 15.5 18.3807 15.5 17H14.5ZM15.5 5C15.5 3.61929 14.3807 2.5 13 2.5V3.5C13.8284 3.5 14.5 4.17157 14.5 5H15.5ZM1.5 5C1.5 4.17157 2.17157 3.5 3 3.5V2.5C1.61929 2.5 0.5 3.61929 0.5 5H1.5ZM8 10.5H11V9.5H8V10.5ZM8 14.5H11V13.5H8V14.5ZM7 1.5H9V0.5H7V1.5ZM9 4.5H7V5.5H9V4.5ZM7 4.5C6.17157 4.5 5.5 3.82843 5.5 3H4.5C4.5 4.38071 5.61929 5.5 7 5.5V4.5ZM10.5 3C10.5 3.82843 9.82843 4.5 9 4.5V5.5C10.3807 5.5 11.5 4.38071 11.5 3H10.5ZM9 1.5C9.82843 1.5 10.5 2.17157 10.5 3H11.5C11.5 1.61929 10.3807 0.5 9 0.5V1.5ZM7 0.5C5.61929 0.5 4.5 1.61929 4.5 3H5.5C5.5 2.17157 6.17157 1.5 7 1.5V0.5ZM5 10.5H5.01V9.5H5V10.5ZM5 14.5H5.01V13.5H5V14.5Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Заявки</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'py-2 px-4 flex items-center justify-center lg:justify-start'}
                to="/votes">
                <i className="flex items-center">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.35355 11.6464C5.15829 11.4512 4.84171 11.4512 4.64645 11.6464C4.45118 11.8417 4.45118 12.1583 4.64645 12.3536L5.35355 11.6464ZM7 14L6.64645 14.3536C6.84171 14.5488 7.15829 14.5488 7.35355 14.3536L7 14ZM11.3536 10.3536C11.5488 10.1583 11.5488 9.84171 11.3536 9.64645C11.1583 9.45118 10.8417 9.45118 10.6464 9.64645L11.3536 10.3536ZM14.5 5V17H15.5V5H14.5ZM13 18.5H3V19.5H13V18.5ZM1.5 17V5H0.5V17H1.5ZM3 3.5H5V2.5H3V3.5ZM11 3.5H13V2.5H11V3.5ZM3 18.5C2.17157 18.5 1.5 17.8284 1.5 17H0.5C0.5 18.3807 1.61929 19.5 3 19.5V18.5ZM14.5 17C14.5 17.8284 13.8284 18.5 13 18.5V19.5C14.3807 19.5 15.5 18.3807 15.5 17H14.5ZM15.5 5C15.5 3.61929 14.3807 2.5 13 2.5V3.5C13.8284 3.5 14.5 4.17157 14.5 5H15.5ZM1.5 5C1.5 4.17157 2.17157 3.5 3 3.5V2.5C1.61929 2.5 0.5 3.61929 0.5 5H1.5ZM4.64645 12.3536L6.64645 14.3536L7.35355 13.6464L5.35355 11.6464L4.64645 12.3536ZM7.35355 14.3536L11.3536 10.3536L10.6464 9.64645L6.64645 13.6464L7.35355 14.3536ZM7 1.5H9V0.5H7V1.5ZM9 4.5H7V5.5H9V4.5ZM7 4.5C6.17157 4.5 5.5 3.82843 5.5 3H4.5C4.5 4.38071 5.61929 5.5 7 5.5V4.5ZM10.5 3C10.5 3.82843 9.82843 4.5 9 4.5V5.5C10.3807 5.5 11.5 4.38071 11.5 3H10.5ZM9 1.5C9.82843 1.5 10.5 2.17157 10.5 3H11.5C11.5 1.61929 10.3807 0.5 9 0.5V1.5ZM7 0.5C5.61929 0.5 4.5 1.61929 4.5 3H5.5C5.5 2.17157 6.17157 1.5 7 1.5V0.5Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Голосования</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'py-2 px-4 flex items-center justify-center lg:justify-start'}
                to="/appels">
                <i className="flex items-center">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.5 5V17H15.5V5H14.5ZM13 18.5H3V19.5H13V18.5ZM1.5 17V5H0.5V17H1.5ZM3 3.5H5V2.5H3V3.5ZM11 3.5H13V2.5H11V3.5ZM3 18.5C2.17157 18.5 1.5 17.8284 1.5 17H0.5C0.5 18.3807 1.61929 19.5 3 19.5V18.5ZM14.5 17C14.5 17.8284 13.8284 18.5 13 18.5V19.5C14.3807 19.5 15.5 18.3807 15.5 17H14.5ZM15.5 5C15.5 3.61929 14.3807 2.5 13 2.5V3.5C13.8284 3.5 14.5 4.17157 14.5 5H15.5ZM1.5 5C1.5 4.17157 2.17157 3.5 3 3.5V2.5C1.61929 2.5 0.5 3.61929 0.5 5H1.5ZM7 1.5H9V0.5H7V1.5ZM9 4.5H7V5.5H9V4.5ZM7 4.5C6.17157 4.5 5.5 3.82843 5.5 3H4.5C4.5 4.38071 5.61929 5.5 7 5.5V4.5ZM10.5 3C10.5 3.82843 9.82843 4.5 9 4.5V5.5C10.3807 5.5 11.5 4.38071 11.5 3H10.5ZM9 1.5C9.82843 1.5 10.5 2.17157 10.5 3H11.5C11.5 1.61929 10.3807 0.5 9 0.5V1.5ZM7 0.5C5.61929 0.5 4.5 1.61929 4.5 3H5.5C5.5 2.17157 6.17157 1.5 7 1.5V0.5Z"
                      fill="white"
                    />
                    <path
                      d="M9.66671 9.91667C9.66671 10.8371 8.92051 11.5833 8.00004 11.5833C7.07957 11.5833 6.33337 10.8371 6.33337 9.91667C6.33337 8.99619 7.07957 8.25 8.00004 8.25C8.92051 8.25 9.66671 8.99619 9.66671 9.91667Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.00004 12.8333C6.38921 12.8333 5.08337 14.1392 5.08337 15.75H10.9167C10.9167 14.1392 9.61087 12.8333 8.00004 12.8333Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Обращения</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'py-2 px-4 flex items-center justify-center lg:justify-start'}
                to="/service">
                <i className="flex items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.51078 2.17094C7.8898 0.609686 10.1102 0.609687 10.4892 2.17094C10.7341 3.17949 11.8896 3.65811 12.7758 3.11809C14.1478 2.28212 15.7179 3.85218 14.8819 5.22416C14.3419 6.11045 14.8205 7.26593 15.8291 7.51078C17.3903 7.8898 17.3903 10.1102 15.8291 10.4892C14.8205 10.7341 14.3419 11.8896 14.8819 12.7758C15.7179 14.1478 14.1478 15.7179 12.7758 14.8819C11.8896 14.3419 10.7341 14.8205 10.4892 15.8291C10.1102 17.3903 7.8898 17.3903 7.51078 15.8291C7.26594 14.8205 6.11045 14.3419 5.22417 14.8819C3.85218 15.7179 2.28212 14.1478 3.11809 12.7758C3.65811 11.8896 3.17949 10.7341 2.17094 10.4892C0.609687 10.1102 0.609686 7.8898 2.17094 7.51078C3.17949 7.26593 3.65811 6.11045 3.11809 5.22416C2.28212 3.85218 3.85218 2.28212 5.22416 3.11809C6.11045 3.65811 7.26594 3.17949 7.51078 2.17094Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 9C11.6667 10.4728 10.4728 11.6667 9 11.6667C7.52724 11.6667 6.33333 10.4728 6.33333 9C6.33333 7.52724 7.52724 6.33333 9 6.33333C10.4728 6.33333 11.6667 7.52724 11.6667 9Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="ml-2 hidden lg:block">Сервис</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* content */}
      <div className="flex flex-col px-4 flex-1 bg-bg overflow-hidden">
        {/* topbar */}
        <div className="flex justify-between items-center p-4 border-b-2 border-gray backdrop-blur-md">
          <div className="text-2xl">Главная</div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <Avatar w="w-8" h="h-8" name="T" />
              <div className="ml-2 hidden lg:flex flex-col">
                <div>Сергей Есенин</div>
                <span className="text-xs text-gray">Администратор</span>
              </div>
            </div>
            <div className="flex items-center">
              <i className="ml-4">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <i className="ml-4">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <i className="ml-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 1H4C2.34315 1 1 2.34315 1 4V14C1 15.6569 2.34315 17 4 17H5M13 13L17 9M17 9L13 5M17 9L5 9"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="flex mt-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/objects" element={<MainPage />}>
              <Route path=":id" element={<EditModal />} />
            </Route>
            <Route path="docs" element={<Documents />}>
              <Route index element={<Contracts />} />
              <Route path="contracts" element={<Contracts />} />
              <Route path="protocols" element={<Protokols />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
