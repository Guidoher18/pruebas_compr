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
        /// <param name="Lugar_de_Residencia"></param>
        /// <param name="Mail"></param>
        [HttpPost]
        public ActionResult Digitos(string Apellido, string Nombre, int Edad, string Sexo, string Nivel_Educativo, string Lugar_de_Residencia, string Mail)
        {
            HomeManager Manager = new HomeManager();

            if (Manager.Consultar(Mail) == null)
            {
                Sujeto Sujeto = new Sujeto();

                Sujeto.FechayHora_Entrada = Fecha_Hora_ARG(); //Fecha y Hora al momento de Aceptar el Concentimiento Informado
                Sujeto.Apellido = Apellido.ToUpper();
                Sujeto.Nombre = Nombre.ToUpper();
                Sujeto.Edad = Edad;
                Sujeto.Sexo = Sexo;
                Sujeto.Nivel_Educativo = Nivel_Educativo;
                Sujeto.Lugar_de_Residencia = Lugar_de_Residencia;
                Sujeto.Mail = Mail;

                Session["Sujeto"] = Sujeto;
                Session.Timeout = 60;
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
        public ActionResult Monitoreo(string Respuesta_DD, int Puntaje_DD, int DD_TR, string Respuesta_DL, int Puntaje_DL, int DL_TR)
        {
            Sujeto Sujeto = new Sujeto();
            Sujeto = Session["Sujeto"] as Sujeto;

            Sujeto.Respuesta_DD = Respuesta_DD;
            Sujeto.Puntaje_DD = Puntaje_DD;
            Sujeto.DD_TR = DD_TR;

            Sujeto.Respuesta_DL = Respuesta_DL;
            Sujeto.Puntaje_DL = Puntaje_DL;
            Sujeto.DL_TR = DL_TR;
            Session.Clear();

            HomeManager Manager = new HomeManager();
            Session["Sujeto.ID"] = Manager.Cargar(Sujeto);

            return View("~/Views/Home/Monitoreo.cshtml");
        }

        /// <summary>
        /// "CargarRespuestaMonitoreo" - Carga las respuestas de Monitoreo
        /// </summary>
        /// <param name="Libros"></param>
        /// <param name="Orden_de_Presentacion"></param>
        /// <param name="Respuesta_Total"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Comprension(string Libros, string Orden_de_Presentacion, string Respuesta_Total)
        {
            Sujeto Sujeto = new Sujeto();

            Sujeto.ID = (string)Session["Sujeto.ID"];

            Sujeto.Libros = Libros;
            Sujeto.Orden_de_Presentacion = Orden_de_Presentacion;
            Sujeto.Respuesta_Monitoreo = Respuesta_Total;

            HomeManager Manager = new HomeManager();

            Manager.ActualizarMonitoreo(Sujeto);

            return View("~/Views/Home/Comprension.cshtml");
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
            Sujeto.ID = (string)Session["Suejto.ID"];


            Sujeto.FechayHora_Salida = Fecha_Hora_ARG(); //Fecha y Hora al momento de Finalizar Comprensión

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

            Session.Clear();
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

                //Datos Sociodemográficos
                Libro.SetCellValue("A" + Fila, Sujeto.FechayHora_Entrada);
                Libro.SetCellValue("B" + Fila, Sujeto.FechayHora_Salida);

                // C Duración: duración total de la sesión del Sujeto
                string FechayHoraInicio = Sujeto.FechayHora_Entrada;
                string FechayHoraSalida = Sujeto.FechayHora_Salida;
                string Dato = "";

                if (FechayHoraInicio != "" && FechayHoraInicio != null && FechayHoraSalida != "" && FechayHoraSalida != null)
                {
                    DateTime F = DateTime.Parse(FechayHoraInicio);
                    DateTime G = DateTime.Parse(FechayHoraSalida);
                    Dato = (G.Subtract(F)).ToString();
                }
                else
                {
                    Dato = "";
                }

                Libro.SetCellValue("C" + Fila, Dato);

                Libro.SetCellValue("D" + Fila, Int32.Parse(Sujeto.ID));
                Libro.SetCellValue("E" + Fila, Sujeto.Apellido);
                Libro.SetCellValue("F" + Fila, Sujeto.Nombre);
                Libro.SetCellValue("G" + Fila, Sujeto.Edad);
                Libro.SetCellValue("H" + Fila, Sujeto.Sexo);
                Libro.SetCellValue("I" + Fila, Sujeto.Nivel_Educativo);
                //J Nivel_Educativo_Años
                Libro.SetCellValue("K" + Fila, Sujeto.Lugar_de_Residencia);
                Libro.SetCellValue("L" + Fila, Sujeto.Mail);

                //Dígitos Directos
                Libro.SetCellValue("M" + Fila, Sujeto.Respuesta_DD);
                Libro.SetCellValue("N" + Fila, Sujeto.Puntaje_DD);
                Libro.SetCellValue("O" + Fila, Sujeto.DD_TR);

                //Dígito-Letra
                Libro.SetCellValue("P" + Fila, Sujeto.Respuesta_DL);
                Libro.SetCellValue("Q" + Fila, Sujeto.Puntaje_DL);
                Libro.SetCellValue("R" + Fila, Sujeto.DL_TR);

                //Monitoreo
                Libro.SetCellValue("S" + Fila, Sujeto.Libros);
                Libro.SetCellValue("T" + Fila, Sujeto.Orden_de_Presentacion);
                Libro.SetCellValue("U" + Fila, Sujeto.Respuesta_Monitoreo);

                //Respuesta Si, No
                Libro.SetCellValue("V" + Fila, Sujeto.A1_SN);
                Libro.SetCellValue("W" + Fila, Sujeto.A1_Respuesta);
                Libro.SetCellValue("X" + Fila, Sujeto.A2_SN);
                Libro.SetCellValue("Y" + Fila, Sujeto.A2_Respuesta);
                Libro.SetCellValue("Z" + Fila, Sujeto.A3_SN);
                Libro.SetCellValue("AA" + Fila, Sujeto.A3_Respuesta);
                Libro.SetCellValue("AB" + Fila, Sujeto.A4_SN);
                Libro.SetCellValue("AC" + Fila, Sujeto.A4_Respuesta);
                Libro.SetCellValue("AD" + Fila, Sujeto.A5_SN);
                Libro.SetCellValue("AE" + Fila, Sujeto.A5_Respuesta);
                Libro.SetCellValue("AF" + Fila, Sujeto.A6_SN);
                Libro.SetCellValue("AG" + Fila, Sujeto.A6_Respuesta);
                Libro.SetCellValue("AH" + Fila, Sujeto.A7_SN);
                Libro.SetCellValue("AI" + Fila, Sujeto.A7_Respuesta);
                Libro.SetCellValue("AJ" + Fila, Sujeto.A8_SN);
                Libro.SetCellValue("AK" + Fila, Sujeto.A8_Respuesta);
                Libro.SetCellValue("AL" + Fila, Sujeto.A9_SN);
                Libro.SetCellValue("AM" + Fila, Sujeto.A9_Respuesta);
                Libro.SetCellValue("AN" + Fila, Sujeto.A10_SN);
                Libro.SetCellValue("AO" + Fila, Sujeto.A10_Respuesta);
                Libro.SetCellValue("AP" + Fila, Sujeto.A11_SN);
                Libro.SetCellValue("AQ" + Fila, Sujeto.A11_Respuesta);
                Libro.SetCellValue("AR" + Fila, Sujeto.A12_SN);
                Libro.SetCellValue("AS" + Fila, Sujeto.A12_Respuesta);
                Libro.SetCellValue("AT" + Fila, Sujeto.A13_SN);
                Libro.SetCellValue("AU" + Fila, Sujeto.A13_Respuesta);
                Libro.SetCellValue("AV" + Fila, Sujeto.A14_SN);
                Libro.SetCellValue("AW" + Fila, Sujeto.A14_Respuesta);
                Libro.SetCellValue("AX" + Fila, Sujeto.A15_SN);
                Libro.SetCellValue("AY" + Fila, Sujeto.A15_Respuesta);

                Libro.SetCellValue("AZ" + Fila, Sujeto.B1_SN);
                Libro.SetCellValue("BA" + Fila, Sujeto.B1_Respuesta);
                Libro.SetCellValue("BB" + Fila, Sujeto.B2_SN);
                Libro.SetCellValue("BC" + Fila, Sujeto.B2_Respuesta);
                Libro.SetCellValue("BD" + Fila, Sujeto.B3_SN);
                Libro.SetCellValue("BE" + Fila, Sujeto.B3_Respuesta);
                Libro.SetCellValue("BF" + Fila, Sujeto.B4_SN);
                Libro.SetCellValue("BG" + Fila, Sujeto.B4_Respuesta);
                Libro.SetCellValue("BH" + Fila, Sujeto.B5_SN);
                Libro.SetCellValue("BI" + Fila, Sujeto.B5_Respuesta);
                Libro.SetCellValue("BJ" + Fila, Sujeto.B6_SN);
                Libro.SetCellValue("BK" + Fila, Sujeto.B6_Respuesta);
                Libro.SetCellValue("BL" + Fila, Sujeto.B7_SN);
                Libro.SetCellValue("BM" + Fila, Sujeto.B7_Respuesta);
                Libro.SetCellValue("BN" + Fila, Sujeto.B8_SN);
                Libro.SetCellValue("BO" + Fila, Sujeto.B8_Respuesta);
                Libro.SetCellValue("BP" + Fila, Sujeto.B9_SN);
                Libro.SetCellValue("BQ" + Fila, Sujeto.B9_Respuesta);
                Libro.SetCellValue("BR" + Fila, Sujeto.B10_SN);
                Libro.SetCellValue("BS" + Fila, Sujeto.B10_Respuesta);
                Libro.SetCellValue("BT" + Fila, Sujeto.B11_SN);
                Libro.SetCellValue("BU" + Fila, Sujeto.B11_Respuesta);
                Libro.SetCellValue("BV" + Fila, Sujeto.B12_SN);
                Libro.SetCellValue("BW" + Fila, Sujeto.B12_Respuesta);
                Libro.SetCellValue("BX" + Fila, Sujeto.B13_SN);
                Libro.SetCellValue("BY" + Fila, Sujeto.B13_Respuesta);
                Libro.SetCellValue("BZ" + Fila, Sujeto.B14_SN);
                Libro.SetCellValue("CA" + Fila, Sujeto.B14_Respuesta);
                Libro.SetCellValue("CB" + Fila, Sujeto.B15_SN);
                Libro.SetCellValue("CC" + Fila, Sujeto.B15_Respuesta);

                //Índice de la Selección hecha
                Libro.SetCellValue("CD" + Fila, Sujeto.A1_Respuesta_Indice);
                Libro.SetCellValue("CE" + Fila, Sujeto.A2_Respuesta_Indice);
                Libro.SetCellValue("CF" + Fila, Sujeto.A3_Respuesta_Indice);
                Libro.SetCellValue("CG" + Fila, Sujeto.A4_Respuesta_Indice);
                Libro.SetCellValue("CH" + Fila, Sujeto.A5_Respuesta_Indice);
                Libro.SetCellValue("CI" + Fila, Sujeto.A6_Respuesta_Indice);
                Libro.SetCellValue("CJ" + Fila, Sujeto.A7_Respuesta_Indice);
                Libro.SetCellValue("CK" + Fila, Sujeto.A8_Respuesta_Indice);
                Libro.SetCellValue("CL" + Fila, Sujeto.A9_Respuesta_Indice);
                Libro.SetCellValue("CM" + Fila, Sujeto.A10_Respuesta_Indice);
                Libro.SetCellValue("CN" + Fila, Sujeto.A11_Respuesta_Indice);
                Libro.SetCellValue("CO" + Fila, Sujeto.A12_Respuesta_Indice);
                Libro.SetCellValue("CP" + Fila, Sujeto.A13_Respuesta_Indice);
                Libro.SetCellValue("CQ" + Fila, Sujeto.A14_Respuesta_Indice);
                Libro.SetCellValue("CR" + Fila, Sujeto.A15_Respuesta_Indice);

                Libro.SetCellValue("CS" + Fila, Sujeto.B1_Respuesta_Indice);
                Libro.SetCellValue("CT" + Fila, Sujeto.B2_Respuesta_Indice);
                Libro.SetCellValue("CU" + Fila, Sujeto.B3_Respuesta_Indice);
                Libro.SetCellValue("CV" + Fila, Sujeto.B4_Respuesta_Indice);
                Libro.SetCellValue("CW" + Fila, Sujeto.B5_Respuesta_Indice);
                Libro.SetCellValue("CX" + Fila, Sujeto.B6_Respuesta_Indice);
                Libro.SetCellValue("CY" + Fila, Sujeto.B7_Respuesta_Indice);
                Libro.SetCellValue("CZ" + Fila, Sujeto.B8_Respuesta_Indice);
                Libro.SetCellValue("DA" + Fila, Sujeto.B9_Respuesta_Indice);
                Libro.SetCellValue("DB" + Fila, Sujeto.B10_Respuesta_Indice);
                Libro.SetCellValue("DC" + Fila, Sujeto.B11_Respuesta_Indice);
                Libro.SetCellValue("DD" + Fila, Sujeto.B12_Respuesta_Indice);
                Libro.SetCellValue("DE" + Fila, Sujeto.B13_Respuesta_Indice);
                Libro.SetCellValue("DF" + Fila, Sujeto.B14_Respuesta_Indice);
                Libro.SetCellValue("DG" + Fila, Sujeto.B15_Respuesta_Indice);

                //TR de cada una de las Respuestas
                Libro.SetCellValue("DH" + Fila, Sujeto.A1_TR);
                Libro.SetCellValue("DI" + Fila, Sujeto.A2_TR);
                Libro.SetCellValue("DJ" + Fila, Sujeto.A3_TR);
                Libro.SetCellValue("DK" + Fila, Sujeto.A4_TR);
                Libro.SetCellValue("DL" + Fila, Sujeto.A5_TR);
                Libro.SetCellValue("DM" + Fila, Sujeto.A6_TR);
                Libro.SetCellValue("DN" + Fila, Sujeto.A7_TR);
                Libro.SetCellValue("DO" + Fila, Sujeto.A8_TR);
                Libro.SetCellValue("DP" + Fila, Sujeto.A9_TR);
                Libro.SetCellValue("DQ" + Fila, Sujeto.A10_TR);
                Libro.SetCellValue("DR" + Fila, Sujeto.A11_TR);
                Libro.SetCellValue("DS" + Fila, Sujeto.A12_TR);
                Libro.SetCellValue("DT" + Fila, Sujeto.A13_TR);
                Libro.SetCellValue("DU" + Fila, Sujeto.A14_TR);
                Libro.SetCellValue("DV" + Fila, Sujeto.A15_TR);

                Libro.SetCellValue("DW" + Fila, Sujeto.B1_TR);
                Libro.SetCellValue("DX" + Fila, Sujeto.B2_TR);
                Libro.SetCellValue("DY" + Fila, Sujeto.B3_TR);
                Libro.SetCellValue("DZ" + Fila, Sujeto.B4_TR);
                Libro.SetCellValue("EA" + Fila, Sujeto.B5_TR);
                Libro.SetCellValue("EB" + Fila, Sujeto.B6_TR);
                Libro.SetCellValue("EC" + Fila, Sujeto.B7_TR);
                Libro.SetCellValue("ED" + Fila, Sujeto.B8_TR);
                Libro.SetCellValue("EE" + Fila, Sujeto.B9_TR);
                Libro.SetCellValue("EF" + Fila, Sujeto.B10_TR);
                Libro.SetCellValue("EG" + Fila, Sujeto.B11_TR);
                Libro.SetCellValue("EH" + Fila, Sujeto.B12_TR);
                Libro.SetCellValue("EI" + Fila, Sujeto.B13_TR);
                Libro.SetCellValue("EJ" + Fila, Sujeto.B14_TR);
                Libro.SetCellValue("EK" + Fila, Sujeto.B15_TR);

                //Comprensión
                Libro.SetCellValue("EL" + Fila, Sujeto.Comprension_Orden_de_Presentacion);

                Libro.SetCellValue("EM" + Fila, Sujeto.Comprension_A1);
                Libro.SetCellValue("EN" + Fila, Sujeto.Comprension_A2);
                Libro.SetCellValue("EO" + Fila, Sujeto.Comprension_A3);
                Libro.SetCellValue("EP" + Fila, Sujeto.Comprension_A4);
                Libro.SetCellValue("EQ" + Fila, Sujeto.Comprension_A5);
                Libro.SetCellValue("ER" + Fila, Sujeto.Comprension_A6);
                Libro.SetCellValue("ES" + Fila, Sujeto.Comprension_A7);
                Libro.SetCellValue("ET" + Fila, Sujeto.Comprension_A8);
                Libro.SetCellValue("EU" + Fila, Sujeto.Comprension_A9);
                Libro.SetCellValue("EV" + Fila, Sujeto.Comprension_A10);

                Libro.SetCellValue("EW" + Fila, Sujeto.Comprension_B1);
                Libro.SetCellValue("EX" + Fila, Sujeto.Comprension_B2);
                Libro.SetCellValue("EY" + Fila, Sujeto.Comprension_B3);
                Libro.SetCellValue("EZ" + Fila, Sujeto.Comprension_B4);
                Libro.SetCellValue("FA" + Fila, Sujeto.Comprension_B5);
                Libro.SetCellValue("FB" + Fila, Sujeto.Comprension_B6);
                Libro.SetCellValue("FC" + Fila, Sujeto.Comprension_B7);
                Libro.SetCellValue("FD" + Fila, Sujeto.Comprension_B8);
                Libro.SetCellValue("FE" + Fila, Sujeto.Comprension_B9);
                Libro.SetCellValue("FF" + Fila, Sujeto.Comprension_B10);

                Libro.SetCellValue("FG" + Fila, Sujeto.Puntaje_A_Comprension);
                Libro.SetCellValue("FH" + Fila, Sujeto.Puntaje_B_Comprension);
                Libro.SetCellValue("FI" + Fila, Sujeto.Lectura_A_TR);
                Libro.SetCellValue("FJ" + Fila, Sujeto.Lectura_B_TR);
                Libro.SetCellValue("FK" + Fila, Sujeto.Cuestionario_A_TR);
                Libro.SetCellValue("FL" + Fila, Sujeto.Cuestionario_B_TR);
            }

            //Formato del Excel
            SLStyle Estilo = new SLStyle();
            Estilo.Alignment.Horizontal = HorizontalAlignmentValues.Center;
            Estilo.Alignment.Vertical = VerticalAlignmentValues.Center;

            Libro.SetColumnStyle(1, 168, Estilo);

            Libro.AutoFitColumn(1, 12);
            Libro.AutoFitColumn(14, 15);
            Libro.AutoFitColumn(17, 20);
            Libro.AutoFitColumn(112, 168);

            SLStyle Estilo_3 = new SLStyle();
            Estilo_3.Border.BottomBorder.BorderStyle = BorderStyleValues.Medium;

            Libro.SetRowStyle(1, Estilo_3);

            SLStyle Estilo_4 = new SLStyle();
            Estilo_4.Border.RightBorder.BorderStyle = BorderStyleValues.Medium;
            Libro.SetColumnStyle(12, Estilo_4);
            Libro.SetColumnStyle(15, Estilo_4);
            Libro.SetColumnStyle(18, Estilo_4);
            Libro.SetColumnStyle(141, Estilo_4);
            Libro.SetColumnStyle(168, Estilo_4);

            Libro.DeleteRow(SujetosBase.Count() + 2, 1000 - SujetosBase.Count() + 2);
            Libro.SetActiveCell("A1");

            //Nombre del Archivo y Descarga
            string Fecha = DateTime.Now.ToString();
            Fecha = Fecha.Replace("/", "-");
            Fecha = Fecha.Replace(":", ".");
            Fecha = Fecha.Replace(" ", "_");

            string Nombre_Archivo = "Base_de_Datos_" + Fecha + ".xlsx";
            string Ruta = Server.MapPath("~/Exportar/" + Nombre_Archivo);

            Libro.SaveAs(Ruta);

            Libro.Dispose();

            return File(Ruta, "application/xlsx", Nombre_Archivo);
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

            var Hora_ARG = DateTime.Parse(Hora) - DateTime.Parse("3:00:00"); //Argentina UTC-3

            return Fecha + " " + Hora_ARG; //11/01/2020 09:00:47
        }

        /* Código con Microsoft.Interopt
        private void Establecer_Formulas(string Ruta, int Fila_Final)
        {
            Excel.Application App;
            Excel._Workbook Workbook;
            Excel._Worksheet Sheet;
            Excel.Range Range;

            App = new Excel.Application();

            App.Visible = false;

            Workbook = App.Workbooks.Open(Ruta);

            Sheet = App.Worksheets[1];

            Sheet.Activate();

            Range = Sheet.get_Range("J2");

            Range.AutoFill(Sheet.get_Range("J2", "J" + Fila_Final), Excel.XlAutoFillType.xlFillDefault);

            Workbook.Save();
            //Workbook.SaveAs(Ruta, Excel.XlFileFormat.xlWorkbookDefault, AccessMode: Microsoft.Office.Interop.Excel.XlSaveAsAccessMode.xlNoChange);

            Workbook.Close();
        }

        //https://social.msdn.microsoft.com/Forums/vstudio/en-US/d438c273-6876-4d2b-9f25-842838bce0b4/excel-is-still-running-though-i-quit-and-released-the-object?forum=vsto
        private void killExcel()
        {
            System.Diagnostics.Process[] PROC = System.Diagnostics.Process.GetProcessesByName("EXCEL");
            foreach (System.Diagnostics.Process PK in PROC)
            {
                if (PK.MainWindowTitle.Length == 0)
                {
                    PK.Kill();
                }
            }
        }*/
    }
}