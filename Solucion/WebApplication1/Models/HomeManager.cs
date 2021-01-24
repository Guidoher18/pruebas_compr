using System;
using System.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
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
        public void Cargar(Sujeto Sujeto)
        {
            SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);
            Conexion.Open();
            SqlCommand Sentencia = Conexion.CreateCommand();
            Sentencia.CommandText = "INSERT INTO Resultados (Completo_Digitos, Completo_Monitoreo, Completo_Comprension, FechayHora_Entrada_Digitos, FechayHora_Salida_Digitos, Apellido, Nombre, Edad, Sexo, Nivel_Educativo, Ultimos_DNI, Lugar_de_Residencia, Mail, Respuesta_DD, Puntaje_DD, DD_TR, Respuesta_DL, Puntaje_DL, DL_TR) OUTPUT INSERTED.ID VALUES(@Completo_Digitos, @Completo_Monitoreo, @Completo_Comprension, @FechayHora_Entrada_Digitos, @FechayHora_Salida_Digitos, @Apellido, @Nombre, @Edad, @Sexo, @Nivel_Educativo, @Ultimos_DNI, @Lugar_de_Residencia, @Mail, @Respuesta_DD, @Puntaje_DD, @DD_TR, @Respuesta_DL, @Puntaje_DL, @DL_TR)";

            Sentencia.Parameters.AddWithValue("@Completo_Digitos", Sujeto.Completo_Digitos);
            Sentencia.Parameters.AddWithValue("@Completo_Monitoreo", Sujeto.Completo_Monitoreo);
            Sentencia.Parameters.AddWithValue("@Completo_Comprension", Sujeto.Completo_Comprension);

            Sentencia.Parameters.AddWithValue("@FechayHora_Entrada_Digitos", Sujeto.FechayHora_Entrada_Digitos);
            Sentencia.Parameters.AddWithValue("@FechayHora_Salida_Digitos", Sujeto.FechayHora_Salida_Digitos);
            
            Sentencia.Parameters.AddWithValue("@Apellido", Sujeto.Apellido);
            Sentencia.Parameters.AddWithValue("@Nombre", Sujeto.Nombre);
            Sentencia.Parameters.AddWithValue("@Edad", Sujeto.Edad);
            Sentencia.Parameters.AddWithValue("@Sexo", Sujeto.Sexo);
            Sentencia.Parameters.AddWithValue("@Nivel_Educativo", Sujeto.Nivel_Educativo);
            Sentencia.Parameters.AddWithValue("@Ultimos_DNI", Sujeto.Ultimos_DNI);
            Sentencia.Parameters.AddWithValue("@Lugar_de_Residencia", Sujeto.Lugar_de_Residencia);
            Sentencia.Parameters.AddWithValue("@Mail", Sujeto.Mail);

            Sentencia.Parameters.AddWithValue("@Respuesta_DD", Sujeto.Respuesta_DD);
            Sentencia.Parameters.AddWithValue("@Puntaje_DD", Sujeto.Puntaje_DD);
            Sentencia.Parameters.AddWithValue("@DD_TR", Sujeto.DD_TR);

            Sentencia.Parameters.AddWithValue("@Respuesta_DL", Sujeto.Respuesta_DL);
            Sentencia.Parameters.AddWithValue("@Puntaje_DL", Sujeto.Puntaje_DL);
            Sentencia.Parameters.AddWithValue("@DL_TR", Sujeto.DL_TR);

            Sentencia.ExecuteScalar().ToString();
            Conexion.Close();
        }

        /// <summary>
        /// Permite Consultar en BBDD si el Mail y el DNI corresponden a un sujeto registrado y trae sus datos
        /// </summary>
        /// <param name="Mail"></param>
        /// <returns>Devuelve el Sujeto correspondiente a ese Mail</returns>
        public Sujeto ConsultarDatos(string Mail) {
            Sujeto Sujeto = new Sujeto();

            SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);
            Conexion.Open();
            SqlCommand Sentencia = Conexion.CreateCommand();
            Sentencia.CommandText = "SELECT * FROM Resultados WHERE Mail = '" + Mail + "'";
            try
            {
                SqlDataReader reader = Sentencia.ExecuteReader();

                while (reader.Read())
                {

                    //Quito los null de las variables string

                    //Almacena un Sujeto sin propiedades Null luego de la ConsultaSql
                    Dictionary<string, string> SinNull_string = new Dictionary<string, string>();

                    string[] Propiedades_string = {"Completo_Digitos", "Completo_Monitoreo", "Completo_Comprension", "Ultimos_DNI"};

                    //Reemplaza los Null por "" y los almacena en el diccionario SinNull
                    foreach (string X in Propiedades_string)
                    {
                        if (reader[X] != null && reader[X] != DBNull.Value)
                        {
                            SinNull_string.Add(X, (string)reader[X]);
                        }
                        else
                        {
                            SinNull_string.Add(X, "");
                        }
                    }

                    Sujeto.ID = reader["ID"].ToString();
                    Sujeto.Completo_Digitos = SinNull_string["Completo_Digitos"];
                    Sujeto.Completo_Monitoreo = SinNull_string["Completo_Monitoreo"];
                    Sujeto.Completo_Comprension = SinNull_string["Completo_Comprension"];
                    Sujeto.Ultimos_DNI = SinNull_string["Ultimos_DNI"];
                    Sujeto.Mail = Mail;
                }
                reader.Close();
                Conexion.Close();
                return Sujeto;
            }
            catch (InvalidOperationException) {
                return null;
            }
            catch (NullReferenceException)
            {
                return null;
            }
        }

        /// <summary>
        /// Actualiza al Sujeto que se insertó con el método Cargar. Agrega todos los datos del monitoreo.
        /// </summary>
        /// <param name="Sujeto"></param>
        [HttpPost]
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
                        Sujeto.A1_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A2":
                        Sujeto.A2_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A2_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A2_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A2_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A3":
                        Sujeto.A3_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A3_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A3_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A3_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A4":
                        Sujeto.A4_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A4_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A4_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A4_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A5":
                        Sujeto.A5_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A5_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A5_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A5_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A6":
                        Sujeto.A6_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A6_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A6_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A6_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A7":
                        Sujeto.A7_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A7_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A7_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A7_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A8":
                        Sujeto.A8_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A8_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A8_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A8_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A9":
                        Sujeto.A9_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A9_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A9_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A9_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A10":
                        Sujeto.A10_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A10_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A10_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A10_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A11":
                        Sujeto.A11_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A11_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A11_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A11_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A12":
                        Sujeto.A12_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A12_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A12_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A12_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A13":
                        Sujeto.A13_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A13_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A13_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A13_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A14":
                        Sujeto.A14_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A14_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A14_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A14_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "A15":
                        Sujeto.A15_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.A15_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.A15_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.A15_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;

                    case "B1":
                        Sujeto.B1_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B1_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B1_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B1_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B2":
                        Sujeto.B2_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B2_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B2_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B2_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B3":
                        Sujeto.B3_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B3_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B3_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B3_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B4":
                        Sujeto.B4_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B4_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B4_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B4_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B5":
                        Sujeto.B5_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B5_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B5_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B5_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B6":
                        Sujeto.B6_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B6_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B6_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B6_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B7":
                        Sujeto.B7_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B7_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B7_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B7_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B8":
                        Sujeto.B8_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B8_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B8_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B8_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B9":
                        Sujeto.B9_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B9_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B9_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B9_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B10":
                        Sujeto.B10_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B10_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B10_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B10_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B11":
                        Sujeto.B11_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B11_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B11_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B11_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B12":
                        Sujeto.B12_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B12_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B12_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B12_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B13":
                        Sujeto.B13_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B13_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B13_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B13_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B14":
                        Sujeto.B14_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B14_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B14_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B14_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                    case "B15":
                        Sujeto.B15_SN = Conjunto_de_Arrays[t][1];
                        Sujeto.B15_Respuesta = Conjunto_de_Arrays[t][2];
                        Sujeto.B15_Respuesta_Indice = Conjunto_de_Arrays[t][3];
                        Sujeto.B15_TR = Int32.Parse(Conjunto_de_Arrays[t][4]);
                        break;
                }
            }
            SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);

            Conexion.Open();

            SqlCommand Sentencia = Conexion.CreateCommand();

            Sentencia.CommandText = "UPDATE Resultados SET Completo_Monitoreo = @Completo_Monitoreo, FechayHora_Entrada_Monitoreo = @FechayHora_Entrada_Monitoreo, FechayHora_Salida_Monitoreo = @FechayHora_Salida_Monitoreo, Libros = @Libros, Orden_de_Presentacion = @Orden_de_Presentacion, Respuesta_Monitoreo = @Respuesta_Monitoreo, A1_SN = @A1_SN, A2_SN = @A2_SN, A3_SN = @A3_SN, A4_SN = @A4_SN, A5_SN = @A5_SN, A6_SN = @A6_SN, A7_SN = @A7_SN, A8_SN = @A8_SN, A9_SN = @A9_SN, A10_SN = @A10_SN, A11_SN = @A11_SN, A12_SN = @A12_SN, A13_SN = @A13_SN, A14_SN = @A14_SN, A15_SN = @A15_SN, B1_SN = @B1_SN, B2_SN = @B2_SN, B3_SN = @B3_SN, B4_SN = @B4_SN, B5_SN = @B5_SN, B6_SN = @B6_SN, B7_SN = @B7_SN, B8_SN = @B8_SN, B9_SN = @B9_SN, B10_SN = @B10_SN, B11_SN = @B11_SN, B12_SN = @B12_SN, B13_SN = @B13_SN, B14_SN = @B14_SN, B15_SN = @B15_SN, A1_Respuesta = @A1_Respuesta, A2_Respuesta = @A2_Respuesta, A3_Respuesta = @A3_Respuesta, A4_Respuesta = @A4_Respuesta, A5_Respuesta = @A5_Respuesta, A6_Respuesta = @A6_Respuesta, A7_Respuesta = @A7_Respuesta, A8_Respuesta = @A8_Respuesta, A9_Respuesta = @A9_Respuesta, A10_Respuesta = @A10_Respuesta, A11_Respuesta = @A11_Respuesta, A12_Respuesta = @A12_Respuesta, A13_Respuesta = @A13_Respuesta, A14_Respuesta = @A14_Respuesta, A15_Respuesta = @A15_Respuesta, B1_Respuesta = @B1_Respuesta, B2_Respuesta = @B2_Respuesta, B3_Respuesta = @B3_Respuesta, B4_Respuesta = @B4_Respuesta, B5_Respuesta = @B5_Respuesta, B6_Respuesta = @B6_Respuesta, B7_Respuesta = @B7_Respuesta, B8_Respuesta = @B8_Respuesta, B9_Respuesta = @B9_Respuesta, B10_Respuesta = @B10_Respuesta, B11_Respuesta = @B11_Respuesta, B12_Respuesta = @B12_Respuesta, B13_Respuesta = @B13_Respuesta, B14_Respuesta = @B14_Respuesta, B15_Respuesta = @B15_Respuesta, A1_Respuesta_Indice = @A1_Respuesta_Indice, A2_Respuesta_Indice = @A2_Respuesta_Indice, A3_Respuesta_Indice = @A3_Respuesta_Indice, A4_Respuesta_Indice = @A4_Respuesta_Indice, A5_Respuesta_Indice = @A5_Respuesta_Indice, A6_Respuesta_Indice = @A6_Respuesta_Indice, A7_Respuesta_Indice = @A7_Respuesta_Indice, A8_Respuesta_Indice = @A8_Respuesta_Indice, A9_Respuesta_Indice = @A9_Respuesta_Indice, A10_Respuesta_Indice = @A10_Respuesta_Indice, A11_Respuesta_Indice = @A11_Respuesta_Indice, A12_Respuesta_Indice = @A12_Respuesta_Indice, A13_Respuesta_Indice = @A13_Respuesta_Indice, A14_Respuesta_Indice = @A14_Respuesta_Indice, A15_Respuesta_Indice = @A15_Respuesta_Indice, B1_Respuesta_Indice = @B1_Respuesta_Indice, B2_Respuesta_Indice = @B2_Respuesta_Indice, B3_Respuesta_Indice = @B3_Respuesta_Indice, B4_Respuesta_Indice = @B4_Respuesta_Indice, B5_Respuesta_Indice = @B5_Respuesta_Indice, B6_Respuesta_Indice = @B6_Respuesta_Indice, B7_Respuesta_Indice = @B7_Respuesta_Indice, B8_Respuesta_Indice = @B8_Respuesta_Indice, B9_Respuesta_Indice = @B9_Respuesta_Indice, B10_Respuesta_Indice = @B10_Respuesta_Indice, B11_Respuesta_Indice = @B11_Respuesta_Indice, B12_Respuesta_Indice = @B12_Respuesta_Indice, B13_Respuesta_Indice = @B13_Respuesta_Indice, B14_Respuesta_Indice = @B14_Respuesta_Indice, B15_Respuesta_Indice = @B15_Respuesta_Indice, A1_TR = @A1_TR, A2_TR = @A2_TR, A3_TR = @A3_TR, A4_TR = @A4_TR, A5_TR = @A5_TR, A6_TR = @A6_TR, A7_TR = @A7_TR, A8_TR = @A8_TR, A9_TR = @A9_TR, A10_TR = @A10_TR, A11_TR = @A11_TR, A12_TR = @A12_TR, A13_TR = @A13_TR, A14_TR = @A14_TR, A15_TR = @A15_TR, B1_TR = @B1_TR, B2_TR = @B2_TR, B3_TR = @B3_TR, B4_TR = @B4_TR, B5_TR = @B5_TR, B6_TR = @B6_TR, B7_TR = @B7_TR, B8_TR = @B8_TR, B9_TR = @B9_TR, B10_TR = @B10_TR, B11_TR = @B11_TR, B12_TR = @B12_TR, B13_TR = @B13_TR, B14_TR = @B14_TR, B15_TR = @B15_TR WHERE ID = @ID";

            Sentencia.Parameters.AddWithValue("@Completo_Monitoreo", Sujeto.Completo_Monitoreo);
            
            Sentencia.Parameters.AddWithValue("@FechayHora_Entrada_Monitoreo", Sujeto.FechayHora_Entrada_Monitoreo);
            Sentencia.Parameters.AddWithValue("@FechayHora_Salida_Monitoreo", Sujeto.FechayHora_Salida_Monitoreo);

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
            Sentencia.Parameters.AddWithValue("@A1_TR", Sujeto.A1_TR);
            Sentencia.Parameters.AddWithValue("@A2_TR", Sujeto.A2_TR);
            Sentencia.Parameters.AddWithValue("@A3_TR", Sujeto.A3_TR);
            Sentencia.Parameters.AddWithValue("@A4_TR", Sujeto.A4_TR);
            Sentencia.Parameters.AddWithValue("@A5_TR", Sujeto.A5_TR);
            Sentencia.Parameters.AddWithValue("@A6_TR", Sujeto.A6_TR);
            Sentencia.Parameters.AddWithValue("@A7_TR", Sujeto.A7_TR);
            Sentencia.Parameters.AddWithValue("@A8_TR", Sujeto.A8_TR);
            Sentencia.Parameters.AddWithValue("@A9_TR", Sujeto.A9_TR);
            Sentencia.Parameters.AddWithValue("@A10_TR", Sujeto.A10_TR);
            Sentencia.Parameters.AddWithValue("@A11_TR", Sujeto.A11_TR);
            Sentencia.Parameters.AddWithValue("@A12_TR", Sujeto.A12_TR);
            Sentencia.Parameters.AddWithValue("@A13_TR", Sujeto.A13_TR);
            Sentencia.Parameters.AddWithValue("@A14_TR", Sujeto.A14_TR);
            Sentencia.Parameters.AddWithValue("@A15_TR", Sujeto.A15_TR);
            Sentencia.Parameters.AddWithValue("@B1_TR", Sujeto.B1_TR);
            Sentencia.Parameters.AddWithValue("@B2_TR", Sujeto.B2_TR);
            Sentencia.Parameters.AddWithValue("@B3_TR", Sujeto.B3_TR);
            Sentencia.Parameters.AddWithValue("@B4_TR", Sujeto.B4_TR);
            Sentencia.Parameters.AddWithValue("@B5_TR", Sujeto.B5_TR);
            Sentencia.Parameters.AddWithValue("@B6_TR", Sujeto.B6_TR);
            Sentencia.Parameters.AddWithValue("@B7_TR", Sujeto.B7_TR);
            Sentencia.Parameters.AddWithValue("@B8_TR", Sujeto.B8_TR);
            Sentencia.Parameters.AddWithValue("@B9_TR", Sujeto.B9_TR);
            Sentencia.Parameters.AddWithValue("@B10_TR", Sujeto.B10_TR);
            Sentencia.Parameters.AddWithValue("@B11_TR", Sujeto.B11_TR);
            Sentencia.Parameters.AddWithValue("@B12_TR", Sujeto.B12_TR);
            Sentencia.Parameters.AddWithValue("@B13_TR", Sujeto.B13_TR);
            Sentencia.Parameters.AddWithValue("@B14_TR", Sujeto.B14_TR);
            Sentencia.Parameters.AddWithValue("@B15_TR", Sujeto.B15_TR);

            Sentencia.Parameters.AddWithValue("@ID", Sujeto.ID);

            Sentencia.ExecuteNonQuery();
            Conexion.Close();
        }

        [HttpPost]
        public void ActualizarComprension(Sujeto Sujeto)
        {
            SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);

            Conexion.Open();

            SqlCommand Sentencia = Conexion.CreateCommand();

            Sentencia.CommandText = "UPDATE Resultados SET Completo_Comprension = @Completo_Comprension, FechayHora_Entrada_Comprension = @FechayHora_Entrada_Comprension, FechayHora_Salida_Comprension = @FechayHora_Salida_Comprension, Lectura_A_TR = @Lectura_A_TR, Lectura_B_TR = @Lectura_B_TR, Cuestionario_A_TR = @Cuestionario_A_TR, Cuestionario_B_TR = @Cuestionario_B_TR, Comprension_Orden_de_Presentacion = @Comprension_Orden_de_Presentacion,Puntaje_A_Comprension = @Puntaje_A_Comprension, Puntaje_B_Comprension = @Puntaje_B_Comprension, Comprension_A1 = @Comprension_A1, Comprension_A2 = @Comprension_A2, Comprension_A3 = @Comprension_A3, Comprension_A4 = @Comprension_A4, Comprension_A5 = @Comprension_A5, Comprension_A6 = @Comprension_A6, Comprension_A7 = @Comprension_A7, Comprension_A8 = @Comprension_A8, Comprension_A9 = @Comprension_A9, Comprension_A10 = @Comprension_A10, Comprension_B1 = @Comprension_B1, Comprension_B2 = @Comprension_B2, Comprension_B3 = @Comprension_B3, Comprension_B4 = @Comprension_B4, Comprension_B5 = @Comprension_B5, Comprension_B6 = @Comprension_B6, Comprension_B7 = @Comprension_B7, Comprension_B8 = @Comprension_B8, Comprension_B9 = @Comprension_B9, Comprension_B10 = @Comprension_B10 WHERE ID = @ID";

            Sentencia.Parameters.AddWithValue("@Completo_Comprension", Sujeto.Completo_Comprension);

            Sentencia.Parameters.AddWithValue("@FechayHora_Entrada_Comprension", Sujeto.FechayHora_Entrada_Comprension);
            Sentencia.Parameters.AddWithValue("@FechayHora_Salida_Comprension", Sujeto.FechayHora_Salida_Comprension);

            Sentencia.Parameters.AddWithValue("@Lectura_A_TR", Sujeto.Lectura_A_TR);
            Sentencia.Parameters.AddWithValue("@Lectura_B_TR", Sujeto.Lectura_B_TR);

            Sentencia.Parameters.AddWithValue("@Cuestionario_A_TR", Sujeto.Cuestionario_A_TR);
            Sentencia.Parameters.AddWithValue("@Cuestionario_B_TR", Sujeto.Cuestionario_B_TR);

            Sentencia.Parameters.AddWithValue("@Comprension_Orden_de_Presentacion", Sujeto.Comprension_Orden_de_Presentacion);

            Sentencia.Parameters.AddWithValue("@Puntaje_A_Comprension", Sujeto.Puntaje_A_Comprension);
            Sentencia.Parameters.AddWithValue("@Puntaje_B_Comprension", Sujeto.Puntaje_B_Comprension);

            Sentencia.Parameters.AddWithValue("@Comprension_A1", Sujeto.Comprension_A1);
            Sentencia.Parameters.AddWithValue("@Comprension_A2", Sujeto.Comprension_A2);
            Sentencia.Parameters.AddWithValue("@Comprension_A3", Sujeto.Comprension_A3);
            Sentencia.Parameters.AddWithValue("@Comprension_A4", Sujeto.Comprension_A4);
            Sentencia.Parameters.AddWithValue("@Comprension_A5", Sujeto.Comprension_A5);
            Sentencia.Parameters.AddWithValue("@Comprension_A6", Sujeto.Comprension_A6);
            Sentencia.Parameters.AddWithValue("@Comprension_A7", Sujeto.Comprension_A7);
            Sentencia.Parameters.AddWithValue("@Comprension_A8", Sujeto.Comprension_A8);
            Sentencia.Parameters.AddWithValue("@Comprension_A9", Sujeto.Comprension_A9);
            Sentencia.Parameters.AddWithValue("@Comprension_A10", Sujeto.Comprension_A10);

            Sentencia.Parameters.AddWithValue("@Comprension_B1", Sujeto.Comprension_B1);
            Sentencia.Parameters.AddWithValue("@Comprension_B2", Sujeto.Comprension_B2);
            Sentencia.Parameters.AddWithValue("@Comprension_B3", Sujeto.Comprension_B3);
            Sentencia.Parameters.AddWithValue("@Comprension_B4", Sujeto.Comprension_B4);
            Sentencia.Parameters.AddWithValue("@Comprension_B5", Sujeto.Comprension_B5);
            Sentencia.Parameters.AddWithValue("@Comprension_B6", Sujeto.Comprension_B6);
            Sentencia.Parameters.AddWithValue("@Comprension_B7", Sujeto.Comprension_B7);
            Sentencia.Parameters.AddWithValue("@Comprension_B8", Sujeto.Comprension_B8);
            Sentencia.Parameters.AddWithValue("@Comprension_B9", Sujeto.Comprension_B9);
            Sentencia.Parameters.AddWithValue("@Comprension_B10", Sujeto.Comprension_B10);

            Sentencia.Parameters.AddWithValue("@ID", Sujeto.ID);

            Sentencia.ExecuteNonQuery();
            Conexion.Close();
        } 

        public Dictionary<int, Sujeto> LeerBase()
        {
            //Almacena los datos de cada Sujeto 
            Dictionary<int, Sujeto> SujetosBase = new Dictionary<int, Sujeto>();
            int Key = 0;

            SqlConnection Conexion = new SqlConnection(ConfigurationManager.AppSettings["ConexionBase"]);
            Conexion.Open();
            SqlCommand Sentencia = Conexion.CreateCommand();
            Sentencia.CommandText = "SELECT * FROM Resultados ORDER BY ID";

            SqlDataReader reader = Sentencia.ExecuteReader();

            while (reader.Read())
            {
                try
                {
                    //Quito los null de las variables int y string por separado

                    //Almacena un Sujeto sin propiedades Null luego de la ConsultaSql
                    Dictionary<string, string> SinNull_string = new Dictionary<string, string>();

                    string[] Propiedades_string = {
                        "Completo_Digitos",
                        "Completo_Monitoreo",
                        "Completo_Comprension",
                        "FechayHora_Entrada_Digitos",
                        "FechayHora_Salida_Digitos",
                        "FechayHora_Entrada_Monitoreo",
                        "FechayHora_Salida_Monitoreo",
                        "FechayHora_Entrada_Comprension",
                        "FechayHora_Salida_Comprension",
                        "Apellido",
                        "Nombre",
                        "Sexo",
                        "Nivel_Educativo",
                        "Ultimos_DNI",
                        "Lugar_de_Residencia",
                        "Mail",
                        "Respuesta_DD",
                        "Respuesta_DL",
                        "Libros",
                        "Orden_de_Presentacion",
                        "Respuesta_Monitoreo",
                        "A1_SN",
                        "A2_SN",
                        "A3_SN",
                        "A4_SN",
                        "A5_SN",
                        "A6_SN",
                        "A7_SN",
                        "A8_SN",
                        "A9_SN",
                        "A10_SN",
                        "A11_SN",
                        "A12_SN",
                        "A13_SN",
                        "A14_SN",
                        "A15_SN",
                        "B1_SN",
                        "B2_SN",
                        "B3_SN",
                        "B4_SN",
                        "B5_SN",
                        "B6_SN",
                        "B7_SN",
                        "B8_SN",
                        "B9_SN",
                        "B10_SN",
                        "B11_SN",
                        "B12_SN",
                        "B13_SN",
                        "B14_SN",
                        "B15_SN",
                        "A1_Respuesta",
                        "A2_Respuesta",
                        "A3_Respuesta",
                        "A4_Respuesta",
                        "A5_Respuesta",
                        "A6_Respuesta",
                        "A7_Respuesta",
                        "A8_Respuesta",
                        "A9_Respuesta",
                        "A10_Respuesta",
                        "A11_Respuesta",
                        "A12_Respuesta",
                        "A13_Respuesta",
                        "A14_Respuesta",
                        "A15_Respuesta",
                        "B1_Respuesta",
                        "B2_Respuesta",
                        "B3_Respuesta",
                        "B4_Respuesta",
                        "B5_Respuesta",
                        "B6_Respuesta",
                        "B7_Respuesta",
                        "B8_Respuesta",
                        "B9_Respuesta",
                        "B10_Respuesta",
                        "B11_Respuesta",
                        "B12_Respuesta",
                        "B13_Respuesta",
                        "B14_Respuesta",
                        "B15_Respuesta",
                        "A1_Respuesta_Indice",
                        "A2_Respuesta_Indice",
                        "A3_Respuesta_Indice",
                        "A4_Respuesta_Indice",
                        "A5_Respuesta_Indice",
                        "A6_Respuesta_Indice",
                        "A7_Respuesta_Indice",
                        "A8_Respuesta_Indice",
                        "A9_Respuesta_Indice",
                        "A10_Respuesta_Indice",
                        "A11_Respuesta_Indice",
                        "A12_Respuesta_Indice",
                        "A13_Respuesta_Indice",
                        "A14_Respuesta_Indice",
                        "A15_Respuesta_Indice",
                        "B1_Respuesta_Indice",
                        "B2_Respuesta_Indice",
                        "B3_Respuesta_Indice",
                        "B4_Respuesta_Indice",
                        "B5_Respuesta_Indice",
                        "B6_Respuesta_Indice",
                        "B7_Respuesta_Indice",
                        "B8_Respuesta_Indice",
                        "B9_Respuesta_Indice",
                        "B10_Respuesta_Indice",
                        "B11_Respuesta_Indice",
                        "B12_Respuesta_Indice",
                        "B13_Respuesta_Indice",
                        "B14_Respuesta_Indice",
                        "B15_Respuesta_Indice",
                        "Comprension_Orden_de_Presentacion",
                        "Comprension_A1",
                        "Comprension_A2",
                        "Comprension_A3",
                        "Comprension_A4",
                        "Comprension_A5",
                        "Comprension_A6",
                        "Comprension_A7",
                        "Comprension_A8",
                        "Comprension_A9",
                        "Comprension_A10",
                        "Comprension_B1",
                        "Comprension_B2",
                        "Comprension_B3",
                        "Comprension_B4",
                        "Comprension_B5",
                        "Comprension_B6",
                        "Comprension_B7",
                        "Comprension_B8",
                        "Comprension_B9",
                        "Comprension_B10"};

                    //Reemplaza los Null por "" y los almacena en el diccionario SinNull
                    foreach (string X in Propiedades_string)
                    {
                        if (reader[X] != null && reader[X] != DBNull.Value)
                        {
                            SinNull_string.Add(X, (string)reader[X]);
                        }
                        else
                        {
                            SinNull_string.Add(X, "");
                        }
                    }

                    //Almacena un Sujeto sin propiedades Null luego de la ConsultaSql
                    Dictionary<string, int> SinNull_int = new Dictionary<string, int>();

                    string[] Propiedades_int = {
                        "ID",
                        "Edad",
                        "Puntaje_DD",
                        "DD_TR",
                        "Puntaje_DL",
                        "DL_TR",
                        "A1_TR",
                        "A2_TR",
                        "A3_TR",
                        "A4_TR",
                        "A5_TR",
                        "A6_TR",
                        "A7_TR",
                        "A8_TR",
                        "A9_TR",
                        "A10_TR",
                        "A11_TR",
                        "A12_TR",
                        "A13_TR",
                        "A14_TR",
                        "A15_TR",
                        "B1_TR",
                        "B2_TR",
                        "B3_TR",
                        "B4_TR",
                        "B5_TR",
                        "B6_TR",
                        "B7_TR",
                        "B8_TR",
                        "B9_TR",
                        "B10_TR",
                        "B11_TR",
                        "B12_TR",
                        "B13_TR",
                        "B14_TR",
                        "B15_TR",
                        "Lectura_A_TR",
                        "Lectura_B_TR",
                        "Cuestionario_A_TR",
                        "Cuestionario_B_TR",
                        "Puntaje_A_Comprension",
                        "Puntaje_B_Comprension"
                    };

                    //Reemplaza los Null por 0 y los almacena en el diccionario SinNull_int
                    foreach (string X in Propiedades_int)
                    {
                        if (reader[X] != null && reader[X] != DBNull.Value)
                        {
                            SinNull_int.Add(X, (int)reader[X]);
                        }
                        else
                        {
                            SinNull_int.Add(X, 0);
                        }
                    }

                    Sujeto Sujeto = new Sujeto();

                    Sujeto.Completo_Digitos = SinNull_string["Completo_Digitos"];
                    Sujeto.Completo_Monitoreo = SinNull_string["Completo_Monitoreo"];
                    Sujeto.Completo_Comprension = SinNull_string["Completo_Comprension"];

                    Sujeto.FechayHora_Entrada_Digitos = SinNull_string["FechayHora_Entrada_Digitos"];
                    Sujeto.FechayHora_Salida_Digitos = SinNull_string["FechayHora_Salida_Digitos"];

                    Sujeto.FechayHora_Entrada_Monitoreo = SinNull_string["FechayHora_Entrada_Monitoreo"];
                    Sujeto.FechayHora_Salida_Monitoreo = SinNull_string["FechayHora_Salida_Monitoreo"];

                    Sujeto.FechayHora_Entrada_Comprension = SinNull_string["FechayHora_Entrada_Comprension"];
                    Sujeto.FechayHora_Salida_Comprension = SinNull_string["FechayHora_Salida_Comprension"];

                    Sujeto.ID = SinNull_int["ID"].ToString();
                    Sujeto.Apellido = SinNull_string["Apellido"];
                    Sujeto.Nombre = SinNull_string["Nombre"];
                    Sujeto.Edad = SinNull_int["Edad"];
                    Sujeto.Sexo = SinNull_string["Sexo"];
                    Sujeto.Nivel_Educativo = SinNull_string["Nivel_Educativo"];
                    Sujeto.Ultimos_DNI = SinNull_string["Ultimos_DNI"];
                    Sujeto.Lugar_de_Residencia = SinNull_string["Lugar_de_Residencia"];
                    Sujeto.Mail = SinNull_string["Mail"];

                    //Dígitos Directos
                    Sujeto.Respuesta_DD = SinNull_string["Respuesta_DD"];
                    Sujeto.Puntaje_DD = SinNull_int["Puntaje_DD"];
                    Sujeto.DD_TR = SinNull_int["DD_TR"];

                    //Dígito-Letra
                    Sujeto.Respuesta_DL = SinNull_string["Respuesta_DL"];
                    Sujeto.Puntaje_DL = SinNull_int["Puntaje_DL"];
                    Sujeto.DL_TR = SinNull_int["DL_TR"];

                    //Monitoreo
                    Sujeto.Libros = SinNull_string["Libros"];
                    Sujeto.Orden_de_Presentacion = SinNull_string["Orden_de_Presentacion"];
                    Sujeto.Respuesta_Monitoreo = SinNull_string["Respuesta_Monitoreo"];

                    //Respuesta Si, No
                    Sujeto.A1_SN = SinNull_string["A1_SN"];
                    Sujeto.A2_SN = SinNull_string["A2_SN"];
                    Sujeto.A3_SN = SinNull_string["A3_SN"];
                    Sujeto.A4_SN = SinNull_string["A4_SN"];
                    Sujeto.A5_SN = SinNull_string["A5_SN"];
                    Sujeto.A6_SN = SinNull_string["A6_SN"];
                    Sujeto.A7_SN = SinNull_string["A7_SN"];
                    Sujeto.A8_SN = SinNull_string["A8_SN"];
                    Sujeto.A9_SN = SinNull_string["A9_SN"];
                    Sujeto.A10_SN = SinNull_string["A10_SN"];
                    Sujeto.A11_SN = SinNull_string["A11_SN"];
                    Sujeto.A12_SN = SinNull_string["A12_SN"];
                    Sujeto.A13_SN = SinNull_string["A13_SN"];
                    Sujeto.A14_SN = SinNull_string["A14_SN"];
                    Sujeto.A15_SN = SinNull_string["A15_SN"];

                    Sujeto.B1_SN = SinNull_string["B1_SN"];
                    Sujeto.B2_SN = SinNull_string["B2_SN"];
                    Sujeto.B3_SN = SinNull_string["B3_SN"];
                    Sujeto.B4_SN = SinNull_string["B4_SN"];
                    Sujeto.B5_SN = SinNull_string["B5_SN"];
                    Sujeto.B6_SN = SinNull_string["B6_SN"];
                    Sujeto.B7_SN = SinNull_string["B7_SN"];
                    Sujeto.B8_SN = SinNull_string["B8_SN"];
                    Sujeto.B9_SN = SinNull_string["B9_SN"];
                    Sujeto.B10_SN = SinNull_string["B10_SN"];
                    Sujeto.B11_SN = SinNull_string["B11_SN"];
                    Sujeto.B12_SN = SinNull_string["B12_SN"];
                    Sujeto.B13_SN = SinNull_string["B13_SN"];
                    Sujeto.B14_SN = SinNull_string["B14_SN"];
                    Sujeto.B15_SN = SinNull_string["B15_SN"];

                    //En caso de que eligió Si, contiene la selección hecha
                    Sujeto.A1_Respuesta = SinNull_string["A1_Respuesta"];
                    Sujeto.A2_Respuesta = SinNull_string["A2_Respuesta"];
                    Sujeto.A3_Respuesta = SinNull_string["A3_Respuesta"];
                    Sujeto.A4_Respuesta = SinNull_string["A4_Respuesta"];
                    Sujeto.A5_Respuesta = SinNull_string["A5_Respuesta"];
                    Sujeto.A6_Respuesta = SinNull_string["A6_Respuesta"];
                    Sujeto.A7_Respuesta = SinNull_string["A7_Respuesta"];
                    Sujeto.A8_Respuesta = SinNull_string["A8_Respuesta"];
                    Sujeto.A9_Respuesta = SinNull_string["A9_Respuesta"];
                    Sujeto.A10_Respuesta = SinNull_string["A10_Respuesta"];
                    Sujeto.A11_Respuesta = SinNull_string["A11_Respuesta"];
                    Sujeto.A12_Respuesta = SinNull_string["A12_Respuesta"];
                    Sujeto.A13_Respuesta = SinNull_string["A13_Respuesta"];
                    Sujeto.A14_Respuesta = SinNull_string["A14_Respuesta"];
                    Sujeto.A15_Respuesta = SinNull_string["A15_Respuesta"];

                    Sujeto.B1_Respuesta = SinNull_string["B1_Respuesta"];
                    Sujeto.B2_Respuesta = SinNull_string["B2_Respuesta"];
                    Sujeto.B3_Respuesta = SinNull_string["B3_Respuesta"];
                    Sujeto.B4_Respuesta = SinNull_string["B4_Respuesta"];
                    Sujeto.B5_Respuesta = SinNull_string["B5_Respuesta"];
                    Sujeto.B6_Respuesta = SinNull_string["B6_Respuesta"];
                    Sujeto.B7_Respuesta = SinNull_string["B7_Respuesta"];
                    Sujeto.B8_Respuesta = SinNull_string["B8_Respuesta"];
                    Sujeto.B9_Respuesta = SinNull_string["B9_Respuesta"];
                    Sujeto.B10_Respuesta = SinNull_string["B10_Respuesta"];
                    Sujeto.B11_Respuesta = SinNull_string["B11_Respuesta"];
                    Sujeto.B12_Respuesta = SinNull_string["B12_Respuesta"];
                    Sujeto.B13_Respuesta = SinNull_string["B13_Respuesta"];
                    Sujeto.B14_Respuesta = SinNull_string["B14_Respuesta"];
                    Sujeto.B15_Respuesta = SinNull_string["B15_Respuesta"];

                    //Índice de la Selección hecha
                    Sujeto.A1_Respuesta_Indice = SinNull_string["A1_Respuesta_Indice"];
                    Sujeto.A2_Respuesta_Indice = SinNull_string["A2_Respuesta_Indice"];
                    Sujeto.A3_Respuesta_Indice = SinNull_string["A3_Respuesta_Indice"];
                    Sujeto.A4_Respuesta_Indice = SinNull_string["A4_Respuesta_Indice"];
                    Sujeto.A5_Respuesta_Indice = SinNull_string["A5_Respuesta_Indice"];
                    Sujeto.A6_Respuesta_Indice = SinNull_string["A6_Respuesta_Indice"];
                    Sujeto.A7_Respuesta_Indice = SinNull_string["A7_Respuesta_Indice"];
                    Sujeto.A8_Respuesta_Indice = SinNull_string["A8_Respuesta_Indice"];
                    Sujeto.A9_Respuesta_Indice = SinNull_string["A9_Respuesta_Indice"];
                    Sujeto.A10_Respuesta_Indice = SinNull_string["A10_Respuesta_Indice"];
                    Sujeto.A11_Respuesta_Indice = SinNull_string["A11_Respuesta_Indice"];
                    Sujeto.A12_Respuesta_Indice = SinNull_string["A12_Respuesta_Indice"];
                    Sujeto.A13_Respuesta_Indice = SinNull_string["A13_Respuesta_Indice"];
                    Sujeto.A14_Respuesta_Indice = SinNull_string["A14_Respuesta_Indice"];
                    Sujeto.A15_Respuesta_Indice = SinNull_string["A15_Respuesta_Indice"];

                    Sujeto.B1_Respuesta_Indice = SinNull_string["B1_Respuesta_Indice"];
                    Sujeto.B2_Respuesta_Indice = SinNull_string["B2_Respuesta_Indice"];
                    Sujeto.B3_Respuesta_Indice = SinNull_string["B3_Respuesta_Indice"];
                    Sujeto.B4_Respuesta_Indice = SinNull_string["B4_Respuesta_Indice"];
                    Sujeto.B5_Respuesta_Indice = SinNull_string["B5_Respuesta_Indice"];
                    Sujeto.B6_Respuesta_Indice = SinNull_string["B6_Respuesta_Indice"];
                    Sujeto.B7_Respuesta_Indice = SinNull_string["B7_Respuesta_Indice"];
                    Sujeto.B8_Respuesta_Indice = SinNull_string["B8_Respuesta_Indice"];
                    Sujeto.B9_Respuesta_Indice = SinNull_string["B9_Respuesta_Indice"];
                    Sujeto.B10_Respuesta_Indice = SinNull_string["B10_Respuesta_Indice"];
                    Sujeto.B11_Respuesta_Indice = SinNull_string["B11_Respuesta_Indice"];
                    Sujeto.B12_Respuesta_Indice = SinNull_string["B12_Respuesta_Indice"];
                    Sujeto.B13_Respuesta_Indice = SinNull_string["B13_Respuesta_Indice"];
                    Sujeto.B14_Respuesta_Indice = SinNull_string["B14_Respuesta_Indice"];
                    Sujeto.B15_Respuesta_Indice = SinNull_string["B15_Respuesta_Indice"];

                    //TR de cada una de las Respuestas
                    Sujeto.A1_TR = SinNull_int["A1_TR"];
                    Sujeto.A2_TR = SinNull_int["A2_TR"];
                    Sujeto.A3_TR = SinNull_int["A3_TR"];
                    Sujeto.A4_TR = SinNull_int["A4_TR"];
                    Sujeto.A5_TR = SinNull_int["A5_TR"];
                    Sujeto.A6_TR = SinNull_int["A6_TR"];
                    Sujeto.A7_TR = SinNull_int["A7_TR"];
                    Sujeto.A8_TR = SinNull_int["A8_TR"];
                    Sujeto.A9_TR = SinNull_int["A9_TR"];
                    Sujeto.A10_TR = SinNull_int["A10_TR"];
                    Sujeto.A11_TR = SinNull_int["A11_TR"];
                    Sujeto.A12_TR = SinNull_int["A12_TR"];
                    Sujeto.A13_TR = SinNull_int["A13_TR"];
                    Sujeto.A14_TR = SinNull_int["A14_TR"];
                    Sujeto.A15_TR = SinNull_int["A15_TR"];

                    Sujeto.B1_TR = SinNull_int["B1_TR"];
                    Sujeto.B2_TR = SinNull_int["B2_TR"];
                    Sujeto.B3_TR = SinNull_int["B3_TR"];
                    Sujeto.B4_TR = SinNull_int["B4_TR"];
                    Sujeto.B5_TR = SinNull_int["B5_TR"];
                    Sujeto.B6_TR = SinNull_int["B6_TR"];
                    Sujeto.B7_TR = SinNull_int["B7_TR"];
                    Sujeto.B8_TR = SinNull_int["B8_TR"];
                    Sujeto.B9_TR = SinNull_int["B9_TR"];
                    Sujeto.B10_TR = SinNull_int["B10_TR"];
                    Sujeto.B11_TR = SinNull_int["B11_TR"];
                    Sujeto.B12_TR = SinNull_int["B12_TR"];
                    Sujeto.B13_TR = SinNull_int["B13_TR"];
                    Sujeto.B14_TR = SinNull_int["B14_TR"];
                    Sujeto.B15_TR = SinNull_int["B15_TR"];

                    //Comprensión
                    Sujeto.Lectura_A_TR = SinNull_int["Lectura_A_TR"];
                    Sujeto.Lectura_B_TR = SinNull_int["Lectura_B_TR"];
                    Sujeto.Cuestionario_A_TR = SinNull_int["Cuestionario_A_TR"];
                    Sujeto.Cuestionario_B_TR = SinNull_int["Cuestionario_B_TR"];
                    Sujeto.Comprension_Orden_de_Presentacion = SinNull_string["Comprension_Orden_de_Presentacion"];
                    Sujeto.Puntaje_A_Comprension = SinNull_int["Puntaje_A_Comprension"];
                    Sujeto.Puntaje_B_Comprension = SinNull_int["Puntaje_B_Comprension"];

                    Sujeto.Comprension_A1 = SinNull_string["Comprension_A1"];
                    Sujeto.Comprension_A2 = SinNull_string["Comprension_A2"];
                    Sujeto.Comprension_A3 = SinNull_string["Comprension_A3"];
                    Sujeto.Comprension_A4 = SinNull_string["Comprension_A4"];
                    Sujeto.Comprension_A5 = SinNull_string["Comprension_A5"];
                    Sujeto.Comprension_A6 = SinNull_string["Comprension_A6"];
                    Sujeto.Comprension_A7 = SinNull_string["Comprension_A7"];
                    Sujeto.Comprension_A8 = SinNull_string["Comprension_A8"];
                    Sujeto.Comprension_A9 = SinNull_string["Comprension_A9"];
                    Sujeto.Comprension_A10 = SinNull_string["Comprension_A10"];

                    Sujeto.Comprension_B1 = SinNull_string["Comprension_B1"];
                    Sujeto.Comprension_B2 = SinNull_string["Comprension_B2"];
                    Sujeto.Comprension_B3 = SinNull_string["Comprension_B3"];
                    Sujeto.Comprension_B4 = SinNull_string["Comprension_B4"];
                    Sujeto.Comprension_B5 = SinNull_string["Comprension_B5"];
                    Sujeto.Comprension_B6 = SinNull_string["Comprension_B6"];
                    Sujeto.Comprension_B7 = SinNull_string["Comprension_B7"];
                    Sujeto.Comprension_B8 = SinNull_string["Comprension_B8"];
                    Sujeto.Comprension_B9 = SinNull_string["Comprension_B9"];
                    Sujeto.Comprension_B10 = SinNull_string["Comprension_B10"];

                    Key = Key + 1;
                    SujetosBase.Add(Key, Sujeto);
                }

                catch (NullReferenceException)
                {
                    break;
                }
            }
            reader.Close();
            Conexion.Close();
            return SujetosBase;
        }
    }
}
