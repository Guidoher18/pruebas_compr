using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comprension.Models
{
    public class Sujeto
    {
        public string FechayHora_Entrada { get; set; }
        public string ID { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public string Nivel_Educativo { get; set; }
        public string Lugar_de_Residencia { get; set; }
        public string Mail { get; set; }
        
        //Dígitos Directos
        public string Respuesta_DD { get; set; }
        public string Puntaje_DD { get; set; }
        public string DD_TR { get; set; }

        //Dígito-Letra
        public string Respuesta_DL { get; set; }
        public string Puntaje_DL { get; set; }
        public string DL_TR { get; set; }

        //Monitoreo
        public string Libros { get; set; }
        public string Orden_de_Presentacion { get; set; }
        public string Respuesta_Monitoreo { get; set; }

        //Respuesta Si, No
        public string A1_SN { get; set; }
        public string A2_SN { get; set; }
        public string A3_SN { get; set; }
        public string A4_SN { get; set; }
        public string A5_SN { get; set; }
        public string A6_SN { get; set; }
        public string A7_SN { get; set; }
        public string A8_SN { get; set; }
        public string A9_SN { get; set; }
        public string A10_SN { get; set; }
        public string A11_SN { get; set; }
        public string A12_SN { get; set; }
        public string A13_SN { get; set; }
        public string A14_SN { get; set; }
        public string A15_SN { get; set; }

        public string B1_SN { get; set; }
        public string B2_SN { get; set; }
        public string B3_SN { get; set; }
        public string B4_SN { get; set; }
        public string B5_SN { get; set; }
        public string B6_SN { get; set; }
        public string B7_SN { get; set; }
        public string B8_SN { get; set; }
        public string B9_SN { get; set; }
        public string B10_SN { get; set; }
        public string B11_SN { get; set; }
        public string B12_SN { get; set; }
        public string B13_SN { get; set; }
        public string B14_SN { get; set; }
        public string B15_SN { get; set; }

        //En caso de que eligió Si, contiene la selección hecha
        public string A1_Respuesta { get; set; }
        public string A2_Respuesta { get; set; }
        public string A3_Respuesta { get; set; }
        public string A4_Respuesta { get; set; }
        public string A5_Respuesta { get; set; }
        public string A6_Respuesta { get; set; }
        public string A7_Respuesta { get; set; }
        public string A8_Respuesta { get; set; }
        public string A9_Respuesta { get; set; }
        public string A10_Respuesta { get; set; }
        public string A11_Respuesta { get; set; }
        public string A12_Respuesta { get; set; }
        public string A13_Respuesta { get; set; }
        public string A14_Respuesta { get; set; }
        public string A15_Respuesta { get; set; }

        public string B1_Respuesta { get; set; }
        public string B2_Respuesta { get; set; }
        public string B3_Respuesta { get; set; }
        public string B4_Respuesta { get; set; }
        public string B5_Respuesta { get; set; }
        public string B6_Respuesta { get; set; }
        public string B7_Respuesta { get; set; }
        public string B8_Respuesta { get; set; }
        public string B9_Respuesta { get; set; }
        public string B10_Respuesta { get; set; }
        public string B11_Respuesta { get; set; }
        public string B12_Respuesta { get; set; }
        public string B13_Respuesta { get; set; }
        public string B14_Respuesta { get; set; }
        public string B15_Respuesta { get; set; }

        //Índice de la Selección hecha
        public string A1_Respuesta_Indice { get; set; }
        public string A2_Respuesta_Indice { get; set; }
        public string A3_Respuesta_Indice { get; set; }
        public string A4_Respuesta_Indice { get; set; }
        public string A5_Respuesta_Indice { get; set; }
        public string A6_Respuesta_Indice { get; set; }
        public string A7_Respuesta_Indice { get; set; }
        public string A8_Respuesta_Indice { get; set; }
        public string A9_Respuesta_Indice { get; set; }
        public string A10_Respuesta_Indice { get; set; }
        public string A11_Respuesta_Indice { get; set; }
        public string A12_Respuesta_Indice { get; set; }
        public string A13_Respuesta_Indice { get; set; }
        public string A14_Respuesta_Indice { get; set; }
        public string A15_Respuesta_Indice { get; set; }

        public string B1_Respuesta_Indice { get; set; }
        public string B2_Respuesta_Indice { get; set; }
        public string B3_Respuesta_Indice { get; set; }
        public string B4_Respuesta_Indice { get; set; }
        public string B5_Respuesta_Indice { get; set; }
        public string B6_Respuesta_Indice { get; set; }
        public string B7_Respuesta_Indice { get; set; }
        public string B8_Respuesta_Indice { get; set; }
        public string B9_Respuesta_Indice { get; set; }
        public string B10_Respuesta_Indice { get; set; }
        public string B11_Respuesta_Indice { get; set; }
        public string B12_Respuesta_Indice { get; set; }
        public string B13_Respuesta_Indice { get; set; }
        public string B14_Respuesta_Indice { get; set; }
        public string B15_Respuesta_Indice { get; set; }

        //TR de cada una de las Respuestas
        public string A1_TR { get; set; }
        public string A2_TR { get; set; }
        public string A3_TR { get; set; }
        public string A4_TR { get; set; }
        public string A5_TR { get; set; }
        public string A6_TR { get; set; }
        public string A7_TR { get; set; }
        public string A8_TR { get; set; }
        public string A9_TR { get; set; }
        public string A10_TR { get; set; }
        public string A11_TR { get; set; }
        public string A12_TR { get; set; }
        public string A13_TR { get; set; }
        public string A14_TR { get; set; }
        public string A15_TR { get; set; }

        public string B1_TR { get; set; }
        public string B2_TR { get; set; }
        public string B3_TR { get; set; }
        public string B4_TR { get; set; }
        public string B5_TR { get; set; }
        public string B6_TR { get; set; }
        public string B7_TR { get; set; }
        public string B8_TR { get; set; }
        public string B9_TR { get; set; }
        public string B10_TR { get; set; }
        public string B11_TR { get; set; }
        public string B12_TR { get; set; }
        public string B13_TR { get; set; }
        public string B14_TR { get; set; }
        public string B15_TR { get; set; }

    }
}
