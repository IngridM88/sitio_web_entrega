-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1:3306
-- Tid vid skapande: 16 feb 2023 kl 22:05
-- Serverversion: 8.0.31
-- PHP-version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `prueba1`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `newsnevents`
--

DROP TABLE IF EXISTS `newsnevents`;
CREATE TABLE IF NOT EXISTS `newsnevents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `subtitle` text NOT NULL,
  `body` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;

--
-- Dumpning av Data i tabell `newsnevents`
--

INSERT INTO `newsnevents` (`id`, `title`, `subtitle`, `body`, `img_id`) VALUES
(1, 'Pomona Farmers Market03/25/2023 - Saturday', 'EVENT', 'I\'ll be selling merch from 10.00 to 17.30. New T-shirt selection, earrings, stickers and much more!! My stand will be right by the entrance (Debbie88). See you there!', NULL),
(2, 'Pomona Farmers Market\r\n02/25/2023 - Saturday', 'EVENT', 'I\'ll be selling merch from 10.00 to 17.00. New T-shirt selection, earrings, stickers and much more!! My stand will be right by the entrance (Debbie88). See you there!', NULL),
(3, 'San Bernardino Farmers Market\r\n03/04/2023 - Saturday', 'EVENT', 'I\'ll be there from 10.30 to 18.00. New T-shirt selection, earrings, stickers and all the goodies!! My stand will be in the back close to the food and drinks section(Debbie88). See you!', NULL),
(4, 'San Diego Comic-Con International!\r\nWed, Jul 19/2023 - Sun, Jul 23/2023', 'EVENT', 'Yeah! It\'s happening! I\'ll be waiting for y\'all from 10.00 to 20.00 with the best of the old and tons of new merch. Look me up as Debbie88! ', NULL),
(7, 'New Fantasy Sticker Collection', 'NEWS', 'Our new stickers collection will be out for sale next Friday. Buying within the first 24 hours from the release you get 30%Off! ', NULL),
(11, 'San Bernardino Farmers Market\r\n03/04/2023 - Saturday', 'EVENT', 'I\'ll be there from 10.30 to 18.00. New T-shirt selection, earrings, stickers and all the goodies!! My stand will be in the back close to the food and drinks section(Debbie88). See you!', NULL),
(8, 'Halloween 2022 t-shirts sale!', 'NEWS', 'Visit our store and type in the CODE \'allhallows22\' during your purchase to pay half the price!', NULL),
(9, 'Halloween 2022 t-shirts sale!', 'NEWS', 'Visit our store and type in the CODE \'allhallows22\' during your purchase to pay half the price!', NULL),
(10, 'San Bernardino Farmers Market\r\n03/04/2023 - Saturday', 'EVENT', 'I\'ll be there from 10.30 to 18.00. New T-shirt selection, earrings, stickers and all the goodies!! My stand will be in the back close to the food and drinks section(Debbie88). See you!', NULL),
(12, 'Pomona Farmers Market\r\n02/25/2023 - Saturday', 'EVENT', 'I\'ll be selling merch from 10.00 to 17.00. New T-shirt selection, earrings, stickers and much more!! My stand will be right by the entrance (Debbie88). See you there!', NULL),
(14, 'New Poster Collection', 'NEWS', 'Sci-fi themed poster collection \'Flowers and Bots\' . All designs come in 4 sizes (small, medium, large, huge).  \r\n15% Off until next week! ', 'e00phoz0yuxo9zc1idtl');

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`user_id`, `user`, `password`, `email`) VALUES
(1, 'Debbie', '2423712d80b7cc18ad6a483340166d06', 'deborahmerz@gmail.com'),
(2, 'Ingrid', '9a58687f323ecc95ba2cdb085b798d7b', 'ingridmerz88@gmail.com'),
(3, 'Doris', 'ea5a9de09edad10b006bdff9c0195cd3', 'theforgetfulone@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
