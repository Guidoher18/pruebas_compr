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

        //Comprensión
    }
}
