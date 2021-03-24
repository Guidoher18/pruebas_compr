$(document).ready(function () {
    var Ejemplo_1 = "<span id='0'>La</span><span id='1'> psicología</span><span id='2'> cognitiva</span><span id='3'> se</span><span id='4'> encarga</span><span id='5'> del</span><span id='6'> estudio</span><span id='7'> de</span><span id='8'> la</span><span id='9'> cognición;</span><span id='10'> es</span><span id='11'> decir,</span><span id='12'> de</span><span id='13'> los</span><span id='14'> procesos</span><span id='15'> mentales</span><span id='16'> implicados</span><span id='17'> en</span><span id='18'> el</span><span id='19'> conocimiento.</span><span id='20'> Tiene</span><span id='21'> como</span><span id='22'> objeto</span><span id='23'> de</span><span id='24'> estudio</span><span id='25'> los</span><span id='26'> mecanismos</span><span id='27'> básicos</span><span id='28'> y</span><span id='29'> profundos</span><span id='30'> por</span><span id='31'> los</span><span id='32'> que</span><span id='33'> se</span><span id='34'> elabora</span><span id='35'> el</span><span id='36'> conocimiento,</span><span id='37'> desde</span><span id='38'> la</span><span id='39'> percepción,</span><span id='40'> la</span><span id='41'> memoria</span><span id='42'> y</span><span id='43'> el</span><span id='44'> aprendizaje,</span><span id='45'> hasta</span><span id='46'> la</span><span id='47'> formación</span><span id='48'> de</span><span id='49'> conceptos</span><span id='50'> y</span><span id='51'> razonamiento</span><span id='52'> lógico.</span><span id='53'> Se</span><span id='54'> interesa</span><span id='55'> así</span><span id='56'> por</span><span id='57'> los</span><span id='58'> cambios</span><span id='59'> en</span><span id='60'> el</span><span id='61'> psiquismo</span><span id='62'> inconsciente</span><span id='63'> entre</span><span id='64'> las</span><span id='65'> tópicas</span><span id='66'> freudianas.</span><span id='67'> Por</span><span id='68'> cognitivo</span><span id='69'> entendemos</span><span id='70'> el</span><span id='71'> acto</span><span id='72'> de</span><span id='73'> conocimiento,</span><span id='74'> en</span><span id='75'> sus</span><span id='76'> acciones</span><span id='77'> de</span><span id='78'> almacenar,</span><span id='79'> recuperar,</span><span id='80'> reconocer,</span><span id='81'> comprender,</span><span id='82'> organizar</span><span id='83'> y</span><span id='84'> usar</span><span id='85'> la</span><span id='86'> información</span><span id='87'> recibida</span><span id='88'> a</span><span id='89'> través</span><span id='90'> de</span><span id='91'> los</span><span id='92'> sentidos.</span>";
    var Ejemplo_2 = "<span id='0'>El</span><span id='1'> interés</span><span id='2'> de</span><span id='3'> la</span><span id='4'> psicología</span><span id='5'> cognitiva</span><span id='6'> es</span><span id='7'> doble.</span><span id='8'> El</span><span id='9'> primer</span><span id='10'> interés</span><span id='11'> es</span><span id='12'> estudiar</span><span id='13'> cómo</span><span id='14'> las</span><span id='15'> personas</span><span id='16'> entienden</span><span id='17'> el</span><span id='18'> mundo</span><span id='19'> en</span><span id='20'> el</span><span id='21'> que</span><span id='22'> viven</span><span id='23'> y</span><span id='24'> también</span><span id='25'> se</span><span id='26'> abordan</span><span id='27'> las</span><span id='28'> cuestiones</span><span id='29'> de</span><span id='30'> cómo</span><span id='31'> los</span><span id='32'> seres</span><span id='33'> humanos</span><span id='34'> toman</span><span id='35'> la</span><span id='36'> información</span><span id='37'> sensorial</span><span id='38'> entrante</span><span id='39'> y</span><span id='40'> la</span><span id='41'> transforman,</span><span id='42'> sintetizan,</span><span id='43'> elaboran,</span><span id='44'> almacenan,</span><span id='45'> recuperan</span><span id='46'> y</span><span id='47'> finalmente</span><span id='48'> hacen</span><span id='49'> uso</span><span id='50'> de</span><span id='51'> ella.</span><span id='52'> El</span><span id='53'> resultado</span><span id='54'> de</span><span id='55'> todo</span><span id='56'> este</span><span id='57'> procesamiento</span><span id='58'> activo</span><span id='59'> de</span><span id='60'> la</span><span id='61'> información</span><span id='62'> es</span><span id='63'> el</span><span id='64'> conocimiento</span><span id='65'> funcional</span><span id='66'> en</span><span id='67'> el</span><span id='68'> sentido</span><span id='69'> de</span><span id='70'> que</span><span id='71'> la</span><span id='72'> segunda</span><span id='73'> vez</span><span id='74'> que</span><span id='75'> la</span><span id='76'> persona</span><span id='77'> se</span><span id='78'> encuentra</span><span id='79'> con</span><span id='80'> un</span><span id='81'> acontecimiento</span><span id='82'> del</span><span id='83'> entorno</span><span id='84'> igual</span><span id='85'> o</span><span id='86'> similar</span><span id='87'> está</span><span id='88'> más</span><span id='89'> segura</span><span id='90'> de</span><span id='91'> lo</span><span id='92'> que</span><span id='93'> puede</span><span id='94'> ocurrir</span><span id='95'> comparado</span><span id='96'> con</span><span id='97'> la</span><span id='98'> primera</span><span id='99'> vez.</span>";

    //Textos de Alto conocimiento previo
    var A1 = "<span id='0'>La</span><span id='1'> psicología</span><span id='2'> cognitiva</span><span id='3'> surge</span><span id='4'> como</span><span id='5'> alternativa</span><span id='6'> a</span><span id='7'> la</span><span id='8'> concepción</span><span id='9'> conductista</span><span id='10'> de</span><span id='11'> la</span><span id='12'> mente</span><span id='13'> como</span><span id='14'> caja</span><span id='15'> negra</span><span id='16'> inaccesible.</span><span id='17'> Es</span><span id='18'> difícil</span><span id='19'> atribuir</span><span id='20'> su</span><span id='21'> aparición</span><span id='22'> a</span><span id='23'> un</span><span id='24'> único</span><span id='25'> autor,</span><span id='26'> pero</span><span id='27'> sí</span><span id='28'> parece</span><span id='29'> claro</span><span id='30'> que</span><span id='31'> su</span><span id='32'> inicio</span><span id='33'> coincide</span><span id='34'> con</span><span id='35'> la</span><span id='36'> aparición</span><span id='37'> y</span><span id='38'> desarrollo</span><span id='39'> de</span><span id='40'> los</span><span id='41'> ordenadores.</span><span id='42'> William</span><span id='43'> James</span><span id='44'> es</span><span id='45'> el</span><span id='46'> autor</span><span id='47'> principal</span><span id='48'> en</span><span id='49'> Psicología</span><span id='50'> Cognitiva.</span><span id='51'> El</span><span id='52'> funcionamiento</span><span id='53'> de</span><span id='54'> estas</span><span id='55'> máquinas</span><span id='56'> sirve</span><span id='57'> como</span><span id='58'> metáfora</span><span id='59'> al</span><span id='60'> investigador</span><span id='61'> para</span><span id='62'> explorar</span><span id='63'> el</span><span id='64'> funcionamiento</span><span id='65'> de</span><span id='66'> los</span><span id='67'> procesos</span><span id='68'> cognitivos</span><span id='69'> internos.</span>";

    var A2 = "<span id='0'>Actualmente</span><span id='1'> la</span><span id='2'> psicología</span><span id='3'> cognitiva</span><span id='4'> sigue</span><span id='5'> siendo</span><span id='6'> una</span><span id='7'> importantísima</span><span id='8'> parte</span><span id='9'> de</span><span id='10'> la</span><span id='11'> psicología,</span><span id='12'> tanto</span><span id='13'> en</span><span id='14'> investigación</span><span id='15'> como</span><span id='16'> en</span><span id='17'> intervención</span><span id='18'> y</span><span id='19'> terapia.</span><span id='20'> A</span><span id='21'> su</span><span id='22'> progreso</span><span id='23'> han</span><span id='24'> ayudado</span><span id='25'> los</span><span id='26'> descubrimientos</span><span id='27'> en</span><span id='28'> el</span><span id='29'> ámbito</span><span id='30'> de</span><span id='31'> neurociencias</span><span id='32'> y</span><span id='33'> la</span><span id='34'> mejora</span><span id='35'> de</span><span id='36'> las</span><span id='37'> tecnologías</span><span id='38'> que</span><span id='39'> permiten</span><span id='40'> escanear</span><span id='41'> el</span><span id='42'> cerebro</span><span id='43'> para</span><span id='44'> obtener</span><span id='45'> imágenes</span><span id='46'> sobre</span><span id='47'> sus</span><span id='48'> patrones</span><span id='49'> de</span><span id='50'> activación,</span><span id='51'> como</span><span id='52'> por</span><span id='53'> ejemplo</span><span id='54'> la</span><span id='55'> fMRI,</span><span id='56'> que</span><span id='57'> aporta</span><span id='58'> datos</span><span id='59'> extras</span><span id='60'> acerca</span><span id='61'> de</span><span id='62'> lo</span><span id='63'> que</span><span id='64'> pasa</span><span id='65'> en</span><span id='66'> la</span><span id='67'> cabeza</span><span id='68'> de</span><span id='69'> los</span><span id='70'> seres</span><span id='71'> humanos</span><span id='72'> y</span><span id='73'> permite</span><span id='74'> 'triangular'</span><span id='75'> la</span><span id='76'> información</span><span id='77'> obtenida</span><span id='78'> en</span><span id='79'> los</span><span id='80'> estudios.</span>";

    var A3 = "<span id='0'>Se</span><span id='1'> denomina</span><span id='2'> ciencia</span><span id='3'> cognitiva</span><span id='4'> al</span><span id='5'> estudio</span><span id='6'> científico</span><span id='7'> de</span><span id='8'> la</span><span id='9'> mente.</span><span id='10'> Se</span><span id='11'> trata</span><span id='12'> de</span><span id='13'> un</span><span id='14'> campo</span><span id='15'> interdisciplinario,</span><span id='16'> que</span><span id='17'> involucra</span><span id='18'> a</span><span id='19'> la</span><span id='20'> psicología,</span><span id='21'> la</span><span id='22'> filosofía,</span><span id='23'> la</span><span id='24'> lingüística,</span><span id='25'> la</span><span id='26'> antropología,</span><span id='27'> las</span><span id='28'> ciencias</span><span id='29'> computacionales</span><span id='30'> y</span><span id='31'> comunicacionales,</span><span id='32'> cuyo</span><span id='33'> objeto</span><span id='34'> es</span><span id='35'> describir</span><span id='36'> y</span><span id='37'> entender</span><span id='38'> los</span><span id='39'> mecanismos</span><span id='40'> detrás</span><span id='41'> de</span><span id='42'> la</span><span id='43'> cognición</span><span id='44'> y</span><span id='45'> los</span><span id='46'> fenómenos</span><span id='47'> psicológicos</span><span id='48'> en</span><span id='49'> general.</span><span id='50'> Actualmente</span><span id='51'> recibe</span><span id='52'> influencias</span><span id='53'> de</span><span id='54'> las</span><span id='55'> neurociencias</span><span id='56'> y</span><span id='57'> de</span><span id='58'> la</span><span id='59'> química</span><span id='60'> y</span><span id='61'> física</span><span id='62'> aplicada</span><span id='63'> al</span><span id='64'> estudio</span><span id='65'> de</span><span id='66'> los</span><span id='67'> átomos.</span><span id='68'> Más</span><span id='69'> específicamente</span><span id='70'> se</span><span id='71'> habla</span><span id='72'> de</span><span id='73'> facultades</span><span id='74'> como</span><span id='75'> la</span><span id='76'> percepción,</span><span id='77'> la</span><span id='78'> emoción,</span><span id='79'> la</span><span id='80'> atención,</span><span id='81'> la</span><span id='82'> memoria,</span><span id='83'> el</span><span id='84'> razonamiento,</span><span id='85'> la</span><span id='86'> motivación</span><span id='87'> y</span><span id='88'> el</span><span id='89'> lenguaje.</span>";

    var A4 = "<span id='0'>A</span><span id='1'> partir</span><span id='2'> de</span><span id='3'> los</span><span id='4'> años</span><span id='5'> 60</span><span id='6'> empezó</span><span id='7'> a</span><span id='8'> ser</span><span id='9'> posible</span><span id='10'> entender</span><span id='11'> la</span><span id='12'> mente</span><span id='13'> humana</span><span id='14'> como</span><span id='15'> un</span><span id='16'> procesador</span><span id='17'> de</span><span id='18'> información</span><span id='19'> comparable</span><span id='20'> a</span><span id='21'> cualquier</span><span id='22'> computadora,</span><span id='23'> con</span><span id='24'> sus</span><span id='25'> puertos</span><span id='26'> de</span><span id='27'> entrada</span><span id='28'> y</span><span id='29'> de</span><span id='30'> salida</span><span id='31'> de</span><span id='32'> datos,</span><span id='33'> partes</span><span id='34'> dedicadas</span><span id='35'> a</span><span id='36'> almacenar</span><span id='37'> datos</span><span id='38'> (memoria)</span><span id='39'> y</span><span id='40'> ciertos</span><span id='41'> programas</span><span id='42'> informáticos</span><span id='43'> encargados</span><span id='44'> de</span><span id='45'> procesar</span><span id='46'> la</span><span id='47'> información</span><span id='48'> de</span><span id='49'> manera</span><span id='50'> adecuada.</span><span id='51'> En</span><span id='52'> los</span><span id='53'> años</span><span id='54'> 70</span><span id='55'> aún</span><span id='56'> no</span><span id='57'> se</span><span id='58'> contaba</span><span id='59'> con</span><span id='60'> un</span><span id='61'> vocabulario</span><span id='62'> computacional.</span><span id='63'> La</span><span id='64'> metáfora</span><span id='65'> computacional</span><span id='66'> serviría</span><span id='67'> para</span><span id='68'> crear</span><span id='69'> modelos</span><span id='70'> teóricos</span><span id='71'> que</span><span id='72'> permitiesen</span><span id='73'> formular</span><span id='74'> hipótesis</span><span id='75'> e</span><span id='76'> intentar</span><span id='77'> predecir</span><span id='78'> el</span><span id='79'> comportamiento</span><span id='80'> humano</span><span id='81'> hasta</span><span id='82'> cierto</span><span id='83'> punto.</span><span id='84'> Nacía</span><span id='85'> así</span><span id='86'> el</span><span id='87'> modelo</span><span id='88'> informático</span><span id='89'> de</span><span id='90'> los</span><span id='91'> procesos</span><span id='92'> mentales,</span><span id='93'> muy</span><span id='94'> utilizado</span><span id='95'> en</span><span id='96'> psicología</span><span id='97'> hoy</span><span id='98'> en</span><span id='99'> día.</span>";

    var A5 = "<span id='0'>Después</span><span id='1'> del</span><span id='2'> surgimiento</span><span id='3'> de</span><span id='4'> la</span><span id='5'> psicología</span><span id='6'> cognitiva,</span><span id='7'> y</span><span id='8'> a</span><span id='9'> la</span><span id='10'> vez</span><span id='11'> que</span><span id='12'> se</span><span id='13'> sucedían</span><span id='14'> los</span><span id='15'> progresos</span><span id='16'> tecnológicos</span><span id='17'> en</span><span id='18'> el</span><span id='19'> ámbito</span><span id='20'> de</span><span id='21'> la</span><span id='22'> informática,</span><span id='23'> el</span><span id='24'> conductismo</span><span id='25'> iba</span><span id='26'> siendo</span><span id='27'> cada</span><span id='28'> vez</span><span id='29'> más</span><span id='30'> criticado.</span><span id='31'> Estas</span><span id='32'> críticas</span><span id='33'> se</span><span id='34'> centraban,</span><span id='35'> básicamente,</span><span id='36'> porque</span><span id='37'> se</span><span id='38'> entendía</span><span id='39'> que</span><span id='40'> sus</span><span id='41'> limitaciones</span><span id='42'> no</span><span id='43'> permitían</span><span id='44'> estudiar</span><span id='45'> adecuadamente</span><span id='46'> los</span><span id='47'> procesos</span><span id='48'> mentales.</span><span id='49'> El</span><span id='50'> conductismo</span><span id='51'> se</span><span id='52'> limitaba</span><span id='53'> a</span><span id='54'> extraer</span><span id='55'> conclusiones</span><span id='56'> sobre</span><span id='57'> lo</span><span id='58'> que</span><span id='59'> es</span><span id='60'> observable</span><span id='61'> directamente</span><span id='62'> y</span><span id='63'> lo</span><span id='64'> que</span><span id='65'> tiene</span><span id='66'> una</span><span id='67'> repercusión</span><span id='68'> clara</span><span id='69'> sobre</span><span id='70'> el</span><span id='71'> entorno:</span><span id='72'> la</span><span id='73'> conducta.</span>";

    var A6 = "<span id='0'>La</span><span id='1'> psicología</span><span id='2'> de</span><span id='3'> la</span><span id='4'> Gestalt</span><span id='5'> (también</span><span id='6'> psicología</span><span id='7'> de</span><span id='8'> la</span><span id='9'> forma</span><span id='10'> o</span><span id='11'> psicología</span><span id='12'> de</span><span id='13'> la</span><span id='14'> configuración)</span><span id='15'> es</span><span id='16'> una</span><span id='17'> corriente</span><span id='18'> de</span><span id='19'> la</span><span id='20'> psicología</span><span id='21'> moderna,</span><span id='22'> surgida</span><span id='23'> en</span><span id='24'> Alemania</span><span id='25'> a</span><span id='26'> principios</span><span id='27'> del</span><span id='28'> siglo</span><span id='29'> XX.</span><span id='30'> Los</span><span id='31'> exponentes</span><span id='32'> más</span><span id='33'> reconocidos</span><span id='34'> fueron</span><span id='35'> los</span><span id='36'> teóricos</span><span id='37'> Max</span><span id='38'> Wertheimer,</span><span id='39'> Wolfgang</span><span id='40'> Köhler,</span><span id='41'> Kurt</span><span id='42'> Koffka</span><span id='43'> y</span><span id='44'> Kurt</span><span id='45'> Lewin.</span><span id='46'> Esta</span><span id='47'> psicología,</span><span id='48'> surgida</span><span id='49'> a</span><span id='50'> mediados</span><span id='51'> del</span><span id='52'> siglo</span><span id='53'> XVIII</span><span id='54'> se</span><span id='55'> interesó</span><span id='56'> por</span><span id='57'> la</span><span id='58'> percepción.</span><span id='59'> El</span><span id='60'> término</span><span id='61'> Gestalt</span><span id='62'> proviene</span><span id='63'> del</span><span id='64'> alemán,</span><span id='65'> y</span><span id='66'> puede</span><span id='67'> traducirse,</span><span id='68'> como</span><span id='69'> 'forma',</span><span id='70'> 'figura',</span><span id='71'> 'configuración',</span><span id='72'> 'estructura'</span><span id='73'> o</span><span id='74'> 'creación'.</span>";

    var A7 = "<span id='0'>Los</span><span id='1'> tres</span><span id='2'> psicólogos</span><span id='3'> iniciadores</span><span id='4'> de</span><span id='5'> la</span><span id='6'> Psicología</span><span id='7'> de</span><span id='8'> la</span><span id='9'> Gestalt</span><span id='10'> fueron:</span><span id='11'> Max</span><span id='12'> Wertheimer,</span><span id='13'> Wolfgang</span><span id='14'> Köhler</span><span id='15'> y</span><span id='16'> Kurt</span><span id='17'> Koffka,</span><span id='18'> quienes</span><span id='19'> desarrollaron</span><span id='20'> las</span><span id='21'> primeras</span><span id='22'> investigaciones</span><span id='23'> de</span><span id='24'> la</span><span id='25'> Gestalt</span><span id='26'> a</span><span id='27'> principios</span><span id='28'> de</span><span id='29'> la</span><span id='30'> década</span><span id='31'> de</span><span id='32'> 1910.</span><span id='33'> Estos</span><span id='34'> investigadores</span><span id='35'> trabajaron</span><span id='36'> sobre</span><span id='37'> el</span><span id='38'> movimiento</span><span id='39'> aparente</span><span id='40'> dando</span><span id='41'> lugar</span><span id='42'> a</span><span id='43'> la</span><span id='44'> teoría</span><span id='45'> del</span><span id='46'> fenómeno</span><span id='47'> phi.</span><span id='48'> Este</span><span id='49'> fenómeno</span><span id='50'> hace</span><span id='51'> alusión</span><span id='52'> a</span><span id='53'> una</span><span id='54'> ilusión</span><span id='55'> óptica</span><span id='56'> de</span><span id='57'> nuestro</span><span id='58'> cerebro.</span><span id='59'> El</span><span id='60'> fenómeno</span><span id='61'> phi</span><span id='62'> fue</span><span id='63'> desarrollado</span><span id='64'> previamente</span><span id='65'> por</span><span id='66'> Kurt</span><span id='67'> Lewin</span><span id='68'> en</span><span id='69'> 1826.</span><span id='70'> Este</span><span id='71'> fenómeno</span><span id='72'> permite</span><span id='73'> explicar</span><span id='74'> por</span><span id='75'> qué</span><span id='76'> percibimos</span><span id='77'> el</span><span id='78'> movimiento</span><span id='79'> continuo</span><span id='80'> en</span><span id='81'> donde</span><span id='82'> hay</span><span id='83'> una</span><span id='84'> sucesión</span><span id='85'> de</span><span id='86'> imágenes.</span>";

    var A8 = "<span id='0'>La</span><span id='1'> memoria</span><span id='2'> humana</span><span id='3'> es</span><span id='4'> una</span><span id='5'> función</span><span id='6'> del</span><span id='7'> cerebro</span><span id='8'> que</span><span id='9'> permite</span><span id='10'> al</span><span id='11'> ser</span><span id='12'> humano</span><span id='13'> adquirir,</span><span id='14'> almacenar</span><span id='15'> y</span><span id='16'> recuperar</span><span id='17'> información</span><span id='18'> sobre</span><span id='19'> distintos</span><span id='20'> tipos</span><span id='21'> de</span><span id='22'> conocimientos,</span><span id='23'> habilidades</span><span id='24'> y</span><span id='25'> experiencias</span><span id='26'> pasadas.</span><span id='27'> Es</span><span id='28'> una</span><span id='29'> de</span><span id='30'> las</span><span id='31'> funciones</span><span id='32'> humanas</span><span id='33'> más</span><span id='34'> estudiadas</span><span id='35'> en</span><span id='36'> la</span><span id='37'> Psicología.</span><span id='38'> La</span><span id='39'> memoria</span><span id='40'> es</span><span id='41'> una</span><span id='42'> función</span><span id='43'> básica</span><span id='44'> e</span><span id='45'> imprescindible</span><span id='46'> en</span><span id='47'> la</span><span id='48'> vida,</span><span id='49'> debido</span><span id='50'> a</span><span id='51'> que</span><span id='52'> está</span><span id='53'> presente</span><span id='54'> en</span><span id='55'> todas</span><span id='56'> las</span><span id='57'> actividades</span><span id='58'> que</span><span id='59'> se</span><span id='60'> realizan</span><span id='61'> a</span><span id='62'> diario.</span><span id='63'> Este</span><span id='64'> proceso</span><span id='65'> no</span><span id='66'> está</span><span id='67'> vinculado</span><span id='68'> a</span><span id='69'> otros</span><span id='70'> procesos</span><span id='71'> psicológicos,</span><span id='72'> en</span><span id='73'> este</span><span id='74'> sentido</span><span id='75'> los</span><span id='76'> sistemas</span><span id='77'> de</span><span id='78'> memoria</span><span id='79'> no</span><span id='80'> se</span><span id='81'> vinculan</span><span id='82'> con</span><span id='83'> el</span><span id='84'> aprendizaje,</span><span id='85'> ni</span><span id='86'> tampoco</span><span id='87'> con</span><span id='88'> el</span><span id='89'> lenguaje.</span><span id='90'> Según</span><span id='91'> la</span><span id='92'> Real</span><span id='93'> Academia</span><span id='94'> Española,</span><span id='95'> la</span><span id='96'> memoria</span><span id='97'> es</span><span id='98'> una</span><span id='99'> facultad</span><span id='100'> psíquica</span><span id='101'> por</span><span id='102'> medio</span><span id='103'> de</span><span id='104'> la</span><span id='105'> cual</span><span id='106'> se</span><span id='107'> retiene</span><span id='108'> y</span><span id='109'> recuerda</span><span id='110'> el</span><span id='111'> pasado.</span>";

    var A9 = "<span id='0'>Tradicionalmente,</span><span id='1'> la</span><span id='2'> memoria</span><span id='3'> se</span><span id='4'> ha</span><span id='5'> dividido</span><span id='6'> entre</span><span id='7'> memoria</span><span id='8'> a</span><span id='9'> corto</span><span id='10'> plazo</span><span id='11'> y</span><span id='12'> memoria</span><span id='13'> a</span><span id='14'> largo</span><span id='15'> plazo.</span><span id='16'> La</span><span id='17'> memoria</span><span id='18'> a</span><span id='19'> corto</span><span id='20'> plazo</span><span id='21'> desaparece</span><span id='22'> en</span><span id='23'> unos</span><span id='24'> 20</span><span id='25'> segundos.</span><span id='26'> Recientemente,</span><span id='27'> se</span><span id='28'> ha</span><span id='29'> añadido</span><span id='30'> a</span><span id='31'> esta</span><span id='32'> clasificación</span><span id='33'> un</span><span id='34'> tercer</span><span id='35'> tipo</span><span id='36'> de</span><span id='37'> memoria.</span><span id='38'> Esta</span><span id='39'> memoria</span><span id='40'> es</span><span id='41'> más</span><span id='42'> dinámica,</span><span id='43'> que</span><span id='44'> se</span><span id='45'> conoce</span><span id='46'> como</span><span id='47'> memoria</span><span id='48'> de</span><span id='49'> trabajo,</span><span id='50'> en</span><span id='51'> inglés,</span><span id='52'> working</span><span id='53'> memory.</span><span id='54'> La</span><span id='55'> memoria</span><span id='56'> de</span><span id='57'> trabajo</span><span id='58'> se</span><span id='59'> refiere</span><span id='60'> a</span><span id='61'> aquella</span><span id='62'> información</span><span id='63'> que</span><span id='64'> manejamos</span><span id='65'> de</span><span id='66'> forma</span><span id='67'> consciente</span><span id='68'> y</span><span id='69'> que</span><span id='70'> podemos</span><span id='71'> manipular</span><span id='72'> en</span><span id='73'> un</span><span id='74'> momento</span><span id='75'> dado.</span>";

    var A10 = "<span id='0'>La</span><span id='1'> Memoria</span><span id='2'> a</span><span id='3'> largo</span><span id='4'> plazo</span><span id='5'> (MLP)</span><span id='6'> es</span><span id='7'> un</span><span id='8'> almacén</span><span id='9'> al</span><span id='10'> que</span><span id='11'> se</span><span id='12'> hace</span><span id='13'> referencia</span><span id='14'> cuando</span><span id='15'> comúnmente</span><span id='16'> hablamos</span><span id='17'> de</span><span id='18'> memoria</span><span id='19'> en</span><span id='20'> general.</span><span id='21'> Es</span><span id='22'> en</span><span id='23'> donde</span><span id='24'> se</span><span id='25'> almacenan</span><span id='26'> los</span><span id='27'> recuerdos</span><span id='28'> vividos,</span><span id='29'> nuestro</span><span id='30'> conocimiento</span><span id='31'> acerca</span><span id='32'> del</span><span id='33'> mundo,</span><span id='34'> imágenes,</span><span id='35'> conceptos,</span><span id='36'> estrategias</span><span id='37'> de</span><span id='38'> actuación,</span><span id='39'> etc.</span><span id='40'> Dispone</span><span id='41'> de</span><span id='42'> capacidad</span><span id='43'> desconocida</span><span id='44'> y</span><span id='45'> contiene</span><span id='46'> información</span><span id='47'> de</span><span id='48'> distinta</span><span id='49'> naturaleza.</span><span id='50'> Se</span><span id='51'> considera</span><span id='52'> la</span><span id='53'> «base</span><span id='54'> de</span><span id='55'> datos»</span><span id='56'> en</span><span id='57'> la</span><span id='58'> que</span><span id='59'> se</span><span id='60'> inserta</span><span id='61'> la</span><span id='62'> información</span><span id='63'> que</span><span id='64'> proviene</span><span id='65'> de</span><span id='66'> la</span><span id='67'> «memoria</span><span id='68'> de</span><span id='69'> corto</span><span id='70'> plazo»,</span><span id='71'> para</span><span id='72'> usarla</span><span id='73'> posteriormente.</span><span id='74'> La</span><span id='75'> memoria</span><span id='76'> de</span><span id='77'> largo</span><span id='78'> plazo</span><span id='79'> tiene</span><span id='80'> una</span><span id='81'> capacidad</span><span id='82'> limitada</span><span id='83'> de</span><span id='84'> 500</span><span id='85'> gigas</span><span id='86'> de</span><span id='87'> almacenamiento.</span><span id='88'> Es</span><span id='89'> un</span><span id='90'> sistema</span><span id='91'> que</span><span id='92'> almacena</span><span id='93'> nuestros</span><span id='94'> recuerdos.</span><span id='95'> Los</span><span id='96'> recuerdos</span><span id='97'> son</span><span id='98'> imágenes</span><span id='99'> del</span><span id='100'> pasado</span><span id='101'> que</span><span id='102'> se</span><span id='103'> archivan</span><span id='104'> en</span><span id='105'> la</span><span id='106'> memoria.</span>";

    var A11 = "<span id='0'>En</span><span id='1'> contra</span><span id='2'> de</span><span id='3'> la</span><span id='4'> creencia</span><span id='5'> popular,</span><span id='6'> la</span><span id='7'> memoria</span><span id='8'> humana</span><span id='9'> no</span><span id='10'> funciona</span><span id='11'> como</span><span id='12'> un</span><span id='13'> archivador</span><span id='14'> en</span><span id='15'> el</span><span id='16'> que</span><span id='17'> se</span><span id='18'> guarda</span><span id='19'> la</span><span id='20'> información</span><span id='21'> previamente</span><span id='22'> clasificada.</span><span id='23'> En</span><span id='24'> realidad,</span><span id='25'> la</span><span id='26'> memoria</span><span id='27'> no</span><span id='28'> está</span><span id='29'> localizada</span><span id='30'> en</span><span id='31'> una</span><span id='32'> única</span><span id='33'> zona</span><span id='34'> de</span><span id='35'> nuestro</span><span id='36'> cerebro,</span><span id='37'> sino</span><span id='38'> que</span><span id='39'> es</span><span id='40'> un</span><span id='41'> proceso</span><span id='42'> en</span><span id='43'> el</span><span id='44'> que</span><span id='45'> participan</span><span id='46'> varias</span><span id='47'> zonas</span><span id='48'> al</span><span id='49'> unísono,</span><span id='50'> lo</span><span id='51'> que</span><span id='52'> se</span><span id='53'> conoce</span><span id='54'> como</span><span id='55'> un</span><span id='56'> proceso</span><span id='57'> distribuido.</span><span id='58'> A</span><span id='59'> partir</span><span id='60'> de</span><span id='61'> los</span><span id='62'> años</span><span id='63'> ’90</span><span id='64'> se</span><span id='65'> conoce</span><span id='66'> que</span><span id='67'> el</span><span id='68'> lóbulo</span><span id='69'> occipital</span><span id='70'> es</span><span id='71'> el</span><span id='72'> centro</span><span id='73'> en</span><span id='74'> donde</span><span id='75'> se</span><span id='76'> localiza</span><span id='77'> nuestra</span><span id='78'> memoria.</span><span id='79'> Cuando</span><span id='80'> guardamos</span><span id='81'> un</span><span id='82'> evento</span><span id='83'> en</span><span id='84'> la</span><span id='85'> memoria,</span><span id='86'> nuestro</span><span id='87'> cerebro</span><span id='88'> agrupa</span><span id='89'> en</span><span id='90'> varios</span><span id='91'> nodos,</span><span id='92'> conectados</span><span id='93'> entre</span><span id='94'> sí,</span><span id='95'> todo</span><span id='96'> lo</span><span id='97'> relacionado</span><span id='98'> con</span><span id='99'> ese</span><span id='100'> hecho,</span><span id='101'> por</span><span id='102'> ejemplo,</span><span id='103'> las</span><span id='104'> imágenes,</span><span id='105'> los</span><span id='106'> olores,</span><span id='107'> los</span><span id='108'> sonidos</span><span id='109'> o</span><span id='110'> las</span><span id='111'> emociones</span><span id='112'> que</span><span id='113'> nos</span><span id='114'> generó.</span>";

    var A12 = "<span id='0'>Se</span><span id='1'> ha</span><span id='2'> observado</span><span id='3'> desde</span><span id='4'> hace</span><span id='5'> algunos</span><span id='6'> años</span><span id='7'> que</span><span id='8'> nuestra</span><span id='9'> memoria</span><span id='10'> no</span><span id='11'> es</span><span id='12'> muy</span><span id='13'> confiable.</span><span id='14'> Existen</span><span id='15'> recuerdos</span><span id='16'> que</span><span id='17'> han</span><span id='18'> sido</span><span id='19'> construidos</span><span id='20'> o</span><span id='21'> falsos</span><span id='22'> recuerdos.</span><span id='23'> Nuestra</span><span id='24'> memoria</span><span id='25'> es</span><span id='26'> tan</span><span id='27'> poco</span><span id='28'> fiable</span><span id='29'> que</span><span id='30'> ha</span><span id='31'> sido</span><span id='32'> posible</span><span id='33'> incluso</span><span id='34'> implantar</span><span id='35'> memorias</span><span id='36'> de</span><span id='37'> hechos</span><span id='38'> inexistentes</span><span id='39'> en</span><span id='40'> personas</span><span id='41'> adultas.</span><span id='42'> Algunos</span><span id='43'> de</span><span id='44'> estos</span><span id='45'> ejemplos</span><span id='46'> son</span><span id='47'> que</span><span id='48'> se</span><span id='49'> habían</span><span id='50'> perdido</span><span id='51'> de</span><span id='52'> pequeños</span><span id='53'> en</span><span id='54'> un</span><span id='55'> centro</span><span id='56'> comercial.</span><span id='57'> Para</span><span id='58'> ello</span><span id='59'> los</span><span id='60'> investigadores</span><span id='61'> se</span><span id='62'> sirvieron</span><span id='63'> de</span><span id='64'> fotografías</span><span id='65'> manipuladas</span><span id='66'> y</span><span id='67'> de</span><span id='68'> la</span><span id='69'> colaboración</span><span id='70'> de</span><span id='71'> familiares</span><span id='72'> que</span><span id='73'> aseguraban</span><span id='74'> que</span><span id='75'> el</span><span id='76'> hecho</span><span id='77'> era</span><span id='78'> cierto.</span><span id='79'> En</span><span id='80'> otro</span><span id='81'> caso,</span><span id='82'> se</span><span id='83'> consiguió</span><span id='84'> implantar</span><span id='85'> en</span><span id='86'> la</span><span id='87'> memoria</span><span id='88'> de</span><span id='89'> personas</span><span id='90'> adultas</span><span id='91'> el</span><span id='92'> hecho</span><span id='93'> (falso)</span><span id='94'> de</span><span id='95'> que</span><span id='96'> habían</span><span id='97'> cometido</span><span id='98'> un</span><span id='99'> pequeño</span><span id='100'> crimen</span><span id='101'> durante</span><span id='102'> su</span><span id='103'> adolescencia.</span>";

    var A13 = "<span id='0'>La</span><span id='1'> psicolingüística</span><span id='2'> es</span><span id='3'> una</span><span id='4'> rama</span><span id='5'> de</span><span id='6'> la</span><span id='7'> psicología</span><span id='8'> interesada</span><span id='9'> en</span><span id='10'> cómo</span><span id='11'> la</span><span id='12'> especie</span><span id='13'> humana</span><span id='14'> adquiere</span><span id='15'> el</span><span id='16'> lenguaje.</span><span id='17'> Se</span><span id='18'> interesa</span><span id='19'> también</span><span id='20'> en</span><span id='21'> los</span><span id='22'> mecanismos</span><span id='23'> cognitivos</span><span id='24'> que</span><span id='25'> intervienen</span><span id='26'> en</span><span id='27'> el</span><span id='28'> procesamiento</span><span id='29'> de</span><span id='30'> la</span><span id='31'> información</span><span id='32'> lingüística.</span><span id='33'> Por</span><span id='34'> esto</span><span id='35'> se</span><span id='36'> interesa</span><span id='37'> en</span><span id='38'> las</span><span id='39'> reglas</span><span id='40'> gramaticales,</span><span id='41'> exclusivamente.</span><span id='42'> La</span><span id='43'> Psicolingüística</span><span id='44'> estudia</span><span id='45'> los</span><span id='46'> factores</span><span id='47'> psicológicos</span><span id='48'> y</span><span id='49'> neurológicos</span><span id='50'> que</span><span id='51'> capacitan</span><span id='52'> a</span><span id='53'> los</span><span id='54'> humanos</span><span id='55'> para</span><span id='56'> la</span><span id='57'> adquisición</span><span id='58'> y</span><span id='59'> deterioro</span><span id='60'> del</span><span id='61'> mismo,</span><span id='62'> con</span><span id='63'> el</span><span id='64'> interés</span><span id='65'> de</span><span id='66'> estudiar</span><span id='67'> el</span><span id='68'> uso,</span><span id='69'> la</span><span id='70'> comprensión</span><span id='71'> y</span><span id='72'> la</span><span id='73'> producción</span><span id='74'> del</span><span id='75'> lenguaje.</span>";

    var A14 = "<span id='0'>La</span><span id='1'> tarea</span><span id='2'> de</span><span id='3'> decisión</span><span id='4'> léxica</span><span id='5'> es</span><span id='6'> una</span><span id='7'> de</span><span id='8'> las</span><span id='9'> más</span><span id='10'> utilizadas</span><span id='11'> en</span><span id='12'> el</span><span id='13'> área</span><span id='14'> de</span><span id='15'> la</span><span id='16'> psicolingüística.</span><span id='17'> Es</span><span id='18'> una</span><span id='19'> tarea</span><span id='20'> que</span><span id='21'> evalúa</span><span id='22'> el</span><span id='23'> acceso</span><span id='24'> léxico</span><span id='25'> visual</span><span id='26'> y</span><span id='27'> ha</span><span id='28'> mostrado</span><span id='29'> ser</span><span id='30'> muy</span><span id='31'> fructífera</span><span id='32'> para</span><span id='33'> explotar</span><span id='34'> los</span><span id='35'> procesos</span><span id='36'> mentales</span><span id='37'> que</span><span id='38'> subyacen</span><span id='39'> a</span><span id='40'> la</span><span id='41'> lectura</span><span id='42'> de</span><span id='43'> palabras.</span><span id='44'> Fue</span><span id='45'> utilizada</span><span id='46'> por</span><span id='47'> primera</span><span id='48'> vez</span><span id='49'> por</span><span id='50'> Rubenstein</span><span id='51'> en</span><span id='52'> 1970.</span><span id='53'> El</span><span id='54'> sujeto</span><span id='55'> debe</span><span id='56'> decidir</span><span id='57'> si</span><span id='58'> el</span><span id='59'> estímulo</span><span id='60'> presentado</span><span id='61'> es</span><span id='62'> una</span><span id='63'> palabra</span><span id='64'> o</span><span id='65'> una</span><span id='66'> no-palabra.</span><span id='67'> La</span><span id='68'> tarea</span><span id='69'> evalúa</span><span id='70'> el</span><span id='71'> procesamiento</span><span id='72'> sintáctico</span><span id='73'> de</span><span id='74'> oraciones.</span><span id='75'> Actualmente</span><span id='76'> el</span><span id='77'> uso</span><span id='78'> de</span><span id='79'> computadoras</span><span id='80'> facilitó</span><span id='81'> mucho</span><span id='82'> esta</span><span id='83'> tarea,</span><span id='84'> ya</span><span id='85'> que</span><span id='86'> automatiza</span><span id='87'> la</span><span id='88'> manera</span><span id='89'> en</span><span id='90'> la</span><span id='91'> que</span><span id='92'> el</span><span id='93'> sujeto</span><span id='94'> toma</span><span id='95'> la</span><span id='96'> decisión.</span>";

    var A15 = "<span id='0'>La</span><span id='1'> comprensión</span><span id='2'> lectora</span><span id='3'> es</span><span id='4'> la</span><span id='5'> capacidad</span><span id='6'> de</span><span id='7'> entender</span><span id='8'> lo</span><span id='9'> que</span><span id='10'> se</span><span id='11'> lee,</span><span id='12'> tanto</span><span id='13'> en</span><span id='14'> referencia</span><span id='15'> al</span><span id='16'> significado</span><span id='17'> de</span><span id='18'> las</span><span id='19'> palabras</span><span id='20'> que</span><span id='21'> forman</span><span id='22'> un</span><span id='23'> texto</span><span id='24'> como</span><span id='25'> con</span><span id='26'> respecto</span><span id='27'> a</span><span id='28'> la</span><span id='29'> comprensión</span><span id='30'> global</span><span id='31'> en</span><span id='32'> un</span><span id='33'> escrito.</span><span id='34'> La</span><span id='35'> comprensión</span><span id='36'> lectora</span><span id='37'> se</span><span id='38'> define</span><span id='39'> como</span><span id='40'> un</span><span id='41'> doble</span><span id='42'> proceso:</span><span id='43'> por</span><span id='44'> un</span><span id='45'> lado,</span><span id='46'> un</span><span id='47'> proceso</span><span id='48'> de</span><span id='49'> descodificación</span><span id='50'> de</span><span id='51'> un</span><span id='52'> mensaje</span><span id='53'> escrito</span><span id='54'> y</span><span id='55'> por</span><span id='56'> otro,</span><span id='57'> un</span><span id='58'> proceso</span><span id='59'> de</span><span id='60'> interacción</span><span id='61'> con</span><span id='62'> su</span><span id='63'> conocimiento</span><span id='64'> previo.</span><span id='65'> Mediante</span><span id='66'> la</span><span id='67'> comprensión</span><span id='68'> lectora,</span><span id='69'> el</span><span id='70'> lector</span><span id='71'> construye</span><span id='72'> el</span><span id='73'> significado</span><span id='74'> del</span><span id='75'> texto</span><span id='76'> únicamente</span><span id='77'> gracias</span><span id='78'> a</span><span id='79'> la</span><span id='80'> información</span><span id='81'> del</span><span id='82'> texto.</span><span id='83'> Es</span><span id='84'> muy</span><span id='85'> importante</span><span id='86'> la</span><span id='87'> interacción</span><span id='88'> entre</span><span id='89'> el</span><span id='90'> lector</span><span id='91'> y</span><span id='92'> el</span><span id='93'> texto.</span>";

    //Textos de Bajo conocimiento previo
    var B1 = "<span id='0'>La</span><span id='1'> astronomía</span><span id='2'> es</span><span id='3'> la</span><span id='4'> ciencia</span><span id='5'> que</span><span id='6'> se</span><span id='7'> ocupa</span><span id='8'> del</span><span id='9'> estudio</span><span id='10'> de</span><span id='11'> los</span><span id='12'> cuerpos</span><span id='13'> celestes</span><span id='14'> del</span><span id='15'> universo,</span><span id='16'> incluidos</span><span id='17'> los</span><span id='18'> planetas</span><span id='19'> y</span><span id='20'> sus</span><span id='21'> satélites,</span><span id='22'> los</span><span id='23'> cometas</span><span id='24'> y</span><span id='25'> meteoroides,</span><span id='26'> las</span><span id='27'> estrellas</span><span id='28'> y</span><span id='29'> la</span><span id='30'> materia</span><span id='31'> interestelar,</span><span id='32'> los</span><span id='33'> sistemas</span><span id='34'> de</span><span id='35'> materia</span><span id='36'> oscura,</span><span id='37'> gas</span><span id='38'> y</span><span id='39'> polvo</span><span id='40'> llamados</span><span id='41'> galaxias</span><span id='42'> y</span><span id='43'> los</span><span id='44'> cúmulos</span><span id='45'> de</span><span id='46'> galaxias;</span><span id='47'> por</span><span id='48'> lo</span><span id='49'> que</span><span id='50'> estudia</span><span id='51'> sus</span><span id='52'> movimientos</span><span id='53'> y</span><span id='54'> los</span><span id='55'> fenómenos</span><span id='56'> ligados</span><span id='57'> a</span><span id='58'> ellos.</span><span id='59'> La</span><span id='60'> naturaleza</span><span id='61'> de</span><span id='62'> la</span><span id='63'> electricidad</span><span id='64'> y</span><span id='65'> su</span><span id='66'> relación</span><span id='67'> con</span><span id='68'> el</span><span id='69'> magnetismo</span><span id='70'> es</span><span id='71'> también</span><span id='72'> objeto</span><span id='73'> de</span><span id='74'> estudio.</span><span id='75'> La</span><span id='76'> astronomía</span><span id='77'> también</span><span id='78'> abarca</span><span id='79'> el</span><span id='80'> estudio</span><span id='81'> de</span><span id='82'> la</span><span id='83'> formación</span><span id='84'> y</span><span id='85'> el</span><span id='86'> desarrollo</span><span id='87'> del</span><span id='88'> Universo</span><span id='89'> en</span><span id='90'> su</span><span id='91'> conjunto</span><span id='92'> mediante</span><span id='93'> la</span><span id='94'> cosmología.</span>";

    var B2 = "<span id='0'>A</span><span id='1'> finales</span><span id='2'> del</span><span id='3'> siglo</span><span id='4'> XIX</span><span id='5'> se</span><span id='6'> descubrió</span><span id='7'> que,</span><span id='8'> al</span><span id='9'> descomponer</span><span id='10'> la</span><span id='11'> luz</span><span id='12'> del</span><span id='13'> Sol,</span><span id='14'> se</span><span id='15'> podían</span><span id='16'> observar</span><span id='17'> multitud</span><span id='18'> de</span><span id='19'> líneas</span><span id='20'> de</span><span id='21'> espectro.</span><span id='22'> Experimentos</span><span id='23'> con</span><span id='24'> gases</span><span id='25'> calientes</span><span id='26'> mostraron</span><span id='27'> que</span><span id='28'> las</span><span id='29'> mismas</span><span id='30'> líneas</span><span id='31'> podían</span><span id='32'> ser</span><span id='33'> observadas</span><span id='34'> en</span><span id='35'> el</span><span id='36'> espectro</span><span id='37'> de</span><span id='38'> los</span><span id='39'> gases,</span><span id='40'> líneas</span><span id='41'> específicas</span><span id='42'> correspondientes</span><span id='43'> a</span><span id='44'> diferentes</span><span id='45'> elementos</span><span id='46'> químicos.</span><span id='47'> De</span><span id='48'> esta</span><span id='49'> manera</span><span id='50'> se</span><span id='51'> demostró</span><span id='52'> que</span><span id='53'> los</span><span id='54'> elementos</span><span id='55'> químicos</span><span id='56'> en</span><span id='57'> el</span><span id='58'> Sol</span><span id='59'> (mayoritariamente</span><span id='60'> hidrógeno)</span><span id='61'> podían</span><span id='62'> encontrarse</span><span id='63'> igualmente</span><span id='64'> en</span><span id='65'> la</span><span id='66'> Tierra.</span><span id='67'> De</span><span id='68'> hecho,</span><span id='69'> el</span><span id='70'> helio</span><span id='71'> fue</span><span id='72'> descubierto</span><span id='73'> primero</span><span id='74'> en</span><span id='75'> el</span><span id='76'> espectro</span><span id='77'> del</span><span id='78'> Sol</span><span id='79'> y</span><span id='80'> solo</span><span id='81'> más</span><span id='82'> tarde</span><span id='83'> se</span><span id='84'> encontró</span><span id='85'> en</span><span id='86'> la</span><span id='87'> Tierra.</span>";

    var B3 = "<span id='0'>La</span><span id='1'> astronomía</span><span id='2'> ha</span><span id='3'> estado</span><span id='4'> ligada</span><span id='5'> al</span><span id='6'> ser</span><span id='7'> humano</span><span id='8'> desde</span><span id='9'> la</span><span id='10'> antigüedad</span><span id='11'> y</span><span id='12'> todas</span><span id='13'> las</span><span id='14'> civilizaciones</span><span id='15'> han</span><span id='16'> tenido</span><span id='17'> contacto</span><span id='18'> con</span><span id='19'> ella.</span><span id='20'> La</span><span id='21'> metodología</span><span id='22'> científica</span><span id='23'> de</span><span id='24'> este</span><span id='25'> campo</span><span id='26'> empezó</span><span id='27'> a</span><span id='28'> desarrollarse</span><span id='29'> a</span><span id='30'> mediados</span><span id='31'> del</span><span id='32'> siglo</span><span id='33'> XVII.</span><span id='34'> Un</span><span id='35'> factor</span><span id='36'> clave</span><span id='37'> fue</span><span id='38'> la</span><span id='39'> introducción</span><span id='40'> del</span><span id='41'> telescopio</span><span id='42'> por</span><span id='43'> Galileo</span><span id='44'> Galilei,</span><span id='45'> que</span><span id='46'> permitió</span><span id='47'> examinar</span><span id='48'> el</span><span id='49'> cielo</span><span id='50'> de</span><span id='51'> la</span><span id='52'> noche</span><span id='53'> con</span><span id='54'> más</span><span id='55'> detalle.</span><span id='56'> Es</span><span id='57'> instrumento</span><span id='58'> óptico</span><span id='59'> que</span><span id='60'> permite</span><span id='61'> observar</span><span id='62'> objetos</span><span id='63'> muy</span><span id='64'> cercanos</span><span id='65'> con</span><span id='66'> mucho</span><span id='67'> más</span><span id='68'> detalle</span><span id='69'> que</span><span id='70'> a</span><span id='71'> simple</span><span id='72'> vista.</span><span id='73'> Es</span><span id='74'> una</span><span id='75'> herramienta</span><span id='76'> fundamental</span><span id='77'> en</span><span id='78'> astronomía,</span><span id='79'> cuyo</span><span id='80'> desarrollo</span><span id='81'> ha</span><span id='82'> permitido</span><span id='83'> avances</span><span id='84'> en</span><span id='85'> la</span><span id='86'> comprensión</span><span id='87'> del</span><span id='88'> Universo.</span>";

    var B4 = "<span id='0'>Se</span><span id='1'> descubrió</span><span id='2'> que</span><span id='3'> las</span><span id='4'> estrellas</span><span id='5'> eran</span><span id='6'> objetos</span><span id='7'> muy</span><span id='8'> lejanos</span><span id='9'> y</span><span id='10'> con</span><span id='11'> el</span><span id='12'> espectroscopio</span><span id='13'> se</span><span id='14'> demostró</span><span id='15'> que</span><span id='16'> eran</span><span id='17'> similares</span><span id='18'> al</span><span id='19'> Sol,</span><span id='20'> pero</span><span id='21'> con</span><span id='22'> una</span><span id='23'> amplia</span><span id='24'> gama</span><span id='25'> de</span><span id='26'> temperaturas,</span><span id='27'> masas</span><span id='28'> y</span><span id='29'> tamaños.</span><span id='30'> La</span><span id='31'> existencia</span><span id='32'> de</span><span id='33'> la</span><span id='34'> Vía</span><span id='35'> Láctea</span><span id='36'> como</span><span id='37'> un</span><span id='38'> grupo</span><span id='39'> separado</span><span id='40'> de</span><span id='41'> estrellas</span><span id='42'> no</span><span id='43'> se</span><span id='44'> demostró</span><span id='45'> sino</span><span id='46'> hasta</span><span id='47'> el</span><span id='48'> siglo</span><span id='49'> XX.</span><span id='50'> </span><span id='51'> La</span><span id='52'> idea</span><span id='53'> de</span><span id='54'> que</span><span id='55'> las</span><span id='56'> estrellas</span><span id='57'> son</span><span id='58'> soles</span><span id='59'> distantes</span><span id='60'> de</span><span id='61'> distinta</span><span id='62'> masa</span><span id='63'> era</span><span id='64'> concebida</span><span id='65'> desde</span><span id='66'> hace</span><span id='67'> miles</span><span id='68'> de</span><span id='69'> años.</span><span id='70'> La</span><span id='71'> astronomía</span><span id='72'> moderna</span><span id='73'> también</span><span id='74'> ha</span><span id='75'> descubierto</span><span id='76'> una</span><span id='77'> variedad</span><span id='78'> de</span><span id='79'> objetos</span><span id='80'> exóticos</span><span id='81'> como</span><span id='82'> los</span><span id='83'> cuásares,</span><span id='84'> púlsares,</span><span id='85'> radiogalaxias,</span><span id='86'> agujeros</span><span id='87'> negros,</span><span id='88'> estrellas</span><span id='89'> de</span><span id='90'> neutrones,</span><span id='91'> y</span><span id='92'> ha</span><span id='93'> utilizado</span><span id='94'> estas</span><span id='95'> observaciones</span><span id='96'> para</span><span id='97'> desarrollar</span><span id='98'> teorías</span><span id='99'> físicas</span><span id='100'> que</span><span id='101'> describen</span><span id='102'> estos</span><span id='103'> objetos.</span>";

    var B5 = "<span id='0'>El</span><span id='1'> Sol</span><span id='2'> es</span><span id='3'> la</span><span id='4'> estrella</span><span id='5'> que,</span><span id='6'> por</span><span id='7'> el</span><span id='8'> efecto</span><span id='9'> gravitacional</span><span id='10'> de</span><span id='11'> su</span><span id='12'> masa,</span><span id='13'> domina</span><span id='14'> el</span><span id='15'> sistema</span><span id='16'> planetario</span><span id='17'> que</span><span id='18'> incluye</span><span id='19'> a</span><span id='20'> la</span><span id='21'> Tierra.</span><span id='22'> Es</span><span id='23'> el</span><span id='24'> elemento</span><span id='25'> más</span><span id='26'> importante</span><span id='27'> en</span><span id='28'> nuestro</span><span id='29'> sistema</span><span id='30'> y</span><span id='31'> el</span><span id='32'> objeto</span><span id='33'> más</span><span id='34'> grande,</span><span id='35'> que</span><span id='36'> contiene</span><span id='37'> aproximadamente</span><span id='38'> el</span><span id='39'> 98</span><span id='40'> %</span><span id='41'> de</span><span id='42'> la</span><span id='43'> masa</span><span id='44'> total</span><span id='45'> del</span><span id='46'> sistema</span><span id='47'> solar.</span><span id='48'> Mediante</span><span id='49'> la</span><span id='50'> radiación</span><span id='51'> de</span><span id='52'> su</span><span id='53'> energía</span><span id='54'> electromagnética,</span><span id='55'> aporta</span><span id='56'> directa</span><span id='57'> o</span><span id='58'> indirectamente</span><span id='59'> toda</span><span id='60'> la</span><span id='61'> energía</span><span id='62'> que</span><span id='63'> mantiene</span><span id='64'> la</span><span id='65'> vida</span><span id='66'> en</span><span id='67'> la</span><span id='68'> Tierra.</span><span id='69'> Esta</span><span id='70'> energía</span><span id='71'> sale</span><span id='72'> del</span><span id='73'> sol</span><span id='74'> y</span><span id='75'> se</span><span id='76'> esparce</span><span id='77'> por</span><span id='78'> todo</span><span id='79'> el</span><span id='80'> sistema</span><span id='81'> como</span><span id='82'> viento</span><span id='83'> solar.</span><span id='84'> El</span><span id='85'> viento</span><span id='86'> solar</span><span id='87'> es</span><span id='88'> un</span><span id='89'> flujo</span><span id='90'> de</span><span id='91'> partículas,</span><span id='92'> conformado</span><span id='93'> por</span><span id='94'> protones</span><span id='95'> y</span><span id='96'> neutrones.</span><span id='97'> La</span><span id='98'> interacción</span><span id='99'> de</span><span id='100'> estas</span><span id='101'> partículas</span><span id='102'> con</span><span id='103'> los</span><span id='104'> polos</span><span id='105'> magnéticos</span><span id='106'> y</span><span id='107'> con</span><span id='108'> la</span><span id='109'> atmósfera</span><span id='110'> genera</span><span id='111'> las</span><span id='112'> auroras</span><span id='113'> polares</span><span id='114'> boreales</span><span id='115'> o</span><span id='116'> australes.</span>";

    var B6 = "<span id='0'>La</span><span id='1'> estadística</span><span id='2'> es</span><span id='3'> la</span><span id='4'> rama</span><span id='5'> de</span><span id='6'> las</span><span id='7'> matemáticas</span><span id='8'> que</span><span id='9'> estudia</span><span id='10'> la</span><span id='11'> variabilidad,</span><span id='12'> así</span><span id='13'> como</span><span id='14'> el</span><span id='15'> proceso</span><span id='16'> aleatorio</span><span id='17'> que</span><span id='18'> la</span><span id='19'> genera</span><span id='20'> siguiendo</span><span id='21'> leyes</span><span id='22'> de</span><span id='23'> probabilidad.</span><span id='24'> Como</span><span id='25'> parte</span><span id='26'> de</span><span id='27'> la</span><span id='28'> matemática,</span><span id='29'> la</span><span id='30'> estadística</span><span id='31'> es</span><span id='32'> una</span><span id='33'> ciencia</span><span id='34'> formal,</span><span id='35'> con</span><span id='36'> un</span><span id='37'> conocimiento</span><span id='38'> propio,</span><span id='39'> dinámico</span><span id='40'> y</span><span id='41'> en</span><span id='42'> continuo</span><span id='43'> desarrollo</span><span id='44'> obtenido</span><span id='45'> a</span><span id='46'> través</span><span id='47'> del</span><span id='48'> método</span><span id='49'> científico.</span><span id='50'> La</span><span id='51'> estadística</span><span id='52'> utiliza</span><span id='53'> los</span><span id='54'> principios</span><span id='55'> y</span><span id='56'> las</span><span id='57'> leyes</span><span id='58'> físicas</span><span id='59'> para</span><span id='60'> entender</span><span id='61'> las</span><span id='62'> distribuciones.</span><span id='63'> De</span><span id='64'> esta</span><span id='65'> manera,</span><span id='66'> la</span><span id='67'> Estadística</span><span id='68'> es</span><span id='69'> una</span><span id='70'> ciencia</span><span id='71'> aplicada</span><span id='72'> donde</span><span id='73'> hay</span><span id='74'> que</span><span id='75'> dar</span><span id='76'> un</span><span id='77'> contenido</span><span id='78'> concreto</span><span id='79'> a</span><span id='80'> la</span><span id='81'> noción</span><span id='82'> de</span><span id='83'> probabilidad.</span>";

    var B7 = "<span id='0'>El</span><span id='1'> concepto</span><span id='2'> de</span><span id='3'> correlación</span><span id='4'> es</span><span id='5'> valioso</span><span id='6'> en</span><span id='7'> estadística.</span><span id='8'> Los</span><span id='9'> análisis</span><span id='10'> de</span><span id='11'> datos</span><span id='12'> pueden</span><span id='13'> revelar</span><span id='14'> que</span><span id='15'> dos</span><span id='16'> variables</span><span id='17'> tienden</span><span id='18'> a</span><span id='19'> variar</span><span id='20'> conjuntamente,</span><span id='21'> como</span><span id='22'> si</span><span id='23'> hubiera</span><span id='24'> una</span><span id='25'> asociación</span><span id='26'> entre</span><span id='27'> ellas.</span><span id='28'> Por</span><span id='29'> ejemplo,</span><span id='30'> un</span><span id='31'> estudio</span><span id='32'> muestra</span><span id='33'> una</span><span id='34'> asociación</span><span id='35'> entre</span><span id='36'> el</span><span id='37'> peso</span><span id='38'> y</span><span id='39'> la</span><span id='40'> altura,</span><span id='41'> así</span><span id='42'> personas</span><span id='43'> mas</span><span id='44'> altas</span><span id='45'> tienden</span><span id='46'> a</span><span id='47'> tener</span><span id='48'> más</span><span id='49'> peso</span><span id='50'> que</span><span id='51'> personas</span><span id='52'> más</span><span id='53'> bajas.</span><span id='54'> Las</span><span id='55'> dos</span><span id='56'> variables</span><span id='57'> se</span><span id='58'> dice</span><span id='59'> que</span><span id='60'> están</span><span id='61'> correlacionadas.</span><span id='62'> El</span><span id='63'> análisis</span><span id='64'> permite</span><span id='65'> sostener</span><span id='66'> que</span><span id='67'> existe</span><span id='68'> una</span><span id='69'> relación</span><span id='70'> de</span><span id='71'> causalidad</span><span id='72'> entre</span><span id='73'> una</span><span id='74'> de</span><span id='75'> ellas,</span><span id='76'> esto</span><span id='77'> es,</span><span id='78'> la</span><span id='79'> primera</span><span id='80'> causa</span><span id='81'> a</span><span id='82'> la</span><span id='83'> segunda.</span>";

    var B8 = "<span id='0'>La</span><span id='1'> prueba</span><span id='2'> t</span><span id='3'> de</span><span id='4'> Student</span><span id='5'> es</span><span id='6'> un</span><span id='7'> test</span><span id='8'> que</span><span id='9'> permite</span><span id='10'> decidir</span><span id='11'> si</span><span id='12'> dos</span><span id='13'> variables</span><span id='14'> aleatorias</span><span id='15'> normales</span><span id='16'> (gausianas)</span><span id='17'> y</span><span id='18'> con</span><span id='19'> la</span><span id='20'> misma</span><span id='21'> varianza</span><span id='22'> tienen</span><span id='23'> medias</span><span id='24'> diferentes.</span><span id='25'> El</span><span id='26'> test</span><span id='27'> opera</span><span id='28'> decidiendo</span><span id='29'> si</span><span id='30'> una</span><span id='31'> diferencia</span><span id='32'> entre</span><span id='33'> dos</span><span id='34'> medias</span><span id='35'> provenientes</span><span id='36'> de</span><span id='37'> muestras</span><span id='38'> diferentes</span><span id='39'> es</span><span id='40'> estadísticamente</span><span id='41'> significativa.</span><span id='42'> Entonces</span><span id='43'> se</span><span id='44'> puede</span><span id='45'> afirmar</span><span id='46'> que</span><span id='47'> las</span><span id='48'> dos</span><span id='49'> medianas</span><span id='50'> y</span><span id='51'> modas</span><span id='52'> corresponden</span><span id='53'> a</span><span id='54'> distribuciones</span><span id='55'> de</span><span id='56'> poblaciones</span><span id='57'> iguales.</span><span id='58'> El</span><span id='59'> test</span><span id='60'> se</span><span id='61'> vuelve</span><span id='62'> más</span><span id='63'> efectivo</span><span id='64'> cuando</span><span id='65'> los</span><span id='66'> tamaños</span><span id='67'> de</span><span id='68'> las</span><span id='69'> muestran</span><span id='70'> son</span><span id='71'> grandes.</span>";

    var B9 = "<span id='0'>El</span><span id='1'> término</span><span id='2'> alemán</span><span id='3'> Statistik,</span><span id='4'> introducido</span><span id='5'> originalmente</span><span id='6'> por</span><span id='7'> Gottfried</span><span id='8'> Achenwall</span><span id='9'> en</span><span id='10'> 1749,</span><span id='11'> se</span><span id='12'> refería</span><span id='13'> al</span><span id='14'> análisis</span><span id='15'> de</span><span id='16'> datos</span><span id='17'> del</span><span id='18'> Estado,</span><span id='19'> es</span><span id='20'> decir,</span><span id='21'> la</span><span id='22'> «ciencia</span><span id='23'> del</span><span id='24'> Estado».</span><span id='25'> Hoy</span><span id='26'> el</span><span id='27'> uso</span><span id='28'> de</span><span id='29'> la</span><span id='30'> estadística</span><span id='31'> se</span><span id='32'> ha</span><span id='33'> extendido</span><span id='34'> más</span><span id='35'> allá</span><span id='36'> de</span><span id='37'> sus</span><span id='38'> orígenes</span><span id='39'> como</span><span id='40'> un</span><span id='41'> servicio</span><span id='42'> al</span><span id='43'> Estado.</span><span id='44'> Personas</span><span id='45'> y</span><span id='46'> organizaciones</span><span id='47'> usan</span><span id='48'> la</span><span id='49'> estadística</span><span id='50'> para</span><span id='51'> entender</span><span id='52'> datos</span><span id='53'> y</span><span id='54'> tomar</span><span id='55'> decisiones</span><span id='56'> en</span><span id='57'> ciencias</span><span id='58'> naturales</span><span id='59'> y</span><span id='60'> sociales,</span><span id='61'> medicina,</span><span id='62'> negocios</span><span id='63'> y</span><span id='64'> otras</span><span id='65'> áreas.</span><span id='66'> La</span><span id='67'> estadística</span><span id='68'> es</span><span id='69'> una</span><span id='70'> subárea</span><span id='71'> de</span><span id='72'> las</span><span id='73'> matemáticas</span><span id='74'> útil</span><span id='75'> para</span><span id='76'> el</span><span id='77'> avance</span><span id='78'> del</span><span id='79'> conocimiento</span><span id='80'> científico</span><span id='81'> factual,</span><span id='82'> considerándose</span><span id='83'> como</span><span id='84'> una</span><span id='85'> ciencia</span><span id='86'> formal</span><span id='87'> «aliada»</span><span id='88'> de</span><span id='89'> la</span><span id='90'> ciencia</span><span id='91'> fáctica.</span>";

    var B10 = "<span id='0'>En</span><span id='1'> estadística,</span><span id='2'> el</span><span id='3'> análisis</span><span id='4'> de</span><span id='5'> la</span><span id='6'> regresión</span><span id='7'> es</span><span id='8'> un</span><span id='9'> proceso</span><span id='10'> estadístico</span><span id='11'> para</span><span id='12'> estimar</span><span id='13'> las</span><span id='14'> relaciones</span><span id='15'> entre</span><span id='16'> variables.</span><span id='17'> Incluye</span><span id='18'> muchas</span><span id='19'> técnicas</span><span id='20'> que</span><span id='21'> se</span><span id='22'> centran</span><span id='23'> en</span><span id='24'> analizar</span><span id='25'> la</span><span id='26'> relación</span><span id='27'> entre</span><span id='28'> una</span><span id='29'> variable</span><span id='30'> dependiente</span><span id='31'> y</span><span id='32'> una</span><span id='33'> o</span><span id='34'> más</span><span id='35'> variables</span><span id='36'> independientes</span><span id='37'> (o</span><span id='38'> predictoras).</span><span id='39'> Más</span><span id='40'> específicamente,</span><span id='41'> el</span><span id='42'> análisis</span><span id='43'> de</span><span id='44'> regresión</span><span id='45'> ayuda</span><span id='46'> a</span><span id='47'> entender</span><span id='48'> cómo</span><span id='49'> el</span><span id='50'> valor</span><span id='51'> de</span><span id='52'> la</span><span id='53'> variable</span><span id='54'> dependiente</span><span id='55'> varía</span><span id='56'> al</span><span id='57'> cambiar</span><span id='58'> el</span><span id='59'> valor</span><span id='60'> de</span><span id='61'> una</span><span id='62'> de</span><span id='63'> las</span><span id='64'> variables</span><span id='65'> independientes.</span><span id='66'> Por</span><span id='67'> esta</span><span id='68'> razón</span><span id='69'> el</span><span id='70'> análisis</span><span id='71'> solo</span><span id='72'> permite</span><span id='73'> identificar</span><span id='74'> si</span><span id='75'> hay</span><span id='76'> al</span><span id='77'> menos</span><span id='78'> alguna</span><span id='79'> relación</span><span id='80'> entre</span><span id='81'> las</span><span id='82'> variables.</span><span id='83'> El</span><span id='84'> análisis</span><span id='85'> de</span><span id='86'> regresión</span><span id='87'> es</span><span id='88'> ampliamente</span><span id='89'> utilizado</span><span id='90'> para</span><span id='91'> la</span><span id='92'> predicción</span><span id='93'> y</span><span id='94'> previsión.</span>";

    var B11 = "<span id='0'>La</span><span id='1'> gramática</span><span id='2'> es</span><span id='3'> el</span><span id='4'> estudio</span><span id='5'> de</span><span id='6'> las</span><span id='7'> reglas</span><span id='8'> y</span><span id='9'> principios</span><span id='10'> que</span><span id='11'> gobiernan</span><span id='12'> el</span><span id='13'> uso</span><span id='14'> de</span><span id='15'> las</span><span id='16'> lenguas</span><span id='17'> y</span><span id='18'> la</span><span id='19'> organización</span><span id='20'> de</span><span id='21'> las</span><span id='22'> palabras</span><span id='23'> dentro</span><span id='24'> de</span><span id='25'> unas</span><span id='26'> oraciones</span><span id='27'> y</span><span id='28'> otro</span><span id='29'> tipo</span><span id='30'> de</span><span id='31'> constituyentes</span><span id='32'> sintácticos.</span><span id='33'> También</span><span id='34'> se</span><span id='35'> denomina</span><span id='36'> así</span><span id='37'> al</span><span id='38'> conjunto</span><span id='39'> de</span><span id='40'> reglas</span><span id='41'> y</span><span id='42'> principios</span><span id='43'> que</span><span id='44'> gobiernan</span><span id='45'> el</span><span id='46'> uso</span><span id='47'> de</span><span id='48'> una</span><span id='49'> lengua</span><span id='50'> concreta</span><span id='51'> determinada;</span><span id='52'> así,</span><span id='53'> cada</span><span id='54'> lengua</span><span id='55'> tiene</span><span id='56'> su</span><span id='57'> propia</span><span id='58'> gramática.</span><span id='59'> Se</span><span id='60'> interesa</span><span id='61'> por</span><span id='62'> el</span><span id='63'> modo</span><span id='64'> en</span><span id='65'> que</span><span id='66'> el</span><span id='67'> contexto</span><span id='68'> influye</span><span id='69'> en</span><span id='70'> la</span><span id='71'> interpretación</span><span id='72'> del</span><span id='73'> significado.</span><span id='74'> La</span><span id='75'> gramática</span><span id='76'> se</span><span id='77'> restringe</span><span id='78'> al</span><span id='79'> estudio</span><span id='80'> de</span><span id='81'> las</span><span id='82'> reglas</span><span id='83'> y</span><span id='84'> principios</span><span id='85'> que</span><span id='86'> definen</span><span id='87'> el</span><span id='88'> nivel</span><span id='89'> sintáctico</span><span id='90'> y</span><span id='91'> morfológico</span><span id='92'> de</span><span id='93'> las</span><span id='94'> lenguas.</span>";

    var B12 = "<span id='0'>La</span><span id='1'> gramática</span><span id='2'> del</span><span id='3'> español</span><span id='4'> es</span><span id='5'> muy</span><span id='6'> similar</span><span id='7'> a</span><span id='8'> la</span><span id='9'> de</span><span id='10'> las</span><span id='11'> demás</span><span id='12'> lenguas</span><span id='13'> romances.</span><span id='14'> El</span><span id='15'> español</span><span id='16'> es</span><span id='17'> una</span><span id='18'> lengua</span><span id='19'> flexiva</span><span id='20'> de</span><span id='21'> tipo</span><span id='22'> fusionante,</span><span id='23'> es</span><span id='24'> decir,</span><span id='25'> en</span><span id='26'> las</span><span id='27'> oraciones</span><span id='28'> se</span><span id='29'> usa</span><span id='30'> preferentemente</span><span id='31'> la</span><span id='32'> flexión</span><span id='33'> para</span><span id='34'> indicar</span><span id='35'> las</span><span id='36'> relaciones</span><span id='37'> entre</span><span id='38'> sus</span><span id='39'> elementos.</span><span id='40'> Sin</span><span id='41'> embargo,</span><span id='42'> como</span><span id='43'> la</span><span id='44'> mayoría</span><span id='45'> de</span><span id='46'> las</span><span id='47'> lenguas</span><span id='48'> fusionantes,</span><span id='49'> también</span><span id='50'> recurre</span><span id='51'> al</span><span id='52'> uso</span><span id='53'> de</span><span id='54'> adposiciones</span><span id='55'> (preposiciones),</span><span id='56'> palabras</span><span id='57'> abstractas</span><span id='58'> que</span><span id='59'> sirven</span><span id='60'> de</span><span id='61'> nexo</span><span id='62'> y</span><span id='63'> son</span><span id='64'> invariables.</span>";

    var B13 = "<span id='0'>El</span><span id='1'> español</span><span id='2'> tiene</span><span id='3'> flexión</span><span id='4'> en</span><span id='5'> los</span><span id='6'> nombres,</span><span id='7'> adjetivos,</span><span id='8'> pronombres</span><span id='9'> y</span><span id='10'> verbos.</span><span id='11'> La</span><span id='12'> flexión</span><span id='13'> se</span><span id='14'> realiza</span><span id='15'> exclusivamente</span><span id='16'> mediante</span><span id='17'> sufijos.</span><span id='18'> En</span><span id='19'> los</span><span id='20'> nombres</span><span id='21'> y</span><span id='22'> los</span><span id='23'> adjetivos</span><span id='24'> los</span><span id='25'> sufijos</span><span id='26'> indican</span><span id='27'> género</span><span id='28'> y</span><span id='29'> número.</span><span id='30'> Los</span><span id='31'> sufijos</span><span id='32'> flexivos</span><span id='33'> verbales</span><span id='34'> son</span><span id='35'> mucho</span><span id='36'> más</span><span id='37'> numerosos.</span><span id='38'> En</span><span id='39'> el</span><span id='40'> español,</span><span id='41'> como</span><span id='42'> en</span><span id='43'> el</span><span id='44'> inglés</span><span id='45'> los</span><span id='46'> sufijos</span><span id='47'> verbales</span><span id='48'> solo</span><span id='49'> indican</span><span id='50'> el</span><span id='51'> tiempo</span><span id='52'> verbal.</span><span id='53'> Así</span><span id='54'> por</span><span id='55'> ejemplo,</span><span id='56'> en</span><span id='57'> el</span><span id='58'> verbo</span><span id='59'> tener,</span><span id='60'> la</span><span id='61'> flexión</span><span id='62'> “teníamos”</span><span id='63'> identifica</span><span id='64'> a</span><span id='65'> la</span><span id='66'> persona</span><span id='67'> (nosotros)</span><span id='68'> y</span><span id='69'> el</span><span id='70'> tiempo</span><span id='71'> verbal</span><span id='72'> (pasado</span><span id='73'> imperfecto).</span>";

    var B14 = "<span id='0'>La</span><span id='1'> fonética</span><span id='2'> es</span><span id='3'> el</span><span id='4'> estudio</span><span id='5'> de</span><span id='6'> los</span><span id='7'> sonidos</span><span id='8'> físicos</span><span id='9'> del</span><span id='10'> discurso</span><span id='11'> humano.</span><span id='12'> Es</span><span id='13'> la</span><span id='14'> rama</span><span id='15'> de</span><span id='16'> la</span><span id='17'> lingüística</span><span id='18'> que</span><span id='19'> estudia</span><span id='20'> la</span><span id='21'> producción</span><span id='22'> y</span><span id='23'> percepción</span><span id='24'> de</span><span id='25'> los</span><span id='26'> sonidos</span><span id='27'> de</span><span id='28'> una</span><span id='29'> lengua</span><span id='30'> con</span><span id='31'> respecto</span><span id='32'> a</span><span id='33'> sus</span><span id='34'> manifestaciones</span><span id='35'> físicas.</span><span id='36'> Sus</span><span id='37'> principales</span><span id='38'> ramas</span><span id='39'> son:</span><span id='40'> fonética</span><span id='41'> articulatoria,</span><span id='42'> fonética</span><span id='43'> acústica</span><span id='44'> y</span><span id='45'> fonética</span><span id='46'> auditiva</span><span id='47'> o</span><span id='48'> perceptiva.</span><span id='49'> Estudia</span><span id='50'> los</span><span id='51'> morfemas,</span><span id='52'> la</span><span id='53'> palabra</span><span id='54'> y</span><span id='55'> los</span><span id='56'> mecanismos</span><span id='57'> de</span><span id='58'> formación</span><span id='59'> y</span><span id='60'> creación</span><span id='61'> de</span><span id='62'> palabras.</span><span id='63'> Plantea</span><span id='64'> métodos</span><span id='65'> que</span><span id='66'> analizan</span><span id='67'> las</span><span id='68'> propiedades</span><span id='69'> acústicas</span><span id='70'> y</span><span id='71'> físicas</span><span id='72'> de</span><span id='73'> los</span><span id='74'> sonidos</span><span id='75'> del</span><span id='76'> habla,</span><span id='77'> reuniendo</span><span id='78'> y</span><span id='79'> cuantificando</span><span id='80'> los</span><span id='81'> datos</span><span id='82'> sobre</span><span id='83'> la</span><span id='84'> emisión</span><span id='85'> y</span><span id='86'> la</span><span id='87'> producción</span><span id='88'> de</span><span id='89'> las</span><span id='90'> ondas</span><span id='91'> sonoras.</span>";

    var B15 = "<span id='0'>Un</span><span id='1'> fonema</span><span id='2'> no</span><span id='3'> es</span><span id='4'> un</span><span id='5'> sonido</span><span id='6'> sino</span><span id='7'> un</span><span id='8'> constructo</span><span id='9'> mental.</span><span id='10'> Cada</span><span id='11'> fonema</span><span id='12'> es</span><span id='13'> una</span><span id='14'> clase</span><span id='15'> de</span><span id='16'> equivalencia</span><span id='17'> de</span><span id='18'> sonidos,</span><span id='19'> caracterizada</span><span id='20'> por</span><span id='21'> una</span><span id='22'> especificación</span><span id='23'> incompleta</span><span id='24'> de</span><span id='25'> rasgos</span><span id='26'> fonéticos</span><span id='27'> (acústicos</span><span id='28'> y</span><span id='29'> articulatorios).</span><span id='30'> El</span><span id='31'> fonema</span><span id='32'> pertenece</span><span id='33'> a</span><span id='34'> la</span><span id='35'> lengua,</span><span id='36'> mientras</span><span id='37'> que</span><span id='38'> el</span><span id='39'> sonido</span><span id='40'> pertenece</span><span id='41'> al</span><span id='42'> habla.</span><span id='43'> Los</span><span id='44'> fonemas</span><span id='45'> son</span><span id='46'> sonidos</span><span id='47'> con</span><span id='48'> entidad</span><span id='49'> física,</span><span id='50'> no</span><span id='51'> abstracciones</span><span id='52'> mentales.</span><span id='53'> Un</span><span id='54'> fonema</span><span id='55'> puede</span><span id='56'> ser</span><span id='57'> representado</span><span id='58'> por</span><span id='59'> una</span><span id='60'> familia</span><span id='61'> o</span><span id='62'> clase</span><span id='63'> de</span><span id='64'> equivalencia</span><span id='65'> de</span><span id='66'> sonidos,</span><span id='67'> que</span><span id='68'> los</span><span id='69'> hablantes</span><span id='70'> asocian</span><span id='71'> a</span><span id='72'> un</span><span id='73'> sonido</span><span id='74'> específico</span><span id='75'> durante</span><span id='76'> la</span><span id='77'> producción</span><span id='78'> o</span><span id='79'> la</span><span id='80'> percepción</span><span id='81'> del</span><span id='82'> habla.</span>";

    //Variables para poder Resaltar el texto
    var conteo_de_clic = 0;
    var desde = 0;
    var hasta = 0;

    //Variables para guardar la respuesta
    var Respuesta_Total = [];
    var Libros = "";

    var Texto = "";
    var SiNo = "";
    var Respuesta_String = "";
    var Respuesta_ID = "";
    var Tiempo_Inicio = 0;
    var Tiempo_Fin = 0;

    //Variables en relación a la dinámica de la App
    var Habilitar_Resaltar = 0;
    var No_Volver_A_Mostrar = 0;

    //Variables de Orden de Presentación
    var Orden_de_Presentacion = "";
    var Orden_de_Presentacion_Array = [];
    var Secuencia = 0;

    //Configuración de Botones
    //Borra el Texto Resaltado
    $("#Clear").on("click", function () {
        $("#Text>span").removeClass("Resaltado");
        $("#Siguiente").prop("disabled", true);
    });

    //Aumenta el tamaño de la letra
    $("#Increase").on("click", function () {
        var j = $("#Container").css("font-size");
        $("#Container").css("font-size", (parseInt(j) + 2).toString() + "px");
    });

    //Disminuye el tamaño de la letra
    $("#Decrease").on("click", function () {
        var j = $("#Container").css("font-size");
        $("#Container").css("font-size", (parseInt(j) - 2).toString() + "px");
    });

    //¿Hay una información incoherente en el texto? Si, No
    $("#No").on("click", function () {
        Habilitar_Resaltar = 0;
        $("#Clear").click();
        $("span").removeClass("Resaltar");
        $("#Clear").prop("disabled", true);
        $("#Siguiente").prop("disabled", false);
    });

    $("#Si").on("click", function () {
        $("span").addClass("Resaltar");
        $("#Clear").prop("disabled", false);

        switch (Habilitar_Resaltar) {
            case 0:
                Habilitar_Resaltar = 1;
                $("#Siguiente").prop("disabled", true);
                break;
        }

        switch (No_Volver_A_Mostrar) {
            default:
                $("#Modal_Si").modal("toggle");
                break;
            case 1:
                break;
        }
    });

    //Botón Siguiente
    $("#Siguiente").on("click", function () {
        function Proximo_Itinerario() {
            Secuencia += 1;
            Itinerario();
        }

        switch (Secuencia) {
            case 2: //Modal #3
                if ($("#Si").prop("checked")) {
                    Proximo_Itinerario();
                } else {
                    $("#Modal_Title").html("Resaltá la información incoherente");
                    $("#Modal_Body").html(
                        "<p><strong>¡Cuidado!</strong> El texto anterior, contenía información errónea o incoherente. Leelo nuevamente, respondé Sí, y no te olvides de resaltar dicha información. Luego, hace clic en Siguiente (>)</p>"
                    );

                    $("#Modal_2").modal("toggle");
                }
                break;
            case 4: //Modal 5 Si elige Si -> Siguiente en el Ejemplo #2
                if ($("#No").prop("checked")) {
                    Proximo_Itinerario();
                } else {
                    $("#Modal_Title").html("Texto Coherente");
                    $("#Modal_Body").html(
                        "<p><strong>¡Cuidado!</strong> El texto anterior, NO contenía información errónea o incoherente. Leelo nuevamente, respondé No, y hace clic en Siguiente (>).</p>"
                    );
                    $("#Modal_4").modal("toggle");
                }
                break;
            default:
                Tiempo_Fin = new moment();
                var Duration = moment
                    .duration(Tiempo_Fin.diff(Tiempo_Inicio))
                    .as("milliseconds");
                var TR = Duration.toString();

                Obtener_Respuesta();
                var y = [Texto, SiNo, Respuesta_String, Respuesta_ID, TR];

                Respuesta_Total.push(y);
                Proximo_Itinerario();
                break;
        }
    });

    //Botón Entendido,  modal con instrucciones para resaltar, si hace clic en Si
    $("#Entendido_Si").on("click", function () {
        if ($("#No_Volver").prop("checked")) {
            No_Volver_A_Mostrar = 1;
        }
    });

    $("#No_Volver_Label").on("click", function () {
        $("#No_Volver").click();
    });

    $("#No_Label").on("click", function () {
        $("#No").click();
    });

    $("#Si_Label").on("click", function () {
        $("#Si").click();
    });

    //Botón Entendido/Siguiente del Modal
    $("#Entendido").on("click", function () {
        switch (Secuencia) {
            case 0: //Modal #1 Bienvenido de nuevo... ¿Cuántos libros lees...?
                Libros = $('input[type="radio"]:checked').attr("value");

                if (Libros != "") {
                    $("#Modal_1").hide();
                    Secuencia += 1;
                    Itinerario();
                }
                break;

            case 1: //Modal #2 ¿Qué tengo que hacer?...
                $("#Modal_2").modal("toggle");
                Secuencia += 1;
                Itinerario();
                break;

            case 3: //Modal con Respuesta Correcta del Ejemplo #1
                Secuencia += 1;
                Itinerario();
                break;

            case 5: //Modal con Respuesta Correcta del Ejemplo #2 e Instrucciones Generales (de nuevo)
                Secuencia += 1;
                Itinerario();
        }
    });

    //Reinicia las opciones y modifica el div #text con el texto "rodeado".
    function mostrarTextoSiguiente(texto) {
        $("#Si").prop("checked", false);
        $("#No").prop("checked", false);
        $("#Siguiente").prop("disabled", true);
        $("#Clear").prop("disabled", true);
        Habilitar_Resaltar = 0;
        $("#Text").html(texto);
    }

    //Cuando hago clic en una palabra para resaltarla...
    $("body").on("click", "#Text>span", function () {
        switch (Habilitar_Resaltar) {
            case 1:
                var z = parseInt($(this).attr("id"));
                switch (conteo_de_clic) {
                    case 0:
                        conteo_de_clic += 1;
                        desde = z;
                        $(this).addClass("Desde");
                        break;
                    case 1:
                        conteo_de_clic = 0;
                        hasta = z;
                        Resaltar();
                        $("#Siguiente").prop("disabled", false);
                        break;
                }
                break;
            default:
                break;
        }
    });

    //Resalta una palabra o fragmento elegido por el usuario
    function Resaltar() {
        $("#" + desde.toString()).removeClass("Desde");
        if (desde > hasta) {
            //Si hizo un resaltado de derecha a izquierda, invierto los valores
            var a = desde;
            var b = hasta;
            desde = b;
            hasta = a;
        }
        for (var i = desde; i < hasta + 1; i++) {
            var a = "#" + i.toString();
            $(a).addClass("Resaltado");
        }
    }

    function Obtener_Respuesta() {
        switch ($("#Si").prop("checked")) {
            case true:
                SiNo = "Si";

                var id_ultimo_span = $("#Text>span:last-child").attr("ID");

                //Obtengo los ids de los span resaltados y los almaceno en Indice
                var Indice = [];
                for (var i = 0; i < parseInt(id_ultimo_span) + 1; i++) {
                    var s = $("#" + i.toString()).attr("class");
                    switch (typeof s) {
                        case "string":
                            switch (s.includes("Resaltado")) {
                                case true:
                                    Indice.push(i);
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                }

                for (var i = 0; i < Indice.length; i++) {
                    switch (i) {
                        case 0:
                            Respuesta_ID = Indice[i].toString();
                            break;
                        default:
                            switch (Indice[i] - Indice[i - 1]) {
                                case 1:
                                    Respuesta_ID = Respuesta_ID + "-" + Indice[i].toString();
                                    break;
                                default:
                                    Respuesta_ID = Respuesta_ID + " // " + Indice[i].toString();
                                    break;
                            }
                    }
                }

                //Almaceno en Respuesta la frase seleccionada. Si eligió fragmentos discontinuos los divide con //. Por ejemplo: "porttitor velit eros, eget lobortis // tortor // sapien tortor ut lectus. // in"
                for (var i = 0; i < Indice.length; i++) {
                    var r = parseInt(Indice[i]); //38       int
                    var w = "#" + r.toString(); //"#38"     id

                    switch (
                    i //y es la diferencia entre un id y el anterior (para saber si dos span son continuos o no)
                    ) {
                        default:
                            var y = r - Indice[i - 1];
                            break;
                        case 0:
                            y = 1;
                            break;
                    }

                    switch (y) {
                        case 1:
                            Respuesta_String = Respuesta_String + $(w).html();
                            break;
                        default:
                            //Si los span no son continuos...
                            switch (i) {
                                case 0: //el primero
                                    Respuesta_String = Respuesta_String + $(w).html();
                                    break;
                                default:
                                    Respuesta_String = Respuesta_String + " //" + $(w).html();
                                    break;
                            }
                    }
                }
                Respuesta_String = Respuesta_String.trim();
                break;
            case false:
                SiNo = "No";
                break;
        }
    }

    //Obtengo el orden de presentación aleatorio en dos niveles: (1) Si comienza por Alto o Bajo conocimiento previo y (2) un orden aleatorio de los 15 textos al interior de cada grupo.
    //Orden_de_Presentación = "A6, A5, A9, A10, A14, A12, A4, A3, A2, A13, A11, A7, A8, A15, A1, B15, B4, B7, B12, B14, B2, B5, B8, B1, B13, B9, B10, B6, B11, B3"
    function Orden_Aleatorio(cantidad) {
        //Primero defino el orden de las modalidades Alto y Bajo Conocimiento Previo
        var A, B;
        A = Math.random();
        B = Math.random();

        Diferentes(A, B);

        //Evaluo si ambos valores son diferentes, caso contrario obtengo otros dos números al azar
        function Diferentes(A, B) {
            if (A == B) {
                A = Math.random();
                B = Math.random();
                Diferentes();
            }
        }

        //El menor de los dos grupos va primero
        if (A < B) {
            Random("A", cantidad);
            Random("B", cantidad);
        } else {
            Random("B", cantidad);
            Random("A", cantidad);
        }

        function Random(letra, cantidad) {
            var Codigos_Textos = [];

            //Codigos_Textos, obtengo un array con los códigos según la cantidad. Por ej.: A1, A2, A3... o B1, B2, B3...
            for (var i = 0; i < cantidad; i++) {
                Codigos_Textos.push(letra + (i + 1).toString());
            }

            //Numeros_Azar, obtengo un array con los números al azar que no se repiten entre sí.
            var Numeros_Azar = [];
            for (var i = 0; i < cantidad; i++) {
                var j = 0;
                switch (Numeros_Azar.length) {
                    case 0:
                        j = Math.random();
                        Numeros_Azar.push(j);
                        break;
                    default:
                        j = Math.random();
                        Verificar_Diferente();
                        function Verificar_Diferente() {
                            Numeros_Azar.forEach(element => {
                                if (element == j) {
                                    j = Math.random();
                                    Verificar_Diferente();
                                }
                            });
                            Numeros_Azar.push(j);
                        }
                }
            }

            //Asigno a cada Código, uno de los números al azar. Obtengo un array por ej.: ["A3", "0,0765465378932"], ["A5", "0,80967854233556"]
            var Orden = [];

            for (var i = 0; i < cantidad; i++) {
                var y = [Codigos_Textos[i], Numeros_Azar[i]];
                Orden.push(y);
            }

            //Ordeno el Array en función de los números al azar
            Orden.sort(comparar);
            function comparar(a, b) {
                return a[1] - b[1];
            }

            //Almaceno en la variable Orden_de_Presentación los códigos ordenados al azar. Por ej: "A4, A7, A2, A9, A13,......"
            for (var g = 0; g < cantidad; g++) {
                switch (Orden_de_Presentacion) {
                    case "":
                        Orden_de_Presentacion = Orden_de_Presentacion + Orden[g][0];
                        break;
                    default:
                        Orden_de_Presentacion = Orden_de_Presentacion + "," + Orden[g][0];
                }
            }
            Orden_de_Presentacion_Array = Orden_de_Presentacion.split(",");
        }
    }

    function Presento_Texto(a) {
        Reinicio_Variables();
        Texto = a;
        Tiempo_Inicio = new moment();
        mostrarTextoSiguiente(Recuperar_Texto_Desde_String(a));
    }

    function Reinicio_Variables() {
        Texto = "";
        SiNo = "";
        Respuesta_String = "";
        Respuesta_ID = "";
        Tiempo_Inicio = 0;
        Tiempo_Fin = 0;
    }

    function Recuperar_Texto_Desde_String(x) {
        switch (x) {
            case "A1":
                return A1;
                break;
            case "A2":
                return A2;
                break;
            case "A3":
                return A3;
                break;
            case "A4":
                return A4;
                break;
            case "A5":
                return A5;
                break;
            case "A6":
                return A6;
                break;
            case "A7":
                return A7;
                break;
            case "A8":
                return A8;
                break;
            case "A9":
                return A9;
                break;
            case "A10":
                return A10;
                break;
            case "A11":
                return A11;
                break;
            case "A12":
                return A12;
                break;
            case "A13":
                return A13;
                break;
            case "A14":
                return A14;
                break;
            case "A15":
                return A15;
                break;
            case "B1":
                return B1;
                break;
            case "B2":
                return B2;
                break;
            case "B3":
                return B3;
                break;
            case "B4":
                return B4;
                break;
            case "B5":
                return B5;
                break;
            case "B6":
                return B6;
                break;
            case "B7":
                return B7;
                break;
            case "B8":
                return B8;
                break;
            case "B9":
                return B9;
                break;
            case "B10":
                return B10;
                break;
            case "B11":
                return B11;
                break;
            case "B12":
                return B12;
                break;
            case "B13":
                return B13;
                break;
            case "B14":
                return B14;
                break;
            case "B15":
                return B15;
                break;
        }
    }

    function Itinerario() {
        switch (Secuencia) {
            case 0: //Modal con pregunta por ¿Cuántos Libros lee?...
                Orden_Aleatorio(15);
                mostrarTextoSiguiente(Ejemplo_1);

                $("#Modal").attr("ID", "Modal_1");

                $("#Modal_Title").html("Bienvenido de nuevo...");

                $("#Modal_Body").html(
                    "<p>Antes de continuar, respondé la siguiente pregunta:</p><p>En estos dos últimos años, ¿con qué frecuencia leíste libros en tu casa (por fuera de la facultad)?</p><input type='radio' name='Libros' id='L1' value='1. Menos de un libro al año' required><label for='L1'>&nbsp;1. Menos de un libro al año</label><br><input type='radio' name='Libros' id='L2' value='2. Entre uno y dos libros al año'><label for='L2'>&nbsp;2. Entre uno y dos libros al año</label><br><input type='radio' name='Libros' id='L3' value='3. Tres libros por año'><label for='L3'>&nbsp;3. Tres libros por año</label><br><input type='radio' name='Libros' id='L4' value='4. Entre cuatro y cinco libros por año'><label for='L4'>&nbsp;4. Entre cuatro y cinco libros por año</label><br><input type='radio' name='Libros' id='L5' value='5. Más de cinco libros por año'><label for='L5'>&nbsp;5. Más de cinco libros por año</label>"
                );

                $("#Entendido").html("Siguiente");

                $("#Modal_1").modal("toggle");
                break;
            case 1: //Modal con Instrucción General...
                $("#Modal_1").attr("ID", "Modal_2");

                $("#Modal_Title").html("¿Qué tengo que hacer?");

                $("#Modal_Body").html(
                    "<p>En este ejercicio, se presentarán diferentes textos pequeños.<br> Deberás leerlos con el objetivo de detectar si hay alguna información incorrecta o incoherente.</p><p><b>En caso afirmativo:</b> Seleccioná la opción <b>Si</b> y luego <b>resaltá dicha información </b> incorrecta o incoherente.</p><hr><p><b>En caso negativo:</b> Seleccioná la opción <b>No</b>.</p><hr><p> Finalmente, para pasar al <b>siguiente ejercicio</b>, hace clic en <img src='/icons/siguiente.png' height = '20px' style='background-color:#0197FA ' alt=''></img></p> <hr> Para tu comodidad, podes <b>aumentar</b> <img src='/icons/increase.png' height = '20px' width:'auto' style='background-color:#0197FA ' alt=''></img> o <b>disminuir </b><img src='/icons/decrease.png' height = '20px' width:'auto' style='background-color:#0197FA' alt=''></img> el tamaño del texto. <br> Comencemos con un ejemplo para practicar...</p >"
                );

                $("#Entendido").html("Entendido");

                $("#Modal_2").show();
                break;
            case 2:
                $("#Entendido").attr("data-dismiss", "modal");
                break;
            case 3:
                $("#Modal_2").attr("ID", "Modal_4");

                $("#Modal_Title").html("¿Cuál era la Respuesta Correcta?");

                $("#Modal_Body").html(
                    "<p>En el texto anterior, la información incoherente que debía ser seleccionada era: <b>'Se interesa así por los cambios en el psiquismo inconsciente entre las tópicas freudianas.'</b><br> Hagamos otro ejercicio de práctica..."
                );

                $("#Modal_4").modal("toggle");
                break;
            case 4:
                mostrarTextoSiguiente(Ejemplo_2);
                Habilitar_Resaltar = 0;
                break;

            case 5:
                $("#Modal_4").attr("ID", "Modal_5");

                $("#Modal_Title").html("¿Cuál era la Respuesta Correcta?");

                $("#Modal_Body").html(
                    "<p>El texto anterior <b>no contenía información errónea o incoherente</b>, por ello la respuesta correcta era: No.<hr>Hasta aquí la práctica.<br> A continuación,  seguirás con la actividad propiamente dicha.  <hr> Se presentará el texto, deberás leerlo y decidir si contiene o no información errónea o incoherente (seleccionando, luego, la opción correspondiente). En caso afirmativo tendrás que resaltarla antes de continuar con el próximo ejercicio.</p>"
                );

                $("#Modal_5").modal("toggle");
                break;
            default:
                Presento_Texto(Orden_de_Presentacion_Array[Secuencia - 6]);
                break;
            case Orden_de_Presentacion_Array.length + 6: //Termino los 30 textos

                $("#Libros").val(Libros);
                $("#Orden_de_Presentacion").val(Orden_de_Presentacion);

                var f = "";
                var string = "";

                for (var i = 0; i < Respuesta_Total.length; i++) {

                    a(Respuesta_Total[i]);

                    function a(x) {
                        //x[0]  // A1
                        //x[1]  // Si
                        //x[2]  // la psicología cognitiva...
                        //x[3]  // 34-35-36-37-40-50
                        //x[4]  // 34567 int

                        string = x[0] + "|" + x[1] + "|" + x[2] + "|" + x[3] + "|" + x[4];
                    }

                    switch (i) {
                        default:
                            f = f + string + "~";
                            break;
                        case Respuesta_Total.length - 1:
                            f = f + string;
                            break;
                    }
                }

                $("#Respuesta_Total").val(f);
                $("#Submit").click();
                break;
        }
    }
    Itinerario();
});