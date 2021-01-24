using System;
using System.Collections.Generic;
using System.Linq;
using Comprension.Models;
using System.IO;
using System.Web.Mvc;
using SpreadsheetLight;
using DocumentFormat.OpenXml.Spreadsheet;
using System.Globalization;

namespace Comprension.Controllers
{
    public class HomeController : Controller
    {
        //PRIMERA PARTE - DIGITOS

        /// <summary>
        /// Si accede desde un dispositivo Móvil: No puede Ingresar al Consentimiento
        /// Si accede desde una computadora de Escritorio: Accede al Consentimiento
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            /*if (Request.Browser.IsMobileDevice)
            {
                return View("~/Views/Home/Mobile.cshtml");
            }
            else
            {*/
            return View("~/Views/Home/Consentimiento.cshtml");
            //}          
        }

        /// <summary>
        /// "CrearSujeto" - Crea un Sujeto Experimental Nuevo y lo Guarda en Session
        /// </summary>
        /// <param name="Apellido"></param>
        /// <param name="Nombre"></param>
        /// <param name="Edad"></param>
        /// <param name="Sexo"></param>
        /// <param name="Nivel_Educativo"></param>
        /// <param name="Ultimos_DNI"></param>
        /// <param name="Lugar_de_Residencia"></param>
        /// <param name="Mail"></param>
        [HttpPost]
        public ActionResult Digitos(string Apellido, string Nombre, int Edad, string Sexo, string Nivel_Educativo, string Ultimos_DNI, string Lugar_de_Residencia, string Mail)
        {
            HomeManager Manager = new HomeManager();

            if (Manager.Consultar(Mail) == null)
            {
                Sujeto Sujeto = new Sujeto();

                Sujeto.FechayHora_Entrada_Digitos = Fecha_Hora_ARG(); //Fecha y Hora al momento de Aceptar el Concentimiento Informado
                Sujeto.Apellido = Apellido.ToUpper();
                Sujeto.Nombre = Nombre.ToUpper();
                Sujeto.Edad = Edad;
                Sujeto.Sexo = Sexo;
                Sujeto.Nivel_Educativo = Nivel_Educativo;
                Sujeto.Ultimos_DNI = Ultimos_DNI;
                Sujeto.Lugar_de_Residencia = Lugar_de_Residencia;
                Sujeto.Mail = Mail;

                Session["Sujeto"] = Sujeto;

                return View("~/Views/Home/Digitos.cshtml");
            }
            else
            {
                ViewBag.Error = "El Mail ingresado ya existe. Ingrese otra dirección de correo electrónico.";
                return View("~/Views/Home/Consentimiento.cshtml");
            }
        }

        /// <summary>
        /// "CargarRespuestaDigitos" - Carga al Sujeto almacenado en Session con sus respectivos puntajes y TR de las tareas de Dígitos Directo y Ordenamiento Dígito-Letra
        /// </summary>
        /// <param name="Respuesta_DD"></param>
        /// <param name="Puntaje_DD"></param>
        /// <param name="DD_TR"></param>
        /// <param name="Respuesta_DL"></param>
        /// <param name="Puntaje_DL"></param>
        /// <param name="DL_TR"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CargarDigitos(string Respuesta_DD, int Puntaje_DD, int DD_TR, string Respuesta_DL, int Puntaje_DL, int DL_TR)
        {
            Sujeto Sujeto = new Sujeto();
            Sujeto = Session["Sujeto"] as Sujeto;
            
            Sujeto.FechayHora_Salida_Digitos = Fecha_Hora_ARG();

            Sujeto.Respuesta_DD = Respuesta_DD;
            Sujeto.Puntaje_DD = Puntaje_DD;
            Sujeto.DD_TR = DD_TR;

            Sujeto.Respuesta_DL = Respuesta_DL;
            Sujeto.Puntaje_DL = Puntaje_DL;
            Sujeto.DL_TR = DL_TR;

            Sujeto.Completo_Digitos = "Si";
            Sujeto.Completo_Monitoreo = "No";
            Sujeto.Completo_Comprension = "No";

            HomeManager Manager = new HomeManager();
            Manager.Cargar(Sujeto);

            ViewBag.Parte = "Primera Parte";
            return View("~/Views/Home/FinalParcial.cshtml");
        }

        //SEGUNDA PARTE - MONITOREO

        public ActionResult Monitoreo()
        {
            ViewBag.Parte = "Segunda Parte";
            ViewBag.Action = "MonitoreoTest";
            return View("~/Views/Home/ContinuarEjercicios.cshtml");
        }

