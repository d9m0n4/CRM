const AuthPage = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="hidden flex-1 bg-gradient-to-b from-purple-500 to-blue-500 sm:block"></div>
      <div className="flex flex-1 justify-center items-center">
        <div className="p-5 shadow-sm xl:w-1/2 ">
          <h1 className="font-medium text-center text-3xl text-zinc-600">Войти</h1>
          <form className="mt-6 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-5">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Адрес электронной почты"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Пароль"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Войти
            </button>

            <div className="flex items-center justify-center">
              <div className="text-sm text-center">
                <a href="#" className="font-small text-indigo-600 hover:text-indigo-500 ">
                  Нет логина и пароля? Зарегистрируйтесь.
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
