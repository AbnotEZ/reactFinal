import React from "react";

const Footer = () => {
  return (
    
<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.digimon.net/" className="hover:underline">DigimonWEB™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://es.wikipedia.org/wiki/Digimon" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="https://www.thegamer.com/best-digimon-games/" className="mr-4 hover:underline md:mr-6">Games</a>
        </li>
        <li>
            <a href="https://en.digimoncard.com/" className="mr-4 hover:underline md:mr-6">Tcg</a>
        </li>
        <li>
            <a href="https://www.youtube.com/watch?v=EOuHn6eiyjI&ab_channel=snakewalkerTK421" className="hover:underline">Opening</a>
        </li>
    </ul>
</footer>

  );
};
export default Footer;