        /// <summary>
        /// Comprueba si el Mail y los Últimos del DNI son correctos antes de continuar
        /// </summary>
        /// <param name="Mail"></param>
        /// <param name="digitos_DNI"></param>
        /// <returns></returns>
        public ActionResult MonitoreoTest(string Mail, string digitos_DNI) {
            try {
                HomeManager Manager = new HomeManager();
                Sujeto Sujeto = Manager.ConsultarDatos(Mail);

                if (digitos_DNI == Sujeto.Ultimos_DNI &&
                    Sujeto.Completo_Digitos == "Si" &&
                    Sujeto.Completo_Monitoreo == "No" &&
                    Sujeto.Completo_Comprension == "No")
                {
                    Session["ID"] = Sujeto.ID;
                    Session["FechayHora_Entrada_Monitoreo"] = Fecha_Hora_ARG();
                    return View("~/Views/Home/Monitoreo.cshtml");
                }
                else
                {
                    return View("~/Views/Home/Error.cshtml");
                }
            }
            catch (NullReferenceException) {
                return View("~/Views/Home/Error.cshtml");
            }
        }

        /// <summary>
        /// "CargarRespuestaMonitoreo" - Carga las respuestas de Monitoreo
        /// </summary>
        /// <param name="Libros"></param>
        /// <param name="Orden_de_Presentacion"></param>
        /// <param name="Respuesta_Total"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CargarMonitoreo(string Libros, string Orden_de_Presentacion, string Respuesta_Total)
        {
            Sujeto Sujeto = new Sujeto();
            
            Sujeto.FechayHora_Salida_Monitoreo = Fecha_Hora_ARG();
            Sujeto.FechayHora_Entrada_Monitoreo = (string)Session["FechayHora_Entrada_Monitoreo"];
            
            Sujeto.ID = (string)Session["ID"];

            Sujeto.Libros = Libros;
            Sujeto.Orden_de_Presentacion = Orden_de_Presentacion;
            Sujeto.Respuesta_Monitoreo = Respuesta_Total;

            Sujeto.Completo_Monitoreo = "Si";

            HomeManager Manager = new HomeManager();

            Manager.ActualizarMonitoreo(Sujeto);

            ViewBag.Parte = "Segunda Parte";
            return View("~/Views/Home/FinalParcial.cshtml");
        }

        //TERCERA PARTE - COMPRENSION

        public ActionResult Comprension()
        {
            ViewBag.Parte = "Tercera Parte";
            ViewBag.Action = "ComprensionTest";
            return View("~/Views/Home/ContinuarEjercicios.cshtml");
        }
        
        /// <summary>
        /// Verifica si el Mail y los Últimos del DNI son correctos antes de continuar
        /// </summary>
        /// <param name="Mail"></param>
        /// <param name="digitos_DNI"></param>
        /// <returns></returns>
        public ActionResult ComprensionTest(string Mail, string digitos_DNI)
        {
            try
            {
                HomeManager Manager = new HomeManager();
                Sujeto Sujeto = Manager.ConsultarDatos(Mail);

                if (digitos_DNI == Sujeto.Ultimos_DNI &&
                    Sujeto.Completo_Digitos == "Si" &&
                    Sujeto.Completo_Monitoreo == "Si" &&
                    Sujeto.Completo_Comprension == "No")
                {
                    Session["ID"] = Sujeto.ID;
                    Session["FechayHora_Entrada_Comprension"] = Fecha_Hora_ARG();
                    return View("~/Views/Home/Comprension.cshtml");
                }
                else
                {
                    return View("~/Views/Home/Error.cshtml");
                }
            }
            catch (NullReferenceException)
            {
                return View("~/Views/Home/Error.cshtml");
            }
        }

