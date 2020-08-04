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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,1,1,250,'gr','de harina'),(2,1,2,2,'','bananas'),(3,1,3,125,'gr','de nueces picadas'),(4,1,4,125,'gr','de azúcar'),(5,1,5,50,'ml','de aceite vegetal'),(6,1,6,10,'gr','de leche en polvo'),(7,1,7,1,'','huevo'),(8,1,8,5,'gr','de bicarbonato'),(9,1,9,3,'gr','de sal'),(10,1,10,10,'gr',' de canela'),(11,1,11,3,'ml','de esencia de vainilla'),(12,3,1,500,'gr','de garbanzos'),(13,3,2,50,'gr','de sésamo o ajonjoli'),(14,3,3,2,'dientes','de ajo'),(15,3,4,150,'ml','jugo de limón'),(16,3,5,25,'ml','de aceite de oliva'),(17,3,6,8,'gr','de sal (opcional)'),(18,3,7,10,'gr','de comino'),(19,3,8,10,'gr','de pimentón dulce'),(20,2,1,350,'gr','de harina integral'),(21,2,2,200,'gr','de avena arrollada'),(22,2,3,125,'gr','de azúcar'),(23,2,4,50,'ml','de aceite de girasol'),(24,2,5,1,NULL,'banana madura'),(25,2,6,2,NULL,'peras a punto'),(26,2,7,5,'gr','de bicarbonato'),(27,2,8,3,'gr','de sal'),(28,2,9,100,'ml','de jugo de limón'),(29,2,10,15,NULL,'almendras');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,14,1,2,60,12,NULL,NULL),(2,1,14,2,4,300,10,NULL,NULL),(3,2,16,1,2,60,12,NULL,NULL),(4,2,16,2,1,300,10,NULL,NULL),(5,2,16,3,1,170,20,NULL,NULL),(6,3,18,1,7,60,12,NULL,NULL),(7,4,17,5,4,300,0,NULL,NULL),(8,4,17,1,1,60,12,NULL,NULL);
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
INSERT INTO `products` VALUES (1,1,'ESP006','Cúrcuma','La cúrcuma, también denominada azufre de Indias, es una planta muy apreciada por su versatilidad gastronómica. Se le atribuyen propiedades medicinales contra el cáncer, el colesterol alto o la artrosis, entre otras enfermedades. Es nativa del suroeste de la India y es una raíz de la familia del jengibre. Se utiliza como colorante por su inconfundible color amarillo. Además, aporta un cautivante sabor dulzón con un toque picante y amargo, por lo que conviene incorporarlo en pequeñas cantidades','Cúrcuma en polvo para darle sabor y color a tus comidas',100,'gr',60,12,7,'curcuma en polvo.jpg',1),(2,1,'ALM0421','Cacao','El cacao es un árbol procedente de América que produce un fruto del mismo nombre que se puede utilizar como ingrediente para alimentos entre los que destaca el chocolate. Su uso se remonta a la época de los mayas, aztecas e incas, y desde entonces se ha usado tanto para fines nutricionales como médicos. Su principal uso es para hacer chocolate. De este fruto se consigue tanto el polvo de cacao como la manteca. Ambas se suelen mezclar junto a azúcares refinados y leche.','Cacao en polvo para darle sabor y color a tus preparaciones',250,'gr',300,10,80,'Cacao - 22-6-2020 11_0_56.jpg',1),(3,1,'ALM0145','Stevia','La Stevia, originaria de Paraguay (ka’a he’e o “la hierba dulce” en guaraní), es una planta de la familia del girasol y se ha convertido en uno de los cultivos con mayor potencial en el mundo. La Stevia tiene una capacidad edulcorante equivalente a 300 veces la del azúcar, sus propiedades son únicas en el mundo.','Una manera natural de endulzar tus preparaciones',110,'gr',170,20,60,'stevia.jpg',1),(4,1,'ESP001','Anís en grano','Esta planta comenzó a emplearse como remedio natural en la época romana, pero se ha convertido en uno de los ingredientes que no pueden faltar en la cocina. Conocido principalmente por sus propiedades digestivas, el anís en grano es ideal tanto para acompañar tus sobremesas, servirte como calmante antes de acostarte o de ingrediente en diferentes recetas.  Se puede consumir a modo de infusión en cualquier momento del día, pero también como condimento o complemento en numerosas recetas, principalmente postres y cócteles.','Su inconfundible perfume en tu cocina.',100,'gr',80,0,15,'anis en grano.jpg',0),(5,1,'ESP002','Canela en rama','La canela procede de la corteza del canelo, un árbol tropical de hoja perenne. Lo más interesante de la canela son los compuestos aromáticos. Molida se utiliza ampliamente en postres, pasteles, dulces, etc., y entera se emplea para adornar y sazonar algunos platos. Muchas cocinas tradicionales, como la india, la mexicana, la del Medio Oriente y la del norte de África, utilizan la canela como principal especia en los platos salados.','Un toque de canela para decorar y sazonar tus comidas ',100,'gr',300,0,23,'canela en rama.jpg',0),(6,1,'ESP003','Cardamomo','El cardamomo se cultivó por el hombre por primera vez en el año 700 y fue en Europa donde se probó esta planta descubriendo todos los beneficios que trae consigo. Es una de las plantas más costosas junto al azafrán y la vainilla. Debido a su sabor agridulce, el cardamomo es un perfecto saborizador para guisos, salsas, sopas entre otros. Utilizar una semilla entera de cardamomo para la preparación.','Un toque de sabor agridulce a tus platos.',25,'gr',200,0,49,'cardamomo.jpg',1),(7,1,'ESP004','Clavo de olor','Los granos del clavo de olor se utilizan enteros o molidos pero, como son extremadamente fuertes, se usan en poca cantidad. Es una especia muy empleada en la gastronomía de toda Europa y Asia.  Se suele utilizar tanto entero como molido y en preparaciones dulces o saladas. Se recomienda utilizarlo en pequeñas cantidades ya que es de sabor muy fuerte, picante y ardiente, y de sabor amargo. El clavo de olor combina muy bien con distintas especies como la nuez moscada y la canela.','Un toque de clavo de olor para dar un sabor más picante a tus comidas.',100,'gr',260,0,34,'clavo de olor.jpg',1),(8,1,'ESP005','Comino','El comino es de la misma familia del perejil, usada desde la antigüedad como planta medicinal para mejorar la digestión, los forúnculos o el insomnio. Una especie muy común en la cocinas india y persa. El comino surgió en la zona de Irán. Es una especia muy apreciada por los egipcios, así como romanos y griegos. Las semillas de comino son una buena fuente de hierro. Es una especia ideal para la digestión. Combina con la mayoría de los alimentos y sumamente útil para condimentar sopas, diversas legumbres y vegetales.','Un sabor inconfundible en tus alimentos.',100,'gr',80,0,22,'comino.jpg',1),(9,1,'ESP007','Curry','La palabra curry viene en su origen de la palabra kari, que significa salsa en Tamil, el idioma hablado por una etnia del sur de la India que elaborada una serie de platos muy especiados con un sabor muy característico.Una deliciosa combinación de varias especias entre las que se suele encontrar azafrán, canela, cilantro, comino, cúrcuma, jengibre o pimienta. Esta combinación resulta en un condimento muy utilizado en una gran cantidad de platos de, especialmente, las gastronomías asiáticas para conformar estofados y guisos con salsas. Es uno de los condimentos más utilizados hoy en día.','Un aliado infaltable en tu cocina',100,'gr',40,0,23,'curry.jpg',1),(10,1,'ESP008','Eneldo','Originaria de la cuenca del Mediterráneo y Asia Menor, y utilizada por las primeras civilizaciones de la humanidad, actualmente se cultiva en casi todo el mundo. Es un ingrediente básico en muchos países, indispensable en las cocinas de los países nórdicos y bálticos. Con el eneldo fresco se pueden aromatizar todo tipo de platos, se puede añadir, además de a los pescados, a mariscos, carnes, arroces, ensaladas, vinagres y aceites aromatizados, salsas… proporciona su sabor dulzón, fresco y anisado, un sabor único que ninguna otra planta aromática puede proporcionar.','Un toque distintivo a tus preparaciones con este condimento.',100,'gr',100,0,80,'eneldo.jpg',1),(11,1,'ESP009','Jengibre','El jengibre o quion es una planta perteneciente a la familia de las zingiberáceas que crece en todas las regiones tropicales del mundo.  Es muy preciado por su aroma y sabor picante. Se utiliza principalmente en la cocina asiática. En este tipo de comida, los rizomas se pueden agregar como ingrediente en muchos de sus platos o conservarse en vinagre y consumirse como aperitivo. Además, el sabor picante hace que el jugo del rizoma se use como condimento en el marisco y el cordero en la cocina china.','Un toque de picante y un aroma inconfundible.',100,'gr',30,0,80,'jengibre.jpg',1),(12,1,'ESP015','Mostaza en grano','La mostaza es una de las especias más antiguas utilizadas. Es una planta de la familia crucíferas (Brassica nigra). Cuando la mostaza se hierve el picante se reduce notablemente. La mostaza actúa como conservante, por lo que es ideal para los adobos y demás platos conservados en vinagre. También podés utilizar los polvos de mostaza para condimentar harina, en multitud de platos sabrosos o masas, y también para sopas y salsas.','Atrevete a experimentar con una de las especias más antiguas.',100,'gr',70,0,80,'mostaza.jpg',1),(13,1,'ESP010','Nuez moscada','La nuez moscada es el fruto del árbol tropical Myristica fragrans, aunque hay más especies de la familia de las Myristicaceae, es originaria de las Molucas (Indonesia), archipiélago conocido como Islas de las Especias. Fue en su tiempo una de las especias más valoradas. Son muchos los platos que agradecen ser condimentados con nuez moscada, desde la salsa bechamel hasta la repostería. Se ralla sobre la elaboración casi al final para que libere sus aceites esenciales, su aroma y sabor.','No te puede faltar su inconfundible aroma y sabor.',1,'unidad',20,0,34,'nuez moscada.jpg',1),(14,1,'ESP011','Orégano','Es una de las plantas más populares dentro del uso gastronómico, siendo su uso realmente remoto y extendido en todo el mundo, aunque el origen propiamente dicho de la planta es propio del mediterráneo y algunas zonas de cercano oriente.  Es generalmente utilizada como condimento alimenticio, y sus hojas secas tienen un sabor y aroma mucho mejor que cuando están en su estado fresco.','Un clásico de esos que nunca deben faltar en tu cocina. ',100,'gr',50,12,80,'oregano.jpg',1),(15,1,'ESP012','Pimentón dulce','El pimentón molido es el polvo del pimiento rojo que se obtiene a partir del fruto seco y molido. La planta es originaria de México y llegó a Europa y a Marruecos hace muchos años a raíz de los viajes de los españoles hacia América. Este condimento le da un sabor muy atractivo a los platos. Es recomendable agregar este condimento siempre al final de la cocción para que no pierda su aroma y su sabor característico.','Condimentá tus platos con su atractivo sabor.',100,'gr',50,0,80,'pimenton dulce.jpg',1),(16,1,'ESP013','Pimienta blanca','Los granos de pimienta son las bayas del árbol Piper nigrum, de la familia de las piperáceas, un árbol trepador que crece en zonas tropicales húmedas. La pimienta blanca se caracteriza por ser suave. La pimienta no solo aromatiza platos sino que, gracias a la piperina que contiene, estimula la secreción de jugos gástricos, que facilitan la digestión. La mejor forma de aprovechar los aromas de la pimienta es comprarla en grano y molerla en el momento de añadirla en un plato.','Un toque suave pero inconfundible en tus preparaciones.',100,'gr',90,0,80,'pimienta blanca.jpg',1),(17,1,'ESP014','Chaucha de vainilla','La vainilla es originaria de México y del norte de Centroamérica (Guatemala, Honduras). Se sabe que tanto los aztecas como los mayas usaban la vaina de esta bella orquídea para aromatizar licores, e incluso el cacao, que se daba a beber a los nobles y a los guerreros.  Es un aromatizante sofisticado, que aporta una fragancia muy especial a los platos, guisos, y la repostería en la que se incluye.','Un sofisticado aromatizante para tus recetas.',100,'gr',70,0,22,'vainilla.jpg',1),(18,1,'ESP016','Maca en polvo','El polvo de extracto de maca es el que podemos usar en algunas preparaciones culinarias teniendo en cuenta que tiene un sabor ligeramente picante. Simplemente podemos añadir una cucharadita de maca a un batido o a un yogur en el desayuno o merienda, o bien, para consumir después de entrenar. Igualmente, podemos usar la maca para condimentar platos salados calientes o fríos, o bien, para acentuar el sabor dulce de algunas preparaciones como pueden ser galletas caseras o pasteles integrales.','Una cucharada de maca en una taza de agua caliente para sustituir el café mañanero.',100,'gr',100,10,80,'maca en polvo.jpg',1),(19,2,'LEG001','Amaranto','El amaranto puede incorporarse a la dieta para diversificar la misma y agregar buenos nutrientes, sobre todo, puede ser de utilidad en quienes llevan una alimentación vegana y buscan proteínas de origen vegetal de alta calidad. Puede ser un buen recurso para incrementar la saciedad de la dieta.','Incorporá un alimento saludable en tus recetas.',100,'gr',50,0,80,'amaranto.jpg',1),(20,2,'LEG002','Arvejas orgánicas','Estas exquisitas legumbres, se pueden utilizar en variadas preparaciones, desde ensaladas, guisos, y tartas y todas aquellas  que la imaginación nos permita realizar. Son excelentes para regular y generar la energía que necesitan los músculos durante la práctica de actividad física, y ayudan en el metabolismo de los nutrientes provenientes de otros alimentos.','Las arvejas son ricas en proteínas y carbohidratos, bajas en grasa y constituyen una buena fuente de fibra.',500,'gr',50,0,100,'arveja.jpg',1),(21,2,'LEG003','Garbanzos','El garbanzo es originario de Turquía y es gracias a los cartagineses que en la Península Ibérica lo cultivamos y nos lo comemos desde entonces. Existen 40 especies distintas de garbanzo y en España se reconocen cinco grandes variedades. Los garbanzos disminuyen el colesterol y triglicéridos, y promueven la salud cardiovascular. Deberían ocupar un sitio destacado en el trono de los superalimentos.','Un aliado indispensable para tu salud cardiovascular.',250,'gr',50,0,120,'garbanzo.jpg',1),(22,2,'LEG004','Lentejas','Estas brillantes leguminosas además de ser saludables pueden cocinarse en un sinfín de recetas que no cansan al paladar, desde sopas, ensaladas y guarniciones. Eso sí, para fomentar el amor por las lentejas es necesario evitar errores comunes al cocinarlas. Es importante comprar las lentejas más frescas que puedas encontrar, así podrás usarlas durante más tiempo.','Deliciosas y muy versátiles.',250,'gr',80,10,200,'lenteja.jpg',1),(23,2,'LEG005','Poroto negro','Los frijoles negros tienen un alto contenido en magnesio y una buena fuente de potasio y hierro, que son nutrientes esenciales que el cuerpo necesita. Los frijoles negros también contienen molibdeno (cuya función principal es desintoxicar al organismo del sulfito proveniente de distintos alimentos), calcio y zinc.','Muy saludables y deliciosos',250,'gr',30,0,60,'poroto negro.jpg',1),(24,2,'LEG006','Porotos de soja','La soja contienen los nueve aminoácidos esenciales para el organismo. Es por tanto una buena fuente de proteína vegetal, de vitaminas y de minerales cruciales para reducir el riesgo de sufrir enfermedades crónicas. Además contiene una buena proporción de fibra saciante que la hace adecuada para dietas de adelgazamiento.','Una comida saludable y fácil de implementar en cualquier receta',500,'gr',40,0,89,'poroto de soja.jpg',1),(25,3,'CER001','Germen de trigo','El germen de trigo es una parte tierna del cereal cuyo consumo recomendado es de entre dos y cuatro cucharadas diarias. Así, se puede tomar junto a otros cereales en el desayuno, para acompañar un yogur o sustituyéndolo por harina refinada. En este último caso se pude reemplazar media taza de harina por germen de trigo. También sirve como complemento dietético.','Agregale energía a tus días.',250,'gr',50,0,45,'germen de trigo.jpg',1),(26,3,'CER002','Avena','Los copos de avena son prácticos, deliciosos y muy nutritivos, así que no es extraño que se hayan convertido en uno de los ingredientes más apreciados en la alimentación saludable y que abunden las recetas con copos de avena. Cuando se incorpora la avena a la dieta habitual, por ejemplo los copos en el desayuno, es fácil sentir que muchas cosas mejoran: sienta bien, te sacia, se regula el tránsito intestinal..','Deliciosos y nutritivos.',250,'gr',45,10,546,'avena.jpg',1),(27,3,'CER003','Salvado de avena','Consumir productos de avena integrales (incluyen el salvado) proporciona mayor valor nutricional frente a cuando se consumen productos de avena refinada. El salvado de avena se encuentra también como un producto comercial y es posible añadirlo directamente a alimentos como yogur, utilizarlo en la realización de pan, enriquecimiento de otras harinas o productos, así como su utilización como complemento alimenticio.','Agregale nutrientes a tus yougures',250,'gr',50,0,34,'salvado de avena.jpg',1),(28,3,'CER004','Salvado de trigo','El salvado de trigo es lo queda tras refinar o procesar el grano de trigo, o sea, son las capas externas del grano (concretamente al pericarpio y sus diferentes subcapas). Por lo mismo, este antes considerado deshecho, es muy cotizado ya que contiene muchos nutrientes esenciales. Y aunque es un producto que es parte del grupo de harinas y cereales, no debemos temer, su consumo en cantidades adecuadas nos entregará muchos beneficios. ','Infaltable en tus preparaciones',250,'gr',15,0,675,'salvado de trigo.jpg',1),(29,3,'CER005','Copos de arroz','Su gran aporte en hidratos de carbono proporcionan gran energía, aconsejándose su consumo especialmente en niños y deportistas. Eficaz contra el estreñimiento. Su aporte en Magnesio ayuda a la reducción de azúcar en la sangre.','Cuidá de los que más querés',50,'gr',50,0,54,'copos de arroz.jpg',1),(30,3,'CER006','Cebada perlada','Contiene un alto grado de proteínas y es el que mayor cantidad de fibra solubles aporta entre los cereales integrales, por lo que colabora como laxante en los casos de estreñimiento ayudando a equilibrar la flora intestinal.','Aportale fribras a tus comidas',500,'gr',50,0,56,'cebada perlada.jpg',1),(31,4,'ARO001','Romero','El romero en la cocina. El romero es una hierba aromática de fuerte y agradable olor. Combina a las mil maravillas con carnes, especialmente con la de cordero y le da un sabor especial a las papas cocidas y otros vegetales. Se puede usar tanto fresco como seco','Romero seco',125,'gr',45,0,76,'romero.jpg',1),(32,4,'ARO002','Salvia','En la cocina, la salvia es muy utilizada, tanto fresca como seca, para acompañar carnes grasas, como el pato, el cordero o el cerdo (sobre todo en embutidos), además de quesos y pescados también grasos. Es muy usada en la cocina italiana y la francesa y desde la antigüedad se le conoce por su propiedades medicinales y terapéuticas, pues sirve como anti-inflamatorio, para aliviar problemas digestivos y es rica en antioxidantes.','Agregá sabor y perfume a tus preparaciones',150,'gr',50,5,67,'stevia.jpg',1),(33,4,'ARO004','Sésamo','Tahini es una pasta de semillas de ajonjolí (sésamo) típica de la cocina de oriente. a menudo se prepara con ajonjolí tostado y a veces se le agrega agua para que procese mejor. ... y prepararla solo con ajonjolí y dejarla cruda, sin tostar el ajonjolí. para conservar la mayoría de sus propiedades.','Semillas de sésamo para disfrutar en tus comidas ',60,'gr',100,0,89,'sesamo.jpg',1),(34,4,'ARO005','Tomillo','Agrega tomillo a sopas, guisos, estofados, adobos, tortillas o huevos revueltos. También puedes añadir ramitas enteras a las cazuelas para darle más sabor (recuerda quitarlas antes de servir). Una idea sabrosa es espolvorear hojas de tomillo y sal marina sobre las papas antes de asarlas.','Tomillo seco para perfumar tus comidas',50,'gr',60,0,67,'tomillo.jpg',1),(35,4,'ARO006','Laurel','Las hojas de laurel son idóneas en los platos cocinados a fuego lento, casando a la perfección con otras hierbas aromáticas como el perejil o el tomillo. Se añaden como aromatizador de estofados, adobos, salsas de carne o pescado, guisos de legumbres y verduras, sopas, cremas o parrilladas.','Dale un toque característico a tus platos',100,'gr',120,5,67,'laurel.jpg',1),(36,4,'ARO003','Cilantro','En la cocina latinoamericana, es prácticamente inconcebible cocinar sin el cilantro, ya que aparece utilizado tanto en seco como en fresco, entre los ingredientes de todas las recetas de salsas, moles, guisos de pollo, sopas, frijoles, guacamoles, etc. Se utiliza especialmente en Perú, Venezuela, Cuba y México, que son los países de esta zona en cuya gastronomía, está más implantado el uso de las hojas, tallos y raíces de esta hierba.','Prepará un típico plato y no te olvides del cilantro',60,'gr',89,0,56,'cilantro.jpg',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'sin gluten','Budín de banana y nuez','Ideal para una tarde lluviosa y gris, para acompañar la merienda o el mate, el budín de banana es un clásico infalible, que siempre es bien recibido. Se distingue de otros budines porque su consistencia es más húmeda, y eso es lo que le da su toque particular. El proceso de preparación es muy sencillo.','fácil',60,12,'budin.jpg',1),(2,'vegana','Budín de peras y almendras','En la cocina, a veces solo hace falta animarse a innovar y probar recetas ricas y sanas. Si lo hacés en casa, vas a estar seguro de que tiene los mejores ingredientes y ningún tipo de conservante. Animate a preparar esta fácil y deliciosa receta de budín húmedo de peras, avena y almendras.','fácil',80,8,'Budin-de-Peras-y-Almendras-.jpg',1),(3,'vegana','Hummus de garbanzos','Una crema de garbanzos suave, sana, deliciosa y muy fácil de preparar. Es delicioso acompañado con aceitunas, nachos, crudités o pan pita. El hummus es un símbolo de encuentro , porque es una parte infaltable de la típica picada de los países del Medio Oriente. Es un deleite, es sencillo y súper nutritivo.','fácil',10,4,'hummusGarbazos.jpg',1),(4,'vegetariana','Budín de banana y nuez','Ideal para una tarde lluviosa y gris, para acompañar la merienda o el mate, el budín de banana es un clásico infalible, que siempre es bien recibido. Se distingue de otros budines porque su consistencia es más húmeda, y eso es lo que le da su toque particular. El proceso de preparación es muy sencillo.','fácil',60,12,'budin.jpg',0),(5,'vegana','Budín húmedo de peras, avena y almendras','En la cocina, a veces solo hace falta animarse a innovar y probar recetas ricas y sanas. Si lo hacés en casa, vas a estar seguro de que tiene los mejores ingredientes y ningún tipo de conservante. Animate a preparar esta fácil y deliciosa receta de budín húmedo de peras, avena y almendras.','difícil',80,8,'Budin-de-Peras-y-Almendras-.jpg',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `steps`
--

LOCK TABLES `steps` WRITE;
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
INSERT INTO `steps` VALUES (1,1,1,'Comenzá precalentando el horno, así al terminar la preparación está a la temperatura justa, que debe rondar los 325°.'),(2,1,2,'Enmantecá y enhariná una budinera. Puede ser rectangular, o circular con un hueco en el centro.'),(3,1,3,'Colocá en un bowl la harina junto con la sal, el bicarbonato y la canela. Mezclá los ingredientes en seco'),(4,1,4,'En otro recipiente aparte, batí el huevo, el aceite y el azúcar hasta hacer una especie de crema.'),(5,1,5,'Volcá de a poco los ingredientes secos en la crema de huevo y mezclá bien.'),(6,1,6,'Agregá la leche, las bananas y la vainilla y mezclá.'),(7,1,7,'Incorporá las nueces.'),(8,1,8,'Volcá la mezcla en la budinera. Si utilizaste el recipiente rectangular, podés decorar la superficie con más nueces.'),(9,1,9,'Horneá entre 60 y 80 minutos.'),(10,3,1,'La noche anterior, ponemos los garbanzos en un recipiente amplio y los cubrimos con abundante agua.'),(11,3,2,'Añadimos un puñado de sal y los dejamos a remojo.'),(12,3,3,'En una cazuela grande, echamos los garbanzos ya escurridos de su agua.'),(13,3,4,'Cubrimos todo con abundante agua nuevo, aproximadamente 3 veces la cantidad que ocupen los garbanzos.'),(14,3,5,'Añadimos un puñadito de sal y lo calentamos a fuego fuerte.'),(15,3,6,'Dejamos que se cocinen durante aproximadamente 1 hora y 15 minutos.'),(16,3,7,'En una sartén pequeña, ponemos las semillas de sésamo y las calentamos a fuego medio.'),(17,3,8,'Dejamos que se tuesten durante 5 minutos, removiendo con frecuencia.'),(18,3,9,'Cuando el sésamo se oscurezca ligeramente, lo retiramos del fuego y dejamos que se temple.'),(19,3,10,'A continuación lo pasamos a un vaso batidor junto con 2 cucharadas de agua y 1 de aceite.'),(20,3,11,'Trituramos todo hasta que se forme una pasta.'),(21,3,12,'Esta pasta se llama tahini, es esencial para el hummus, podemos comprarla ya preparada.'),(22,3,13,'En un vaso batidor, ponemos los garbanzos junto con un poco del agua de la cocción.'),(23,3,14,'Añadimos la pasta tahini, los dos dientes de ajo, el zumo de medio limón, el aceite de oliva, el comino, el pimentón dulce y una pizca de sal. '),(24,3,15,'Batimos hasta obtener un puré homogéneo.'),(25,3,16,'Si la consistencia es demasiado fuerte -algo pastosa- podemos añadir un poco más del agua de cocción.'),(26,2,1,'Precalentá el horno a temperatura media (180-200 C).'),(27,2,2,'Colocá papel manteca a una budinera.'),(28,2,3,'En un bowl, hacé un puré con la banana y una pera y media. Podés hacerlo con minipimer.'),(29,2,4,'Agregá la cucharada de jugo de limón, el aceite elegido y el azúcar, y mezclá todo hasta formar una preparación homogénea. Reservá.'),(30,2,5,'En otro bowl, tamizá harina y bicarbonato, agregá la pizca de sal y la avena, y mezclá.'),(31,2,6,'Agregá al bowl de secos la mezcla de líquidos, de a poco, y mezclá hasta obtener una pasta cremosa.'),(32,2,7,'Agregá las almendras partidas y mezclá.'),(33,2,8,'Colocá la mezcla en la budinera. No sobrepases la mitad del molde porque crece.'),(34,2,9,'Cortá la pera en láminas de ½ cm y colocá arriba de la mezcla de budín.'),(35,2,10,'Cociná en horno bajo por 45 minutos o hasta que, al pinchar con un palito, este salga limpio.'),(36,2,11,'Dejá entibiar antes de cortar ¡y a disfrutar!');
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'Matías','mati@almazen.com','$2b$10$Q4USxX6CwSdHu2QNgjGXGOw92VQV4yQB4YPuXE2Geg8YDBcD4WD5i','avatar-1595606039415.jpg',0,1),(15,'Admin','admin@almazen.com','$2b$10$/435ANFig0ruW916E.D0bubQC9rp0lyzST3PiZBwcFHzVBCGzV9l.','avatar-1595864112455.png',2,1),(16,'Hernán','hernan@almazen.com','$2b$10$j1njSkO.mqhdKaG00nnZN.zL5DF8plyCV/ysDYPcrzY8kW.lB.eGC','avatar-1595690249485.jpg',0,1),(17,'Agustín','agustin@almazen.com','$2b$10$yT6PSWsqLA7eTYZMMlz5Du1HYF2S8SAo8MMlFDOxAjSEqJUC6TAUS','avatar-1595864510076.jpg',0,1),(18,'Rafael','rafa@almazen.com','$2b$10$S4v03G5f4dLC4ZQKPy9PBukSmzCSENY7qdzaXX4KIRVZ69RNQbs4e','avatar-1595870646078.png',0,1);
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

-- Dump completed on 2020-08-04 18:39:48
