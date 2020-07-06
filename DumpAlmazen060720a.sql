CREATE DATABASE  IF NOT EXISTS `almazen_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `almazen_db`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: almazen_db
-- ------------------------------------------------------
-- Server version	5.6.36

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'especias',1),(2,'legumbres',1),(3,'jugos',1),(4,'congelados',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,1,1,250,'gr','de harina'),(2,1,2,2,'','bananas'),(3,1,3,125,'gr','de nueces picadas'),(4,1,4,125,'gr','de azúcar'),(5,1,5,50,'ml','de aceite vegetal'),(6,1,6,10,'gr','de leche en polvo'),(7,1,7,1,'','huevo'),(8,1,8,5,'gr','de bicarbonato'),(9,1,9,3,'gr','de sal'),(10,1,10,10,'gr',' de canela'),(11,1,11,3,'ml','de esencia de vainilla'),(12,3,1,400,'gr','de garbanzos'),(13,3,2,15,'ml','de jugo de limón'),(14,3,3,15,'ml','de tahini'),(15,3,4,1,NULL,'diente de ajo'),(16,3,5,8,'gr','de comino molido'),(17,3,6,8,'gr','de sal (opcional)'),(18,3,7,150,'ml','de caldo de cocción');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_diet`
--

LOCK TABLES `product_diet` WRITE;
/*!40000 ALTER TABLE `product_diet` DISABLE KEYS */;
INSERT INTO `product_diet` VALUES (1,1,1),(2,1,3),(3,2,2),(4,2,4),(5,3,1),(6,3,2),(7,3,3),(8,3,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_recipe`
--

LOCK TABLES `product_recipe` WRITE;
/*!40000 ALTER TABLE `product_recipe` DISABLE KEYS */;
INSERT INTO `product_recipe` VALUES (9,1,1),(10,1,3),(11,2,2),(12,2,4),(13,3,1),(14,3,2),(15,3,3),(16,3,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'ESP006','Cúrcuma','La cúrcuma, también denominada azufre de Indias, es una planta muy apreciada por su versatilidad gastronómica. Se le atribuyen propiedades medicinales contra el cáncer, el colesterol alto o la artrosis, entre otras enfermedades. Es nativa del suroeste de la India y es una raíz de la familia del jengibre. Se utiliza como colorante por su inconfundible color amarillo. Además, aporta un cautivante sabor dulzón con un toque picante y amargo, por lo que conviene incorporarlo en pequeñas cantidades','Cúrcuma en polvo para darle sabor y color a tus comidas',100,'gr',60,12,3,'curcuma en polvo.jpg',1),(2,2,'ALM0421','Cacao','El cacao es un árbol procedente de América que produce un fruto del mismo nombre que se puede utilizar como ingrediente para alimentos entre los que destaca el chocolate. Su uso se remonta a la época de los mayas, aztecas e incas, y desde entonces se ha usado tanto para fines nutricionales como médicos. Su principal uso es para hacer chocolate. De este fruto se consigue tanto el polvo de cacao como la manteca. Ambas se suelen mezclar junto a azúcares refinados y leche.','Cacao en polvo para darle sabor y color a tus preparaciones',250,'gr',300,10,80,'cacao.jpg',1),(3,3,'ALM0145','Stevia','La Stevia, originaria de Paraguay (ka’a he’e o “la hierba dulce” en guaraní), es una planta de la familia del girasol y se ha convertido en uno de los cultivos con mayor potencial en el mundo. La Stevia tiene una capacidad edulcorante equivalente a 300 veces la del azúcar, sus propiedades son únicas en el mundo.','Una manera natural de endulzar tus preparaciones',110,'gr',170,0,60,'stevia.jpg',1),(4,1,'ESP001','Anís en grano','Esta planta comenzó a emplearse como remedio natural en la época romana, pero se ha convertido en uno de los ingredientes que no pueden faltar en la cocina. Conocido principalmente por sus propiedades digestivas, el anís en grano es ideal tanto para acompañar tus sobremesas, servirte como calmante antes de acostarte o de ingrediente en diferentes recetas.  Se puede consumir a modo de infusión en cualquier momento del día, pero también como condimento o complemento en numerosas recetas, principalmente postres y cócteles.','Su inconfundible perfume en tu cocina.',100,'gr',80,0,80,'anis en grano.jpg',1),(5,1,'ESP002','Canela en rama','La canela procede de la corteza del canelo, un árbol tropical de hoja perenne. Lo más interesante de la canela son los compuestos aromáticos. Molida se utiliza ampliamente en postres, pasteles, dulces, etc., y entera se emplea para adornar y sazonar algunos platos. Muchas cocinas tradicionales, como la india, la mexicana, la del Medio Oriente y la del norte de África, utilizan la canela como principal especia en los platos salados.','Un toque de canela para decorar y sazonar tus comidas ',100,'gr',300,0,80,'canela en rama.jpg',1),(6,1,'ESP003','Cardamomo','El cardamomo se cultivó por el hombre por primera vez en el año 700 y fue en Europa donde se probó esta planta descubriendo todos los beneficios que trae consigo. Es una de las plantas más costosas junto al azafrán y la vainilla. Debido a su sabor agridulce, el cardamomo es un perfecto saborizador para guisos, salsas, sopas entre otros. Utilizar una semilla entera de cardamomo para la preparación.','Un toque de sabor agridulce a tus platos.',25,'gr',200,0,80,'cardamomo.jpg',1),(7,1,'ESP004','Clavo de olor','Los granos del clavo de olor se utilizan enteros o molidos pero, como son extremadamente fuertes, se usan en poca cantidad. Es una especia muy empleada en la gastronomía de toda Europa y Asia.  Se suele utilizar tanto entero como molido y en preparaciones dulces o saladas. Se recomienda utilizarlo en pequeñas cantidades ya que es de sabor muy fuerte, picante y ardiente, y de sabor amargo. El clavo de olor combina muy bien con distintas especies como la nuez moscada y la canela.','Un toque de clavo de olor para dar un sabor más picante a tus comidas.',100,'gr',260,0,80,'clavo de olor.jpg',1),(8,1,'ESP005','Comino','El comino es de la misma familia del perejil, usada desde la antigüedad como planta medicinal para mejorar la digestión, los forúnculos o el insomnio. Una especie muy común en la cocinas india y persa. El comino surgió en la zona de Irán. Es una especia muy apreciada por los egipcios, así como romanos y griegos. Las semillas de comino son una buena fuente de hierro. Es una especia ideal para la digestión. Combina con la mayoría de los alimentos y sumamente útil para condimentar sopas, diversas legumbres y vegetales.','Un sabor inconfundible en tus alimentos.',100,'gr',80,0,80,'comino.jpg',1),(9,1,'ESP007','Curry','La palabra curry viene en su origen de la palabra kari, que significa salsa en Tamil, el idioma hablado por una etnia del sur de la India que elaborada una serie de platos muy especiados con un sabor muy característico.Una deliciosa combinación de varias especias entre las que se suele encontrar azafrán, canela, cilantro, comino, cúrcuma, jengibre o pimienta. Esta combinación resulta en un condimento muy utilizado en una gran cantidad de platos de, especialmente, las gastronomías asiáticas para conformar estofados y guisos con salsas. Es uno de los condimentos más utilizados hoy en día.','Un aliado infaltable en tu cocina',100,'gr',40,0,80,'curry.jpg',1),(10,1,'ESP008','Eneldo','Originaria de la cuenca del Mediterráneo y Asia Menor, y utilizada por las primeras civilizaciones de la humanidad, actualmente se cultiva en casi todo el mundo. Es un ingrediente básico en muchos países, indispensable en las cocinas de los países nórdicos y bálticos. Con el eneldo fresco se pueden aromatizar todo tipo de platos, se puede añadir, además de a los pescados, a mariscos, carnes, arroces, ensaladas, vinagres y aceites aromatizados, salsas… proporciona su sabor dulzón, fresco y anisado, un sabor único que ninguna otra planta aromática puede proporcionar.','Un toque distintivo a tus preparaciones con este condimento.',100,'gr',100,0,80,'eneldo.jpg',1),(11,1,'ESP009','Jengibre','El jengibre o quion es una planta perteneciente a la familia de las zingiberáceas que crece en todas las regiones tropicales del mundo.  Es muy preciado por su aroma y sabor picante. Se utiliza principalmente en la cocina asiática. En este tipo de comida, los rizomas se pueden agregar como ingrediente en muchos de sus platos o conservarse en vinagre y consumirse como aperitivo. Además, el sabor picante hace que el jugo del rizoma se use como condimento en el marisco y el cordero en la cocina china.','Un toque de picante y un aroma inconfundible.',100,'gr',30,0,80,'jengibre.jpg',1),(12,1,'ESP015','Mostaza en grano','La mostaza es una de las especias más antiguas utilizadas. Es una planta de la familia crucíferas (Brassica nigra). Cuando la mostaza se hierve el picante se reduce notablemente. La mostaza actúa como conservante, por lo que es ideal para los adobos y demás platos conservados en vinagre. También podés utilizar los polvos de mostaza para condimentar harina, en multitud de platos sabrosos o masas, y también para sopas y salsas.','Atrevete a experimentar con una de las especias más antiguas.',100,'gr',70,0,80,'mostaza.jpg',1),(13,1,'ESP010','Nuez moscada','La nuez moscada es el fruto del árbol tropical Myristica fragrans, aunque hay más especies de la familia de las Myristicaceae, es originaria de las Molucas (Indonesia), archipiélago conocido como Islas de las Especias. Fue en su tiempo una de las especias más valoradas. Son muchos los platos que agradecen ser condimentados con nuez moscada, desde la salsa bechamel hasta la repostería. Se ralla sobre la elaboración casi al final para que libere sus aceites esenciales, su aroma y sabor.','No te puede faltar su inconfundible aroma y sabor.',1,'unidad',20,0,80,'nuez moscada.jpg',1),(14,1,'ESP011','Orégano','Es una de las plantas más populares dentro del uso gastronómico, siendo su uso realmente remoto y extendido en todo el mundo, aunque el origen propiamente dicho de la planta es propio del mediterráneo y algunas zonas de cercano oriente.  Es generalmente utilizada como condimento alimenticio, y sus hojas secas tienen un sabor y aroma mucho mejor que cuando están en su estado fresco.','Un clásico de esos que nunca deben faltar en tu cocina. ',100,'gr',50,0,80,'oregano.jpg',1),(15,1,'ESP012','Pimentón dulce','El pimentón molido es el polvo del pimiento rojo que se obtiene a partir del fruto seco y molido. La planta es originaria de México y llegó a Europa y a Marruecos hace muchos años a raíz de los viajes de los españoles hacia América. Este condimento le da un sabor muy atractivo a los platos. Es recomendable agregar este condimento siempre al final de la cocción para que no pierda su aroma y su sabor característico.','Condimentá tus platos con su atractivo sabor.',100,'gr',50,0,80,'pimenton dulce.jpg',1),(16,1,'ESP013','Pimienta blanca','Los granos de pimienta son las bayas del árbol Piper nigrum, de la familia de las piperáceas, un árbol trepador que crece en zonas tropicales húmedas. La pimienta blanca se caracteriza por ser suave. La pimienta no solo aromatiza platos sino que, gracias a la piperina que contiene, estimula la secreción de jugos gástricos, que facilitan la digestión. La mejor forma de aprovechar los aromas de la pimienta es comprarla en grano y molerla en el momento de añadirla en un plato.','Un toque suave pero inconfundible en tus preparaciones.',100,'gr',90,0,80,'pimienta blanca.jpg',1),(17,1,'ESP014','Chaucha de vainilla','La vainilla es originaria de México y del norte de Centroamérica (Guatemala, Honduras). Se sabe que tanto los aztecas como los mayas usaban la vaina de esta bella orquídea para aromatizar licores, e incluso el cacao, que se daba a beber a los nobles y a los guerreros.  Es un aromatizante sofisticado, que aporta una fragancia muy especial a los platos, guisos, y la repostería en la que se incluye.','Un sofisticado aromatizante para tus recetas.',100,'gr',70,0,80,'vainilla.jpg',1),(18,1,'ESP016','Maca en polvo','El polvo de extracto de maca es el que podemos usar en algunas preparaciones culinarias teniendo en cuenta que tiene un sabor ligeramente picante. Simplemente podemos añadir una cucharadita de maca a un batido o a un yogur en el desayuno o merienda, o bien, para consumir después de entrenar. Igualmente, podemos usar la maca para condimentar platos salados calientes o fríos, o bien, para acentuar el sabor dulce de algunas preparaciones como pueden ser galletas caseras o pasteles integrales.','Una cucharada de maca en una taza de agua caliente para sustituir el café mañanero.',100,'gr',100,10,80,'maca en polvo.jpg',1);
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
INSERT INTO `recipes` VALUES (1,'sin gluten','Budín de banana y nuez','Ideal para una tarde lluviosa y gris, para acompañar la merienda o el mate, el budín de banana es un clásico infalible, que siempre es bien recibido. Se distingue de otros budines porque su consistencia es más húmeda, y eso es lo que le da su toque particular. El proceso de preparación es muy sencillo.','fácil',60,12,'budin.jpg',1),(2,'sin azúcar','Budín de banana y nuez','Ideal para una tarde lluviosa y gris, para acompañar la merienda o el mate, el budín de banana es un clásico infalible, que siempre es bien recibido. Se distingue de otros budines porque su consistencia es más húmeda, y eso es lo que le da su toque particular. El proceso de preparación es muy sencillo.','fácil',60,12,'budin.jpg',1),(3,'vegana','Hummus de garbanzos','Una crema de garbanzos suave, sana, deliciosa y muy fácil de preparar. Es delicioso acompañado con aceitunas, nachos, crudités o pan pita. El hummus es un símbolo de encuentro , porque es una parte infaltable de la típica picada de los países del Medio Oriente. Es un deleite, es sencillo y súper nutritivo.','fácil',10,4,'hummusGarbazos.jpg',1),(4,'vegetariana','Budín de banana y nuez','Ideal para una tarde lluviosa y gris, para acompañar la merienda o el mate, el budín de banana es un clásico infalible, que siempre es bien recibido. Se distingue de otros budines porque su consistencia es más húmeda, y eso es lo que le da su toque particular. El proceso de preparación es muy sencillo.','fácil',60,12,'budin.jpg',1),(5,'vegana','Budín húmedo de peras, avena y almendras','En la cocina, a veces solo hace falta animarse a innovar y probar recetas ricas y sanas. Si lo hacés en casa, vas a estar seguro de que tiene los mejores ingredientes y ningún tipo de conservante. Animate a preparar esta fácil y deliciosa receta de budín húmedo de peras, avena y almendras.','difícil',80,8,'Budin-de-Peras-y-Almendras-.jpg',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `steps`
--

LOCK TABLES `steps` WRITE;
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
INSERT INTO `steps` VALUES (1,1,1,'Comenzá precalentando el horno, así al terminar la preparación está a la temperatura justa, que debe rondar los 325°.'),(2,1,2,'Enmantecá y enhariná una budinera. Puede ser rectangular, o circular con un hueco en el centro.'),(3,1,3,'Colocá en un bowl la harina junto con la sal, el bicarbonato y la canela. Mezclá los ingredientes en seco'),(4,1,4,'En otro recipiente aparte, batí el huevo, el aceite y el azúcar hasta hacer una especie de crema.'),(5,1,5,'Volcá de a poco los ingredientes secos en la crema de huevo y mezclá bien.'),(6,1,6,'Agregá la leche, las bananas y la vainilla y mezclá.'),(7,1,7,'Incorporá las nueces.'),(8,1,8,'Volcá la mezcla en la budinera. Si utilizaste el recipiente rectangular, podés decorar la superficie con más nueces.'),(9,1,9,'Horneá entre 60 y 80 minutos.'),(10,3,1,' Si usás garbanzos de lata lavalos bien antes de usarlos y desechá el líquido que traen.'),(11,3,2,'Echá los garbanzos en una batidora junto con el jugo de limón, el tahini, el ajo, la sal, el comino y el agua (o caldo de cocción en caso de que hayas cocinado los garbanzos) y batí hasta obtener una crema homogénea. '),(12,3,3,'Si preferís que el hummus quede menos denso, añadí un poco más de agua o caldo de cocción.'),(13,3,4,'Serví  inmediatamente o guardá las sobras en la heladera en un recipiente hermético durante unos 3-5 días. Podés servirlo tal cuál o con un chorrito de aceite de oliva virgen extra y pimentón dulce espolvoreado por encima. El hummus es perfecto como dip con crudités o pan pita, para aliñar ensaladas o para hacer bocadillos.');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@almazen.com','$2b$10$9pE7FmVoYQZf/9uQRPx8veTEUcIX/P8grWwU9tVDYoOz3rjJnj9G2','avatar-1593119970177.png',2,1),(2,'Agustín','agus@almazen.com','$2b$10$ylEixrFkDrhtEBnxsdxPB.P1F9KRJ6qAE4K7awd0cxAd4JKBHctLq','avatar-1593022518948.jpg',0,1),(3,'Rafael','rafa@almazen.com','$2b$10$TfzxPZjDpjt8WFf/52eI.uyAEe/3W82klYAS3I7xee5.3YiaYPib6','avatar-1593083486227.png',0,1),(4,'Matías','mati@almazen.com','$2b$10$H.8ZEl2ZSZ4Y3D9h3M9QsuQDbQh.r7bwYHyc7qsfW23lpUu2QAL1.','avatar-1593036167353.png',0,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'almazen_db'
--

--
-- Dumping routines for database 'almazen_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-06  9:14:43
