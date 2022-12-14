-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2022 at 09:39 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notaris`
--

-- --------------------------------------------------------

--
-- Table structure for table `app`
--

CREATE TABLE `app` (
  `kdApp` varchar(50) NOT NULL,
  `nmApp` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `app`
--

INSERT INTO `app` (`kdApp`, `nmApp`) VALUES
('MFC2G18-04', 'MFC');

-- --------------------------------------------------------

--
-- Table structure for table `appfitur`
--

CREATE TABLE `appfitur` (
  `kdApp` varchar(50) NOT NULL,
  `kdFitur` varchar(50) NOT NULL,
  `nmFitur` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appfitur`
--

INSERT INTO `appfitur` (`kdApp`, `kdFitur`, `nmFitur`) VALUES
('MFC2G18-04', 'MFC2G18-1/1', 'Login Sistem'),
('MFC2G18-04', 'MFC2G18-10/1', 'Page Pelaksanaan'),
('MFC2G18-04', 'MFC2G18-10/2', 'Tambah Data Pelaksanaan'),
('MFC2G18-04', 'MFC2G18-10/3', 'Perbarui Data Pelaksanaan'),
('MFC2G18-04', 'MFC2G18-10/4', 'Hapus Data Pelaksanaan'),
('MFC2G18-04', 'MFC2G18-11/1', 'Page Laporan'),
('MFC2G18-04', 'MFC2G18-11/2', 'Tambah Data Laporan'),
('MFC2G18-04', 'MFC2G18-11/3', 'Perbarui Data Laporan'),
('MFC2G18-04', 'MFC2G18-11/4', 'Hapus Data Laporan'),
('MFC2G18-04', 'MFC2G18-12/1', 'Page Jabatan'),
('MFC2G18-04', 'MFC2G18-12/2', 'Tambah Data Jabatan'),
('MFC2G18-04', 'MFC2G18-12/3', 'Perbarui Data Jabatan'),
('MFC2G18-04', 'MFC2G18-12/4', 'Hapus Data Jabatan'),
('MFC2G18-04', 'MFC2G18-2/1', 'Dashboard'),
('MFC2G18-04', 'MFC2G18-3/1', 'Page Produk'),
('MFC2G18-04', 'MFC2G18-3/2', 'Tambah Data Produk'),
('MFC2G18-04', 'MFC2G18-3/3', 'Perbarui Data Produk'),
('MFC2G18-04', 'MFC2G18-3/4', 'Hapus Data Produk'),
('MFC2G18-04', 'MFC2G18-4/1', 'Page kantor'),
('MFC2G18-04', 'MFC2G18-4/2', 'Tambah Data kantor'),
('MFC2G18-04', 'MFC2G18-4/3', 'Perbarui Data kantor'),
('MFC2G18-04', 'MFC2G18-4/4', 'Hapus Data kantor'),
('MFC2G18-04', 'MFC2G18-5/1', 'Page Member'),
('MFC2G18-04', 'MFC2G18-5/2', 'Tambah Data Member'),
('MFC2G18-04', 'MFC2G18-5/3', 'Perbarui Data Member'),
('MFC2G18-04', 'MFC2G18-5/4', 'Hapus Data Member'),
('MFC2G18-04', 'MFC2G18-6/1', 'Page Sub Produk'),
('MFC2G18-04', 'MFC2G18-6/2', 'Tambah Data Sub Produk'),
('MFC2G18-04', 'MFC2G18-6/3', 'Perbarui Data Sub Produk'),
('MFC2G18-04', 'MFC2G18-6/4', 'Hapus Data Sub Produk'),
('MFC2G18-04', 'MFC2G18-7/1', 'Page Tahapan'),
('MFC2G18-04', 'MFC2G18-7/2', 'Tambah Data Tahapan'),
('MFC2G18-04', 'MFC2G18-7/3', 'Perbarui Data Tahapan'),
('MFC2G18-04', 'MFC2G18-7/4', 'Hapus Data Tahapan'),
('MFC2G18-04', 'MFC2G18-8/1', 'Page Persyaratan'),
('MFC2G18-04', 'MFC2G18-8/2', 'Tambah Data Persyaratan'),
('MFC2G18-04', 'MFC2G18-8/3', 'Perbarui Data Persyaratan'),
('MFC2G18-04', 'MFC2G18-8/4', 'Hapus Data Persyaratan'),
('MFC2G18-04', 'MFC2G18-9/1', 'Page Pendaftaran'),
('MFC2G18-04', 'MFC2G18-9/2', 'Tambah Data Pendaftaran'),
('MFC2G18-04', 'MFC2G18-9/3', 'Perbarui Data Pendaftaran'),
('MFC2G18-04', 'MFC2G18-9/4', 'Hapus Data Pendaftaran');

-- --------------------------------------------------------

--
-- Table structure for table `appkey`
--

