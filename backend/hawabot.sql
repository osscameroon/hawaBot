-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2021 at 01:58 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hawabot`
--

-- --------------------------------------------------------

--
-- Table structure for table `ans_ques`
--

CREATE TABLE `ans_ques` (
  `id` int(11) NOT NULL,
  `type` varchar(1) NOT NULL,
  `parent` int(11) NOT NULL,
  `text` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ans_ques`
--

INSERT INTO `ans_ques` (`id`, `type`, `parent`, `text`, `date`) VALUES
(1, 'A', 1, 'Bring developers together', '2021-06-09 08:49:48'),
(2, 'Q', 1, 'founders?', '2021-06-09 11:53:44'),
(3, 'A', 2, 'Goals of Oss', '2021-06-09 11:53:44'),
(4, 'A', 1, 'How can I help you?', '2021-06-09 11:53:44'),
(5, 'A', 2, 'Projects', '2021-06-09 11:53:44'),
(6, 'Q', 3, 'Help developers', '2021-06-09 11:53:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ans_ques`
--
ALTER TABLE `ans_ques`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `text` (`text`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ans_ques`
--
ALTER TABLE `ans_ques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
