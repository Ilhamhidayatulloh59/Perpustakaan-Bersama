-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: database_perpustakaan
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Author` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Genre` varchar(255) NOT NULL,
  `Publisher` varchar(255) NOT NULL,
  `Images` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Abstract` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Taylor Jenkins Reid','The Seven Husbands of Evelyn Hugo: A Novel','Fiction','Washington Square Press','https://m.media-amazon.com/images/I/81pybFd2PBL._AC_UY327_FMwebp_QL65_.jpg','2022-11-15 06:54:36','2022-11-16 04:14:46','Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.'),(2,'Rush Limbaugh','Radio\'s Greatest of All Time','Non-Fiction','Threshold Editions','https://m.media-amazon.com/images/I/616wn8i6eTL._AC_UY327_FMwebp_QL65_.jpg','2022-11-15 07:00:41','2022-11-16 04:15:47','For more than thirty years, millions of listeners tuned in to hear Rush Limbaugh’s voice. '),(3,'Katie Wood','A Simple Seed: of Growth, Gratitude & Giggles: 5-minute morning journal for kids','Fiction','The New York Times','https://m.media-amazon.com/images/I/61wsLBNZqZL._AC_UY327_FMwebp_QL65_.jpg','2022-11-15 07:02:31','2022-11-16 04:18:42','A Simple Seed reinforces a growth mindset, helping children build the habit of choosing love over hate, forgiveness over anger and courage over fear.'),(4,'Michelle Obama','The Light We Carry: Overcoming in Uncertain Times','Non-Fiction','Crown','https://images-na.ssl-images-amazon.com/images/I/91MowzF+WZL._AC_UL210_SR195,210_.jpg','2022-11-15 07:03:57','2022-11-16 04:12:44','There may be no tidy solutions or pithy answers to life’s big challenges, but Michelle Obama believes that we can all locate and lean on a set of tools to help us better navigate change and remain steady within flux.'),(5,'Colleen Hover','It Starts with Us: A Novel (It Ends with Us)','Fiction','Crown','https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL210_SR195,210_.jpg','2022-11-15 07:05:16','2022-11-16 04:21:19','Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again.'),(6,'Mike Pence','So Help Me God','Non-Fiction','Simon & Schuster','https://images-na.ssl-images-amazon.com/images/I/81MDrZAEsRL._AC_UL210_SR195,210_.jpg','2022-11-15 07:06:51','2022-11-16 04:13:48','Mike Pence spent more hours in the Oval Office than any of his predecessors. On the surface, the affable evangelical Christian from a gas-station-owning family in Indiana wouldn’t seem to have much in common with a brash real estate mogul from New York.'),(7,'Prince Harry','Spare','Non-Fiction','Random House','https://m.media-amazon.com/images/I/91Szm8FpdfL._AC_UY327_FMwebp_QL65_.jpg','2022-11-15 07:07:59','2022-11-16 04:27:56','It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother’s coffin as the world watched in sorrow—and horror.'),(8,'Colleen Hoover','Ugly Love: A Novel ','Fiction','The New York Times','https://m.media-amazon.com/images/I/71E8VNPC1dL._AC_UY327_FMwebp_QL65_.jpg','2022-11-15 07:08:53','2022-11-16 04:26:26','When Tate Collins meets airline pilot Miles Archer, she doesn\'t think it\'s love at first sight. They wouldn’t even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction.'),(9,'Stephen King','Fairy Tale','Fiction','Scribner','https://images-na.ssl-images-amazon.com/images/I/81blQfKsLtL._AC_UL210_SR195,210_.jpg','2022-11-15 07:09:53','2022-11-16 04:23:27','Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was seven, and grief drove his dad to drink.'),(10,'Patti Smith','A Book of Days','Non-Fiction','Random House','https://m.media-amazon.com/images/I/71oSWIfQI8L._AC_UY327_FMwebp_QL65_.jpg','2022-11-15 07:11:12','2022-11-16 04:22:38','In 2018, without any plan or agenda for what might happen next, Patti Smith posted her first Instagram photo: her hand with the simple message “Hello Everybody!” Known for shooting with her beloved Land Camera 250.'),(11,'James Clear','Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones','Fiction','Avery','https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg','2022-11-16 09:10:14','2022-11-16 09:10:14','No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones.'),(12,'Dick Morris','The Return: Trump\'s Big 2024 Comeback','Non-Fiction','Avery','https://images-na.ssl-images-amazon.com/images/I/71lwvQIGI8L._AC_UL210_SR195,210_.jpg','2022-11-16 09:12:31','2022-11-16 09:12:31','Since 2016 Dick Morris has been a behind-the-scenes adviser to Donald Trump.  Dick played a key role in Trump’s surprise 2016 win. Dick Morris reveals first time President Trump’s strategy to win in 2024. And yes, he’s running!'),(13,'Matthew Perry','Friends, Lovers, and the Big Terrible Thing: A Memoir','Non-Fiction','Avery','https://images-na.ssl-images-amazon.com/images/I/81ZkvDcuCzL._AC_UL210_SR195,210_.jpg','2022-11-16 09:14:35','2022-11-16 09:14:35','So begins the riveting story of acclaimed actor Matthew Perry, taking us along on his journey from childhood ambition to fame to addiction and recovery in the aftermath of a life-threatening health scare.'),(14,'Fiersa Besari','Konspirasi Alam Semesta','Fiction','Mediakita','https://cdn.gramedia.com/uploads/items/9789797945350_Konspirasi-Alam-Semesta.jpg','2022-11-16 10:14:11','2022-11-16 10:14:11','Seperti apakah warna cinta? Apakah merah muda mewakili rekahannya, ataukah kelabu mewakili pecahannya?'),(15,'Fiersa Besari','Garis Waktu : Sebuah Perjalanan Menghapus Luka','Fiction','Mediakita','https://cdn.gramedia.com/uploads/items/9789797945251_garis_waktu_sebuah_perjalanan_menghapus_lupa.jpg','2022-11-16 10:15:43','2022-11-16 10:15:43','Pada sebuah garis waktu yang merangkak maju, akan ada saatnya kau bertemu dengan satu orang yang mengubah hidupmu untuk selamanya.'),(16,'Fiersa Besari','Catatan Juang','Fiction','Mediakita','https://cdn.gramedia.com/uploads/items/207959051.jpg','2022-11-16 10:30:45','2022-11-16 10:30:45','Seseorang yang akan menemani setiap langkahmu dengan satu kebaikan kecil setiap harinya.'),(17,'Fiersa Besari','Arah langkah','Fiction','Mediakita','https://cdn.gramedia.com/uploads/items/arah-langkah-edit.jpg','2022-11-16 10:34:07','2022-11-16 10:34:07','Arah Langkah bukan sekadar catatan perjalanan yang melukiskan keindahan alam, budaya, dan manusia lewat teks dan foto. Tetapi juga memberikan cerita lain tentang kondisi negeri yang tidak selalu sebagus seperti di layar televisi.'),(18,'Fiersa Besari','Konspirasi Alam Semesta','Fiction','Mediakita','https://cdn.gramedia.com/uploads/items/buku-konspirasi-alam-semesta-fiersa-besari__w149_hauto.jpeg','2022-11-16 14:42:24','2022-11-16 14:42:24','Entah apa yang ada di dalam pikiran Juang Astrajingga, ketika di suatu sore, dirinya tidak sengaja bertabrakan dengan seorang gadis di salah satu lorong di antara deretan toko buku di daerah Palasari.'),(19,'Tere Liye','Bulan','Fiction','PENERBIT SABAK GRIP','https://cdn.gramedia.com/uploads/items/img20220905_11324048.jpg','2022-11-16 14:45:24','2022-11-16 15:44:11','Petualangan Raib, Seli, dan Ali berlanjut.Beberapa bulan setelah peristiwa klan bulan, Miss Selena akhirnya muncul di sekolah. Ia membawa kabar menggembirakan untuk anak-anak yang berjiwa petualang seperti Raib, Seli, dan Ali.'),(20,'Tere Liye','Bumi','Fiction','PENERBIT SABAK GRIP','https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg','2022-11-16 15:21:23','2022-11-16 15:21:23','Bumi, merupakan rangkaian awal dari kisah sekelompok anak remaja berkemampuan istimewa. Menceritakan tentang Raib, Ali, dan Seli yang bertualang ke dunia paralel.'),(21,'Tere Liye','Bumi','Fiction','PENERBIT SABAK GRIP','https://cdn.gramedia.com/uploads/items/img20221028_14101540__w149_hauto.jpg','2022-11-16 15:29:18','2022-11-16 15:29:18','Bumi, merupakan rangkaian awal dari kisah sekelompok anak remaja berkemampuan istimewa. Menceritakan tentang Raib, Ali, dan Seli yang bertualang ke dunia paralel.'),(22,'Tere Liye','Matahari','Fiction','PENERBIT SABAK GRIP','https://cdn.gramedia.com/uploads/items/img20220905_11433462.jpg','2022-11-16 15:31:40','2022-11-16 15:31:40','Namanya Ali, 15 tahun, kelas X. Jika saja orangtuanya mengizinkan, seharusnya dia sudah duduk di tingkat akhir ilmu fisika program doktor di universitas ternama. Ali tidak menyukai sekolahnya, guru-gurunya, teman-teman sekelasnya.'),(23,'Jonathan Black','Sejarah Dunia Yang Disembunyikan','Non-Fiction','Alvabeta','https://cdn.gramedia.com/uploads/items/lgkld.jpg','2022-11-16 15:35:00','2022-11-16 15:35:00','Banyak orang mengatakan bahwa sejarah ditulis oleh para pemenang. Hal ini sama sekali tak mengejutkan alias wajar belaka. Tetapi, bagaimana jika sejarah—atau apa yang kita ketahui sebagai sejarah—ditulis oleh orang yang salah?'),(24,'Robert T. Kiyosaki','Rich Dad\'s - Increase Your Financial IQ','Non-Fiction','Gramedia Pustaka Utama','https://cdn.gramedia.com/uploads/items/9786020333519_RICH-DADS---.jpg','2022-11-16 15:38:50','2022-11-16 15:38:50','Pada tahun 1997, buku Rich Dad Poor Dad karya Robert membuat para pembaca tertegun. Buku itu mengklaim, “Rumah Anda bukanlah aset.'),(25,'Angela Duckworth','Grit: Kekuatan Passion dan Kegigihan (Edisi Revisi)','Fiction','Gramedia Pustaka Utama','https://cdn.gramedia.com/uploads/items/9786020620930_Grit_Kekuatan-Passion-dan-Kegigihan-Edisi-Revisi.jpg','2022-11-16 15:41:46','2022-11-16 15:43:39','Hal terpenting untuk sukses dan bahagia bukanlah bakat');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-16 22:45:37