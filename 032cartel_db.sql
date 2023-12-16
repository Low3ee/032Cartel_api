-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2023 at 07:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `032cartel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `cart_id` varchar(50) NOT NULL DEFAULT concat('cart-',convert(uuid() using utf8mb4)),
  `user_id` varchar(50) DEFAULT NULL,
  `product_id` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `added_to_cart` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_cart`
--

INSERT INTO `tbl_cart` (`cart_id`, `user_id`, `product_id`, `quantity`, `added_to_cart`) VALUES
('cart-25249f92-98d3-11ee-ade5-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-da4f882c-97eb-11ee-a5ce-', 5, '2023-12-12 09:45:12'),
('cart-4920fffa-98c7-11ee-ade5-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-da4f882c-97eb-11ee-a5ce-', 1, '2023-12-12 08:20:18'),
('cart-53bdeb0d-991b-11ee-8fd8-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-e4257239-97eb-11ee-a5ce-', 1, '2023-12-12 18:21:54'),
('cart-5d186b6e-98d3-11ee-ade5-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-e4257239-97eb-11ee-a5ce-', 1, '2023-12-12 09:46:46'),
('cart-81b04d12-98c7-11ee-ade5-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-da4f882c-97eb-11ee-a5ce-', 1, '2023-12-12 08:21:53'),
('cart-9d0adbeb-9902-11ee-8fd8-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-e4257239-97eb-11ee-a5ce-', 1, '2023-12-12 15:24:59'),
('cart-b76a828d-97ff-11ee-a5ce-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-b4a11ebe-97eb-11ee-a5ce-', 3, '2023-12-11 08:31:23'),
('cart-edce0528-99d4-11ee-a03d-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-e4257239-97eb-11ee-a5ce-', 1, '2023-12-13 16:30:29'),
('cart-fe6e836b-97ff-11ee-a5ce-98fa9b36321a', 'user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'prdct-da4f882c-97eb-11ee-a5ce-', 1, '2023-12-11 08:33:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `order_id` varchar(50) NOT NULL DEFAULT concat('order-',convert(uuid() using utf8mb4)),
  `order_item` varchar(30) NOT NULL,
  `order_amount` decimal(10,2) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `customer_id` varchar(50) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT 'pending',
  `delivery_status` varchar(20) DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `product_id` varchar(30) NOT NULL DEFAULT concat('prdct-',convert(uuid() using utf8mb4)),
  `product_name` varchar(255) NOT NULL,
  `product_price` float(10,2) NOT NULL,
  `product_category` varchar(100) NOT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `product_image` blob DEFAULT NULL,
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `stock` int(11) DEFAULT 1,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_release` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_updated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`product_id`, `product_name`, `product_price`, `product_category`, `product_description`, `product_image`, `featured`, `stock`, `date_created`, `date_release`, `date_updated`) VALUES
('prdct-b4a11ebe-97eb-11ee-a5ce-', '032 Cartel Shirt 1', 250.00, 'Shirts', '032 Cartel OG Shirt', NULL, 1, 20, '2023-12-11 06:08:08', '2012-02-19 04:47:47', NULL),
('prdct-c2e99df2-97eb-11ee-a5ce-', '032 Cartel Shirt 2', 350.00, 'Shirts', '032 Cartel Shirt 2', NULL, 0, 20, '2023-12-11 06:08:32', '2012-02-19 04:47:47', NULL),
('prdct-d1cdd278-97eb-11ee-a5ce-', '032 Cartel Shirt 3', 350.00, 'Shirts', '032 Cartel Shirt 3', NULL, 0, 20, '2023-12-11 06:08:57', '2012-02-19 04:47:47', NULL),
('prdct-da4f882c-97eb-11ee-a5ce-', '032 Cartel Shirt 4', 350.00, 'Shirts', '032 Cartel Shirt 4', NULL, 1, 20, '2023-12-11 06:09:11', '2015-02-19 04:47:47', NULL),
('prdct-e4257239-97eb-11ee-a5ce-', '032 Cartel Shirt 5', 350.00, 'Shirts', '032 Cartel Shirt 5', NULL, 0, 10, '2023-12-11 06:09:28', '2015-02-19 04:47:47', NULL),
('prdct-f65d581b-97eb-11ee-a5ce-', '032 Cartel Shirt 6', 350.00, 'Shirts', '032 Cartel Shirt 6', NULL, 1, 10, '2023-12-11 06:09:58', '2015-02-25 04:57:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` varchar(50) NOT NULL DEFAULT concat('user-',convert(uuid() using utf8mb4)),
  `user_email` varchar(255) NOT NULL,
  `user_fname` varchar(255) NOT NULL,
  `user_lname` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_updated` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_phone` varchar(100) DEFAULT NULL,
  `user_role` varchar(20) DEFAULT 'regular'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_email`, `user_fname`, `user_lname`, `user_password`, `date_created`, `date_updated`, `last_login`, `user_address`, `user_phone`, `user_role`) VALUES
('user-05b5662c-9bd5-11ee-b670-98fa9b36321a', 'jefordglen@gmail.com', 'jefrd', 'angob', 'password', '2023-12-16 05:36:11', NULL, NULL, NULL, NULL, 'regular'),
('user-18870c92-990a-11ee-8fd8-98fa9b36321a', 'louieabad866@ymail.com', 'Louie', 'Abad', 'Password123', '2023-12-12 16:18:33', NULL, NULL, NULL, NULL, 'regular'),
('user-195b7194-991f-11ee-8fd8-98fa9b36321a', 'user123@ymail.com', 'Louie', 'Abad', 'password', '2023-12-12 18:48:54', NULL, NULL, NULL, NULL, 'regular'),
('user-25a3373c-990b-11ee-8fd8-98fa9b36321a', 'newuser123@gmail.vom', 'John', 'Doe', '12345', '2023-12-12 16:26:05', NULL, NULL, NULL, NULL, 'regular'),
('user-2b7b23d0-991b-11ee-8fd8-98fa9b36321a', 'lower322@ymail.com', 'John', 'Abad', 'Password', '2023-12-12 18:20:46', NULL, NULL, NULL, NULL, 'regular'),
('user-a2b05b39-990a-11ee-8fd8-98fa9b36321a', 'louieabad345@gmail.com', 'Louie', 'Abad 2', 'Password123', '2023-12-12 16:22:25', NULL, NULL, NULL, NULL, 'regular'),
('user-beb5072a-97fb-11ee-a5ce-98fa9b36321a', 'louieabad000@gmail.com', 'Louie]', 'Abad', 'Pasword123', '2023-12-11 08:02:57', NULL, NULL, NULL, NULL, 'user'),
('user-f7e8ec27-99b7-11ee-a03d-98fa9b36321a', 'newuser@gmail.com', 'john', 'luga', 'passwordniya', '2023-12-13 13:03:11', NULL, NULL, NULL, NULL, 'regular');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD UNIQUE KEY `cart_id` (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`order_id`),
  ADD UNIQUE KEY `order_id` (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `product_id` (`product_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD CONSTRAINT `tbl_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`user_id`),
  ADD CONSTRAINT `tbl_cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `tbl_products` (`product_id`);

--
-- Constraints for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD CONSTRAINT `tbl_orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `tbl_users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
