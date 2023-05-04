CREATE DATABASE taekwondo;

CREATE TABLE competidor(
    gal VARCHAR(10) NOT NULL PRIMARY KEY,
    apellido VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    du VARCHAR(18) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    pais VARCHAR(20) NOT NULL,
    graduacion ENUM('1ro GUP','2do GUP','3ro GUP','4to GUP','5to GUP','6to GUP','7mo GUP','8vo GUP','9no GUP','10mo GUP','1ro DAN','2do DAN','3ro DAN','4to DAN','5to DAN','6to DAN','7mo DAN','8vo DAN','9no DAN'),
    clasificacion_general VARCHAR(3) NOT NULL,
    email VARCHAR(50) NOT NULL,
    genero ENUM('Masculino','Femenino')
);

-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 06-03-2015 a las 18:04:02
-- Versión del servidor: 5.1.68-cll
-- Versión de PHP: 5.2.6
--
-- Autor: Jhonatan Ponce
-- Git: https://github.com/jhonatanponce/paises_estados_del_mundo.git
-- Redes Sociales: ponceelrelajado

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


INSERT INTO `competidor` (`gal`,`apellido`,`nombre`,`du`,`fecha_nacimiento`,`pais`,`graduacion`,`clasificacion_general`,`email`,`genero`) VALUES
('AAA2233658', 'Cains', 'Edgar', '23654892', '1995-12-12', 'Polonia', '1ro GUP', '10', 'edgar.cains@gmail.com', 'Masculino'),
('AAD1254869', 'Milton', 'Antonie', '56987412', '1985-02-11', 'España', '4to GUP', '601', 'amilton12@gmail.com', 'Femenino'),
('ABC1234567', 'Rosales', 'Marti', '25663987', '2000-08-08', 'Argentina', '5to GUP', '200', 'martina.rosales@est.fi.uncoma.edu.ar', 'Femenino'),
('BDS2365847', 'Gomez', 'Pablo', '22365987', '1985-06-12', 'Argentina', '8vo DAN', '11', 'Pabloo@gmail.com', 'Masculino'),
('BBC2358741', 'Restall', 'Emlynn', '23658941', '1984-01-29', 'Panamá', '4to GUP', '122', 'erestall3@twitter.com', 'femenino'),
('HGF2156845', 'Le Conte', 'Barde', '25687412', '1968-03-06', 'Ucrania', '7 DAN', '81', 'bleconte4@ebay.co.uk', 'masculino'),
('ACB2364521', 'Tallach', 'Dagny', '45689721', '2004-12-29', 'Tailandia', '1ro GUP', '228', 'dtallach5@networkadvertising.org', 'masculino'),
('QWT2345821', 'Bernhard', 'Joana', '22356987', '1973-09-11', 'Suiza', '1ro DAN', '415', 'jbernhard6@theglobeandmail.com', 'femenino'),
('TRE2563147', 'Habden', 'Robbie', '52364125', '2012-02-17', 'Filipinas', '9no GUP', '813', 'rhabden7@mozilla.org', 'masculino'),
('PKJ2356852', 'Janda', 'Edd', '25365415', '1987-09-22', 'Polonia', '6to DAN', '863', 'ejanda8@cnet.com', 'masculino'),
('PPD2356985', 'Litchfield', 'Janna', '27356984', '1983-06-09', 'Suiza', '1ro DAN', '732', 'jlitchfield1d@craigslist.org', 'femenino'),
('PLK2358521', 'Cossentine', 'Alfred', '26598741','1973-08-30', 'China', '7mo GUP', '226', 'acossentine1c@biglobe.ne.jp', 'masculino' ),
('LOK2358554', 'Hoyer', 'Jens', '24356985', '1981-09-22', 'Indonesia', '1ro DAN', '434', 'jhoyer1b@latimes.com', 'masculino'),
('PPD2256894', 'Mandry', 'Mady', '56897412', '1979-02-13', 'China', '9no DAN', '719', 'mmandry1a@barnesandnoble.com', 'femenino'),
('OFJ2569842', 'Beddon', 'Mickey', '23569871', '1967-09-30', 'Pakistán', '7mo GUP', '237', 'mbeddon19@indiegogo.com', 'masculino'),
('UYT1235864', 'Rossey', 'Woodrow', '32658974', '2015-05-08', 'China', '1ro DAN', '80', 'wrossey18@i2i.jp', 'masculino'),
('WTF2563894', 'Langsbury', 'Wynn', '23568941', '1996-10-07', 'Japón', '5to GUP', '844', 'wlangsbury17@netlog.com', 'masculino'),
('LIJ1235854', 'Wellstood', 'Emmye', '21547854', '1967-03-26', 'Portugal', '3ro DAN', '656', 'ewellstood16@alibaba.com', 'femenino'),
('GHT421587', 'Gatteridge', 'Gene', '25874469', '1984-03-02', 'Irlanda', '2do GUP', '762', 'ggatteridge15@archive.org', 'female'),
('KJH1252236', 'Poppleston', 'Naoma', '35642158', '1994-01-21', 'Peru', '3ro GUP', '138', 'npoppleston14@chron.com', 'femenino'),
('YUG1254685', 'Pignon', 'Maurits', '25365984', '2011-12-20', 'Vietnam', '2do DAN', '756', 'mpignon13@bandcamp.com', 'masculino'),
('PKI1235854', 'Hallmark', 'Roshelle', '32569842', '1969-03-21', 'Francia', '8vo DAN', '499', 'rhallmark12@icq.com', 'femenino'),
('KJH25698421', 'Draayer', 'Bent', '29154638', '2004-08-03', 'China', '2do DAN', '647', 'bdraayer11@cafepress.com', 'masculino'),
('KJH20315487', 'Illston', 'Dietrich', '32547841', '1986-11-04', 'Filipinas', '1ro DAN','72', 'dillston10@google.cn', 'masculino'),
('LKJ2314587', 'Sumshon', 'Marion', '32658741', '1983-07-18', 'Irlanda', '8vo GUP','39','msumshonz@opensource.org', 'masculino'),
('HHG235684', 'Laidlaw', 'Eileen', '54896541', '2009-10-01', 'Indonesia',  '9no DAN', '79','elaidlawy@cpanel.net', 'femenino'),
('LOI984521', 'Waylen', 'Lorena', '85412369', '1977-08-02', 'Boliovia',   '7mo GUP', '98','lwaylenx@yellowpages.com', 'femenino' ),
('NMH2548961', 'Wingrove', 'Kristoforo', '24569874', '1981-10-31', 'Indonesia', '1ro DAN','594', 'kwingrovew@technorati.com', 'masculino'),
('NBV2548795', 'Haeslier', 'Lemar', '35698741', '1967-04-03', 'Indonesia',   '4to DAN', '527','lhaeslierv@mac.com', 'masculino'),
('NBG2154875', 'Lowbridge', 'Hastie', '35487965', '1995-06-12', 'Indonesia',   '3ro GUP', '440','hlowbridgeu@oracle.com', 'masculino'),
('ÑLK5631547', 'Edgson', 'Neal', '24569874', '1976-01-10', 'Indonesia', '10mo GUP','115', 'nedgsont@uol.com.br', 'masculino'),
('PPL2546879', 'Pollins', 'Algernon', '35684792', '1995-02-14', 'China', '1ro DAN', '498', 'apollinss@last.fm', 'masculino'),
('HGT2356874', 'Parramore', 'Hatty', '548963217', '1966-06-15', 'Vietnam', '10mo GUP', '691', 'hparramorer@usa.gov', 'femenino'),
('LLJ2356987', 'Dinnies', 'Bev', '65874123', '2015-06-14', 'Rusia', '5to DAN', '828', 'bdinniesq@whitehouse.gov', 'femenino'),
('ÑLK2365894', 'Cahan', 'Kacie', '84569874', '1971-04-23', 'Indonesia', '8vo GUP', '506', 'kcahanp@moonfruit.com', 'femenino'),
('NJH1235874', 'McQuorkell', 'Melitta', '56874921', '1975-02-13', 'Bolivia', '7mo DAN', '618', 'mmcquorkello@smugmug.com', 'femenino'),
('TER1235687', 'Tanser', 'Dom', '54698712', '1984-12-27', 'China', '3ro DAN', '670', 'dtansern@pinterest.com', 'masculino'),
('POM2563148', 'Castanos', 'Webster', '32659874', '1968-08-21', 'Mongolia', '3ro GUP', '652', 'wcastanosm@imdb.com', 'masculino'),
('MKL2356987', 'Breitler', 'Carson', '45236987', '2012-12-23', 'Francia', '10mo GUP', '32','cbreitler9@macromedia.com', 'masculino'),
('POK23514894', 'Huertas', 'Lazare', '32658471', '2005-12-28', 'Bolivia', '9no DAN', '272','lhuertasa@fc2.com', 'masculino'),
('FMK1254862', 'Laurens', 'Mavis', '35621487', '1966-12-07', 'Estados Unidos', '7mo DAN', '63', 'mlaurensb@pinterest.com', 'femenino'),
('PLK2356874', 'Cund', 'Evaleen', '26548721', '1996-05-02', 'Filipinas', '2do GUP', '190', 'ecundc@elpais.com', 'femenino'),
('TRK2563148', 'Fairholm', 'Upton', '85621479', '1990-09-26', 'Grecia', '1ro DAN', '270', 'ufairholmd@alexa.com', 'masculino'),
('YDF2356841', 'Huckin', 'Hakim', '25461387', '2000-09-09', 'Polonia', '6to GUP', '620', 'hhuckine@pinterest.com', 'masculino'),
('KMJ1235874', 'Potticary', 'Aymer', '65421587', '1994-06-26', 'Eslovenia', '6to DAN','815','apotticaryf@facebook.com', 'masculino'),
('NHG2563147', 'Henner', 'Cordelie', '98541265', '1967-06-06', 'Bulgaria', '8vo DAN', '542', 'chennerg@wordpress.org', 'femenino'),
('NNM2358741', 'Placidi', 'Danya', '54882154', '1996-12-26', 'Canadá', '9no GUP', '857', 'dplacidih@techcrunch.com', 'femenino'),
('PPP2544685', 'Mewrcik', 'Karisa', '25641187', '2003-02-10', 'Suiza', '1ro DAN', '93', 'kmewrciki@mysql.com', 'femenino'),
('NNN2556412', 'Van Geffen', 'Nevin', '55896478', '2006-12-20', 'Indonesia', '3ro DAN', '823', 'nvangeffenj@goodreads.com', 'masculino'),
('PHC2355688', 'Titterington', 'Marlene', '52164478', '1975-12-24', 'Polonia', '9no DAN', '15', 'mtitteringtonl@bandcamp.com', 'femenino');


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE IF NOT EXISTS `pais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paisnombre` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=247 ;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id`, `paisnombre`) VALUES
(1, 'Australia'),
(2, 'Austria'),
(3, 'Azerbaiyán'),
(4, 'Anguilla'),
(5, 'Argentina'),
(6, 'Armenia'),
(7, 'Bielorrusia'),
(8, 'Belice'),
(9, 'Bélgica'),
(10, 'Bermudas'),
(11, 'Bulgaria'),
(12, 'Brasil'),
(13, 'Reino Unido'),
(14, 'Hungría'),
(15, 'Vietnam'),
(16, 'Haiti'),
(17, 'Guadalupe'),
(18, 'Alemania'),
(19, 'Países Bajos, Holanda'),
(20, 'Grecia'),
(21, 'Georgia'),
(22, 'Dinamarca'),
(23, 'Egipto'),
(24, 'Israel'),
(25, 'India'),
(26, 'Irán'),
(27, 'Irlanda'),
(28, 'España'),
(29, 'Italia'),
(30, 'Kazajstán'),
(31, 'Camerún'),
(32, 'Canadá'),
(33, 'Chipre'),
(34, 'Kirguistán'),
(35, 'China'),
(36, 'Costa Rica'),
(37, 'Kuwait'),
(38, 'Letonia'),
(39, 'Libia'),
(40, 'Lituania'),
(41, 'Luxemburgo'),
(42, 'México'),
(43, 'Moldavia'),
(44, 'Mónaco'),
(45, 'Nueva Zelanda'),
(46, 'Noruega'),
(47, 'Polonia'),
(48, 'Portugal'),
(49, 'Reunión'),
(50, 'Rusia'),
(51, 'El Salvador'),
(52, 'Eslovaquia'),
(53, 'Eslovenia'),
(54, 'Surinam'),
(55, 'Estados Unidos'),
(56, 'Tadjikistan'),
(57, 'Turkmenistan'),
(58, 'Islas Turcas y Caicos'),
(59, 'Turquía'),
(60, 'Uganda'),
(61, 'Uzbekistán'),
(62, 'Ucrania'),
(63, 'Finlandia'),
(64, 'Francia'),
(65, 'República Checa'),
(66, 'Suiza'),
(67, 'Suecia'),
(68, 'Estonia'),
(69, 'Corea del Sur'),
(70, 'Japón'),
(71, 'Croacia'),
(72, 'Rumanía'),
(73, 'Hong Kong'),
(74, 'Indonesia'),
(75, 'Jordania'),
(76, 'Malasia'),
(77, 'Singapur'),
(78, 'Taiwan'),
(79, 'Bosnia y Herzegovina'),
(80, 'Bahamas'),
(81, 'Chile'),
(82, 'Colombia'),
(83, 'Islandia'),
(84, 'Corea del Norte'),
(85, 'Macedonia'),
(86, 'Malta'),
(87, 'Pakistán'),
(88, 'Papúa-Nueva Guinea'),
(89, 'Perú'),
(90, 'Filipinas'),
(91, 'Arabia Saudita'),
(92, 'Tailandia'),
(93, 'Emiratos árabes Unidos'),
(94, 'Groenlandia'),
(95, 'Venezuela'),
(96, 'Zimbabwe'),
(97, 'Kenia'),
(98, 'Algeria'),
(99, 'Líbano'),
(100, 'Botsuana'),
(101, 'Tanzania'),
(102, 'Namibia'),
(103, 'Ecuador'),
(104, 'Marruecos'),
(105, 'Ghana'),
(106, 'Siria'),
(107, 'Nepal'),
(108, 'Mauritania'),
(109, 'Seychelles'),
(110, 'Paraguay'),
(111, 'Uruguay'),
(112, 'Congo (Brazzaville)'),
(113, 'Cuba'),
(114, 'Albania'),
(115, 'Nigeria'),
(116, 'Zambia'),
(117, 'Mozambique'),
(119, 'Angola'),
(120, 'Sri Lanka'),
(121, 'Etiopía'),
(122, 'Túnez'),
(123, 'Bolivia'),
(124, 'Panamá'),
(125, 'Malawi'),
(126, 'Liechtenstein'),
(127, 'Bahrein'),
(128, 'Barbados'),
(130, 'Chad'),
(131, 'Man, Isla de'),
(132, 'Jamaica'),
(133, 'Malí'),
(134, 'Madagascar'),
(135, 'Senegal'),
(136, 'Togo'),
(137, 'Honduras'),
(138, 'República Dominicana'),
(139, 'Mongolia'),
(140, 'Irak'),
(141, 'Sudáfrica'),
(142, 'Aruba'),
(143, 'Gibraltar'),
(144, 'Afganistán'),
(145, 'Andorra'),
(147, 'Antigua y Barbuda'),
(149, 'Bangladesh'),
(151, 'Benín'),
(152, 'Bután'),
(154, 'Islas Virgenes Británicas'),
(155, 'Brunéi'),
(156, 'Burkina Faso'),
(157, 'Burundi'),
(158, 'Camboya'),
(159, 'Cabo Verde'),
(164, 'Comores'),
(165, 'Congo (Kinshasa)'),
(166, 'Cook, Islas'),
(168, 'Costa de Marfil'),
(169, 'Djibouti, Yibuti'),
(171, 'Timor Oriental'),
(172, 'Guinea Ecuatorial'),
(173, 'Eritrea'),
(175, 'Feroe, Islas'),
(176, 'Fiyi'),
(178, 'Polinesia Francesa'),
(180, 'Gabón'),
(181, 'Gambia'),
(184, 'Granada'),
(185, 'Guatemala'),
(186, 'Guernsey'),
(187, 'Guinea'),
(188, 'Guinea-Bissau'),
(189, 'Guyana'),
(193, 'Jersey'),
(195, 'Kiribati'),
(196, 'Laos'),
(197, 'Lesotho'),
(198, 'Liberia'),
(200, 'Maldivas'),
(201, 'Martinica'),
(202, 'Mauricio'),
(205, 'Myanmar'),
(206, 'Nauru'),
(207, 'Antillas Holandesas'),
(208, 'Nueva Caledonia'),
(209, 'Nicaragua'),
(210, 'Níger'),
(212, 'Norfolk Island'),
(213, 'Omán'),
(215, 'Isla Pitcairn'),
(216, 'Qatar'),
(217, 'Ruanda'),
(218, 'Santa Elena'),
(219, 'San Cristobal y Nevis'),
(220, 'Santa Lucía'),
(221, 'San Pedro y Miquelón'),
(222, 'San Vincente y Granadinas'),
(223, 'Samoa'),
(224, 'San Marino'),
(225, 'San Tomé y Príncipe'),
(226, 'Serbia y Montenegro'),
(227, 'Sierra Leona'),
(228, 'Islas Salomón'),
(229, 'Somalia'),
(232, 'Sudán'),
(234, 'Swazilandia'),
(235, 'Tokelau'),
(236, 'Tonga'),
(237, 'Trinidad y Tobago'),
(239, 'Tuvalu'),
(240, 'Vanuatu'),
(241, 'Wallis y Futuna'),
(242, 'Sáhara Occidental'),
(243, 'Yemen'),
(246, 'Puerto Rico');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;