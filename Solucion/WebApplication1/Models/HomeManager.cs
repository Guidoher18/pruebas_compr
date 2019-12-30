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

        /// <summary>
        /// Inserta en BBDD a un sujeto
        /// </summary>
        /// <param name="Sujeto"></param>
        /// <returns></returns>
        [HttpPost]
        public string Cargar(Sujeto Sujeto)
        {
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
            Sentencia.Parameters.AddWithValue("@Puntaje_DD", Int32.Parse(Sujeto.Puntaje_DD));
            Sentencia.Parameters.AddWithValue("@DD_TR", Int32.Parse(Sujeto.DD_TR));

            Sentencia.Parameters.AddWithValue("@Respuesta_DL", Sujeto.Respuesta_DL);
            Sentencia.Parameters.AddWithValue("@Puntaje_DL", Int32.Parse(Sujeto.Puntaje_DL));
            Sentencia.Parameters.AddWithValue("@DL_TR", Int32.Parse(Sujeto.DL_TR));

            var a = Sentencia.ExecuteScalar().ToString();
            Conexion.Close();
            return a;
        }

        /// <summary>
        /// Actualiza al Sujeto que se insertó con el método Cargar. Agrega todos los datos del monitoreo.
        /// </summary>
        /// <param name="Sujeto"></param>
        public void ActualizarMonitoreo(Sujeto Sujeto)
        {
            //ID, Libros, Orden_de_Presentacion, Respuesta_Monitoreo

            string[] Separador = { "~" };

            string[] Array = Sujeto.Respuesta_Monitoreo.Split(Separador, StringSplitOptions.RemoveEmptyEntries);

            List<string[]> Conjunto_de_Arrays = new List<string[]>();

            for (int i = 0; i < Array.Length; i++)
            {
                string[] Sep = { "|" };

                string[] NuevoArray = Array[i].Split(Sep, StringSplitOptions.None);

                Conjunto_de_Arrays.Add(NuevoArray);
            }

            for (int t = 0; t < Conjunto_de_Arrays.Count; t++)
            {
                switch (Conjunto_de_Arrays[t][0])
                {
                    case "A1":
                        Sujeto.A1_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A1_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A1_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A1_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A2":
                        Sujeto.A2_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A2_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A2_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A2_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A3":
                        Sujeto.A3_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A3_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A3_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A3_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A4":
                        Sujeto.A4_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A4_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A4_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A4_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A5":
                        Sujeto.A5_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A5_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A5_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A5_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A6":
                        Sujeto.A6_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A6_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A6_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A6_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A7":
                        Sujeto.A7_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A7_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A7_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A7_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A8":
                        Sujeto.A8_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A8_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A8_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A8_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A9":
                        Sujeto.A9_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A9_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A9_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A9_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A10":
                        Sujeto.A10_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A10_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A10_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A10_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A11":
                        Sujeto.A11_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A11_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A11_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A11_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A12":
                        Sujeto.A12_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A12_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A12_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A12_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A13":
                        Sujeto.A13_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A13_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A13_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A13_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A14":
                        Sujeto.A14_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A14_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A14_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A14_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "A15":
                        Sujeto.A15_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A15_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A15_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A15_TR = Conjunto_de_Arrays[t][4];
                        break;

                    case "B1":
                        Sujeto.B1_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B1_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B1_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B1_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B2":
                        Sujeto.B2_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B2_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B2_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B2_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B3":
                        Sujeto.B3_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B3_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B3_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B3_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B4":
                        Sujeto.B4_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B4_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B4_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B4_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B5":
                        Sujeto.B5_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B5_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B5_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B5_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B6":
                        Sujeto.B6_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B6_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B6_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B6_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B7":
                        Sujeto.B7_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B7_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B7_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B7_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B8":
                        Sujeto.B8_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B8_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B8_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B8_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B9":
                        Sujeto.B9_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B9_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B9_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B9_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B10":
                        Sujeto.B10_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B10_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B10_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B10_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B11":
                        Sujeto.B11_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B11_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B11_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B11_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B12":
                        Sujeto.B12_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B12_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B12_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B12_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B13":
                        Sujeto.B13_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B13_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B13_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B13_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B14":
                        Sujeto.B14_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B14_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B14_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B14_TR = Conjunto_de_Arrays[t][4];
                        break;
                    case "B15":
                        Sujeto.B15_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B15_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B15_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B15_TR = Conjunto_de_Arrays[t][4];
                        break;
                }
            }
            SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);

            Conexion.Open();

            SqlCommand Sentencia = Conexion.CreateCommand();

            Sentencia.CommandText = "UPDATE Resultados SET Libros = @Libros, Orden_de_Presentacion = @Orden_de_Presentacion, Respuesta_Monitoreo = @Respuesta_Monitoreo, A1_SN = @A1_SN, A2_SN = @A2_SN, A3_SN = @A3_SN, A4_SN = @A4_SN, A5_SN = @A5_SN, A6_SN = @A6_SN, A7_SN = @A7_SN, A8_SN = @A8_SN, A9_SN = @A9_SN, A10_SN = @A10_SN, A11_SN = @A11_SN, A12_SN = @A12_SN, A13_SN = @A13_SN, A14_SN = @A14_SN, A15_SN = @A15_SN, B1_SN = @B1_SN, B2_SN = @B2_SN, B3_SN = @B3_SN, B4_SN = @B4_SN, B5_SN = @B5_SN, B6_SN = @B6_SN, B7_SN = @B7_SN, B8_SN = @B8_SN, B9_SN = @B9_SN, B10_SN = @B10_SN, B11_SN = @B11_SN, B12_SN = @B12_SN, B13_SN = @B13_SN, B14_SN = @B14_SN, B15_SN = @B15_SN, A1_Respuesta = @A1_Respuesta, A2_Respuesta = @A2_Respuesta, A3_Respuesta = @A3_Respuesta, A4_Respuesta = @A4_Respuesta, A5_Respuesta = @A5_Respuesta, A6_Respuesta = @A6_Respuesta, A7_Respuesta = @A7_Respuesta, A8_Respuesta = @A8_Respuesta, A9_Respuesta = @A9_Respuesta, A10_Respuesta = @A10_Respuesta, A11_Respuesta = @A11_Respuesta, A12_Respuesta = @A12_Respuesta, A13_Respuesta = @A13_Respuesta, A14_Respuesta = @A14_Respuesta, A15_Respuesta = @A15_Respuesta, B1_Respuesta = @B1_Respuesta, B2_Respuesta = @B2_Respuesta, B3_Respuesta = @B3_Respuesta, B4_Respuesta = @B4_Respuesta, B5_Respuesta = @B5_Respuesta, B6_Respuesta = @B6_Respuesta, B7_Respuesta = @B7_Respuesta, B8_Respuesta = @B8_Respuesta, B9_Respuesta = @B9_Respuesta, B10_Respuesta = @B10_Respuesta, B11_Respuesta = @B11_Respuesta, B12_Respuesta = @B12_Respuesta, B13_Respuesta = @B13_Respuesta, B14_Respuesta = @B14_Respuesta, B15_Respuesta = @B15_Respuesta, A1_Respuesta_Indice = @A1_Respuesta_Indice, A2_Respuesta_Indice = @A2_Respuesta_Indice, A3_Respuesta_Indice = @A3_Respuesta_Indice, A4_Respuesta_Indice = @A4_Respuesta_Indice, A5_Respuesta_Indice = @A5_Respuesta_Indice, A6_Respuesta_Indice = @A6_Respuesta_Indice, A7_Respuesta_Indice = @A7_Respuesta_Indice, A8_Respuesta_Indice = @A8_Respuesta_Indice, A9_Respuesta_Indice = @A9_Respuesta_Indice, A10_Respuesta_Indice = @A10_Respuesta_Indice, A11_Respuesta_Indice = @A11_Respuesta_Indice, A12_Respuesta_Indice = @A12_Respuesta_Indice, A13_Respuesta_Indice = @A13_Respuesta_Indice, A14_Respuesta_Indice = @A14_Respuesta_Indice, A15_Respuesta_Indice = @A15_Respuesta_Indice, B1_Respuesta_Indice = @B1_Respuesta_Indice, B2_Respuesta_Indice = @B2_Respuesta_Indice, B3_Respuesta_Indice = @B3_Respuesta_Indice, B4_Respuesta_Indice = @B4_Respuesta_Indice, B5_Respuesta_Indice = @B5_Respuesta_Indice, B6_Respuesta_Indice = @B6_Respuesta_Indice, B7_Respuesta_Indice = @B7_Respuesta_Indice, B8_Respuesta_Indice = @B8_Respuesta_Indice, B9_Respuesta_Indice = @B9_Respuesta_Indice, B10_Respuesta_Indice = @B10_Respuesta_Indice, B11_Respuesta_Indice = @B11_Respuesta_Indice, B12_Respuesta_Indice = @B12_Respuesta_Indice, B13_Respuesta_Indice = @B13_Respuesta_Indice, B14_Respuesta_Indice = @B14_Respuesta_Indice, B15_Respuesta_Indice = @B15_Respuesta_Indice, A1_TR = @A1_TR, A2_TR = @A2_TR, A3_TR = @A3_TR, A4_TR = @A4_TR, A5_TR = @A5_TR, A6_TR = @A6_TR, A7_TR = @A7_TR, A8_TR = @A8_TR, A9_TR = @A9_TR, A10_TR = @A10_TR, A11_TR = @A11_TR, A12_TR = @A12_TR, A13_TR = @A13_TR, A14_TR = @A14_TR, A15_TR = @A15_TR, B1_TR = @B1_TR, B2_TR = @B2_TR, B3_TR = @B3_TR, B4_TR = @B4_TR, B5_TR = @B5_TR, B6_TR = @B6_TR, B7_TR = @B7_TR, B8_TR = @B8_TR, B9_TR = @B9_TR, B10_TR = @B10_TR, B11_TR = @B11_TR, B12_TR = @B12_TR, B13_TR = @B13_TR, B14_TR = @B14_TR, B15_TR = @B15_TR WHERE ID = @ID";

            Sentencia.Parameters.AddWithValue("@Libros", Sujeto.Libros);
            Sentencia.Parameters.AddWithValue("@Orden_de_Presentacion", Sujeto.Orden_de_Presentacion);
            Sentencia.Parameters.AddWithValue("@Respuesta_Monitoreo", Sujeto.Respuesta_Monitoreo);

            Sentencia.Parameters.AddWithValue("@A1_SN", Sujeto.A1_SN);
            Sentencia.Parameters.AddWithValue("@A2_SN", Sujeto.A2_SN);
            Sentencia.Parameters.AddWithValue("@A3_SN", Sujeto.A3_SN);
            Sentencia.Parameters.AddWithValue("@A4_SN", Sujeto.A4_SN);
            Sentencia.Parameters.AddWithValue("@A5_SN", Sujeto.A5_SN);
            Sentencia.Parameters.AddWithValue("@A6_SN", Sujeto.A6_SN);
            Sentencia.Parameters.AddWithValue("@A7_SN", Sujeto.A7_SN);
            Sentencia.Parameters.AddWithValue("@A8_SN", Sujeto.A8_SN);
            Sentencia.Parameters.AddWithValue("@A9_SN", Sujeto.A9_SN);
            Sentencia.Parameters.AddWithValue("@A10_SN", Sujeto.A10_SN);
            Sentencia.Parameters.AddWithValue("@A11_SN", Sujeto.A11_SN);
            Sentencia.Parameters.AddWithValue("@A12_SN", Sujeto.A12_SN);
            Sentencia.Parameters.AddWithValue("@A13_SN", Sujeto.A13_SN);
            Sentencia.Parameters.AddWithValue("@A14_SN", Sujeto.A14_SN);
            Sentencia.Parameters.AddWithValue("@A15_SN", Sujeto.A15_SN);
            Sentencia.Parameters.AddWithValue("@B1_SN", Sujeto.B1_SN);
            Sentencia.Parameters.AddWithValue("@B2_SN", Sujeto.B2_SN);
            Sentencia.Parameters.AddWithValue("@B3_SN", Sujeto.B3_SN);
            Sentencia.Parameters.AddWithValue("@B4_SN", Sujeto.B4_SN);
            Sentencia.Parameters.AddWithValue("@B5_SN", Sujeto.B5_SN);
            Sentencia.Parameters.AddWithValue("@B6_SN", Sujeto.B6_SN);
            Sentencia.Parameters.AddWithValue("@B7_SN", Sujeto.B7_SN);
            Sentencia.Parameters.AddWithValue("@B8_SN", Sujeto.B8_SN);
            Sentencia.Parameters.AddWithValue("@B9_SN", Sujeto.B9_SN);
            Sentencia.Parameters.AddWithValue("@B10_SN", Sujeto.B10_SN);
            Sentencia.Parameters.AddWithValue("@B11_SN", Sujeto.B11_SN);
            Sentencia.Parameters.AddWithValue("@B12_SN", Sujeto.B12_SN);
            Sentencia.Parameters.AddWithValue("@B13_SN", Sujeto.B13_SN);
            Sentencia.Parameters.AddWithValue("@B14_SN", Sujeto.B14_SN);
            Sentencia.Parameters.AddWithValue("@B15_SN", Sujeto.B15_SN);
            Sentencia.Parameters.AddWithValue("@A1_Respuesta", Sujeto.A1_Respuesta);
            Sentencia.Parameters.AddWithValue("@A2_Respuesta", Sujeto.A2_Respuesta);
            Sentencia.Parameters.AddWithValue("@A3_Respuesta", Sujeto.A3_Respuesta);
            Sentencia.Parameters.AddWithValue("@A4_Respuesta", Sujeto.A4_Respuesta);
            Sentencia.Parameters.AddWithValue("@A5_Respuesta", Sujeto.A5_Respuesta);
            Sentencia.Parameters.AddWithValue("@A6_Respuesta", Sujeto.A6_Respuesta);
            Sentencia.Parameters.AddWithValue("@A7_Respuesta", Sujeto.A7_Respuesta);
            Sentencia.Parameters.AddWithValue("@A8_Respuesta", Sujeto.A8_Respuesta);
            Sentencia.Parameters.AddWithValue("@A9_Respuesta", Sujeto.A9_Respuesta);
            Sentencia.Parameters.AddWithValue("@A10_Respuesta", Sujeto.A10_Respuesta);
            Sentencia.Parameters.AddWithValue("@A11_Respuesta", Sujeto.A11_Respuesta);
            Sentencia.Parameters.AddWithValue("@A12_Respuesta", Sujeto.A12_Respuesta);
            Sentencia.Parameters.AddWithValue("@A13_Respuesta", Sujeto.A13_Respuesta);
            Sentencia.Parameters.AddWithValue("@A14_Respuesta", Sujeto.A14_Respuesta);
            Sentencia.Parameters.AddWithValue("@A15_Respuesta", Sujeto.A15_Respuesta);
            Sentencia.Parameters.AddWithValue("@B1_Respuesta", Sujeto.B1_Respuesta);
            Sentencia.Parameters.AddWithValue("@B2_Respuesta", Sujeto.B2_Respuesta);
            Sentencia.Parameters.AddWithValue("@B3_Respuesta", Sujeto.B3_Respuesta);
            Sentencia.Parameters.AddWithValue("@B4_Respuesta", Sujeto.B4_Respuesta);
            Sentencia.Parameters.AddWithValue("@B5_Respuesta", Sujeto.B5_Respuesta);
            Sentencia.Parameters.AddWithValue("@B6_Respuesta", Sujeto.B6_Respuesta);
            Sentencia.Parameters.AddWithValue("@B7_Respuesta", Sujeto.B7_Respuesta);
            Sentencia.Parameters.AddWithValue("@B8_Respuesta", Sujeto.B8_Respuesta);
            Sentencia.Parameters.AddWithValue("@B9_Respuesta", Sujeto.B9_Respuesta);
            Sentencia.Parameters.AddWithValue("@B10_Respuesta", Sujeto.B10_Respuesta);
            Sentencia.Parameters.AddWithValue("@B11_Respuesta", Sujeto.B11_Respuesta);
            Sentencia.Parameters.AddWithValue("@B12_Respuesta", Sujeto.B12_Respuesta);
            Sentencia.Parameters.AddWithValue("@B13_Respuesta", Sujeto.B13_Respuesta);
            Sentencia.Parameters.AddWithValue("@B14_Respuesta", Sujeto.B14_Respuesta);
            Sentencia.Parameters.AddWithValue("@B15_Respuesta", Sujeto.B15_Respuesta);
            Sentencia.Parameters.AddWithValue("@A1_Respuesta_Indice", Sujeto.A1_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A2_Respuesta_Indice", Sujeto.A2_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A3_Respuesta_Indice", Sujeto.A3_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A4_Respuesta_Indice", Sujeto.A4_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A5_Respuesta_Indice", Sujeto.A5_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A6_Respuesta_Indice", Sujeto.A6_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A7_Respuesta_Indice", Sujeto.A7_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A8_Respuesta_Indice", Sujeto.A8_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A9_Respuesta_Indice", Sujeto.A9_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A10_Respuesta_Indice", Sujeto.A10_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A11_Respuesta_Indice", Sujeto.A11_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A12_Respuesta_Indice", Sujeto.A12_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A13_Respuesta_Indice", Sujeto.A13_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A14_Respuesta_Indice", Sujeto.A14_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A15_Respuesta_Indice", Sujeto.A15_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B1_Respuesta_Indice", Sujeto.B1_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B2_Respuesta_Indice", Sujeto.B2_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B3_Respuesta_Indice", Sujeto.B3_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B4_Respuesta_Indice", Sujeto.B4_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B5_Respuesta_Indice", Sujeto.B5_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B6_Respuesta_Indice", Sujeto.B6_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B7_Respuesta_Indice", Sujeto.B7_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B8_Respuesta_Indice", Sujeto.B8_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B9_Respuesta_Indice", Sujeto.B9_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B10_Respuesta_Indice", Sujeto.B10_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B11_Respuesta_Indice", Sujeto.B11_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B12_Respuesta_Indice", Sujeto.B12_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B13_Respuesta_Indice", Sujeto.B13_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B14_Respuesta_Indice", Sujeto.B14_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@B15_Respuesta_Indice", Sujeto.B15_Respuesta_Indice);
            Sentencia.Parameters.AddWithValue("@A1_TR", Int32.Parse(Sujeto.A1_TR));
            Sentencia.Parameters.AddWithValue("@A2_TR", Int32.Parse(Sujeto.A2_TR));
            Sentencia.Parameters.AddWithValue("@A3_TR", Int32.Parse(Sujeto.A3_TR));
            Sentencia.Parameters.AddWithValue("@A4_TR", Int32.Parse(Sujeto.A4_TR));
            Sentencia.Parameters.AddWithValue("@A5_TR", Int32.Parse(Sujeto.A5_TR));
            Sentencia.Parameters.AddWithValue("@A6_TR", Int32.Parse(Sujeto.A6_TR));
            Sentencia.Parameters.AddWithValue("@A7_TR", Int32.Parse(Sujeto.A7_TR));
            Sentencia.Parameters.AddWithValue("@A8_TR", Int32.Parse(Sujeto.A8_TR));
            Sentencia.Parameters.AddWithValue("@A9_TR", Int32.Parse(Sujeto.A9_TR));
            Sentencia.Parameters.AddWithValue("@A10_TR", Int32.Parse(Sujeto.A10_TR));
            Sentencia.Parameters.AddWithValue("@A11_TR", Int32.Parse(Sujeto.A11_TR));
            Sentencia.Parameters.AddWithValue("@A12_TR", Int32.Parse(Sujeto.A12_TR));
            Sentencia.Parameters.AddWithValue("@A13_TR", Int32.Parse(Sujeto.A13_TR));
            Sentencia.Parameters.AddWithValue("@A14_TR", Int32.Parse(Sujeto.A14_TR));
            Sentencia.Parameters.AddWithValue("@A15_TR", Int32.Parse(Sujeto.A15_TR));
            Sentencia.Parameters.AddWithValue("@B1_TR", Int32.Parse(Sujeto.B1_TR));
            Sentencia.Parameters.AddWithValue("@B2_TR", Int32.Parse(Sujeto.B2_TR));
            Sentencia.Parameters.AddWithValue("@B3_TR", Int32.Parse(Sujeto.B3_TR));
            Sentencia.Parameters.AddWithValue("@B4_TR", Int32.Parse(Sujeto.B4_TR));
            Sentencia.Parameters.AddWithValue("@B5_TR", Int32.Parse(Sujeto.B5_TR));
            Sentencia.Parameters.AddWithValue("@B6_TR", Int32.Parse(Sujeto.B6_TR));
            Sentencia.Parameters.AddWithValue("@B7_TR", Int32.Parse(Sujeto.B7_TR));
            Sentencia.Parameters.AddWithValue("@B8_TR", Int32.Parse(Sujeto.B8_TR));
            Sentencia.Parameters.AddWithValue("@B9_TR", Int32.Parse(Sujeto.B9_TR));
            Sentencia.Parameters.AddWithValue("@B10_TR", Int32.Parse(Sujeto.B10_TR));
            Sentencia.Parameters.AddWithValue("@B11_TR", Int32.Parse(Sujeto.B11_TR));
            Sentencia.Parameters.AddWithValue("@B12_TR", Int32.Parse(Sujeto.B12_TR));
            Sentencia.Parameters.AddWithValue("@B13_TR", Int32.Parse(Sujeto.B13_TR));
            Sentencia.Parameters.AddWithValue("@B14_TR", Int32.Parse(Sujeto.B14_TR));
            Sentencia.Parameters.AddWithValue("@B15_TR", Int32.Parse(Sujeto.B15_TR));

            Sentencia.Parameters.AddWithValue("@ID", Sujeto.ID);

            Sentencia.ExecuteNonQuery();
            Conexion.Close();
        }


    }
}