CREATE TABLE `appkey` (
  `kdApp` varchar(15) NOT NULL,
  `kdFitur` varchar(15) NOT NULL,
  `kdMember` varchar(15) NOT NULL,
  `Kunci` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appkey`
--

INSERT INTO `appkey` (`kdApp`, `kdFitur`, `kdMember`, `Kunci`) VALUES
('MFC2G18-04', 'MFC2G18-1/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-1/1', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-1/1', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-1/1', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-1/1', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-1/1', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-10/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-10/1', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-10/1', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-10/1', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-10/1', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-10/1', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-10/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-10/2', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-10/2', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-10/2', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-10/2', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-10/2', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-10/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-10/3', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-10/3', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-10/3', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-10/3', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-10/3', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-10/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-10/4', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-10/4', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-10/4', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-10/4', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-10/4', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-11/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-11/1', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-11/1', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-11/1', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-11/1', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-11/1', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-11/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-11/2', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-11/2', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-11/2', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-11/2', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-11/2', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-11/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-11/3', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-11/3', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-11/3', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-11/3', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-11/3', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-11/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-11/4', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-11/4', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-11/4', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-11/4', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-11/4', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-12/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-12/1', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-12/1', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-12/1', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-12/1', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-12/1', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-12/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-12/2', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-12/2', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-12/2', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-12/2', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-12/2', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-12/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-12/3', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-12/3', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-12/3', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-12/3', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-12/3', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-12/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-12/4', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-12/4', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-12/4', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-12/4', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-12/4', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-2/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-2/1', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-2/1', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-2/1', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-2/1', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-2/1', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-3/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-3/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-3/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-3/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-4/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-4/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-4/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-4/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-5/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-5/1', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-5/1', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-5/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-5/2', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-5/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-5/3', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-5/3', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-5/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-5/4', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-6/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-6/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-6/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-6/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-7/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-7/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-7/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-7/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-8/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-8/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-8/2', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-8/2', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-8/2', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-8/2', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-8/2', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-8/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-8/3', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-8/3', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-8/3', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-8/3', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-8/3', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-8/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-8/4', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-8/4', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-8/4', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-8/4', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-8/4', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-9/1', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-9/1', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-9/1', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-9/1', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-9/1', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-9/1', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-9/2', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-9/2', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-9/2', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-9/2', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-9/2', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-9/2', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-9/3', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-9/3', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-9/3', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-9/3', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-9/3', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-9/3', 'MFC-memb-9', 0),
('MFC2G18-04', 'MFC2G18-9/4', '2G18-memb-1', 0),
('MFC2G18-04', 'MFC2G18-9/4', 'MFC-memb-10', 0),
('MFC2G18-04', 'MFC2G18-9/4', 'MFC-memb-2', 0),
('MFC2G18-04', 'MFC2G18-9/4', 'MFC-memb-3', 0),
('MFC2G18-04', 'MFC2G18-9/4', 'MFC-memb-4', 0),
('MFC2G18-04', 'MFC2G18-9/4', 'MFC-memb-9', 0);

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `kdJabatan` int(2) NOT NULL,
  `kdJabatan1` varchar(20) NOT NULL,
  `nmJabatan` varchar(50) NOT NULL,
  `setingkat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`kdJabatan`, `kdJabatan1`, `nmJabatan`, `setingkat`) VALUES
(1, 'jaba-1', 'USER', 1),
(2, 'jaba-2', 'ADMIN', 2),
(3, 'jaba-3', 'SUPER', 0),
(4, 'jaba-4', 'DEVELOPER', 0);

-- --------------------------------------------------------

--
-- Table structure for table `kantor`
--

CREATE TABLE `kantor` (
  `kdKantor` int(15) NOT NULL,
  `kdKantor1` varchar(25) NOT NULL,
  `nmKantor` varchar(50) NOT NULL,
  `alamat` varchar(250) NOT NULL,
  `pemilik` varchar(150) NOT NULL,
  `noHp` varchar(13) NOT NULL,
  `gmail` varchar(100) NOT NULL,
  `photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kantor`
--

INSERT INTO `kantor` (`kdKantor`, `kdKantor1`, `nmKantor`, `alamat`, `pemilik`, `noHp`, `gmail`, `photo`) VALUES
(1, 'kant-1', 'NOTARIS', 'Meraran', 'Wira Anu', '087851781757', 'bagushartiansyah07@gmail.com', ''),
(3, 'kant-3', 'M Software Center', '-', 'Bagus Hartiansyah', '0', 'bagushartiansyah07@gmail.com', '');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `kdMember` int(15) NOT NULL,
  `kdMember1` varchar(15) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `nmMember` varchar(50) NOT NULL,
  `kdJabatan` varchar(15) NOT NULL,
  `kabupaten` varchar(50) NOT NULL,
  `kecamatan` varchar(50) NOT NULL,
  `desa` varchar(50) NOT NULL,
  `noHp` varchar(13) NOT NULL,
  `tambahan` varchar(250) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `aktif` tinyint(1) NOT NULL DEFAULT 1,
  `ins` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`kdMember`, `kdMember1`, `kdKantor`, `nmMember`, `kdJabatan`, `kabupaten`, `kecamatan`, `desa`, `noHp`, `tambahan`, `username`, `password`, `aktif`, `ins`) VALUES
(1, '2G18-memb-1', 'kant-1', 'Bagus H', 'jaba-4', ' ', ' ', ' ', '', ' ', 'm0-dev', 'aaa', 1, '2022-02-09 14:32:02'),
(2, 'MFC-memb-2', 'kant-1', 'user1', 'jaba-1', 'taliwang', 'seteluk', 'air suning', '0921', '', 'wr1-user1', 'aaa', 1, '2022-02-09 14:41:04'),
(3, 'MFC-memb-3', 'kant-1', 'admin1', 'jaba-2', '', '', '', '', '', 'wr2-admin1', 'aaa', 1, '2022-02-09 14:41:20'),
(4, 'MFC-memb-4', 'kant-1', 'super1', 'jaba-3', '', '', '', '', '', 'wr3-super1', 'aaa', 1, '2022-02-09 14:41:36');

-- --------------------------------------------------------

--
-- Table structure for table `pekerjaan`
--