        /// <summary>
        /// "CargarRespuestaComprension" - Carga las Respuestas de Comprensión
        /// </summary>
        /// <param name="Lectura_A_TR"></param>
        /// <param name="Lectura_B_TR"></param>
        /// <param name="Cuestionario_A_TR"></param>
        /// <param name="Cuestionario_B_TR"></param>
        /// <param name="Comprension_Orden_de_Presentacion"></param>
        /// <param name="Puntaje_A_Comprension"></param>
        /// <param name="Puntaje_B_Comprension"></param>
        /// <param name="Comprension_A1"></param>
        /// <param name="Comprension_A2"></param>
        /// <param name="Comprension_A3"></param>
        /// <param name="Comprension_A4"></param>
        /// <param name="Comprension_A5"></param>
        /// <param name="Comprension_A6"></param>
        /// <param name="Comprension_A7"></param>
        /// <param name="Comprension_A8"></param>
        /// <param name="Comprension_A9"></param>
        /// <param name="Comprension_A10"></param>
        /// <param name="Comprension_B1"></param>
        /// <param name="Comprension_B2"></param>
        /// <param name="Comprension_B3"></param>
        /// <param name="Comprension_B4"></param>
        /// <param name="Comprension_B5"></param>
        /// <param name="Comprension_B6"></param>
        /// <param name="Comprension_B7"></param>
        /// <param name="Comprension_B8"></param>
        /// <param name="Comprension_B9"></param>
        /// <param name="Comprension_B10"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Final(int Lectura_A_TR, int Lectura_B_TR, int Cuestionario_A_TR, int Cuestionario_B_TR, string Comprension_Orden_de_Presentacion, int Puntaje_A_Comprension, int Puntaje_B_Comprension, string Comprension_A1, string Comprension_A2, string Comprension_A3, string Comprension_A4, string Comprension_A5, string
                Comprension_A6, string Comprension_A7, string Comprension_A8, string Comprension_A9, string Comprension_A10, string
                Comprension_B1, string Comprension_B2, string Comprension_B3, string Comprension_B4, string Comprension_B5, string
                Comprension_B6, string Comprension_B7, string Comprension_B8, string Comprension_B9, string Comprension_B10)
        {
            Sujeto Sujeto = new Sujeto();

            Sujeto.FechayHora_Salida_Comprension = Fecha_Hora_ARG();
            Sujeto.FechayHora_Entrada_Comprension = (string)Session["FechayHora_Entrada_Monitoreo"];
            Sujeto.Completo_Comprension = "Si";

            Sujeto.ID = (string)Session["ID"];

            Sujeto.Lectura_A_TR = Lectura_A_TR;
            Sujeto.Lectura_B_TR = Lectura_B_TR;

            Sujeto.Cuestionario_A_TR = Cuestionario_A_TR;
            Sujeto.Cuestionario_B_TR = Cuestionario_B_TR;

            Sujeto.Comprension_Orden_de_Presentacion = Comprension_Orden_de_Presentacion;

            Sujeto.Puntaje_A_Comprension = Puntaje_A_Comprension;
            Sujeto.Puntaje_B_Comprension = Puntaje_B_Comprension;

            Sujeto.Comprension_A1 = Comprension_A1;
            Sujeto.Comprension_A2 = Comprension_A2;
            Sujeto.Comprension_A3 = Comprension_A3;
            Sujeto.Comprension_A4 = Comprension_A4;
            Sujeto.Comprension_A5 = Comprension_A5;
            Sujeto.Comprension_A6 = Comprension_A6;
            Sujeto.Comprension_A7 = Comprension_A7;
            Sujeto.Comprension_A8 = Comprension_A8;
            Sujeto.Comprension_A9 = Comprension_A9;
            Sujeto.Comprension_A10 = Comprension_A10;

            Sujeto.Comprension_B1 = Comprension_B1;
            Sujeto.Comprension_B2 = Comprension_B2;
            Sujeto.Comprension_B3 = Comprension_B3;
            Sujeto.Comprension_B4 = Comprension_B4;
            Sujeto.Comprension_B5 = Comprension_B5;
            Sujeto.Comprension_B6 = Comprension_B6;
            Sujeto.Comprension_B7 = Comprension_B7;
            Sujeto.Comprension_B8 = Comprension_B8;
            Sujeto.Comprension_B9 = Comprension_B9;
            Sujeto.Comprension_B10 = Comprension_B10;

            HomeManager Manager = new HomeManager();
            Manager.ActualizarComprension(Sujeto);

            return View("~/Views/Home/Final.cshtml");
        }

        /// <summary>
        /// Permite descargar un archivo .xlsx con los datos de la BBDD
        /// </summary>
        /// <returns></returns>
        public FileResult Exportar()
        {
            Borrar_Archivos();

            HomeManager Manager = new HomeManager();
            Dictionary<int, Sujeto> SujetosBase = Manager.LeerBase();

            SLDocument Libro = new SLDocument(Server.MapPath("~/Exportar/Documento_Modelo/Base_de_Datos.xlsx"));

            Libro.SelectWorksheet("Datos");
            for (int i = 1; i < SujetosBase.Count() + 1; i++)
            {
                Sujeto Sujeto = SujetosBase[i];

                int Fila = i + 1;

                Libro.SetCellValue("A" + Fila, Sujeto.Completo_Digitos);
                Libro.SetCellValue("B" + Fila, Sujeto.Completo_Monitoreo);
                Libro.SetCellValue("C" + Fila, Sujeto.Completo_Comprension);

                //FechayHora_Dígitos
                Libro.SetCellValue("D" + Fila, Sujeto.FechayHora_Entrada_Digitos);
                Libro.SetCellValue("E" + Fila, Sujeto.FechayHora_Salida_Digitos);

                //Duración_Dígitos
                string FechayHoraInicio = Sujeto.FechayHora_Entrada_Digitos;
                string FechayHoraSalida = Sujeto.FechayHora_Salida_Digitos;
                Libro.SetCellValue("F" + Fila, Obtener_Duracion(FechayHoraInicio, FechayHoraSalida));

                //FechayHora_Monitoreo
                Libro.SetCellValue("G" + Fila, Sujeto.FechayHora_Entrada_Monitoreo);
                Libro.SetCellValue("H" + Fila, Sujeto.FechayHora_Salida_Monitoreo);

                //Duración_Monitoreo
                FechayHoraInicio = Sujeto.FechayHora_Entrada_Monitoreo;
                FechayHoraSalida = Sujeto.FechayHora_Salida_Monitoreo;
                Libro.SetCellValue("I" + Fila, Obtener_Duracion(FechayHoraInicio, FechayHoraSalida));

                //FechayHora_Comprension
                Libro.SetCellValue("J" + Fila, Sujeto.FechayHora_Entrada_Comprension);
                Libro.SetCellValue("K" + Fila, Sujeto.FechayHora_Salida_Comprension);

                //Duración_Comprension
                FechayHoraInicio = Sujeto.FechayHora_Entrada_Comprension;
                FechayHoraSalida = Sujeto.FechayHora_Salida_Comprension;
                Libro.SetCellValue("L" + Fila, Obtener_Duracion(FechayHoraInicio, FechayHoraSalida));

                //Datos Sociodemográficos
                Libro.SetCellValue("M" + Fila, Int32.Parse(Sujeto.ID));
                Libro.SetCellValue("N" + Fila, Sujeto.Apellido);
                Libro.SetCellValue("O" + Fila, Sujeto.Nombre);
                Libro.SetCellValue("P" + Fila, Sujeto.Edad);
                Libro.SetCellValue("Q" + Fila, Sujeto.Sexo);
                Libro.SetCellValue("R" + Fila, Sujeto.Nivel_Educativo);
                //S Nivel_Educativo_Años
                Libro.SetCellValue("T" + Fila, Sujeto.Ultimos_DNI);
                Libro.SetCellValue("U" + Fila, Sujeto.Lugar_de_Residencia);
                Libro.SetCellValue("V" + Fila, Sujeto.Mail);

                //Dígitos Directos
                Libro.SetCellValue("W" + Fila, Sujeto.Respuesta_DD);
                Libro.SetCellValue("X" + Fila, Sujeto.Puntaje_DD);
                Libro.SetCellValue("Y" + Fila, Sujeto.DD_TR);

                //Dígito-Letra
                Libro.SetCellValue("Z" + Fila, Sujeto.Respuesta_DL);
                Libro.SetCellValue("AA" + Fila, Sujeto.Puntaje_DL);
                Libro.SetCellValue("AB" + Fila, Sujeto.DL_TR);

                //Monitoreo
                Libro.SetCellValue("AC" + Fila, Sujeto.Libros);
                Libro.SetCellValue("AD" + Fila, Sujeto.Orden_de_Presentacion);
                Libro.SetCellValue("AE" + Fila, Sujeto.Respuesta_Monitoreo);

                //Respuesta Si, No
                Libro.SetCellValue("AF" + Fila, Sujeto.A1_SN);
                Libro.SetCellValue("AG" + Fila, Sujeto.A1_Respuesta);
                Libro.SetCellValue("AH" + Fila, Sujeto.A2_SN);
                Libro.SetCellValue("AI" + Fila, Sujeto.A2_Respuesta);
                Libro.SetCellValue("AJ" + Fila, Sujeto.A3_SN);
                Libro.SetCellValue("AK" + Fila, Sujeto.A3_Respuesta);
                Libro.SetCellValue("AL" + Fila, Sujeto.A4_SN);
                Libro.SetCellValue("AM" + Fila, Sujeto.A4_Respuesta);
                Libro.SetCellValue("AN" + Fila, Sujeto.A5_SN);
                Libro.SetCellValue("AO" + Fila, Sujeto.A5_Respuesta);
                Libro.SetCellValue("AP" + Fila, Sujeto.A6_SN);
                Libro.SetCellValue("AQ" + Fila, Sujeto.A6_Respuesta);
                Libro.SetCellValue("AR" + Fila, Sujeto.A7_SN);
                Libro.SetCellValue("AS" + Fila, Sujeto.A7_Respuesta);
                Libro.SetCellValue("AT" + Fila, Sujeto.A8_SN);
                Libro.SetCellValue("AU" + Fila, Sujeto.A8_Respuesta);
                Libro.SetCellValue("AV" + Fila, Sujeto.A9_SN);
                Libro.SetCellValue("AW" + Fila, Sujeto.A9_Respuesta);
                Libro.SetCellValue("AX" + Fila, Sujeto.A10_SN);
                Libro.SetCellValue("AY" + Fila, Sujeto.A10_Respuesta);
                Libro.SetCellValue("AZ" + Fila, Sujeto.A11_SN);
                Libro.SetCellValue("BA" + Fila, Sujeto.A11_Respuesta);
                Libro.SetCellValue("BB" + Fila, Sujeto.A12_SN);
                Libro.SetCellValue("BC" + Fila, Sujeto.A12_Respuesta);
                Libro.SetCellValue("BD" + Fila, Sujeto.A13_SN);
                Libro.SetCellValue("BE" + Fila, Sujeto.A13_Respuesta);
                Libro.SetCellValue("BF" + Fila, Sujeto.A14_SN);
                Libro.SetCellValue("BG" + Fila, Sujeto.A14_Respuesta);
                Libro.SetCellValue("BH" + Fila, Sujeto.A15_SN);
                Libro.SetCellValue("BI" + Fila, Sujeto.A15_Respuesta);

                Libro.SetCellValue("BJ" + Fila, Sujeto.B1_SN);
                Libro.SetCellValue("BK" + Fila, Sujeto.B1_Respuesta);
                Libro.SetCellValue("BL" + Fila, Sujeto.B2_SN);
                Libro.SetCellValue("BM" + Fila, Sujeto.B2_Respuesta);
                Libro.SetCellValue("BN" + Fila, Sujeto.B3_SN);
                Libro.SetCellValue("BO" + Fila, Sujeto.B3_Respuesta);
                Libro.SetCellValue("BP" + Fila, Sujeto.B4_SN);
                Libro.SetCellValue("BQ" + Fila, Sujeto.B4_Respuesta);
                Libro.SetCellValue("BR" + Fila, Sujeto.B5_SN);
                Libro.SetCellValue("BS" + Fila, Sujeto.B5_Respuesta);
                Libro.SetCellValue("BT" + Fila, Sujeto.B6_SN);
                Libro.SetCellValue("BU" + Fila, Sujeto.B6_Respuesta);
                Libro.SetCellValue("BV" + Fila, Sujeto.B7_SN);
                Libro.SetCellValue("BW" + Fila, Sujeto.B7_Respuesta);
                Libro.SetCellValue("BX" + Fila, Sujeto.B8_SN);
                Libro.SetCellValue("BY" + Fila, Sujeto.B8_Respuesta);
                Libro.SetCellValue("BZ" + Fila, Sujeto.B9_SN);
                Libro.SetCellValue("CA" + Fila, Sujeto.B9_Respuesta);
                Libro.SetCellValue("CB" + Fila, Sujeto.B10_SN);
                Libro.SetCellValue("CC" + Fila, Sujeto.B10_Respuesta);
                Libro.SetCellValue("CD" + Fila, Sujeto.B11_SN);
                Libro.SetCellValue("CE" + Fila, Sujeto.B11_Respuesta);
                Libro.SetCellValue("CF" + Fila, Sujeto.B12_SN);
                Libro.SetCellValue("CG" + Fila, Sujeto.B12_Respuesta);
                Libro.SetCellValue("CH" + Fila, Sujeto.B13_SN);
                Libro.SetCellValue("CI" + Fila, Sujeto.B13_Respuesta);
                Libro.SetCellValue("CJ" + Fila, Sujeto.B14_SN);
                Libro.SetCellValue("CK" + Fila, Sujeto.B14_Respuesta);
                Libro.SetCellValue("CL" + Fila, Sujeto.B15_SN);
                Libro.SetCellValue("CM" + Fila, Sujeto.B15_Respuesta);

                //Índice de la Selección hecha
                Libro.SetCellValue("CN" + Fila, Sujeto.A1_Respuesta_Indice);
                Libro.SetCellValue("CO" + Fila, Sujeto.A2_Respuesta_Indice);
                Libro.SetCellValue("CP" + Fila, Sujeto.A3_Respuesta_Indice);
                Libro.SetCellValue("CQ" + Fila, Sujeto.A4_Respuesta_Indice);
                Libro.SetCellValue("CR" + Fila, Sujeto.A5_Respuesta_Indice);
                Libro.SetCellValue("CS" + Fila, Sujeto.A6_Respuesta_Indice);
                Libro.SetCellValue("CT" + Fila, Sujeto.A7_Respuesta_Indice);
                Libro.SetCellValue("CU" + Fila, Sujeto.A8_Respuesta_Indice);
                Libro.SetCellValue("CV" + Fila, Sujeto.A9_Respuesta_Indice);
                Libro.SetCellValue("CW" + Fila, Sujeto.A10_Respuesta_Indice);
                Libro.SetCellValue("CX" + Fila, Sujeto.A11_Respuesta_Indice);
                Libro.SetCellValue("CY" + Fila, Sujeto.A12_Respuesta_Indice);
                Libro.SetCellValue("CZ" + Fila, Sujeto.A13_Respuesta_Indice);
                Libro.SetCellValue("DA" + Fila, Sujeto.A14_Respuesta_Indice);
                Libro.SetCellValue("DB" + Fila, Sujeto.A15_Respuesta_Indice);

                Libro.SetCellValue("DC" + Fila, Sujeto.B1_Respuesta_Indice);
                Libro.SetCellValue("DD" + Fila, Sujeto.B2_Respuesta_Indice);
                Libro.SetCellValue("DE" + Fila, Sujeto.B3_Respuesta_Indice);
                Libro.SetCellValue("DF" + Fila, Sujeto.B4_Respuesta_Indice);
                Libro.SetCellValue("DG" + Fila, Sujeto.B5_Respuesta_Indice);
                Libro.SetCellValue("DH" + Fila, Sujeto.B6_Respuesta_Indice);
                Libro.SetCellValue("DI" + Fila, Sujeto.B7_Respuesta_Indice);
                Libro.SetCellValue("DJ" + Fila, Sujeto.B8_Respuesta_Indice);
                Libro.SetCellValue("DK" + Fila, Sujeto.B9_Respuesta_Indice);
                Libro.SetCellValue("DL" + Fila, Sujeto.B10_Respuesta_Indice);
                Libro.SetCellValue("DM" + Fila, Sujeto.B11_Respuesta_Indice);
                Libro.SetCellValue("DN" + Fila, Sujeto.B12_Respuesta_Indice);
                Libro.SetCellValue("DO" + Fila, Sujeto.B13_Respuesta_Indice);
                Libro.SetCellValue("DP" + Fila, Sujeto.B14_Respuesta_Indice);
                Libro.SetCellValue("DQ" + Fila, Sujeto.B15_Respuesta_Indice);

                //TR de cada una de las Respuestas
                Libro.SetCellValue("DR" + Fila, Sujeto.A1_TR);
                Libro.SetCellValue("DS" + Fila, Sujeto.A2_TR);
                Libro.SetCellValue("DT" + Fila, Sujeto.A3_TR);
                Libro.SetCellValue("DU" + Fila, Sujeto.A4_TR);
                Libro.SetCellValue("DV" + Fila, Sujeto.A5_TR);
                Libro.SetCellValue("DW" + Fila, Sujeto.A6_TR);
                Libro.SetCellValue("DX" + Fila, Sujeto.A7_TR);
                Libro.SetCellValue("DY" + Fila, Sujeto.A8_TR);
                Libro.SetCellValue("DZ" + Fila, Sujeto.A9_TR);
                Libro.SetCellValue("EA" + Fila, Sujeto.A10_TR);
                Libro.SetCellValue("EB" + Fila, Sujeto.A11_TR);
                Libro.SetCellValue("EC" + Fila, Sujeto.A12_TR);
                Libro.SetCellValue("ED" + Fila, Sujeto.A13_TR);
                Libro.SetCellValue("EE" + Fila, Sujeto.A14_TR);
                Libro.SetCellValue("EF" + Fila, Sujeto.A15_TR);

                Libro.SetCellValue("EG" + Fila, Sujeto.B1_TR);
                Libro.SetCellValue("EH" + Fila, Sujeto.B2_TR);
                Libro.SetCellValue("EI" + Fila, Sujeto.B3_TR);
                Libro.SetCellValue("EJ" + Fila, Sujeto.B4_TR);
                Libro.SetCellValue("EK" + Fila, Sujeto.B5_TR);
                Libro.SetCellValue("EL" + Fila, Sujeto.B6_TR);
                Libro.SetCellValue("EM" + Fila, Sujeto.B7_TR);
                Libro.SetCellValue("EN" + Fila, Sujeto.B8_TR);
                Libro.SetCellValue("EO" + Fila, Sujeto.B9_TR);
                Libro.SetCellValue("EP" + Fila, Sujeto.B10_TR);
                Libro.SetCellValue("EQ" + Fila, Sujeto.B11_TR);
                Libro.SetCellValue("ER" + Fila, Sujeto.B12_TR);
                Libro.SetCellValue("ES" + Fila, Sujeto.B13_TR);
                Libro.SetCellValue("ET" + Fila, Sujeto.B14_TR);
                Libro.SetCellValue("EU" + Fila, Sujeto.B15_TR);

                //Comprensión
                Libro.SetCellValue("EV" + Fila, Sujeto.Comprension_Orden_de_Presentacion);

                Libro.SetCellValue("EW" + Fila, Sujeto.Comprension_A1);
                Libro.SetCellValue("EX" + Fila, Sujeto.Comprension_A2);
                Libro.SetCellValue("EY" + Fila, Sujeto.Comprension_A3);
                Libro.SetCellValue("EZ" + Fila, Sujeto.Comprension_A4);
                Libro.SetCellValue("FA" + Fila, Sujeto.Comprension_A5);
                Libro.SetCellValue("FB" + Fila, Sujeto.Comprension_A6);
                Libro.SetCellValue("FC" + Fila, Sujeto.Comprension_A7);
                Libro.SetCellValue("FD" + Fila, Sujeto.Comprension_A8);
                Libro.SetCellValue("FE" + Fila, Sujeto.Comprension_A9);
                Libro.SetCellValue("FF" + Fila, Sujeto.Comprension_A10);

                Libro.SetCellValue("FG" + Fila, Sujeto.Comprension_B1);
                Libro.SetCellValue("FH" + Fila, Sujeto.Comprension_B2);
                Libro.SetCellValue("FI" + Fila, Sujeto.Comprension_B3);
                Libro.SetCellValue("FJ" + Fila, Sujeto.Comprension_B4);
                Libro.SetCellValue("FK" + Fila, Sujeto.Comprension_B5);
                Libro.SetCellValue("FL" + Fila, Sujeto.Comprension_B6);
                Libro.SetCellValue("FM" + Fila, Sujeto.Comprension_B7);
                Libro.SetCellValue("FN" + Fila, Sujeto.Comprension_B8);
                Libro.SetCellValue("FO" + Fila, Sujeto.Comprension_B9);
                Libro.SetCellValue("FP" + Fila, Sujeto.Comprension_B10);

                Libro.SetCellValue("FQ" + Fila, Sujeto.Puntaje_A_Comprension);
                Libro.SetCellValue("FR" + Fila, Sujeto.Puntaje_B_Comprension);
                Libro.SetCellValue("FS" + Fila, Sujeto.Lectura_A_TR);
                Libro.SetCellValue("FT" + Fila, Sujeto.Lectura_B_TR);
                Libro.SetCellValue("FU" + Fila, Sujeto.Cuestionario_A_TR);
                Libro.SetCellValue("FV" + Fila, Sujeto.Cuestionario_B_TR);
            }

            //Formato del Excel
            SLStyle Estilo = new SLStyle();
            Estilo.Alignment.Horizontal = HorizontalAlignmentValues.Center;
            Estilo.Alignment.Vertical = VerticalAlignmentValues.Center;

            Libro.SetColumnStyle(1, 178, Estilo);

            Libro.AutoFitColumn(1, 22);
            Libro.AutoFitColumn(24, 25);
            Libro.AutoFitColumn(27, 30);
            Libro.AutoFitColumn(122, 178);

            SLStyle Estilo_3 = new SLStyle();
            Estilo_3.Border.BottomBorder.BorderStyle = BorderStyleValues.Medium;

            Libro.SetRowStyle(1, Estilo_3);

            SLStyle Estilo_4 = new SLStyle();
            Estilo_4.Border.RightBorder.BorderStyle = BorderStyleValues.Medium;

            Libro.SetColumnStyle(1, Estilo_4);
            Libro.SetColumnStyle(2, Estilo_4);
            Libro.SetColumnStyle(3, Estilo_4);
            Libro.SetColumnStyle(6, Estilo_4);
            Libro.SetColumnStyle(9, Estilo_4);
            Libro.SetColumnStyle(12, Estilo_4);
            Libro.SetColumnStyle(22, Estilo_4);
            Libro.SetColumnStyle(25, Estilo_4);
            Libro.SetColumnStyle(28, Estilo_4);
            Libro.SetColumnStyle(151, Estilo_4);
            Libro.SetColumnStyle(178, Estilo_4);

            Libro.DeleteRow(SujetosBase.Count() + 2, 1000 - SujetosBase.Count() + 2);
            Libro.SetActiveCell("A1");

            //Nombre del Archivo y Descarga
            string Fecha = Fecha_Hora_ARG();        //11/01/2020 09:00:47
            Fecha = Fecha.Replace("/", "-");
            Fecha = Fecha.Replace(":", ".");
            Fecha = Fecha.Replace(" ", "_");

            string Nombre_Archivo = "Base_de_Datos_" + Fecha + ".xlsx";
            string Ruta = Server.MapPath("~/Exportar/" + Nombre_Archivo);

            Libro.SaveAs(Ruta);

            Libro.Dispose();

            return File(Ruta, "application/xlsx", Nombre_Archivo);
        }

        public string Obtener_Duracion(string FechayHoraInicio, string FechayHoraSalida) {
            string Dato = "";

            if (FechayHoraInicio != "" && FechayHoraInicio != null && FechayHoraSalida != "" && FechayHoraSalida != null)
            {
                try
                {
                    CultureInfo Culture = new CultureInfo("es-Es");
                    DateTime F = DateTime.Parse(FechayHoraInicio, Culture);
                    DateTime G = DateTime.Parse(FechayHoraSalida, Culture);

                    Dato = (G.Subtract(F)).ToString();
                    return Dato;
                }
                catch (System.FormatException)
                {
                    return Dato;
                }
            }
            else {
                return Dato;
            }
        }

        /// <summary>
        /// Borra todos los Archivos que se encuentran en Exportar
        /// </summary>
        private void Borrar_Archivos()
        {
            try
            {
                string[] Archivos = Directory.GetFiles(Server.MapPath("~/Exportar/"));

                foreach (string Z in Archivos)
                {
                    System.IO.File.Delete(Z);
                }
            }
            catch
            {
            }
        }

        /// <summary>
        /// Permite obtener la fecha y hora Argentina UTC-3
        /// </summary>
        /// <returns></returns>
        private string Fecha_Hora_ARG()
        {
            CultureInfo Culture = new CultureInfo("es-Es");

            string Fecha = DateTime.UtcNow.ToString("d", Culture); //11/01/2020
            string Hora = DateTime.UtcNow.ToString("T", Culture);  //12:00:47 UTC
            string Hora_ARG;

            //Las 00, 01 y 02 en UTC corresponden a las 21, 22 y 23 del día anterior en UTC -3 ARG
            char[] charSeparators = new char[] { ':' };
            string[] Tiempo_Partido = Hora.Split(charSeparators, StringSplitOptions.None); //[12, 00, 47]

            // a es el string de la hora correspondiente UTC --> UTC -3 [00 --> 21, 01--> 22, 02 --> 23]
            void Restar_Hora_Fecha(string a) {
                Fecha = DateTime.UtcNow.AddDays(-1).ToString("d", Culture);
                Hora_ARG = a + ":" + Tiempo_Partido[1] + ":" + Tiempo_Partido[2];
            }

            switch (Tiempo_Partido[0]) {
                default: int b = Int32.Parse(Tiempo_Partido[0]) - 3;
                    Hora_ARG = b.ToString() + ":" + Tiempo_Partido[1] + ":" + Tiempo_Partido[2];    //Argentina UTC-3

                    if (b < 10)
                    {
                        Hora_ARG = "0" + Hora_ARG;    //Argentina UTC-3
                    }
                    break;

                case "0":
                    Restar_Hora_Fecha("21");
                    break;

                case "00": Restar_Hora_Fecha("21");
                    break;

                case "1":
                    Restar_Hora_Fecha("22");
                    break;

                case "01": Restar_Hora_Fecha("22");
                    break;

                case "2":
                    Restar_Hora_Fecha("23");
                    break;

                case "02":
                    Restar_Hora_Fecha("23");
                    break;
            }

            return Fecha + " " + Hora_ARG; //11/01/2020 09:00:47
        }
    }
}