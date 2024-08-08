function Header() {
   return (
      <div className="container mt-5">
         <div className="flex justify-between items-center py-6 px-9 rounded-xl bg-blue-600">
            <h1 className="text-white text-4xl font-bold mb-2">Crypto App</h1>
            <div>
               <a
                  className="text-black font-semibold text-xl hover:text-white transition-all"
                  target="_blank"
                  href="https://www.tradingview.com/"
               >
                  Trading View
               </a>
               <span className="mx-2">|</span>
               <span className="text-white text-xl">Trading App</span>
            </div>
         </div>
      </div>
   );
}

export default Header;