CREATE TABLE `pekerjaan` (
  `kdPekerjaan` int(15) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `kdProduk` varchar(25) NOT NULL,
  `kdSub` varchar(25) NOT NULL,
  `nik` varchar(16) NOT NULL,
  `nm` varchar(150) NOT NULL,
  `nmHP` varchar(100) NOT NULL COMMENT 'Hasil Produk',
  `aliasHP` varchar(50) NOT NULL,
  `emailHP` varchar(100) NOT NULL,
  `modal` varchar(25) NOT NULL,
  `hp` varchar(13) NOT NULL,
  `total` varchar(25) NOT NULL,
  `bayar` varchar(25) NOT NULL,
  `sisa` varchar(25) NOT NULL,
  `kdPK` varchar(25) NOT NULL COMMENT 'pekerjaan next',
  `kdMember` varchar(25) NOT NULL,
  `ins` date NOT NULL DEFAULT current_timestamp(),
  `arsip` tinyint(1) NOT NULL DEFAULT 0,
  `tahap` int(2) NOT NULL DEFAULT 1,
  `maxTahap` int(2) NOT NULL DEFAULT 0,
  `final` tinyint(1) NOT NULL DEFAULT 0,
  `tglFinal` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pekerjaan`
--

INSERT INTO `pekerjaan` (`kdPekerjaan`, `kdKantor`, `kdProduk`, `kdSub`, `nik`, `nm`, `nmHP`, `aliasHP`, `emailHP`, `modal`, `hp`, `total`, `bayar`, `sisa`, `kdPK`, `kdMember`, `ins`, `arsip`, `tahap`, `maxTahap`, `final`, `tglFinal`) VALUES
(2, 'kant-1', 'prod-1', 'spro-1', '5020703070897000', 'Bagus Hartiansyah1122212', 'M Software Center', 'MFC', '2G18@gmail.com', '0', '087851381757', '500000', '500000', '0', '', '2G18-memb-1', '2022-02-12', 1, 3, 3, 1, '2022-02-19'),
(3, 'kant-1', 'prod-2', 'spro-5', '4012203304888', 'daniel', '', '', '', '', '234442223', '500000', '500000', '0', '', '2G18-memb-1', '2022-02-14', 1, 5, 5, 1, '2022-02-19'),
(4, 'kant-1', 'prod-1', 'spro-1', '152334444', 'ical', 'abadi nusa', 'an', 'an@mail.com', '0', '0876665', '500000', '500000', '0', '', '2G18-memb-1', '2022-02-14', 1, 3, 3, 1, '2022-02-19'),
(5, 'kant-1', 'prod-1', 'spro-8', '5020703434450', 'den meneng', '', '', '', '0', '081922833812', '400000', '400000', '0', '', '2G18-memb-1', '2022-02-15', 1, 4, 4, 1, '2022-02-19'),
(6, 'kant-1', 'prod-2', 'spro-1', '5020703020101001', 'aminudddin', '', '', '', '0', '0283182828', '500000', '500000', '0', '5', '2G18-memb-1', '2022-02-15', 1, 6, 6, 1, '2022-02-19'),
(7, 'kant-1', 'prod-1', 'spro-7', '5029099999', 'iniomo', '', '', '', '0', '082881993222', '400000', '100000', '300,000', '', '2G18-memb-1', '2022-02-17', 1, 1, 3, 0, '2022-02-19'),
(8, 'kant-1', 'prod-1', 'spro-9', '9288383838', 'mon', '', '', '', '0', '3323232', '300000', '200000', '100,000', '', '2G18-memb-1', '2022-02-17', 1, 1, 4, 0, '2022-02-19'),
(9, 'kant-1', 'prod-2', 'spro-2', '1828822828', 'josek', '', '', '', '0', '9283838', '400000', '300000', '100,000', '', '2G18-memb-1', '2022-02-17', 1, 1, 6, 0, '2022-02-19'),
(10, 'kant-1', 'prod-2', 'spro-4', '1929293838', 'uni', '', '', '', '0', '9283838', '3000000', '300000', '2,700,000', '', '2G18-memb-1', '2022-02-17', 1, 1, 6, 0, '2022-02-19'),
(11, 'kant-1', 'prod-3', 'spro-1', '930828288', 'candra', '', '', '', '0', '083838', '3000000', '3000000', '0', '', '2G18-memb-1', '2022-02-17', 1, 7, 7, 1, '2022-02-19'),
(12, 'kant-1', 'prod-1', 'spro-10', '828928100001', 'yusin', '', '', '', '0', '08289299919', '900000', '900000', '0', '', 'MFC-memb-2', '2022-02-19', 1, 4, 4, 1, '2022-02-19'),
(13, 'kant-1', 'prod-1', 'spro-12', '502009998222', 'tinum', '', '', '', '0', '3003003', '1000000', '200000', '800,000', '', 'MFC-memb-2', '2022-02-22', 1, 1, 4, 0, '2022-02-22');

-- --------------------------------------------------------

--
-- Table structure for table `pekerjaansub`
--

CREATE TABLE `pekerjaansub` (
  `kdPS` int(15) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `kdPekerjaan` varchar(25) NOT NULL,
  `kdTG` varchar(25) NOT NULL,
  `file` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL,
  `pilihan` varchar(150) NOT NULL,
  `keterangan` varchar(250) NOT NULL,
  `arsip` tinyint(1) NOT NULL DEFAULT 0,
  `ins` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pekerjaansub`
--

INSERT INTO `pekerjaansub` (`kdPS`, `kdKantor`, `kdPekerjaan`, `kdTG`, `file`, `img`, `pilihan`, `keterangan`, `arsip`, `ins`) VALUES
(1, 'kant-1', 'pend-10', '1', '', '', '', '', 0, '2022-02-17'),
(1, 'kant-1', 'pend-11', '1', 'assets/fs_sistem/upload/files/5_6098002581269774825-2022-02-17-06-38-18am.pdf', '', '', '', 1, '2022-02-17'),
(1, 'kant-1', 'pend-12', '1', 'assets/fs_sistem/upload/files/ayatulkifayah-2022-02-19-04-18-44am.pdf', '', '', '', 1, '2022-02-19'),
(1, 'kant-1', 'pend-13', '1', 'assets/fs_sistem/upload/files/Input RKA 2021-2022-02-22-01-36-05am.pdf', '', '', '', 0, '2022-02-22'),
(1, 'kant-1', 'pend-2', '1', 'assets/fs_sistem/upload/files/5_6098002581269774825-2022-02-13-03-44-33am.pdf', '', '', 'tuntass', 1, '2022-02-12'),
(1, 'kant-1', 'pend-3', '1', 'assets/fs_sistem/upload/files/ Finalisasi Pemetaan Kecamatan-2022-02-13-05-24-29pm.pdf', '', '', 'sukses', 1, '2022-02-14'),
(1, 'kant-1', 'pend-4', '1', 'assets/fs_sistem/upload/files/5_6098002581269774825-2022-02-14-02-23-37am.pdf', '', '', 'tuntas', 1, '2022-02-14'),
(1, 'kant-1', 'pend-5', '1', 'assets/fs_sistem/upload/files/ Finalisasi Pemetaan Kecamatan-2022-02-14-11-58-21pm.pdf', '', '', '', 1, '2022-02-15'),
(1, 'kant-1', 'pend-6', '1', 'assets/fs_sistem/upload/files/ Finalisasi Pemetaan Kecamatan-2022-02-15-02-44-37pm.pdf', '', '', '', 1, '2022-02-16'),
(1, 'kant-1', 'pend-7', '1', '', '', '', '', 0, '2022-02-17'),
(1, 'kant-1', 'pend-8', '1', '', '', '', '', 0, '2022-02-17'),
(1, 'kant-1', 'pend-9', '1', '', '', '', '', 0, '2022-02-17'),
(2, 'kant-1', 'pend-10', '2', '', '', '', '', 0, '2022-02-17'),
(2, 'kant-1', 'pend-11', '2', '', '', '', '', 1, '2022-02-17'),
(2, 'kant-1', 'pend-12', '2', 'assets/fs_sistem/upload/files/ Finalisasi Pemetaan Kecamatan-2022-02-19-04-19-11am.pdf', '', '', '', 1, '2022-02-19'),
(2, 'kant-1', 'pend-13', '2', '', '', '', '', 0, '2022-02-22'),
(2, 'kant-1', 'pend-2', '2', '', 'ayamSuper-2022-02-13-06-34-27am.jpg', '', 'sassasa', 1, '2022-02-13'),
(2, 'kant-1', 'pend-3', '2', '', '', 'SUDAH', 'tuntas', 1, '2022-02-14'),
(2, 'kant-1', 'pend-4', '2', '', 'bptx-2022-02-14-02-26-41am.png', '', '', 1, '2022-02-14'),
(2, 'kant-1', 'pend-5', '2', 'assets/fs_sistem/upload/files/ Finalisasi Pemetaan Kecamatan-2022-02-15-12-51-35am.pdf', '', '', '', 1, '2022-02-15'),
(2, 'kant-1', 'pend-6', '2', 'assets/fs_sistem/upload/files/5_6098002581269774825-2022-02-15-02-44-58pm.pdf', '', '', '', 1, '2022-02-16'),
(2, 'kant-1', 'pend-7', '2', '', '', '', '', 0, '2022-02-17'),
(2, 'kant-1', 'pend-8', '2', '', '', '', '', 0, '2022-02-17'),
(2, 'kant-1', 'pend-9', '2', '', '', '', '', 0, '2022-02-17'),
(3, 'kant-1', 'pend-10', '3', '', '', '', '', 0, '2022-02-17'),
(3, 'kant-1', 'pend-11', '3', '', '', 'SUDAH', '', 1, '2022-02-17'),
(3, 'kant-1', 'pend-12', '3', '', 'informasi1-2022-02-19-04-19-32am.png', '', '', 1, '2022-02-19'),
(3, 'kant-1', 'pend-13', '3', '', '', '', '', 0, '2022-02-22'),
(3, 'kant-1', 'pend-2', '3', 'assets/fs_sistem/upload/files/5_6098002581269774825-2022-02-13-09-10-08am.pdf', 'bptx-2022-02-13-09-10-08am.png', '', 'tuntas', 1, '2022-02-15'),
(3, 'kant-1', 'pend-3', '3', '', '', 'SUDAH', '', 1, '2022-02-15'),
(3, 'kant-1', 'pend-4', '3', '', '20180615_105647-2022-02-14-09-34-20pm.jpg', '', '', 1, '2022-02-15'),
(3, 'kant-1', 'pend-5', '3', '', '_logoO-2022-02-15-12-52-04am.png', '', '', 1, '2022-02-15'),
(3, 'kant-1', 'pend-6', '3', '', '', 'SUDAH', '', 1, '2022-02-16'),
(3, 'kant-1', 'pend-7', '3', '', '', '', '', 0, '2022-02-17'),
(3, 'kant-1', 'pend-8', '3', '', '', '', '', 0, '2022-02-17'),
(3, 'kant-1', 'pend-9', '3', '', '', '', '', 0, '2022-02-17'),
(4, 'kant-1', 'pend-10', '4', '', '', '', '', 0, '2022-02-17'),
(4, 'kant-1', 'pend-11', '4', '', '', 'SUDAH', '', 1, '2022-02-17'),
(4, 'kant-1', 'pend-12', '4', '', 'deposit-2022-02-19-04-19-46am.png', '', '', 1, '2022-02-19'),
(4, 'kant-1', 'pend-13', '4', '', '', '', '', 0, '2022-02-22'),
(4, 'kant-1', 'pend-3', '4', '', '', 'SUDAH', '', 1, '2022-02-15'),
(4, 'kant-1', 'pend-5', '4', 'assets/fs_sistem/upload/files/ Finalisasi Pemetaan Kecamatan-2022-02-15-12-53-54am.pdf', '_logoO-2022-02-15-12-52-23am.png', '', '', 1, '2022-02-15'),
(4, 'kant-1', 'pend-6', '4', 'assets/fs_sistem/upload/files/AMALAN IKHTIAR MENCARI PENCURI-2022-02-15-03-04-14pm.pdf', '', 'SETUJU', 'tuntas', 1, '2022-02-16'),
(4, 'kant-1', 'pend-8', '4', '', '', '', '', 0, '2022-02-17'),
(4, 'kant-1', 'pend-9', '4', '', '', '', '', 0, '2022-02-17'),
(5, 'kant-1', 'pend-10', '5', '', '', '', '', 0, '2022-02-17'),
(5, 'kant-1', 'pend-11', '5', '', '', 'SUDAH', '', 1, '2022-02-17'),
(5, 'kant-1', 'pend-3', '5', '', 'bismillah-2022-02-14-09-14-20pm.png', '', '', 1, '2022-02-15'),
(5, 'kant-1', 'pend-6', '5', '', '', 'SUDAH', '', 1, '2022-02-16'),
(5, 'kant-1', 'pend-9', '5', '', '', '', '', 0, '2022-02-17'),
(6, 'kant-1', 'pend-10', '6', '', '', '', '', 0, '2022-02-17'),
(6, 'kant-1', 'pend-11', '6', '', '', 'SUDAH', '', 1, '2022-02-17'),
(6, 'kant-1', 'pend-6', '6', '', 'informasi1-2022-02-15-03-11-53pm.png', '', 'dokumentasi', 1, '2022-02-16'),
(6, 'kant-1', 'pend-9', '6', '', '', '', '', 0, '2022-02-17'),
(7, 'kant-1', 'pend-11', '7', '', 'iklan-2022-02-17-06-40-39am.jpg', '', '', 1, '2022-02-17');

-- --------------------------------------------------------

--
-- Table structure for table `persyaratan`
--

CREATE TABLE `persyaratan` (
  `kdPersyaratan` int(15) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `nmPersyaratan` varchar(200) NOT NULL,
  `deskripsi` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `persyaratan`
--

INSERT INTO `persyaratan` (`kdPersyaratan`, `kdKantor`, `nmPersyaratan`, `deskripsi`) VALUES
(1, 'kant-1', 'Poto Copy KTP Rangkap 2', ''),
(2, 'kant-1', 'Poto Copy KK Rangkap 2', ''),
(3, 'kant-1', 'SKTU', ''),
(4, 'kant-1', 'NPWP', ''),
(5, 'kant-1', 'EMAIL', ''),
(6, 'kant-1', 'No TELPON', ''),
(7, 'kant-1', 'KTP SUAMI ISTRI', ''),
(8, 'kant-1', 'KK PEMILIK SERTIFIKAT', ''),
(9, 'kant-1', 'NMPW PEMILIK SERTIFIKAT', ''),
(10, 'kant-1', 'KTP PEMBELI / PEMEGANG HAK TANGGUNGAN / PENERIMA PERNYATAAN / KUASA', ''),
(11, 'kant-1', 'SERTIFIKAT ASLI', ''),
(12, 'kant-1', 'SPPT', ''),
(13, 'kant-1', 'KUITANSI / PK', ''),
(14, 'kant-1', 'KTP & KK PEMBERI HIBA', ''),
(15, 'kant-1', 'KTP & KK CALON AHLI WARIS', ''),
(16, 'kant-1', 'KTP & KK SUAMI ISTRI PEMBERI HT', ''),
(17, 'kant-1', 'KEP & SK PENERIMA HT', ''),
(18, 'kant-1', 'PERJANJIAN KREDIT (PK)', ''),
(19, 'kant-1', 'AKTA PENDIRI PT PEMOHON ', ''),
(20, 'kant-1', 'AKTA KEMENKUMHAM', ''),
(21, 'kant-1', 'SK PERUBAHAN (JIKA ADA)', ''),
(22, 'kant-1', 'NPWP PERUSAHAAN', ''),
(23, 'kant-1', 'KTP PENGURUS PERUSAHAAN', ''),
(24, 'kant-1', 'NPWP PENGURUS PERUSAHAAN', ''),
(25, 'kant-1', 'NIB PERUSAHAAN (OSS)', ''),
(26, 'kant-1', 'IJIN LOKASI (OSS)', ''),
(27, 'kant-1', 'PERTIMBANGAN TEKNIS (PERTEK BPN)', ''),
(28, 'kant-1', 'REKOM TATA RUANG (PU)', ''),
(29, 'kant-1', 'SITE PLAN', ''),
(30, 'kant-1', 'PORMULIR IMB / SURAT PERMOHONAN', ''),
(31, 'kant-1', 'POTO COPY KTP / SIM / PASPOR PEMOHON', ''),
(32, 'kant-1', 'SURAT PENGANTER DPEMDES', ''),
(33, 'kant-1', 'SERTIFIKAT TANAH / SPOTADIK LAHAN', ''),
(34, 'kant-1', 'AKTA DAN SK PERUSAHAAN', ''),
(35, 'kant-1', 'TITIK KOORDINAT LOKASI', ''),
(36, 'kant-1', 'SKTU, TDP, SIUP, NIB, NPWP PERUSAHAAN / PERORANGAN', ''),
(37, 'kant-1', 'SURAT TIDAK KEBERATAN TETANGGA', ''),
(38, 'kant-1', 'SURAT KUASA APABILA DIKUASAKAN', ''),
(39, 'kant-1', 'KTP & KK Penerima Hiba', '');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `kdProduk` int(15) NOT NULL,
  `kdProduk1` varchar(25) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `nmProduk` varchar(150) NOT NULL,
  `deskripsi` varchar(250) NOT NULL,
  `logo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`kdProduk`, `kdProduk1`, `kdKantor`, `nmProduk`, `deskripsi`, `logo`) VALUES
(1, 'prod-1', 'kant-1', 'NOTARIS', 'Berhubungan dengan pembuatan kelompok', 'fs_css/sub4.png'),
(2, 'prod-2', 'kant-1', 'PPAT', 'Berhubungan dengan pembuatan akta', 'fs_css/sub2.png'),
(3, 'prod-3', 'kant-1', 'IMB', 'Pembuatan Ijin Mendirikan Bangunan', 'fs_css/sub3.png');

-- --------------------------------------------------------

--
-- Table structure for table `produksub`
--

CREATE TABLE `produksub` (
  `kdSub` int(15) NOT NULL,
  `kdProduk` varchar(25) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `nmSub` varchar(150) NOT NULL,
  `deskripsi` varchar(250) NOT NULL,
  `pagu` varchar(25) NOT NULL,
  `groupData` int(3) NOT NULL,
  `deskripsiGD` varchar(50) NOT NULL COMMENT 'group data'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produksub`
--

INSERT INTO `produksub` (`kdSub`, `kdProduk`, `kdKantor`, `nmSub`, `deskripsi`, `pagu`, `groupData`, `deskripsiGD`) VALUES
(1, 'prod-1', 'kant-1', 'CV', 'perusahaan', '500000', 1, 'pemesanan nama  produk'),
(2, 'prod-1', 'kant-1', 'PT', '', '600000', 1, 'pemesanan nama  produk'),
(3, 'prod-1', 'kant-1', 'YAYASAN', '', '500000', 1, 'pemesanan nama  produk'),
(4, 'prod-1', 'kant-1', 'PERKUMPULAN', '', '500000', 1, 'pemesanan nama  produk'),
(5, 'prod-1', 'kant-1', 'LEMBAGA', '', '500000', 1, 'pemesanan nama  produk'),
(6, 'prod-1', 'kant-1', 'UD', '', '0', 1, 'pemesanan nama  produk'),
(7, 'prod-1', 'kant-1', 'PERNYATAAN', '', '0', 0, ''),
(8, 'prod-1', 'kant-1', 'PPJB', '', '0', 0, ''),
(9, 'prod-1', 'kant-1', 'KUASA', '', '0', 0, ''),
(10, 'prod-1', 'kant-1', 'PELEPASAN', '', '0', 0, ''),
(11, 'prod-1', 'kant-1', 'SKMHT', '', '0', 0, ''),
(12, 'prod-1', 'kant-1', 'WASIAT', '', '0', 0, ''),
(13, 'prod-1', 'kant-1', 'PENGAKUAN HUTANG', '', '0', 0, ''),
(14, 'prod-1', 'kant-1', 'PENGHAPUSAN HAK', '', '0', 0, ''),
(1, 'prod-2', 'kant-1', 'Akta Jual Beli', 'Akta ', '500000', 2, 'spro-8'),
(2, 'prod-2', 'kant-1', 'AKTA HIBA', '', '0', 0, ''),
(3, 'prod-2', 'kant-1', 'AKTA PEMBERIAN HAK TANGGUNGAN', '', '0', 2, 'spro-11'),
(4, 'prod-2', 'kant-1', 'HGB / HGK', '', '0', 0, ''),
(5, 'prod-2', 'kant-1', 'PEMECAHAN / PEMISAH', '', '500000', 0, ''),
(6, 'prod-2', 'kant-1', 'HGB / HGK 2', 'CARA 2', '500000', 0, ''),
(1, 'prod-3', 'kant-1', 'IMB', '', '0', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `saratgroup`
--

CREATE TABLE `saratgroup` (
  `kdSG` int(15) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `kdProduk` varchar(25) NOT NULL,
  `kdSub` varchar(25) NOT NULL,
  `kdPersyaratan` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `saratgroup`
--

INSERT INTO `saratgroup` (`kdSG`, `kdKantor`, `kdProduk`, `kdSub`, `kdPersyaratan`) VALUES
(1, 'kant-1', 'prod-1', 'spro-1', 'pers-1'),
(1, 'kant-1', 'prod-1', 'spro-2', 'pers-10'),
(1, 'kant-1', 'prod-2', 'spro-1', 'pers-11'),
(2, 'kant-1', 'prod-1', 'spro-1', 'pers-2'),
(2, 'kant-1', 'prod-2', 'spro-1', 'pers-12'),
(3, 'kant-1', 'prod-1', 'spro-1', 'pers-3'),
(3, 'kant-1', 'prod-2', 'spro-1', 'pers-14'),
(4, 'kant-1', 'prod-1', 'spro-1', 'pers-4'),
(4, 'kant-1', 'prod-2', 'spro-1', 'pers-39'),
(5, 'kant-1', 'prod-1', 'spro-1', 'pers-5'),
(5, 'kant-1', 'prod-2', 'spro-1', 'pers-13');

-- --------------------------------------------------------

--
-- Table structure for table `tahapan`
--

CREATE TABLE `tahapan` (
  `kdTahapan` int(15) NOT NULL,
  `kdKantor` varchar(25) NOT NULL,
  `nmTahapan` varchar(200) NOT NULL,
  `deskripsi` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tahapan`
--

INSERT INTO `tahapan` (`kdTahapan`, `kdKantor`, `nmTahapan`, `deskripsi`) VALUES
(2, 'kant-1', 'Penyerahan Berkas', 'pengarsipan / upload berkas (PDF)'),
(3, 'kant-1', 'Tanda Tangan Minuta', 'pengarsipan file photo dokumentasi'),
(4, 'kant-1', 'Hasil Pekerjaan / Pemberkasan', 'pengarsipan / upload berkas (PDF)'),
(5, 'kant-1', 'Pengecekan Sertifikat ', 'Tanda tangan kuasa dan pengarsipan buktu pengecekan (PDF)'),
(6, 'kant-1', 'Tanda Tangan Berkas', 'pilihan sudah / belum dikerjakan'),
(7, 'kant-1', 'Validasi BPHTB & PPH', 'Upload dokumen pajak'),
(8, 'kant-1', 'pendaftaran BPN', 'pilihan sudah / belum dikerjakan'),
(9, 'kant-1', 'Tanda Tangan SKMHT', 'Pengarsipan file photo dokumentasi'),
(10, 'kant-1', 'Tanda Tangan APHT', 'pilihan sudah / belum dikerjakan'),
(11, 'kant-1', 'Pengukuran', 'pilihan sudah / belum dikerjakan'),
(12, 'kant-1', 'Panitia A', 'pilihan sudah / belum dikerjakan'),
(14, 'kant-1', 'Pendaftaran Berkas', 'pilihan sudah / belum dikerjakan'),
(15, 'kant-1', 'Perijinan PU', 'penyerahan berkas untuk LH  hanya pilihan sudah / belum dikerjakan'),
(16, 'kant-1', 'Rekom TKPRD (PUPR)', 'pilihan sudah / belum dikerjakan'),
(17, 'kant-1', 'Perijinan LH ', 'penyerahan berkas untuk LH hanya pilihan sudah / belum dikerjakan'),
(18, 'kant-1', 'Pembayaran Galian C & Retribusi', 'pilihan sudah / belum dikerjakan'),
(19, 'kant-1', 'Penerbitan IMB', 'pada dinas perijinan hanya pilihan sudah / belum diterbitkan');

-- --------------------------------------------------------

--
-- Table structure for table `tahapangroup`
--

CREATE TABLE `tahapangroup` (
  `kdTG` int(15) NOT NULL COMMENT 'tahapan Group',
  `kdKantor` varchar(25) NOT NULL,
  `kdProduk` varchar(25) NOT NULL,
  `kdSub` varchar(25) NOT NULL,
  `kdTahapan` varchar(25) NOT NULL,
  `lamaPekerjaan` int(3) NOT NULL COMMENT 'satuannya hari',
  `ind` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tahapangroup`
--

INSERT INTO `tahapangroup` (`kdTG`, `kdKantor`, `kdProduk`, `kdSub`, `kdTahapan`, `lamaPekerjaan`, `ind`) VALUES
(1, 'kant-1', 'prod-1', 'spro-1', 'taha-2', 3, 1),
(2, 'kant-1', 'prod-1', 'spro-1', 'taha-3', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-1', 'taha-4', 1, 3),
(1, 'kant-1', 'prod-1', 'spro-10', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-10', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-10', 'taha-3', 2, 3),
(4, 'kant-1', 'prod-1', 'spro-10', 'taha-4', 1, 4),
(1, 'kant-1', 'prod-1', 'spro-11', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-11', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-11', 'taha-3', 2, 3),
(4, 'kant-1', 'prod-1', 'spro-11', 'taha-4', 1, 4),
(1, 'kant-1', 'prod-1', 'spro-12', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-12', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-12', 'taha-3', 1, 3),
(4, 'kant-1', 'prod-1', 'spro-12', 'taha-4', 1, 4),
(1, 'kant-1', 'prod-1', 'spro-13', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-13', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-13', 'taha-3', 2, 3),
(4, 'kant-1', 'prod-1', 'spro-13', 'taha-4', 1, 4),
(1, 'kant-1', 'prod-1', 'spro-14', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-14', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-14', 'taha-3', 2, 3),
(4, 'kant-1', 'prod-1', 'spro-14', 'taha-4', 1, 4),
(1, 'kant-1', 'prod-1', 'spro-2', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-2', 'taha-3', 3, 2),
(3, 'kant-1', 'prod-1', 'spro-2', 'taha-4', 2, 3),
(1, 'kant-1', 'prod-1', 'spro-3', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-3', 'taha-3', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-3', 'taha-4', 1, 3),
(1, 'kant-1', 'prod-1', 'spro-4', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-4', 'taha-3', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-4', 'taha-4', 1, 3),
(1, 'kant-1', 'prod-1', 'spro-5', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-5', 'taha-3', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-5', 'taha-4', 1, 3),
(1, 'kant-1', 'prod-1', 'spro-6', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-6', 'taha-3', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-6', 'taha-4', 1, 3),
(1, 'kant-1', 'prod-1', 'spro-7', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-7', 'taha-3', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-7', 'taha-4', 1, 3),
(1, 'kant-1', 'prod-1', 'spro-8', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-8', 'taha-5', 1, 2),
(3, 'kant-1', 'prod-1', 'spro-8', 'taha-3', 2, 3),
(4, 'kant-1', 'prod-1', 'spro-8', 'taha-4', 1, 4),
(1, 'kant-1', 'prod-1', 'spro-9', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-1', 'spro-9', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-1', 'spro-9', 'taha-3', 2, 3),
(4, 'kant-1', 'prod-1', 'spro-9', 'taha-4', 1, 4),
(1, 'kant-1', 'prod-2', 'spro-1', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-2', 'spro-1', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-2', 'spro-1', 'taha-6', 1, 3),
(4, 'kant-1', 'prod-2', 'spro-1', 'taha-7', 2, 4),
(5, 'kant-1', 'prod-2', 'spro-1', 'taha-8', 2, 5),
(6, 'kant-1', 'prod-2', 'spro-1', 'taha-4', 1, 6),
(1, 'kant-1', 'prod-2', 'spro-2', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-2', 'spro-2', 'taha-5', 2, 2),
(3, 'kant-1', 'prod-2', 'spro-2', 'taha-6', 2, 3),
(4, 'kant-1', 'prod-2', 'spro-2', 'taha-7', 2, 4),
(5, 'kant-1', 'prod-2', 'spro-2', 'taha-8', 2, 5),
(6, 'kant-1', 'prod-2', 'spro-2', 'taha-4', 1, 6),
(1, 'kant-1', 'prod-2', 'spro-3', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-2', 'spro-3', 'taha-9', 1, 2),
(3, 'kant-1', 'prod-2', 'spro-3', 'taha-5', 1, 3),
(4, 'kant-1', 'prod-2', 'spro-3', 'taha-10', 2, 4),
(5, 'kant-1', 'prod-2', 'spro-3', 'taha-8', 2, 5),
(1, 'kant-1', 'prod-2', 'spro-4', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-2', 'spro-4', 'taha-8', 2, 2),
(3, 'kant-1', 'prod-2', 'spro-4', 'taha-11', 2, 3),
(4, 'kant-1', 'prod-2', 'spro-4', 'taha-12', 2, 4),
(5, 'kant-1', 'prod-2', 'spro-4', 'taha-7', 2, 5),
(6, 'kant-1', 'prod-2', 'spro-4', 'taha-4', 1, 6),
(1, 'kant-1', 'prod-2', 'spro-5', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-2', 'spro-5', 'taha-6', 1, 2),
(3, 'kant-1', 'prod-2', 'spro-5', 'taha-8', 2, 3),
(4, 'kant-1', 'prod-2', 'spro-5', 'taha-11', 2, 4),
(5, 'kant-1', 'prod-2', 'spro-5', 'taha-4', 1, 5),
(1, 'kant-1', 'prod-3', 'spro-1', 'taha-2', 2, 1),
(2, 'kant-1', 'prod-3', 'spro-1', 'taha-15', 2, 2),
(3, 'kant-1', 'prod-3', 'spro-1', 'taha-16', 2, 3),
(4, 'kant-1', 'prod-3', 'spro-1', 'taha-17', 2, 4),
(5, 'kant-1', 'prod-3', 'spro-1', 'taha-18', 2, 5),
(6, 'kant-1', 'prod-3', 'spro-1', 'taha-19', 2, 6),
(7, 'kant-1', 'prod-3', 'spro-1', 'taha-4', 1, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app`
--
ALTER TABLE `app`
  ADD PRIMARY KEY (`kdApp`);

--
-- Indexes for table `appfitur`
--
ALTER TABLE `appfitur`
  ADD PRIMARY KEY (`kdApp`,`kdFitur`);

--
-- Indexes for table `appkey`
--
ALTER TABLE `appkey`
  ADD PRIMARY KEY (`kdApp`,`kdFitur`,`kdMember`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`kdJabatan`);

--
-- Indexes for table `kantor`
--
ALTER TABLE `kantor`
  ADD PRIMARY KEY (`kdKantor`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`kdMember`,`kdKantor`);

--
-- Indexes for table `pekerjaan`
--
ALTER TABLE `pekerjaan`
  ADD PRIMARY KEY (`kdPekerjaan`);

--
-- Indexes for table `pekerjaansub`
--
ALTER TABLE `pekerjaansub`
  ADD PRIMARY KEY (`kdPS`,`kdPekerjaan`,`kdKantor`);

--
-- Indexes for table `persyaratan`
--
ALTER TABLE `persyaratan`
  ADD PRIMARY KEY (`kdPersyaratan`,`kdKantor`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`kdProduk`,`kdKantor`);

--
-- Indexes for table `produksub`
--
ALTER TABLE `produksub`
  ADD PRIMARY KEY (`kdProduk`,`kdKantor`,`kdSub`);

--
-- Indexes for table `saratgroup`
--
ALTER TABLE `saratgroup`
  ADD PRIMARY KEY (`kdSG`,`kdKantor`,`kdProduk`,`kdSub`);

--
-- Indexes for table `tahapan`
--
ALTER TABLE `tahapan`
  ADD PRIMARY KEY (`kdTahapan`,`kdKantor`);

--
-- Indexes for table `tahapangroup`
--
ALTER TABLE `tahapangroup`
  ADD PRIMARY KEY (`kdKantor`,`kdProduk`,`kdSub`,`kdTG`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jabatan`
--
ALTER TABLE `jabatan`
  MODIFY `kdJabatan` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
