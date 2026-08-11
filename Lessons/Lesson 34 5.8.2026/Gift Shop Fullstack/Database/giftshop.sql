-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: giftshop
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `audience`
--

DROP TABLE IF EXISTS `audience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audience`
--

LOCK TABLES `audience` WRITE;
/*!40000 ALTER TABLE `audience` DISABLE KEYS */;
INSERT INTO `audience` VALUES (4,'Adults'),(1,'Babies'),(2,'Children'),(5,'Seniors'),(3,'Teenagers');
/*!40000 ALTER TABLE `audience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gifts`
--

DROP TABLE IF EXISTS `gifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gifts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `audienceId` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `price` decimal(6,2) NOT NULL DEFAULT '0.00',
  `discount` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `gift_audience_idx` (`audienceId`),
  CONSTRAINT `gift_audience` FOREIGN KEY (`audienceId`) REFERENCES `audience` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gifts`
--

LOCK TABLES `gifts` WRITE;
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
INSERT INTO `gifts` VALUES (1,1,'Plush Teddy Bear','Soft hypoallergenic teddy bear, machine washable',59.90,0),(2,1,'Baby Fleece Blanket','Warm fleece blanket with embroidered stars',89.90,10),(3,1,'Rattle & Teether Set','BPA-free silicone rattle and teether, 3 pieces',45.00,0),(4,1,'Wooden Stacking Rings','Classic wooden stacking toy with painted rings',75.00,5),(5,2,'Building Blocks Set','250-piece creative building block set',149.90,15),(6,2,'Jigsaw Puzzle 100 pcs','Animal-themed 100 piece jigsaw puzzle',39.90,0),(7,2,'Coloring Kit','Sketchbook with 36 colored pencils and markers',69.00,10),(8,2,'Remote Control Car','Rechargeable RC car with 2.4GHz controller',199.00,20),(9,3,'Bluetooth Headphones','Over-ear wireless headphones, 30h battery',299.00,15),(10,3,'Beginner Skateboard','Maple deck skateboard with ABEC-7 bearings',349.00,10),(11,3,'RGB Gaming Mousepad','Extended mousepad with 14 RGB lighting modes',89.90,0),(12,3,'Instant Camera','Instant print camera including 10 film sheets',399.00,5),(13,4,'Espresso Grinder','Conical burr grinder with 30 grind settings',549.00,20),(14,4,'Leather Wallet','Genuine leather bifold wallet with RFID blocking',179.00,0),(15,4,'Scented Candle Set','Set of 3 soy candles: vanilla, sandalwood, fig',129.90,10),(16,4,'Gourmet Cookbook','Hardcover cookbook with 120 Mediterranean recipes',119.00,5),(17,5,'Fleece Throw Blanket','Extra soft oversized throw blanket',139.00,10),(18,5,'Herbal Tea Sampler','Gift box with 12 varieties of herbal tea',99.90,0),(19,5,'Large Print Crossword','Book of 200 large print crossword puzzles',49.90,0),(20,5,'Leather Photo Album','Album holding 200 photos with acid-free pages',189.00,15);
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-05 12:18:40
