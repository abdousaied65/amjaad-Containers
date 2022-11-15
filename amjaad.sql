-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2022 at 10:22 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amjaad`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `supervisor_id` bigint(20) UNSIGNED NOT NULL,
  `contract_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'executed',
  `date` date NOT NULL,
  `time` time NOT NULL,
  `notes` text DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'done',
  `payment_status` varchar(255) NOT NULL DEFAULT 'unpaid',
  `discount_percent` varchar(255) NOT NULL,
  `discount_total` varchar(255) NOT NULL,
  `total_before_discount` varchar(255) NOT NULL,
  `total_after_discount` varchar(255) NOT NULL,
  `vat_total` varchar(255) NOT NULL,
  `final_total` varchar(255) NOT NULL,
  `paid` varchar(255) NOT NULL,
  `rest` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `supervisor_id`, `contract_id`, `company_id`, `type`, `date`, `time`, `notes`, `status`, `payment_status`, `discount_percent`, `discount_total`, `total_before_discount`, `total_after_discount`, `vat_total`, `final_total`, `paid`, `rest`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 14, 'executed', '2022-10-06', '12:51:51', 'لا يوجد', 'done', 'totally paid', '0', '0', '434.78', '434.78', '65.22', '500', '500', '0', '2022-10-06 10:52:22', '2022-10-06 10:52:22'),
(2, 1, 2, 14, 'executed', '2022-10-06', '14:53:52', 'لا يوجد', 'done', 'partially paid', '0', '0', '652.17', '652.17', '97.83', '750', '500', '250', '2022-10-06 12:54:32', '2022-10-06 12:54:32'),
(3, 1, 3, 14, 'executed', '2022-10-07', '19:02:54', NULL, 'done', 'totally paid', '0', '0', '217.39', '217.39', '32.61', '250', '250', '0', '2022-10-07 17:03:31', '2022-10-07 17:03:31'),
(4, 1, 4, 16, 'executed', '2023-10-08', '13:06:22', 'غير منفذة', 'done', 'partially paid', '0', '0', '434.78', '434.78', '65.22', '500', '400', '100', '2022-10-08 11:08:04', '2022-10-08 12:29:14'),
(5, 1, 5, 18, 'unexecuted', '2022-10-08', '14:44:35', 'فاتورة غير منفذة', 'done', 'totally paid', '0', '0', '434.78', '434.78', '65.22', '500', '500', '0', '2022-10-08 12:45:28', '2022-10-08 12:45:28'),
(6, 1, 6, 38, 'executed', '2022-10-08', '20:04:34', NULL, 'done', 'unpaid', '0', '0', '2173.9', '2173.9', '326.09', '2499.99', '0', '2499.99', '2022-10-08 20:08:36', '2022-10-08 20:08:36');

-- --------------------------------------------------------

--
-- Table structure for table `bill_containers`
--

