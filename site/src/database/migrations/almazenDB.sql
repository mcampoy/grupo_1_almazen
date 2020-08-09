CREATE DATABASE  IF NOT EXISTS `almazen_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `almazen_db`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: almazen_db
-- ------------------------------------------------------
-- Server version	5.6.20

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_idx` (`id_user`),
  KEY `id_product_idx` (`id_product`),
  CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,14,2,1,300,10,'2020-08-09 11:31:56','2020-08-09 12:11:00'),(2,14,3,1,170,20,'2020-08-09 11:31:56','2020-08-09 12:11:00'),(3,15,2,1,300,10,'2020-08-09 12:14:48','2020-08-09 12:16:29'),(4,15,3,1,170,20,'2020-08-09 12:14:48','2020-08-09 12:16:29');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `img_category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'especias',1,'especias.png'),(2,'legumbres',1,'legumbres.png'),(3,'cereales',1,'cereales.png'),(4,'hierbas aromáticas',1,'congelados.png');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diets`
--

DROP TABLE IF EXISTS `diets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diets`
--

LOCK TABLES `diets` WRITE;
/*!40000 ALTER TABLE `diets` DISABLE KEYS */;
INSERT INTO `diets` VALUES (1,'vegetariana',1),(2,'vegana',1),(3,'sin azúcar',1),(4,'sin gluten',1);
/*!40000 ALTER TABLE `diets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_recipe` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ingredients_id_recipe_idx` (`id_recipe`),
  CONSTRAINT `ingredients_id_recipe` FOREIGN KEY (`id_recipe`) REFERENCES `recipes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,1,1,250,'g','de harina'),(2,1,2,2,'','bananas'),(3,1,3,125,'g','de nueces picadas'),(4,1,4,125,'g','de azúcar'),(5,1,5,50,'ml','de aceite vegetal'),(6,1,6,10,'g','de leche en polvo'),(7,1,7,1,'','huevo'),(8,1,8,5,'g','de bicarbonato'),(9,1,9,3,'g','de sal'),(10,1,10,10,'g',' de canela'),(11,1,11,3,'ml','de esencia de vainilla'),(12,3,1,500,'g','de garbanzos'),(13,3,2,50,'g','de sésamo o ajonjoli'),(14,3,3,2,'dientes','de ajo'),(15,3,4,150,'ml','jugo de limón'),(16,3,5,25,'ml','de aceite de oliva'),(17,3,6,8,'g','de sal (opcional)'),(18,3,7,10,'g','de comino'),(19,3,8,10,'g','de pimentón dulce'),(20,2,1,350,'g','de harina integral'),(21,2,2,200,'g','de avena arrollada'),(22,2,3,125,'g','de azúcar'),(23,2,4,50,'ml','de aceite de girasol'),(24,2,5,1,NULL,'banana madura'),(25,2,6,2,NULL,'peras a punto'),(26,2,7,5,'g','de bicarbonato'),(27,2,8,3,'g','de sal'),(28,2,9,100,'ml','de jugo de limón'),(29,2,10,15,NULL,'almendras'),(30,4,1,250,'g','de harina de almendras'),(31,4,2,50,'g','de harina de arroz'),(32,4,3,25,'g','levadura fresca'),(33,4,4,150,'ml','de leche de soya'),(34,4,5,25,'ml','de aceite'),(35,4,6,15,'g','de azúcar'),(36,4,7,1,NULL,'huevo'),(37,4,8,1,NULL,'yema'),(38,4,9,1,NULL,'pizca de sal'),(39,4,10,250,'g','de ajonjolí'),(40,5,1,150,'g','de chocolate amargo'),(41,5,2,180,'ml','de aceite de girasol'),(42,5,3,200,'g','de azúcar integral'),(43,5,4,2,NULL,'huevos de campo'),(44,5,5,250,'g','de harina de arroz'),(45,5,6,125,'g','de harina de almendras'),(46,5,7,150,'g','nueces partidas grueso'),(47,5,8,10,'ml','extracto de vainilla'),(48,5,9,5,'g','bicarbonato de sodio'),(49,6,1,150,'g','de harina de garbanzos'),(50,6,2,150,'cc','de agua natural'),(51,6,3,2,'cdas','de aceite de oliva'),(52,6,4,150,'cc','de agua tibia'),(53,6,5,5,'g','de levadura seca'),(54,6,6,1,'cdita','de azúcar'),(55,6,7,250,'g','de harina de arroz'),(56,6,8,1,'cdita','de goma xántica'),(57,6,9,1,'pizca','de sal'),(58,7,1,400,'g','de garbanzos cocidos'),(59,7,2,300,'g','de almendras crudas'),(60,7,3,1,NULL,'cebolla'),(61,7,4,1,'diente','de ajo'),(62,7,5,1,NULL,'calabacín'),(63,7,6,1,NULL,'zanahoria'),(64,7,7,1,NULL,'pimiento verde'),(65,7,8,1,NULL,'papa grande'),(66,7,9,1000,'ml','de caldo de verduras'),(67,7,10,1,NULL,'hoja de laurel'),(68,7,11,100,'ml','de aceite de oliva'),(69,7,12,3,'g','de pimienta negra molida'),(70,7,13,5,'g','de sal'),(71,8,1,4,NULL,'tortillas de trigo'),(72,8,2,2,NULL,'pimientos rojos'),(73,8,3,3,NULL,'cebollas de verdeo'),(74,8,4,1,NULL,'palta'),(75,8,5,150,'g','de maíz en conserva '),(76,8,6,2,'cdas','de cilantro (hojas)'),(77,8,7,200,'g','de queso cheddar rallado'),(78,8,8,1,'cda','de chile en polvo'),(79,9,1,200,'g','de lentejas'),(80,9,2,1,NULL,'berenejna'),(81,9,3,3,NULL,'cebollas'),(82,9,4,300,'g','de tomates'),(83,9,5,2,NULL,'papas medianas cocidas'),(84,9,6,200,'cc','de salsa de tomates'),(85,9,7,200,'cc','de aceite de oliva'),(86,9,8,1,'cdita','de hierbas aromáticas picadas'),(87,9,9,50,'g','de queso parmesano rallado'),(88,9,10,5,'g','de sal'),(89,9,11,3,'g','de pimienta'),(90,10,1,5,'g','de stevia'),(91,10,2,250,'g','de queso crema ligero'),(92,10,3,200,'ml',' de crema de leche ligera'),(93,10,4,20,NULL,'galletas sin azúcar tipo María'),(94,10,5,100,'ml','de leche desnatada'),(95,10,6,10,'g','de gelatina neutra'),(96,11,1,400,'g','de paltas maduras'),(97,11,2,60,'g','de cacao en polvo sin azúcar'),(98,11,3,3,'cdas','de stevia'),(99,11,4,2,'cdas','de leche desnatada'),(100,11,5,3,'g','de sal'),(101,12,1,4,NULL,'mazanas asadas'),(102,12,2,60,'ml','de jugo de limón'),(103,12,3,2,'cdas','de stevia'),(104,12,4,5,'g','de canela molida'),(105,12,5,1,NULL,'rama de canela');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_number` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser_idx` (`id_user`),
  KEY `idProduct_idx` (`id_product`),
  CONSTRAINT `idProduct` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idUser` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,14,1,2,60,12,NULL,NULL),(2,1,14,2,4,300,10,NULL,NULL),(3,2,16,1,2,60,12,NULL,NULL),(4,2,16,2,1,300,10,NULL,NULL),(5,2,16,3,1,170,20,NULL,NULL),(6,3,18,1,7,60,12,NULL,NULL),(7,4,17,5,4,300,0,NULL,NULL),(8,4,17,1,1,60,12,NULL,NULL),(9,5,16,3,2,170,0,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_category_id_product_idx` (`id_product`),
  KEY `product_category_id_category_idx` (`id_category`),
  CONSTRAINT `product_category_id_category` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_category_id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,1,1),(2,1,3),(3,2,2),(4,2,4),(5,3,1),(6,3,2),(7,3,3),(8,3,4);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_diet`
--

DROP TABLE IF EXISTS `product_diet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_diet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `id_diet` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_diet_id_product_idx` (`id_product`),
  KEY `product_diet_id_diet_idx` (`id_diet`),
  CONSTRAINT `product_diet_id_diet` FOREIGN KEY (`id_diet`) REFERENCES `diets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_diet_id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_diet`
--

LOCK TABLES `product_diet` WRITE;
/*!40000 ALTER TABLE `product_diet` DISABLE KEYS */;
INSERT INTO `product_diet` VALUES (55,1,1),(56,1,3),(59,3,1),(60,3,2),(61,3,3),(62,3,4),(75,2,2),(76,2,4);
/*!40000 ALTER TABLE `product_diet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_recipe`
--

DROP TABLE IF EXISTS `product_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_recipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `id_recipe` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product_idx` (`id_product`),
  KEY `id_recipe_idx` (`id_recipe`),
  CONSTRAINT `product_recipe_id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_recipe_id_recipe` FOREIGN KEY (`id_recipe`) REFERENCES `recipes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8 COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_recipe`
--

LOCK TABLES `product_recipe` WRITE;
/*!40000 ALTER TABLE `product_recipe` DISABLE KEYS */;
INSERT INTO `product_recipe` VALUES (63,1,3),(64,1,1),(67,3,1),(68,3,2),(69,3,4),(70,3,3),(83,2,2),(84,2,4);
/*!40000 ALTER TABLE `product_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_category` int(11) DEFAULT NULL,
  `code` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(800) DEFAULT NULL,
  `description_short` varchar(150) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `hot_discount` decimal(10,0) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'ESP006','Cúrcuma','La cúrcuma, también denominada azufre de Indias, es una planta muy apreciada por su versatilidad gastronómica. Se le atribuyen propiedades medicinales contra el cáncer, el colesterol alto o la artrosis, entre otras enfermedades. Es nativa del suroeste de la India y es una raíz de la familia del jengibre. Se utiliza como colorante por su inconfundible color amarillo. Además, aporta un cautivante sabor dulzón con un toque picante y amargo, por lo que conviene incorporarlo en pequeñas cantidades','Cúrcuma en polvo para darle sabor y color a tus comidas',100,'g',60,12,20,7,'curcuma en polvo.jpg',1),(2,1,'ALM0421','Cacao','El cacao es un árbol procedente de América que produce un fruto del mismo nombre que se puede utilizar como ingrediente para alimentos entre los que destaca el chocolate. Su uso se remonta a la época de los mayas, aztecas e incas, y desde entonces se ha usado tanto para fines nutricionales como médicos. Su principal uso es para hacer chocolate. De este fruto se consigue tanto el polvo de cacao como la manteca. Ambas se suelen mezclar junto a azúcares refinados y leche.','Cacao en polvo para darle sabor y color a tus preparaciones',250,'g',300,10,12,80,'Cacao - 22-6-2020 11_0_56.jpg',1),(3,1,'ALM0145','Stevia','La Stevia, originaria de Paraguay (ka’a he’e o “la hierba dulce” en guaraní), es una planta de la familia del girasol y se ha convertido en uno de los cultivos con mayor potencial en el mundo. La Stevia tiene una capacidad edulcorante equivalente a 300 veces la del azúcar, sus propiedades son únicas en el mundo.','Una manera natural de endulzar tus preparaciones',110,'g',170,20,30,60,'stevia.jpg',1),(4,1,'ESP001','Anís en grano','Esta planta comenzó a emplearse como remedio natural en la época romana, pero se ha convertido en uno de los ingredientes que no pueden faltar en la cocina. Conocido principalmente por sus propiedades digestivas, el anís en grano es ideal tanto para acompañar tus sobremesas, servirte como calmante antes de acostarte o de ingrediente en diferentes recetas.  Se puede consumir a modo de infusión en cualquier momento del día, pero también como condimento o complemento en numerosas recetas, principalmente postres y cócteles.','Su inconfundible perfume en tu cocina.',100,'g',80,0,0,15,'anis en grano.jpg',1),(5,1,'ESP002','Canela en rama','La canela procede de la corteza del canelo, un árbol tropical de hoja perenne. Lo más interesante de la canela son los compuestos aromáticos. Molida se utiliza ampliamente en postres, pasteles, dulces, etc., y entera se emplea para adornar y sazonar algunos platos. Muchas cocinas tradicionales, como la india, la mexicana, la del Medio Oriente y la del norte de África, utilizan la canela como principal especia en los platos salados.','Un toque de canela para decorar y sazonar tus comidas ',100,'g',300,0,15,23,'canela en rama.jpg',1),(6,1,'ESP003','Cardamomo','El cardamomo se cultivó por el hombre por primera vez en el año 700 y fue en Europa donde se probó esta planta descubriendo todos los beneficios que trae consigo. Es una de las plantas más costosas junto al azafrán y la vainilla. Debido a su sabor agridulce, el cardamomo es un perfecto saborizador para guisos, salsas, sopas entre otros. Utilizar una semilla entera de cardamomo para la preparación.','Un toque de sabor agridulce a tus platos.',25,'g',200,0,0,49,'cardamomo.jpg',1),(7,1,'ESP004','Clavo de olor','Los granos del clavo de olor se utilizan enteros o molidos pero, como son extremadamente fuertes, se usan en poca cantidad. Es una especia muy empleada en la gastronomía de toda Europa y Asia.  Se suele utilizar tanto entero como molido y en preparaciones dulces o saladas. Se recomienda utilizarlo en pequeñas cantidades ya que es de sabor muy fuerte, picante y ardiente, y de sabor amargo. El clavo de olor combina muy bien con distintas especies como la nuez moscada y la canela.','Un toque de clavo de olor para dar un sabor más picante a tus comidas.',100,'g',260,0,25,15,'clavo de olor.jpg',1),(8,1,'ESP005','Comino','El comino es de la misma familia del perejil, usada desde la antigüedad como planta medicinal para mejorar la digestión, los forúnculos o el insomnio. Una especie muy común en la cocinas india y persa. El comino surgió en la zona de Irán. Es una especia muy apreciada por los egipcios, así como romanos y griegos. Las semillas de comino son una buena fuente de hierro. Es una especia ideal para la digestión. Combina con la mayoría de los alimentos y sumamente útil para condimentar sopas, diversas legumbres y vegetales.','Un sabor inconfundible en tus alimentos.',100,'g',80,0,NULL,22,'comino.jpg',1),(9,1,'ESP007','Curry','La palabra curry viene en su origen de la palabra kari, que significa salsa en Tamil, el idioma hablado por una etnia del sur de la India que elaborada una serie de platos muy especiados con un sabor muy característico.Una deliciosa combinación de varias especias entre las que se suele encontrar azafrán, canela, cilantro, comino, cúrcuma, jengibre o pimienta. Esta combinación resulta en un condimento muy utilizado en una gran cantidad de platos de, especialmente, las gastronomías asiáticas para conformar estofados y guisos con salsas. Es uno de los condimentos más utilizados hoy en día.','Un aliado infaltable en tu cocina',100,'g',40,0,NULL,23,'curry.jpg',1),(10,1,'ESP008','Eneldo','Originaria de la cuenca del Mediterráneo y Asia Menor, y utilizada por las primeras civilizaciones de la humanidad, actualmente se cultiva en casi todo el mundo. Es un ingrediente básico en muchos países, indispensable en las cocinas de los países nórdicos y bálticos. Con el eneldo fresco se pueden aromatizar todo tipo de platos, se puede añadir, además de a los pescados, a mariscos, carnes, arroces, ensaladas, vinagres y aceites aromatizados, salsas… proporciona su sabor dulzón, fresco y anisado, un sabor único que ninguna otra planta aromática puede proporcionar.','Un toque distintivo a tus preparaciones con este condimento.',100,'g',100,0,15,80,'eneldo.jpg',1),(11,1,'ESP009','Jengibre','El jengibre o quion es una planta perteneciente a la familia de las zingiberáceas que crece en todas las regiones tropicales del mundo.  Es muy preciado por su aroma y sabor picante. Se utiliza principalmente en la cocina asiática. En este tipo de comida, los rizomas se pueden agregar como ingrediente en muchos de sus platos o conservarse en vinagre y consumirse como aperitivo. Además, el sabor picante hace que el jugo del rizoma se use como condimento en el marisco y el cordero en la cocina china.','Un toque de picante y un aroma inconfundible.',100,'g',30,0,25,80,'jengibre.jpg',1),(12,1,'ESP015','Mostaza en grano','La mostaza es una de las especias más antiguas utilizadas. Es una planta de la familia crucíferas (Brassica nigra). Cuando la mostaza se hierve el picante se reduce notablemente. La mostaza actúa como conservante, por lo que es ideal para los adobos y demás platos conservados en vinagre. También podés utilizar los polvos de mostaza para condimentar harina, en multitud de platos sabrosos o masas, y también para sopas y salsas.','Atrevete a experimentar con una de las especias más antiguas.',100,'g',70,0,35,80,'mostaza.jpg',1),(13,1,'ESP010','Nuez moscada','La nuez moscada es el fruto del árbol tropical Myristica fragrans, aunque hay más especies de la familia de las Myristicaceae, es originaria de las Molucas (Indonesia), archipiélago conocido como Islas de las Especias. Fue en su tiempo una de las especias más valoradas. Son muchos los platos que agradecen ser condimentados con nuez moscada, desde la salsa bechamel hasta la repostería. Se ralla sobre la elaboración casi al final para que libere sus aceites esenciales, su aroma y sabor.','No te puede faltar su inconfundible aroma y sabor.',1,'ud',20,0,NULL,34,'nuez moscada.jpg',1),(14,1,'ESP011','Orégano','Es una de las plantas más populares dentro del uso gastronómico, siendo su uso realmente remoto y extendido en todo el mundo, aunque el origen propiamente dicho de la planta es propio del mediterráneo y algunas zonas de cercano oriente.  Es generalmente utilizada como condimento alimenticio, y sus hojas secas tienen un sabor y aroma mucho mejor que cuando están en su estado fresco.','Un clásico de esos que nunca deben faltar en tu cocina. ',100,'g',50,12,25,80,'oregano.jpg',1),(15,1,'ESP012','Pimentón dulce','El pimentón molido es el polvo del pimiento rojo que se obtiene a partir del fruto seco y molido. La planta es originaria de México y llegó a Europa y a Marruecos hace muchos años a raíz de los viajes de los españoles hacia América. Este condimento le da un sabor muy atractivo a los platos. Es recomendable agregar este condimento siempre al final de la cocción para que no pierda su aroma y su sabor característico.','Condimentá tus platos con su atractivo sabor.',100,'g',50,0,NULL,80,'pimenton dulce.jpg',1),(16,1,'ESP013','Pimienta blanca','Los granos de pimienta son las bayas del árbol Piper nigrum, de la familia de las piperáceas, un árbol trepador que crece en zonas tropicales húmedas. La pimienta blanca se caracteriza por ser suave. La pimienta no solo aromatiza platos sino que, gracias a la piperina que contiene, estimula la secreción de jugos gástricos, que facilitan la digestión. La mejor forma de aprovechar los aromas de la pimienta es comprarla en grano y molerla en el momento de añadirla en un plato.','Un toque suave pero inconfundible en tus preparaciones.',100,'g',90,0,NULL,80,'pimienta blanca.jpg',1),(17,1,'ESP014','Chaucha de vainilla','La vainilla es originaria de México y del norte de Centroamérica (Guatemala, Honduras). Se sabe que tanto los aztecas como los mayas usaban la vaina de esta bella orquídea para aromatizar licores, e incluso el cacao, que se daba a beber a los nobles y a los guerreros.  Es un aromatizante sofisticado, que aporta una fragancia muy especial a los platos, guisos, y la repostería en la que se incluye.','Un sofisticado aromatizante para tus recetas.',100,'g',70,0,NULL,22,'vainilla.jpg',1),(18,1,'ESP016','Maca en polvo','El polvo de extracto de maca es el que podemos usar en algunas preparaciones culinarias teniendo en cuenta que tiene un sabor ligeramente picante. Simplemente podemos añadir una cucharadita de maca a un batido o a un yogur en el desayuno o merienda, o bien, para consumir después de entrenar. Igualmente, podemos usar la maca para condimentar platos salados calientes o fríos, o bien, para acentuar el sabor dulce de algunas preparaciones como pueden ser galletas caseras o pasteles integrales.','Una cucharada de maca en una taza de agua caliente para sustituir el café mañanero.',100,'g',100,10,NULL,80,'maca en polvo.jpg',1),(19,2,'LEG001','Amaranto','El amaranto puede incorporarse a la dieta para diversificar la misma y agregar buenos nutrientes, sobre todo, puede ser de utilidad en quienes llevan una alimentación vegana y buscan proteínas de origen vegetal de alta calidad. Puede ser un buen recurso para incrementar la saciedad de la dieta.','Incorporá un alimento saludable en tus recetas.',100,'g',50,0,NULL,80,'amaranto.jpg',1),(20,2,'LEG002','Arvejas orgánicas','Estas exquisitas legumbres, se pueden utilizar en variadas preparaciones, desde ensaladas, guisos, y tartas y todas aquellas  que la imaginación nos permita realizar. Son excelentes para regular y generar la energía que necesitan los músculos durante la práctica de actividad física, y ayudan en el metabolismo de los nutrientes provenientes de otros alimentos.','Las arvejas son ricas en proteínas y carbohidratos, bajas en grasa y constituyen una buena fuente de fibra.',500,'g',50,0,NULL,100,'arveja.jpg',1),(21,2,'LEG003','Garbanzos','El garbanzo es originario de Turquía y es gracias a los cartagineses que en la Península Ibérica lo cultivamos y nos lo comemos desde entonces. Existen 40 especies distintas de garbanzo y en España se reconocen cinco grandes variedades. Los garbanzos disminuyen el colesterol y triglicéridos, y promueven la salud cardiovascular. Deberían ocupar un sitio destacado en el trono de los superalimentos.','Un aliado indispensable para tu salud cardiovascular.',250,'g',50,0,NULL,120,'garbanzo.jpg',1),(22,2,'LEG004','Lentejas','Estas brillantes leguminosas además de ser saludables pueden cocinarse en un sinfín de recetas que no cansan al paladar, desde sopas, ensaladas y guarniciones. Eso sí, para fomentar el amor por las lentejas es necesario evitar errores comunes al cocinarlas. Es importante comprar las lentejas más frescas que puedas encontrar, así podrás usarlas durante más tiempo.','Deliciosas y muy versátiles.',250,'g',80,10,NULL,200,'lenteja.jpg',1),(23,2,'LEG005','Poroto negro','Los frijoles negros tienen un alto contenido en magnesio y una buena fuente de potasio y hierro, que son nutrientes esenciales que el cuerpo necesita. Los frijoles negros también contienen molibdeno (cuya función principal es desintoxicar al organismo del sulfito proveniente de distintos alimentos), calcio y zinc.','Muy saludables y deliciosos',250,'g',30,0,NULL,60,'poroto negro.jpg',1),(24,2,'LEG006','Porotos de soja','La soja contienen los nueve aminoácidos esenciales para el organismo. Es por tanto una buena fuente de proteína vegetal, de vitaminas y de minerales cruciales para reducir el riesgo de sufrir enfermedades crónicas. Además contiene una buena proporción de fibra saciante que la hace adecuada para dietas de adelgazamiento.','Una comida saludable y fácil de implementar en cualquier receta',500,'g',40,0,NULL,89,'poroto de soja.jpg',1),(25,3,'CER001','Germen de trigo','El germen de trigo es una parte tierna del cereal cuyo consumo recomendado es de entre dos y cuatro cucharadas diarias. Así, se puede tomar junto a otros cereales en el desayuno, para acompañar un yogur o sustituyéndolo por harina refinada. En este último caso se pude reemplazar media taza de harina por germen de trigo. También sirve como complemento dietético.','Agregale energía a tus días.',250,'g',50,0,NULL,45,'germen de trigo.jpg',1),(26,3,'CER002','Avena','Los copos de avena son prácticos, deliciosos y muy nutritivos, así que no es extraño que se hayan convertido en uno de los ingredientes más apreciados en la alimentación saludable y que abunden las recetas con copos de avena. Cuando se incorpora la avena a la dieta habitual, por ejemplo los copos en el desayuno, es fácil sentir que muchas cosas mejoran: sienta bien, te sacia, se regula el tránsito intestinal..','Deliciosos y nutritivos.',250,'g',45,10,NULL,546,'avena.jpg',1),(27,3,'CER003','Salvado de avena','Consumir productos de avena integrales (incluyen el salvado) proporciona mayor valor nutricional frente a cuando se consumen productos de avena refinada. El salvado de avena se encuentra también como un producto comercial y es posible añadirlo directamente a alimentos como yogur, utilizarlo en la realización de pan, enriquecimiento de otras harinas o productos, así como su utilización como complemento alimenticio.','Agregale nutrientes a tus yougures',250,'g',50,0,NULL,34,'salvado de avena.jpg',1),(28,3,'CER004','Salvado de trigo','El salvado de trigo es lo queda tras refinar o procesar el grano de trigo, o sea, son las capas externas del grano (concretamente al pericarpio y sus diferentes subcapas). Por lo mismo, este antes considerado deshecho, es muy cotizado ya que contiene muchos nutrientes esenciales. Y aunque es un producto que es parte del grupo de harinas y cereales, no debemos temer, su consumo en cantidades adecuadas nos entregará muchos beneficios. ','Infaltable en tus preparaciones',250,'g',15,0,NULL,675,'salvado de trigo.jpg',1),(29,3,'CER005','Copos de arroz','Su gran aporte en hidratos de carbono proporcionan gran energía, aconsejándose su consumo especialmente en niños y deportistas. Eficaz contra el estreñimiento. Su aporte en Magnesio ayuda a la reducción de azúcar en la sangre.','Cuidá de los que más querés',50,'g',50,0,NULL,54,'copos de arroz.jpg',1),(30,3,'CER006','Cebada perlada','Contiene un alto grado de proteínas y es el que mayor cantidad de fibra solubles aporta entre los cereales integrales, por lo que colabora como laxante en los casos de estreñimiento ayudando a equilibrar la flora intestinal.','Aportale fribras a tus comidas',500,'g',50,0,NULL,56,'cebada perlada.jpg',1),(31,4,'ARO001','Romero','El romero en la cocina. El romero es una hierba aromática de fuerte y agradable olor. Combina a las mil maravillas con carnes, especialmente con la de cordero y le da un sabor especial a las papas cocidas y otros vegetales. Se puede usar tanto fresco como seco','Romero seco',125,'g',45,0,NULL,76,'romero.jpg',1),(32,4,'ARO002','Salvia','En la cocina, la salvia es muy utilizada, tanto fresca como seca, para acompañar carnes grasas, como el pato, el cordero o el cerdo (sobre todo en embutidos), además de quesos y pescados también grasos. Es muy usada en la cocina italiana y la francesa y desde la antigüedad se le conoce por su propiedades medicinales y terapéuticas, pues sirve como anti-inflamatorio, para aliviar problemas digestivos y es rica en antioxidantes.','Agregá sabor y perfume a tus preparaciones',150,'g',50,5,NULL,67,'stevia.jpg',1),(33,4,'ARO004','Sésamo','Tahini es una pasta de semillas de ajonjolí (sésamo) típica de la cocina de oriente. a menudo se prepara con ajonjolí tostado y a veces se le agrega agua para que procese mejor. ... y prepararla solo con ajonjolí y dejarla cruda, sin tostar el ajonjolí. para conservar la mayoría de sus propiedades.','Semillas de sésamo para disfrutar en tus comidas ',60,'g',100,0,NULL,89,'sesamo.jpg',1),(34,4,'ARO005','Tomillo','Agrega tomillo a sopas, guisos, estofados, adobos, tortillas o huevos revueltos. También puedes añadir ramitas enteras a las cazuelas para darle más sabor (recuerda quitarlas antes de servir). Una idea sabrosa es espolvorear hojas de tomillo y sal marina sobre las papas antes de asarlas.','Tomillo seco para perfumar tus comidas',50,'g',60,0,NULL,67,'tomillo.jpg',1),(35,4,'ARO006','Laurel','Las hojas de laurel son idóneas en los platos cocinados a fuego lento, casando a la perfección con otras hierbas aromáticas como el perejil o el tomillo. Se añaden como aromatizador de estofados, adobos, salsas de carne o pescado, guisos de legumbres y verduras, sopas, cremas o parrilladas.','Dale un toque característico a tus platos',100,'g',120,5,NULL,67,'laurel.jpg',1),(36,4,'ARO003','Cilantro','En la cocina latinoamericana, es prácticamente inconcebible cocinar sin el cilantro, ya que aparece utilizado tanto en seco como en fresco, entre los ingredientes de todas las recetas de salsas, moles, guisos de pollo, sopas, frijoles, guacamoles, etc. Se utiliza especialmente en Perú, Venezuela, Cuba y México, que son los países de esta zona en cuya gastronomía, está más implantado el uso de las hojas, tallos y raíces de esta hierba.','Prepará un típico plato y no te olvides del cilantro',60,'g',89,0,NULL,56,'cilantro.jpg',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diet` varchar(45) DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  `description` varchar(800) DEFAULT NULL,
  `difficulty` varchar(45) DEFAULT NULL,
  `preparation_time` int(11) DEFAULT NULL,
  `serving` int(11) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'vegetariana','Budín de banana y nuez','Ideal para una tarde lluviosa y gris, para acompañar la merienda o el mate, el budín de banana es un clásico infalible, que siempre es bien recibido. Se distingue de otros budines porque su consistencia es más húmeda, y eso es lo que le da su toque particular. El proceso de preparación es muy sencillo.','fácil',60,12,'budin.jpg',1),(2,'vegana','Budín de peras y almendras','En la cocina, a veces solo hace falta animarse a innovar y probar recetas ricas y sanas. Si lo hacés en casa, vas a estar seguro de que tiene los mejores ingredientes y ningún tipo de conservante. Animate a preparar esta fácil y deliciosa receta de budín húmedo de peras, avena y almendras.','fácil',80,8,'Budin-de-Peras-y-Almendras-.jpg',1),(3,'vegana','Hummus de garbanzos','Una crema de garbanzos suave, sana, deliciosa y muy fácil de preparar. Es delicioso acompañado con aceitunas, nachos, crudités o pan pita. El hummus es un símbolo de encuentro , porque es una parte infaltable de la típica picada de los países del Medio Oriente. Es un deleite, es sencillo y súper nutritivo.','fácil',10,4,'hummusGarbazos.jpg',1),(4,'sin gluten','Bagels sin gluten','El bagel proviene originariamente de la cocina judía. Estas rosquillas a base de masa de levadura, riquísimas ya sea con relleno dulce o salado, no faltan nunca a la hora de un buen desayuno.  Con salmón, queso crema y alcaparras, delicia total. O levemente tostado y untado de queso crema y mermelada tocas el cielo con las manos.','fácil',40,8,'bagels-sin-gluten.jpg',1),(5,'sin gluten','Budín de chocolate y nuez','El budín de chocolate sin gluten es un básico que no puede faltar en una casa donde se prende a diario el horno, porque en estas casas nos gusta tener siempre algo rico para desayunar, para la hora de la merienda o para tentarse a cualquier hora del día.','fácil',30,8,'budín de chocolate y nuez.jpg',1),(6,'sin gluten','Pizza sin gluten','La adorada pizza tiene cientos de versiones, por la gran variedad de rellenos que admite, pero también por la variedad de masas que podemos hacer para la base.  .La harina de garbanzos es casi un complejo multi-vitamínico, además de ser proteíca y contener fibra.','fácil',60,8,'pizza de garbanzos y arroz.jpg',1),(7,'vegana','Estofado de garbanzos','Este plato de garbanzos estofados veganos es la receta perfecta para comer un guiso saludable, completo y muy sabroso. Si eres de los que añoran la comida de cuchara de toda la vida pero no quieren ingerir muchas grasas, sigue el paso a paso de la receta que te proponemos hoy.','media',45,4,'estofado de garbanzos.jpg',1),(8,'vegetariana','Quesadillas vegetarianas','Las quesadillas son tortillas de trigo o maíz dobladas y rellenas de queso y otros alimentos que se cocinan a la plancha. En México, su lugar de origen, se toman de picadillo, sesos, huitlacoche, flores de calabacín, etc. En este caso, haremos una versión \'veggie\'.','fácil',30,4,'quesadillas-veggie-m.jpg',1),(9,'vegetariana','Musaka de lentejas','Hoy reinventamos una de las recetas más internacionales de Grecia. Te proponemos una variedad preparada con lentejas en vez de con carne picada. Te explicamos paso a paso, de manera sencilla, la elaboración de la receta de moussaka o musaka vegeetariana de lentejas y calabaza.','media',50,6,'musaka.jpg',1),(10,'sin azúcar','Tarta de queso','Para esta receta es importante buscar ingredientes bajos en grasa. A su vez, verás que no hemos añadido ninguna salsa por encima en el paso a paso. Podés preparar un pequeño sirope con fruta fresca, chocolate sin azúcar o simplemente, colocar una fruta.','media',40,4,'tarta de queso.jpg',1),(11,'sin azúcar','Mousse de palta y chocolate','Sin duda uno de los postres más deliciosos, sobre todo si somos golosos, son los postres preparados con chocolate. Presentamos un riquísimo postre para diabéticos en el que la estrella principal es el chocolate negro.','fácil',30,4,'Mousse de aguacate y chocolate negro.jpg',1),(12,'sin azúcar','Manzanas asadas con canela','Simplemente, una delicia. Quién puede resistirse a un postre de esta magnitud, seguramente la respuesta sea nadie y estamos totalmente de acuerdo. Un postre delicioso que podemos comer todos, incluidos los diabéticos.','media',60,4,'manzanas con canela.jpg',1);
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `steps`
--

DROP TABLE IF EXISTS `steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `steps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_recipe` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `steps_id_recipe_idx` (`id_recipe`),
  CONSTRAINT `steps_id_recipe` FOREIGN KEY (`id_recipe`) REFERENCES `recipes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `steps`
--

LOCK TABLES `steps` WRITE;
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
INSERT INTO `steps` VALUES (1,1,1,'Comenzá precalentando el horno, así al terminar la preparación está a la temperatura justa, que debe rondar los 325°.'),(2,1,2,'Enmantecá y enhariná una budinera. Puede ser rectangular, o circular con un hueco en el centro.'),(3,1,3,'Colocá en un bowl la harina junto con la sal, el bicarbonato y la canela. Mezclá los ingredientes en seco'),(4,1,4,'En otro recipiente aparte, batí el huevo, el aceite y el azúcar hasta hacer una especie de crema.'),(5,1,5,'Volcá de a poco los ingredientes secos en la crema de huevo y mezclá bien.'),(6,1,6,'Agregá la leche, las bananas y la vainilla y mezclá.'),(7,1,7,'Incorporá las nueces.'),(8,1,8,'Volcá la mezcla en la budinera. Si utilizaste el recipiente rectangular, podés decorar la superficie con más nueces.'),(9,1,9,'Horneá entre 60 y 80 minutos.'),(10,3,1,'La noche anterior, ponemos los garbanzos en un recipiente amplio y los cubrimos con abundante agua.'),(11,3,2,'Añadimos un puñado de sal y los dejamos a remojo.'),(12,3,3,'En una cazuela grande, echamos los garbanzos ya escurridos de su agua.'),(13,3,4,'Cubrimos todo con abundante agua nuevo, aproximadamente 3 veces la cantidad que ocupen los garbanzos.'),(14,3,5,'Añadimos un puñadito de sal y lo calentamos a fuego fuerte.'),(15,3,6,'Dejamos que se cocinen durante aproximadamente 1 hora y 15 minutos.'),(16,3,7,'En una sartén pequeña, ponemos las semillas de sésamo y las calentamos a fuego medio.'),(17,3,8,'Dejamos que se tuesten durante 5 minutos, removiendo con frecuencia.'),(18,3,9,'Cuando el sésamo se oscurezca ligeramente, lo retiramos del fuego y dejamos que se temple.'),(19,3,10,'A continuación lo pasamos a un vaso batidor junto con 2 cucharadas de agua y 1 de aceite.'),(20,3,11,'Trituramos todo hasta que se forme una pasta.'),(21,3,12,'Esta pasta se llama tahini, es esencial para el hummus, podemos comprarla ya preparada.'),(22,3,13,'En un vaso batidor, ponemos los garbanzos junto con un poco del agua de la cocción.'),(23,3,14,'Añadimos la pasta tahini, los dos dientes de ajo, el zumo de medio limón, el aceite de oliva, el comino, el pimentón dulce y una pizca de sal. '),(24,3,15,'Batimos hasta obtener un puré homogéneo.'),(25,3,16,'Si la consistencia es demasiado fuerte -algo pastosa- podemos añadir un poco más del agua de cocción.'),(26,2,1,'Precalentá el horno a temperatura media (180-200 C).'),(27,2,2,'Colocá papel manteca a una budinera.'),(28,2,3,'En un bowl, hacé un puré con la banana y una pera y media. Podés hacerlo con minipimer.'),(29,2,4,'Agregá la cucharada de jugo de limón, el aceite elegido y el azúcar, y mezclá todo hasta formar una preparación homogénea. Reservá.'),(30,2,5,'En otro bowl, tamizá harina y bicarbonato, agregá la pizca de sal y la avena, y mezclá.'),(31,2,6,'Agregá al bowl de secos la mezcla de líquidos, de a poco, y mezclá hasta obtener una pasta cremosa.'),(32,2,7,'Agregá las almendras partidas y mezclá.'),(33,2,8,'Colocá la mezcla en la budinera. No sobrepases la mitad del molde porque crece.'),(34,2,9,'Cortá la pera en láminas de ½ cm y colocá arriba de la mezcla de budín.'),(35,2,10,'Cociná en horno bajo por 45 minutos o hasta que, al pinchar con un palito, este salga limpio.'),(36,2,11,'Dejá entibiar antes de cortar ¡y a disfrutar!'),(37,4,1,'En una olla pequeña colocá la leche y ponela a fuego lento hasta que esté tibia. '),(38,4,2,'Agregá la levadura y disolvela en la leche. '),(39,4,3,'Incorporá el aceite, el azúcar y la sal.'),(40,4,4,'Tapá la olla y dejala reposar por 15 minutos en la estufa.'),(41,4,5,'Agregá las harinas  a la mezcla de la levadura junto con el huevo y mezclá hasta conseguir una masa homogénea.'),(42,4,6,'Envolvé la masa con plástico film y reposá hasta que doble su volumen.'),(43,4,7,'Dividí la masa en ocho porciones iguales, dales forma de bola, colocalos en una charola y haceles un agujero en el centro. '),(44,4,8,'Dejalos reposar por 20 minutos.'),(45,4,9,'Llená una olla con agua y llevala a fuego alto hasta que hierva. Introducí dos bagels a la vez y dejá que se cuezan un par de minutos por cada lado.'),(46,4,10,'Colocá los bagels en una charola para hornear previamente forrada con papel encerado. Batí la yema y barnizá los panes. Espolvoreá con el ajonjolí. '),(47,4,11,'Meté la charola al horno a 160 ºC por 30 minutos. Enfría un poco y servir.'),(48,5,1,'Encender el horno en 180* y forrar una budinera mediana con papel manteca.'),(49,5,2,'Derretir el chocolate con el aceite a baño María, revolviendo suavemente hasta que esté bien derretido y sea una mezcla homogénea.'),(50,5,3,'Batir los huevos con el azúcar y el extracto de vainilla hasta lograr una mezcla espumosa y suave.'),(51,5,4,'Dejar que se entibie el chocolate y mezclar con el huevo batido.'),(52,5,5,'Agregar harina de arroz y harina de almendras y mezclar.'),(53,5,6,'Agregar la mitad de las nueces partidas y mezclar una vez más.'),(54,5,7,'Colocar la mezcla en la budinera, agregar arriba el resto de las nueces y llevar a horno a 180/200 por 30 minutos.'),(55,5,8,'Nota: La harina de almendras se hace procesando las almendras hasta obtener un arenado grueso.'),(56,6,1,'En una taza mezclar la levadura, el agua tibia y el azúcar. Dejar espumar.'),(57,6,2,'Mezclar la harina de garbanzo, el agua y el aceite. Dejar reposar 15 minutos.'),(58,6,3,'Añadir a la mezcla de garbanzos la espuma de levadura.'),(59,6,4,'Agregar la harina de arroz con la goma xántica hasta formar una masa suave.'),(60,6,5,'Estirar la masa con las manos aceitadas sobre una pizzera previamente aceitada.'),(61,6,6,'Dejar levar 30 minutos.'),(62,6,7,'Llevar al horno medio a temperatura media por 20 minutos.'),(63,6,8,'Pintar con salsa de tomate y agregar el topping que más les guste'),(64,7,1,'Lo primero que debes hacer para preparar tus garbanzos guisados veganos es pelar el diente de ajo, cortarle el extremo plano y laminarlo.'),(65,7,2,'A continuación debes preparar el resto de verduras: Lava, pela y pica en trozos pequeños la cebolla, la zanahoria y el pimiento verde.'),(66,7,3,'Vierte un chorro de aceite de oliva en una sartén y sofríe estas verduras a fuego medio con una pizca de sal.'),(67,7,4,'Remueve de vez en cuando y espera unos 5 - 7 minutos a que estén transparentes.'),(68,7,5,'Mientras tanto pela el calabacín, lávalo y córtalo en rodajas finas.'),(69,7,6,'Una vez que las verduras anteriores estén en su punto, ya puedes añadir el calabacín. Deja que se haga todo junto durante unos 5 minutos más a fuego medio.'),(70,7,7,'Mientras tanto lava y ralla los tomates maduros para extraer su jugo.'),(71,7,8,'Añade el tomate a la sartén junto con la hoja de laurel.'),(72,7,9,'Añade sal y pimienta negra molida a tu gusto y remueve bien. Baja el fuego y deja que se cocine todo unos 10 minutos más.'),(73,7,10,'Pasado este tiempo, y una vez que le tomate ya esté hecho, puedes añadir las almendras, previamente picadas y en la cantidad que desees.'),(74,7,11,'Añade también los garbanzos cocidos y el caldo de verduras.'),(75,7,12,'Remueve y mantén el guiso a fuego lento durante 30 minutos más.'),(76,7,13,'asado este tiempo ya puedes apagar el fuego y apartar tus garbanzos estofados veganos.'),(77,8,1,'Retirar el tallo y las semillas a los pimientos y cortarlos en cuadraditos.'),(78,8,2,'Pelar y trozar las cebollas de verdeo.'),(79,8,3,'Retirar la piel y el hueso a la palta y picar la pulpa.'),(80,8,4,'Escurrir los granos de maíz.'),(81,8,5,'Cortar groseramente las hojas de cilantro.'),(82,8,6,'Colocar las tortillas sobre la superficie de trabajo y repartir la mitad del queso rallado por encima.'),(83,8,7,'Cubrir con los cuadraditos de pimiento, los granos de maíz, el aguacate picado y la mitad del cilantro y espolvorear con el resto del queso.'),(84,8,8,'Doblar las tortillas y hacerlas a la plancha de 4 a 5 min por cada lado, hasta que el queso comience a derretirse.'),(85,8,9,'Cortar las quesadillas por la mitad, repartirlas en los platos, espolvorear con el chile en polvo y decorar con el resto del cilantro.'),(86,9,1,'Cocer las lentejas en abundante agua, escurrirlas y reservar.'),(87,9,2,'Cortar la berenjena en rodajas, ponerlas en un colador con sal durante 15 min.'),(88,9,3,'Pelar los tomates, retirar las semillas y cortarlos en dados. Pelar y picar las escalonias.'),(89,9,4,'Calentar 50 cc de aceite y rehogar las escalonias. Agregar los tomates y saltear a fuego vivo hasta que pierdan el agua.'),(90,9,5,'Incorporar las lentejas y las hierbas, salpimentar, dejar que dé un hervor y retirar del fuego.'),(91,9,6,'Aclarar las berenjenas, secarlas y freírlas en el aceite restante.'),(92,9,7,'Pelar las patatas y cortarlas en rodajas.'),(93,9,8,'Montar las musakas en aros individuales, alternando capas de berenjena, lentejas y papas.'),(94,9,9,'Espolvorear con el queso y hornear 5 min a 220° C. Desmoldar y servir con la salsa de tomate caliente.'),(95,10,1,'Podés deshacer las galletas y añadirle manteca para que quede una base de tarta firme o podés colocar las galletas enteras.'),(96,10,2,'En un vaso echa la leche y añadí la gelatina neutra para que se hidrate. Remové con una cuchara para que esté completamente disuelto.'),(97,10,3,'Cuando estén listos ambos ingredientes, se añade la gelatina disuelta al cazo y se remueve. Añadí la stevia y seguí removiendo.'),(98,10,4,'En cuanto hierva, echá el contenido sobre el molde donde has preparado la base de la tarta. Dejás enfriar en la nevera, mejor de un día para otro, y listo. Podés decorarlo con frutas frescas.'),(99,11,1,'Lo primero que tenemos que hacer es vaciar la palta.'),(100,11,2,'Una vez tenemos toda la carne de la palta, la depositamos en el vaso de la batidora, añadimos el cacao en polvo, la leche, sal y el edulcorante.'),(101,11,3,'Trituramos todos los ingredientes hasta obtener la textura deseada, puede que nos quede un poco espeso, si es así, simplemente añadimos un poquito de agua.'),(102,11,4,'Ya nos queda sólo verter todo el contenido del vaso se la batidora en un molde y meterlo en la heladera para que se enfríe.'),(103,11,5,'Dos horas después estará listo para servir.'),(104,12,1,'Lo primero que tenemos que hacer es precalentar el horno a 200 ºC. '),(105,12,2,'Después y mientas se calienta, lavaremos las manzanas a conciencia, sobre todo porque no las vamos a pelar aunque si las descorazonaremos.'),(106,12,3,'En una fuente para hornear, colocamos las manzanas ya sin corazón y espolvoreamos el edulcorante sobre la manzana, después añadimos jugo de limón y la canela.'),(107,12,4,'Horneamos las manzanas durante 40 minutos.'),(108,12,5,'Cuando lo vayamos a servir, espolvorearemos un poquito de canela por encima.');
/*!40000 ALTER TABLE `steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tips`
--

DROP TABLE IF EXISTS `tips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(800) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tips`
--

LOCK TABLES `tips` WRITE;
/*!40000 ALTER TABLE `tips` DISABLE KEYS */;
INSERT INTO `tips` VALUES (1,'Come alimentos variados','Necesitamos más de 40 nutrientes diferentes y ningún alimento por sí solo puede proporcionarlos todos. El suministro de alimentos que existe hoy en día facilita tomar una amplia variedad de alimentos, tanto comprando alimentos frescos como comprando comidas preparadas.','alimentos-saludables.jpg',1),(2,'Alimentos ricos en hidratos de carbono','Más de la mitad de las calorías de su dieta, es decir el 60 % aproximadamente, deben venir de estos alimentos. Lo ideal es aumentar la ingesta de fibra con el aporte de pan integral, la pasta integrales y otros cereales.','platosaludable.jpg',1),(3,'Come muchas frutas y verduras','La mayor parte de la gente no come la suficiente cantidad de estos alimentos que proporcionan importantes nutrientes protectores. Intenta comer al menos cinco raciones al día y proba nuevas recetas o vea qué platos preparados están disponibles en el supermercado.','frutassaludables.jpg',1),(4,'Come raciones moderadas','Comiendo las raciones adecuadas de cada alimento, es más fácil comer de todos los grupos de alimentos sin necesidad de eliminar ninguno. Si come fuera, podría compartir parte de su comida con un amigo. No abandone el hábito de comer con los que quiere.','almuerzos-saludables.jpg',1),(5,'Tené regularidad en tus comidas','Saltarse las comidas, sobre todo el desayuno, puede conducir a una sensación de hambre descontrolada, causando a menudo una sobre ingesta. Realizar la merienda puede ayudar a contener el hambre, pero no comas demasiado para no sustituir las comidas principales.','regularidadComidas.jpg',1),(6,'Todo es cuestión de equilibrio','No te sientas culpable de los alimentos que te gustan, simplemente permítitelos con moderación y elegi otros alimentos que le proporcionen el equilibrio y la variedad que necesita para conseguir una buena salud.','verduras.jpg',1);
/*!40000 ALTER TABLE `tips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '0',
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'Matías','mati@almazen.com','$2b$10$Q4USxX6CwSdHu2QNgjGXGOw92VQV4yQB4YPuXE2Geg8YDBcD4WD5i','avatar-1595606039415.jpg',0,1),(15,'Admin','admin@almazen.com','$2b$10$/435ANFig0ruW916E.D0bubQC9rp0lyzST3PiZBwcFHzVBCGzV9l.','avatar-1595864112455.png',2,1),(16,'Hernán','hernan@almazen.com','$2b$10$j1njSkO.mqhdKaG00nnZN.zL5DF8plyCV/ysDYPcrzY8kW.lB.eGC','avatar-1595690249485.jpg',0,1),(17,'Agustín','agustin@almazen.com','$2b$10$yT6PSWsqLA7eTYZMMlz5Du1HYF2S8SAo8MMlFDOxAjSEqJUC6TAUS','avatar-1595864510076.jpg',0,1),(18,'Rafael','rafa@almazen.com','$2b$10$S4v03G5f4dLC4ZQKPy9PBukSmzCSENY7qdzaXX4KIRVZ69RNQbs4e','avatar-1595870646078.png',0,1),(19,'Prueba','soyunaprueba@prueba.com','$2b$10$H04LUQQ/8yBGZfVJtE3LA.ZUwQVT4OMnerWnsw411HG2JU2BvwPTC','avatar-1596972986455.png',0,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-09 10:17:55
