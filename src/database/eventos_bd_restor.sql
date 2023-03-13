CREATE TABLE `actividad` (
  `idactividad` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `hora_inicio` date DEFAULT NULL,
  `hora_fin` date NOT NULL,
  `cupos` int(11) DEFAULT NULL,
  `idevento` int(11) DEFAULT NULL,
  `ci_exp` int(11) DEFAULT NULL
);

CREATE TABLE `ambiente` (
  `id_ambiente` varchar(20) NOT NULL,
  `detalle` varchar(40) DEFAULT NULL,
  `num_asi` int(11) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `id_asistencia` int(11) NOT NULL,
  `ci_control` int(11) DEFAULT NULL,
  `ci_par` int(11) DEFAULT NULL,
  `idactividad` int(11) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certificado`
--

CREATE TABLE `certificado` (
  `id_certificado` int(11) NOT NULL,
  `ci_par` int(11) DEFAULT NULL,
  `idevento` int(11) DEFAULT NULL,
  `fecha_emision` date DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(11) NOT NULL,
  `detalle` varchar(40) DEFAULT NULL,
  `ci_par` int(11) DEFAULT NULL,
  `idevento` int(11) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `control`
--

CREATE TABLE `control` (
  `ci_control` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `nick` varchar(20) DEFAULT NULL,
  `clave` varchar(20) DEFAULT NULL,
  `fechanaci` date DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `idevento` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `costo` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` date DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expositor`
--

CREATE TABLE `expositor` (
  `ci_exp` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `grado_academico` varchar(20) DEFAULT NULL,
  `universidad` varchar(40) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `nick` varchar(20) DEFAULT NULL,
  `clave` varchar(20) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `fechanaci` date DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscribe`
--

CREATE TABLE `inscribe` (
  `ci_par` int(11) NOT NULL,
  `idevento` int(11) NOT NULL,
  `tipo_pago` varchar(20) DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material`
--

CREATE TABLE `material` (
  `id_material` varchar(20) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `detalle` varchar(50) DEFAULT NULL,
  `ci_exp` int(11) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participante`
--

CREATE TABLE `participante` (
  `ci_par` int(11) NOT NULL,
  `nombres` varchar(30) DEFAULT NULL,
  `apellidos` varchar(30) DEFAULT NULL,
  `direccion` varchar(40) DEFAULT NULL,
  `fotografia` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `nick` varchar(20) DEFAULT NULL,
  `clave` varchar(20) DEFAULT NULL,
  `institucion` varchar(50) DEFAULT NULL,
  `grado_academico` varchar(20) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `fechanaci` date DEFAULT NULL
) 