CREATE TABLE `bill_containers` (
  `id` int(11) NOT NULL,
  `bill_id` int(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  `container_id` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `tax` varchar(255) NOT NULL,
  `total_amount` varchar(255) NOT NULL,
  `delivery_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill_containers`
--

INSERT INTO `bill_containers` (`id`, `bill_id`, `contract_id`, `container_id`, `amount`, `tax`, `total_amount`, `delivery_date`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 7, '217.39', '32.61', '250', '2022-10-01', '2022-10-06 10:52:22', '2022-10-06 10:52:22'),
(2, 1, 1, 8, '217.39', '32.61', '250', '2022-10-01', '2022-10-06 10:52:22', '2022-10-06 10:52:22'),
(3, 2, 2, 9, '217.39', '32.61', '250', '2022-10-01', '2022-10-06 12:54:32', '2022-10-06 12:54:32'),
(4, 2, 2, 10, '217.39', '32.61', '250', '2022-10-01', '2022-10-06 12:54:32', '2022-10-06 12:54:32'),
(5, 2, 2, 11, '217.39', '32.61', '250', '2022-10-01', '2022-10-06 12:54:32', '2022-10-06 12:54:32'),
(6, 3, 3, 12, '217.39', '32.61', '250', '2022-10-01', '2022-10-07 17:03:31', '2022-10-07 17:03:31'),
(7, 4, 4, 13, '217.39', '32.61', '250', '2022-10-04', '2022-10-08 12:29:14', '2022-10-08 12:29:14'),
(8, 4, 4, 14, '217.39', '32.61', '250', '2022-10-04', '2022-10-08 12:29:14', '2022-10-08 12:29:14'),
(9, 6, 6, 54, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(10, 6, 6, 55, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(11, 6, 6, 56, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(12, 6, 6, 57, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(13, 6, 6, 58, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(14, 6, 6, 59, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(15, 6, 6, 60, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(16, 6, 6, 61, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(17, 6, 6, 62, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(18, 6, 6, 63, '217.39', '32.61', '250', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36'),
(19, 6, 6, 64, '0', '0', '0', '2022-10-08', '2022-10-08 20:08:36', '2022-10-08 20:08:36');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_owner` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `tax_number` varchar(255) DEFAULT NULL,
  `commercial_record` varchar(255) DEFAULT NULL,
  `debts` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company_name`, `company_owner`, `phone_number`, `mobile_number`, `address`, `tax_number`, `commercial_record`, `debts`, `created_at`, `updated_at`) VALUES
(14, 'مؤسسة زهرة السماء التجاريه', NULL, '0591436380', '0591436380', 'حائل', '310059071200003', NULL, '250', '2022-07-31 17:25:55', '2022-10-06 12:54:32'),
(15, 'شركة حسين لتاجير السيارات', NULL, '0506243346', '0506243346', 'حائل', '300252657200003', NULL, '0', '2022-07-31 17:26:51', '2022-07-31 17:26:51'),
(16, 'مؤسسة المطلق لتجارة مواد البناء', NULL, '0597195208', '0597195208', 'حائل - الصناعية', '302046458300003', NULL, '100', '2022-07-31 17:27:56', '2022-10-08 11:08:04'),
(17, 'شركة مركز سماح التجاري', NULL, '0500525818', '0500525818', 'حائل - المنتزه الغربي', '300588389410003', NULL, '0', '2022-07-31 17:29:18', '2022-07-31 17:29:18'),
(18, 'موسسة المتحده للمقاولات', NULL, '0501508640', '0501508640', 'حائل', '300939794800003', NULL, '0', '2022-07-31 17:30:14', '2022-07-31 17:30:14'),
(19, 'شركة شرق دلتا السعودية المحدودة', NULL, '0569798119', '0569798119', 'حائل', '300116138600003', NULL, '0', '2022-07-31 17:31:15', '2022-07-31 17:31:15'),
(20, 'مؤسسة بناء وأمان للمقاولات', NULL, '0550797678', '0550797678', 'حائل', '302146517400003', NULL, '0', '2022-07-31 17:31:57', '2022-07-31 17:31:57'),
(21, 'شركة خضوب للتجارة والمقاولات', NULL, '0535672392', '0535672392', 'حائل', '300272457300003', NULL, '0', '2022-07-31 17:32:47', '2022-07-31 17:32:47'),
(22, 'شركة الصفا للأدوية والمستلزمات  الطبية', NULL, '0551725612', '0551725612', 'حائل', '300109583500003', NULL, '0', '2022-07-31 17:33:45', '2022-07-31 17:33:45'),
(23, 'شركه ابداع اللوتس للمقاولات العامة', NULL, '0500426010', '0500426010', 'حائل', '311017488500003', NULL, '0', '2022-07-31 17:35:09', '2022-07-31 17:35:09'),
(24, 'مؤسسة مريول الريان للتجارة', NULL, '0534837869', '0534837869', 'حائل', '310141661500003', NULL, '0', '2022-07-31 17:36:26', '2022-07-31 17:36:26'),
(25, 'شركة تل العمارة للمقاولات', NULL, '0565106660', '0565106660', 'حائل', '310394676500003', NULL, '0', '2022-07-31 17:37:10', '2022-07-31 17:37:10'),
(26, 'احمد صالح الحمندي', NULL, '0555227206', '0555227206', 'حائل - الزبارة', NULL, NULL, '0', '2022-07-31 17:39:06', '2022-07-31 17:39:06'),
(27, 'مؤسسة إبراهيم الربيعان', NULL, '0533500125', '0533500125', 'حائل - السمراء', NULL, NULL, '0', '2022-07-31 17:39:55', '2022-07-31 17:39:55'),
(28, 'عادل الشمري', NULL, '0555157409', '0555157409', 'حائل - الرصف', NULL, NULL, '0', '2022-07-31 17:40:39', '2022-07-31 17:40:39'),
(29, 'اصف', NULL, '0591778620', '0591778620', 'حائل - الجبل', NULL, NULL, '0', '2022-07-31 17:41:11', '2022-07-31 17:41:11'),
(30, 'محمد الحزام', NULL, '0505167910', '0505167910', 'حائل - الجامعيين', NULL, NULL, '0', '2022-07-31 17:41:48', '2022-07-31 17:41:48'),
(31, 'صالح', NULL, '0544957057', '0544957057', 'حائل - الوسيطاء', NULL, NULL, '0', '2022-07-31 17:42:25', '2022-07-31 17:42:25'),
(32, 'محل القويزان', NULL, '0506997362', '0506997362', 'حائل - الصناعية', NULL, NULL, '0', '2022-07-31 17:43:17', '2022-07-31 17:43:17'),
(33, 'مطعم عرفة دربار', NULL, '0552807117', '0552807117', 'حائل - العزيزية', NULL, NULL, '0', '2022-07-31 17:43:56', '2022-07-31 17:43:56'),
(34, 'أبو فأدب فايد', NULL, '0501816777', '0501816777', 'حائل - النقرة شارع العريفي', NULL, NULL, '0', '2022-07-31 17:45:48', '2022-07-31 17:45:48'),
(37, 'نهير مطلق', NULL, NULL, NULL, 'حائل', NULL, NULL, '0', '2022-07-31 19:00:42', '2022-07-31 19:46:40'),
(38, 'مامون محمد', NULL, '0531135511', NULL, 'النقرة', NULL, NULL, '2499.99', '2022-08-17 19:40:20', '2022-10-08 20:08:36');

-- --------------------------------------------------------

--
-- Table structure for table `containers`
--

CREATE TABLE `containers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `measure` varchar(255) NOT NULL,
  `rent_amount` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `containers`
--

INSERT INTO `containers` (`id`, `name`, `measure`, `rent_amount`, `status`, `created_at`, `updated_at`) VALUES
(7, '5', '20', '217.39', 'مؤجرة', '2022-07-24 18:59:11', '2022-10-06 10:52:22'),
(8, '111', '20', '217.39', 'مؤجرة', '2022-07-24 18:59:34', '2022-10-06 10:52:22'),
(9, '112', '20', '217.39', 'مؤجرة', '2022-07-24 18:59:59', '2022-10-06 12:54:32'),
(10, '113', '20', '217.39', 'مؤجرة', '2022-07-24 19:00:24', '2022-10-06 12:54:32'),
(11, '114', '20', '217.39', 'مؤجرة', '2022-07-24 19:00:40', '2022-10-06 12:54:32'),
(12, '116', '20', '217.39', 'مؤجرة', '2022-07-24 19:01:00', '2022-10-07 17:03:31'),
(13, '117', '20', '217.39', 'مؤجرة', '2022-07-24 19:01:54', '2022-10-08 12:29:14'),
(14, '118', '20', '217.39', 'مؤجرة', '2022-07-24 19:02:10', '2022-10-08 12:29:14'),
(15, '119', '20', '217.39', 'فارغة', '2022-07-24 19:02:22', '2022-07-31 17:17:48'),
(16, '120', '20', '217.39', 'فارغة', '2022-07-24 19:02:33', '2022-07-31 17:17:57'),
(17, '121', '20', '217.39', 'فارغة', '2022-07-24 19:02:50', '2022-08-17 19:41:27'),
(18, '122', '20', '217.39', 'فارغة', '2022-07-24 19:03:09', '2022-07-31 17:18:16'),
(19, '123', '20', '217.39', 'فارغة', '2022-07-24 19:03:25', '2022-07-31 17:18:26'),
(20, '124', '20', '217.39', 'فارغة', '2022-07-24 19:03:48', '2022-07-31 17:18:36'),
(21, '126', '20', '217.39', 'فارغة', '2022-07-24 19:04:04', '2022-07-31 17:18:45'),
(22, '127', '20', '217.39', 'فارغة', '2022-07-24 19:04:18', '2022-07-31 17:18:54'),
(23, '128', '20', '217.39', 'فارغة', '2022-07-24 19:04:35', '2022-07-31 17:19:02'),
(24, '267', '20', '217.39', 'فارغة', '2022-07-24 19:04:56', '2022-07-31 17:19:11'),
(25, '268', '20', '217.39', 'فارغة', '2022-07-24 19:05:36', '2022-07-31 17:19:22'),
(26, '312', '20', '217.39', 'فارغة', '2022-07-24 19:05:50', '2022-07-31 17:19:32'),
(27, '313', '20', '217.39', 'فارغة', '2022-07-24 19:06:01', '2022-07-31 17:19:44'),
(28, '314', '20', '217.39', 'فارغة', '2022-07-24 19:06:20', '2022-07-31 17:19:53'),
(29, '315', '20', '217.39', 'فارغة', '2022-07-24 19:06:35', '2022-07-31 17:20:01'),
(30, '316', '20', '217.39', 'فارغة', '2022-07-24 19:06:50', '2022-07-31 17:20:11'),
(31, '317', '20', '217.39', 'فارغة', '2022-07-24 19:07:04', '2022-07-31 17:20:20'),
(32, '318', '20', '217.39', 'فارغة', '2022-07-24 19:07:17', '2022-07-31 17:20:28'),
(33, '319', '20', '217.39', 'فارغة', '2022-07-24 19:07:32', '2022-07-31 17:20:37'),
(34, '320', '20', '217.39', 'فارغة', '2022-07-24 19:07:47', '2022-07-31 17:20:46'),
(35, '321', '20', '217.39', 'فارغة', '2022-07-24 19:07:59', '2022-07-31 17:21:06'),
(36, '322', '20', '217.39', 'فارغة', '2022-07-24 19:08:10', '2022-07-31 17:21:15'),
(37, '323', '20', '217.39', 'فارغة', '2022-07-24 19:08:40', '2022-07-31 17:21:25'),
(38, '324', '20', '217.39', 'فارغة', '2022-07-24 19:08:54', '2022-07-31 17:21:34'),
(39, '325', '20', '217.39', 'فارغة', '2022-07-24 19:09:10', '2022-07-31 17:21:44'),
(40, '326', '20', '217.39', 'فارغة', '2022-07-24 19:09:23', '2022-07-31 17:21:53'),
(41, '129', '20', '217.39', 'فارغة', '2022-07-24 19:10:01', '2022-07-31 17:22:02'),
(42, '130', '20', '217.39', 'فارغة', '2022-07-24 19:10:10', '2022-07-31 17:22:11'),
(43, '131', '20', '217.39', 'فارغة', '2022-07-24 19:10:23', '2022-07-31 17:22:19'),
(44, '132', '20', '217.39', 'فارغة', '2022-07-24 19:10:41', '2022-07-31 17:22:28'),
(45, '133', '20', '217.39', 'فارغة', '2022-07-24 19:11:10', '2022-07-31 17:23:24'),
(46, '136', '20', '217.39', 'فارغة', '2022-07-24 19:11:29', '2022-07-31 17:23:16'),
(47, '160', '20', '217.39', 'فارغة', '2022-07-24 19:11:42', '2022-07-31 17:23:07'),
(48, '261', '20', '217.39', 'فارغة', '2022-07-24 19:11:56', '2022-07-31 17:22:58'),
(49, '256', '20', '217.39', 'فارغة', '2022-07-24 19:12:08', '2022-07-31 17:22:49'),
(50, '327', '20', '217.39', 'فارغة', '2022-07-24 19:12:22', '2022-07-31 17:22:41'),
(51, '328', '20', '217.39', 'فارغة', '2022-07-24 19:12:35', '2022-07-30 21:23:39'),
(52, '329', '20', '217.39', 'فارغة', '2022-07-24 19:12:48', '2022-07-30 21:23:28'),
(53, '470', '20', '217.39', 'فارغة', '2022-07-24 19:13:02', '2022-07-30 21:23:16'),
(54, '471', '20', '217.39', 'مؤجرة', '2022-07-24 19:13:14', '2022-10-08 20:08:36'),
(55, '472', '20', '217.39', 'مؤجرة', '2022-07-24 19:13:26', '2022-10-08 20:08:36'),
(56, '473', '20', '217.39', 'مؤجرة', '2022-07-24 19:13:38', '2022-10-08 20:08:36'),
(57, '474', '20', '217.39', 'مؤجرة', '2022-07-24 19:13:53', '2022-10-08 20:08:36'),
(58, '475', '20', '217.39', 'مؤجرة', '2022-07-24 19:14:03', '2022-10-08 20:08:36'),
(59, '476', '20', '217.39', 'مؤجرة', '2022-07-30 18:30:48', '2022-10-08 20:08:36'),
(60, '477', '20', '217.39', 'مؤجرة', '2022-07-30 18:31:01', '2022-10-08 20:08:36'),
(61, '478', '20', '217.39', 'مؤجرة', '2022-07-30 18:31:19', '2022-10-08 20:08:36'),
(62, '479', '20', '173.914', 'مؤجرة', '2022-07-30 18:31:34', '2022-10-09 11:08:42'),
(63, '480', '20', '173.914', 'مؤجرة', '2022-07-30 18:31:47', '2022-10-08 20:34:46'),
(64, '481', '20', '173.914', 'مؤجرة', '2022-07-30 18:31:59', '2022-10-09 11:08:08');

-- --------------------------------------------------------

--
-- Table structure for table `contracts`
--

CREATE TABLE `contracts` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'executed',
  `containers_number` varchar(255) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `plot_number` varchar(255) DEFAULT NULL,
  `chart_number` varchar(255) DEFAULT NULL,
  `flat_construction` varchar(255) DEFAULT NULL,
  `responses_number` varchar(255) DEFAULT NULL,
  `contract_start_date` date NOT NULL,
  `contract_end_date` date NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'سارى',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contracts`
--

INSERT INTO `contracts` (`id`, `company_id`, `type`, `containers_number`, `city`, `district`, `street`, `plot_number`, `chart_number`, `flat_construction`, `responses_number`, `contract_start_date`, `contract_end_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 14, 'executed', '2', 'جازان', 'جراح', 'مسطردة', '45', '76', '43', '2', '2022-10-06', '2023-10-06', 'سارى', '2022-10-06 10:52:22', '2022-10-06 10:52:22'),
(2, 14, 'executed', '3', 'جازان', 'جراح', 'مسطردة', '3', '4', '5', '3', '2022-10-06', '2023-10-06', 'سارى', '2022-10-06 12:54:32', '2022-10-06 12:54:32'),
(3, 14, 'executed', '1', 'جازان', 'جراح', 'مسطردة', '33', '44', '55', '1', '2022-10-07', '2023-10-07', 'سارى', '2022-10-07 17:03:31', '2022-10-07 17:03:31'),
(4, 16, 'unexecuted', '2', 'الرياض', 'حى الشيخ سلمان', 'تقاطع الدول العربية', '3', '5', '3', '2', '2022-10-08', '2023-10-08', 'سارى', '2022-10-08 11:08:04', '2022-10-08 11:08:04'),
(5, 18, 'unexecuted', '2', 'القاهره', 'مدينة نصر', 'التسعين الجنوبى', '30', '40', '50', '12', '2022-10-08', '2023-10-08', 'سارى', '2022-10-08 12:45:28', '2022-10-08 12:45:28'),
(6, 38, 'executed', '10', 'حائل', 'النقرة', 'فهد العريفي', NULL, NULL, NULL, '10', '2022-10-08', '2023-10-08', 'سارى', '2022-10-08 20:08:36', '2022-10-08 20:08:36');

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\Supervisor', 1);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `bill_id` int(11) DEFAULT NULL,
  `safe_id` int(11) NOT NULL,
  `contract_id` int(11) DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `bill_id`, `safe_id`, `contract_id`, `company_id`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 14, '500', '2022-10-06 10:52:22', '2022-10-06 10:52:22'),
(2, 2, 1, 2, 14, '500', '2022-10-06 12:54:32', '2022-10-06 12:54:32'),
(3, 3, 1, 3, 14, '250', '2022-10-07 17:03:31', '2022-10-07 17:03:31'),
(4, 4, 2, 4, 16, '400', '2022-10-08 11:08:04', '2022-10-08 11:08:04'),
(5, 5, 3, 5, 18, '500', '2022-10-08 12:45:28', '2022-10-08 12:45:28');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `key`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'اضافة مشرف', 'supervisor', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(2, 'عرض مشرف', 'supervisor', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(3, 'تعديل مشرف', 'supervisor', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(4, 'حذف مشرف', 'supervisor', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(5, 'اضافة صلاحية', 'privilege', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(6, 'عرض صلاحية', 'privilege', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(7, 'تعديل صلاحية', 'privilege', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(8, 'حذف صلاحية', 'privilege', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(9, 'الاعدادات العامة', 'settings', 'supervisor-web', '2022-03-17 04:28:44', '2022-03-17 04:28:44'),
(10, 'اضافة حاوية', 'container', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(11, 'عرض حاوية', 'container', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(12, 'تعديل حاوية', 'container', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(13, 'حذف حاوية', 'container', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(14, 'اضافة شركة', 'company', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(15, 'عرض شركة', 'company', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(16, 'تعديل شركة', 'company', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(17, 'حذف شركة', 'company', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(18, 'اضافة خزنة', 'safe', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(19, 'عرض خزنة', 'safe', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(20, 'تعديل خزنة', 'safe', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(21, 'حذف خزنة', 'safe', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(22, 'انشاء عقد + فاتورة', 'contarct_bill', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(23, 'التقارير', 'reports', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(24, 'اضافة مدفوعات', 'payment', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(25, 'عرض مدفوعات', 'payment', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(26, 'تعديل مدفوعات', 'payment', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42'),
(27, 'حذف مدفوعات', 'payment', 'supervisor-web', '2022-03-04 14:29:42', '2022-03-04 14:29:42');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'مدير النظام', 'supervisor-web', '2021-08-23 01:40:49', '2021-08-23 01:40:49');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1);

-- --------------------------------------------------------

--
-- Table structure for table `safes`
--

CREATE TABLE `safes` (
  `id` int(11) NOT NULL,
  `safe_name` varchar(255) NOT NULL,
  `balance` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `safes`
--

INSERT INTO `safes` (`id`, `safe_name`, `balance`, `type`, `created_at`, `updated_at`) VALUES
(1, 'صندوق', '1250', 'خزنة', '2022-07-01 02:16:02', '2022-10-07 17:03:31'),
(2, 'شبكة الراجحي', '400', 'بنك', '2022-07-05 14:18:36', '2022-10-08 11:08:04'),
(3, 'تحويل الراجحي', '500', 'بنك', '2022-07-31 18:41:59', '2022-10-08 12:45:28');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_name_en` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `tax_number` varchar(255) NOT NULL,
  `commercial_record` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `company_name`, `company_name_en`, `address`, `tax_number`, `commercial_record`, `phone_number`, `created_at`, `updated_at`) VALUES
(1, 'مؤسسة ركن التاج للحاويات ونقل المخلفات', 'Rokn Altaj Commercial', 'حائل - شارع الملك فيصل', '302046459500003', '3350023358', '0505515028', '2022-03-17 03:44:18', '2022-07-31 18:42:16');

-- --------------------------------------------------------

--
-- Table structure for table `supervisors`
--

CREATE TABLE `supervisors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile_pic` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `api_token` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `supervisors`
--

INSERT INTO `supervisors` (`id`, `name`, `email`, `phone_number`, `profile_pic`, `email_verified_at`, `password`, `role_name`, `Status`, `api_token`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Abdou Shawer', 'abdoushawer93@gmail.com', '01092716796', 'uploads/profiles/supervisors/1/untitiled.jpg', '2021-08-23 01:40:49', '$2y$10$9mxPXtwS2GBsIT7MHR8cXeotJe4vCl6DpyXdre.hmC0nYsp3ByNbu', 'مدير النظام', 'active', NULL, 'fK0bVnnmsj5yjlVQOVPhjE2RUzuz1UA5RNxkAgxRVjSgNHThrlryuVcaluL3', '2021-08-23 01:40:49', '2022-07-17 20:49:59');

-- --------------------------------------------------------

--
-- Table structure for table `supervisor_password_resets`
--

CREATE TABLE `supervisor_password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id_2` (`company_id`),
  ADD KEY `supervisor_id` (`supervisor_id`),
  ADD KEY `contract_id` (`contract_id`);

--
-- Indexes for table `bill_containers`
--
ALTER TABLE `bill_containers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bill_id_90` (`bill_id`),
  ADD KEY `contract_id_90` (`contract_id`),
  ADD KEY `container_id_90` (`container_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `containers`
--
ALTER TABLE `containers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contracts`
--
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bill_id` (`bill_id`),
  ADD KEY `safe_id` (`safe_id`),
  ADD KEY `contract_id_2` (`contract_id`),
  ADD KEY `company_id_10` (`company_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `safes`
--
ALTER TABLE `safes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supervisors`
--
ALTER TABLE `supervisors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`),
  ADD UNIQUE KEY `admins_api_token_unique` (`api_token`);

--
-- Indexes for table `supervisor_password_resets`
--
ALTER TABLE `supervisor_password_resets`
  ADD KEY `admin_password_resets_email_index` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `bill_containers`
--
ALTER TABLE `bill_containers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `containers`
--
ALTER TABLE `containers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `contracts`
--
ALTER TABLE `contracts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `safes`
--
ALTER TABLE `safes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `supervisors`
--
ALTER TABLE `supervisors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `company_id_2` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contract_id` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `supervisor_id` FOREIGN KEY (`supervisor_id`) REFERENCES `supervisors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bill_containers`
--
ALTER TABLE `bill_containers`
  ADD CONSTRAINT `bill_id_90` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `container_id_90` FOREIGN KEY (`container_id`) REFERENCES `containers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contract_id_90` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `contracts`
--
ALTER TABLE `contracts`
  ADD CONSTRAINT `company_id` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `bill_id` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_id_10` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contract_id_2` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `safe_id` FOREIGN KEY (`safe_id`) REFERENCES `safes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
