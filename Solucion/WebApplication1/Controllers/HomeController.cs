using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

using Comprension.Models;
using System.Web.SessionState;
using System.Web;

using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web.Mvc;


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
            if (Request.Browser.IsMobileDevice)
            {
                return View("~/Views/Home/Mobile.cshtml");
            }
            else
            {
                return View("~/Views/Home/Consentimiento.cshtml");
            }
        }

        /// <summary>
        /// Crea un Sujeto Experimental Nuevo y lo Guarda en Session
        /// </summary>
        /// <param name="Apellido"></param>
        /// <param name="Nombre"></param>
        /// <param name="Edad"></param>
        /// <param name="Sexo"></param>
        /// <param name="Nivel_Educativo"></param>
        /// <param name="Lugar_de_Residencia"></param>
        /// <param name="Mail"></param>
        [HttpPost]
        public ActionResult CrearSujeto(string Apellido, string Nombre, int Edad, string Sexo, string Nivel_Educativo, string Lugar_de_Residencia, string Mail)
        {
            HomeManager Manager = new HomeManager();

            if (Manager.Consultar(Mail) == null)
            {
                Sujeto Sujeto = new Sujeto();
                Sujeto.FechayHora_Entrada = DateTime.Now.ToString(); //Fecha y Hora al momento de Aceptar el Concentimiento Informado
                Sujeto.Apellido = Apellido.ToUpper();
                Sujeto.Nombre = Nombre.ToUpper();
                Sujeto.Edad = Edad;
                Sujeto.Sexo = Sexo.ToUpper();
                Sujeto.Nivel_Educativo = Nivel_Educativo;
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
        /// Carga al Sujeto almacenado en Session con sus respectivos puntajes y TR de las tareas de Dígitos Directo y Ordenamiento Dígito-Letra
        /// </summary>
        /// <param name="Respuesta_DD"></param>
        /// <param name="Puntaje_DD"></param>
        /// <param name="DD_TR"></param>
        /// <param name="Respuesta_DL"></param>
        /// <param name="Puntaje_DL"></param>
        /// <param name="DL_TR"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CargarRespuestaDigitos(string Respuesta_DD, string Puntaje_DD, string DD_TR, string Respuesta_DL, string Puntaje_DL, string DL_TR)
        {

            var Sujeto = Session["Sujeto"] as Sujeto;

            Sujeto.Respuesta_DD = Respuesta_DD;
            Sujeto.Puntaje_DD = Puntaje_DD;
            Sujeto.DD_TR = DD_TR;

            Sujeto.Respuesta_DL = Respuesta_DL;
            Sujeto.Puntaje_DL = Puntaje_DL;
            Sujeto.DL_TR = DL_TR;

            HomeManager Manager = new HomeManager();
            Session["Sujeto.ID"] = Manager.Cargar(Sujeto);

            return View("~/Views/Home/Monitoreo.cshtml");
        }

        /// <summary>
        /// Carga las respuestas de Monitoreo
        /// </summary>
        /// <param name="Libros"></param>
        /// <param name="Orden_de_Presentacion"></param>
        /// <param name="Respuesta_Total"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CargarRespuestaMonitoreo(string Libros, string Orden_de_Presentacion, string Respuesta_Total)
        {
            Sujeto Sujeto = new Sujeto();

            Sujeto.ID = (string) Session["Sujeto.ID"];

            Sujeto.Libros = Libros;
            Sujeto.Orden_de_Presentacion = Orden_de_Presentacion;
            Sujeto.Respuesta_Monitoreo = Respuesta_Total;

            HomeManager Manager = new HomeManager();

            Manager.ActualizarMonitoreo(Sujeto);

            return View("~/Views/Home/Comprension.cshtml");
        }


    }
}