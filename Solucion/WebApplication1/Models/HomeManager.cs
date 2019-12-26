using System;
using System.Configuration;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Comprension.Models
{
    public class HomeManager
    {
        /// <summary>
        /// Consulta si el Email ya fue insertado en la BBDD
        /// </summary>
        /// <param name="Mail"></param>
        /// <returns></returns>
        [HttpPost]
        public string Consultar(string Mail)
        {
            try
            {
                SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);
                Conexion.Open();
                SqlCommand Sentencia = Conexion.CreateCommand();
                Sentencia.CommandText = "SELECT * FROM Resultados WHERE Mail = '" + Mail + "'";
                string Consulta = Sentencia.ExecuteScalar().ToString();
                Conexion.Close();
                return Consulta;
            }
            catch (NullReferenceException)
            {
                return null;
            }
        }

        [HttpPost]
        public string Cargar(Sujeto Sujeto) {
            SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);
            Conexion.Open();
            SqlCommand Sentencia = Conexion.CreateCommand();
            Sentencia.CommandText = "INSERT INTO Resultados (FechayHora_Entrada, Apellido, Nombre, Edad, Sexo, Nivel_Educativo, Lugar_de_Residencia, Mail, Respuesta_DD, Puntaje_DD, DD_TR, Respuesta_DL, Puntaje_DL, DL_TR) OUTPUT INSERTED.ID VALUES(@FechayHora_Entrada, @Apellido, @Nombre, @Edad, @Sexo, @Nivel_Educativo, @Lugar_de_Residencia, @Mail, @Respuesta_DD, @Puntaje_DD, @DD_TR, @Respuesta_DL, @Puntaje_DL, @DL_TR)";

            Sentencia.Parameters.AddWithValue("@FechayHora_Entrada", Sujeto.FechayHora_Entrada);
            Sentencia.Parameters.AddWithValue("@Apellido", Sujeto.Apellido);
            Sentencia.Parameters.AddWithValue("@Nombre", Sujeto.Nombre);
            Sentencia.Parameters.AddWithValue("@Edad", Sujeto.Edad);
            Sentencia.Parameters.AddWithValue("@Sexo", Sujeto.Sexo);
            Sentencia.Parameters.AddWithValue("@Nivel_Educativo", Sujeto.Nivel_Educativo);
            Sentencia.Parameters.AddWithValue("@Lugar_de_Residencia", Sujeto.Lugar_de_Residencia);
            Sentencia.Parameters.AddWithValue("@Mail", Sujeto.Mail);

            Sentencia.Parameters.AddWithValue("@Respuesta_DD", Sujeto.Respuesta_DD);
            Sentencia.Parameters.AddWithValue("@Puntaje_DD", Sujeto.Puntaje_DD);
            Sentencia.Parameters.AddWithValue("@DD_TR", Sujeto.DD_TR);

            Sentencia.Parameters.AddWithValue("@Respuesta_DL", Sujeto.Respuesta_DL);
            Sentencia.Parameters.AddWithValue("@Puntaje_DL", Sujeto.Puntaje_DL);
            Sentencia.Parameters.AddWithValue("@DL_TR", Sujeto.DL_TR);

            var a = Sentencia.ExecuteScalar().ToString();
            Conexion.Close();
            return a;
        }
    }
}
