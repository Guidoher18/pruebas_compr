USE [master]
GO
/****** Object:  Database [Comprension]    Script Date: 6/4/2021 13:50:00 ******/
CREATE DATABASE [Comprension]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Comprension', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL12.SQLEXPRESS14\MSSQL\DATA\Comprension.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Comprension_log', FILENAME = N'C:\Program Files (x86)\Microsoft SQL Server\MSSQL12.SQLEXPRESS14\MSSQL\DATA\Comprension_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Comprension] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Comprension].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Comprension] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Comprension] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Comprension] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Comprension] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Comprension] SET ARITHABORT OFF 
GO
ALTER DATABASE [Comprension] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Comprension] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Comprension] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Comprension] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Comprension] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Comprension] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Comprension] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Comprension] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Comprension] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Comprension] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Comprension] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Comprension] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Comprension] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Comprension] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Comprension] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Comprension] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Comprension] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Comprension] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Comprension] SET  MULTI_USER 
GO
ALTER DATABASE [Comprension] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Comprension] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Comprension] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Comprension] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Comprension] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Comprension]
GO
/****** Object:  Table [dbo].[Resultados]    Script Date: 6/4/2021 13:50:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Resultados](
	[Completo_Digitos] [varchar](5) NULL,
	[Completo_Monitoreo] [varchar](5) NULL,
	[Completo_Comprension] [varchar](5) NULL,
	[FechayHora_Entrada_Digitos] [varchar](50) NULL,
	[FechayHora_Salida_Digitos] [varchar](50) NULL,
	[FechayHora_Entrada_Monitoreo] [varchar](50) NULL,
	[FechayHora_Salida_Monitoreo] [varchar](50) NULL,
	[FechayHora_Entrada_Comprension] [varchar](50) NULL,
	[FechayHora_Salida_Comprension] [varchar](50) NULL,
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Apellido] [varchar](50) NULL,
	[Nombre] [varchar](50) NULL,
	[Edad] [int] NULL,
	[Sexo] [varchar](50) NULL,
	[Nivel_Educativo] [varchar](50) NULL,
	[Ultimos_DNI] [varchar](3) NULL,
	[Lugar_de_Residencia] [varchar](50) NULL,
	[Mail] [varchar](max) NULL,
	[Respuesta_DD] [varchar](max) NULL,
	[Puntaje_DD] [int] NULL,
	[DD_TR] [int] NULL,
	[Respuesta_DL] [varchar](max) NULL,
	[Puntaje_DL] [int] NULL,
	[DL_TR] [int] NULL,
	[Libros] [varchar](max) NULL,
	[Orden_de_Presentacion] [varchar](max) NULL,
	[Respuesta_Monitoreo] [varchar](max) NULL,
	[A1_SN] [varchar](10) NULL,
	[A2_SN] [varchar](10) NULL,
	[A3_SN] [varchar](10) NULL,
	[A4_SN] [varchar](10) NULL,
	[A5_SN] [varchar](10) NULL,
	[A6_SN] [varchar](10) NULL,
	[A7_SN] [varchar](10) NULL,
	[A8_SN] [varchar](10) NULL,
	[A9_SN] [varchar](10) NULL,
	[A10_SN] [varchar](10) NULL,
	[A11_SN] [varchar](10) NULL,
	[A12_SN] [varchar](10) NULL,
	[A13_SN] [varchar](10) NULL,
	[A14_SN] [varchar](10) NULL,
	[A15_SN] [varchar](10) NULL,
	[A1_Respuesta] [varchar](max) NULL,
	[A2_Respuesta] [varchar](max) NULL,
	[A3_Respuesta] [varchar](max) NULL,
	[A4_Respuesta] [varchar](max) NULL,
	[A5_Respuesta] [varchar](max) NULL,
	[A6_Respuesta] [varchar](max) NULL,
	[A7_Respuesta] [varchar](max) NULL,
	[A8_Respuesta] [varchar](max) NULL,
	[A9_Respuesta] [varchar](max) NULL,
	[A10_Respuesta] [varchar](max) NULL,
	[A11_Respuesta] [varchar](max) NULL,
	[A12_Respuesta] [varchar](max) NULL,
	[A13_Respuesta] [varchar](max) NULL,
	[A14_Respuesta] [varchar](max) NULL,
	[A15_Respuesta] [varchar](max) NULL,
	[A1_Respuesta_Indice] [varchar](max) NULL,
	[A2_Respuesta_Indice] [varchar](max) NULL,
	[A3_Respuesta_Indice] [varchar](max) NULL,
	[A4_Respuesta_Indice] [varchar](max) NULL,
	[A5_Respuesta_Indice] [varchar](max) NULL,
	[A6_Respuesta_Indice] [varchar](max) NULL,
	[A7_Respuesta_Indice] [varchar](max) NULL,
	[A8_Respuesta_Indice] [varchar](max) NULL,
	[A9_Respuesta_Indice] [varchar](max) NULL,
	[A10_Respuesta_Indice] [varchar](max) NULL,
	[A11_Respuesta_Indice] [varchar](max) NULL,
	[A12_Respuesta_Indice] [varchar](max) NULL,
	[A13_Respuesta_Indice] [varchar](max) NULL,
	[A14_Respuesta_Indice] [varchar](max) NULL,
	[A15_Respuesta_Indice] [varchar](max) NULL,
	[A1_TR] [int] NULL,
	[A2_TR] [int] NULL,
	[A3_TR] [int] NULL,
	[A4_TR] [int] NULL,
	[A5_TR] [int] NULL,
	[A6_TR] [int] NULL,
	[A7_TR] [int] NULL,
	[A8_TR] [int] NULL,
	[A9_TR] [int] NULL,
	[A10_TR] [int] NULL,
	[A11_TR] [int] NULL,
	[A12_TR] [int] NULL,
	[A13_TR] [int] NULL,
	[A14_TR] [int] NULL,
	[A15_TR] [int] NULL,
	[B1_SN] [varchar](10) NULL,
	[B2_SN] [varchar](10) NULL,
	[B3_SN] [varchar](10) NULL,
	[B4_SN] [varchar](10) NULL,
	[B5_SN] [varchar](10) NULL,
	[B6_SN] [varchar](10) NULL,
	[B7_SN] [varchar](10) NULL,
	[B8_SN] [varchar](10) NULL,
	[B9_SN] [varchar](10) NULL,
	[B10_SN] [varchar](10) NULL,
	[B11_SN] [varchar](10) NULL,
	[B12_SN] [varchar](10) NULL,
	[B13_SN] [varchar](10) NULL,
	[B14_SN] [varchar](10) NULL,
	[B15_SN] [varchar](10) NULL,
	[B1_Respuesta] [varchar](max) NULL,
	[B2_Respuesta] [varchar](max) NULL,
	[B3_Respuesta] [varchar](max) NULL,
	[B4_Respuesta] [varchar](max) NULL,
	[B5_Respuesta] [varchar](max) NULL,
	[B6_Respuesta] [varchar](max) NULL,
	[B7_Respuesta] [varchar](max) NULL,
	[B8_Respuesta] [varchar](max) NULL,
	[B9_Respuesta] [varchar](max) NULL,
	[B10_Respuesta] [varchar](max) NULL,
	[B11_Respuesta] [varchar](max) NULL,
	[B12_Respuesta] [varchar](max) NULL,
	[B13_Respuesta] [varchar](max) NULL,
	[B14_Respuesta] [varchar](max) NULL,
	[B15_Respuesta] [varchar](max) NULL,
	[B1_Respuesta_Indice] [varchar](max) NULL,
	[B2_Respuesta_Indice] [varchar](max) NULL,
	[B3_Respuesta_Indice] [varchar](max) NULL,
	[B4_Respuesta_Indice] [varchar](max) NULL,
	[B5_Respuesta_Indice] [varchar](max) NULL,
	[B6_Respuesta_Indice] [varchar](max) NULL,
	[B7_Respuesta_Indice] [varchar](max) NULL,
	[B8_Respuesta_Indice] [varchar](max) NULL,
	[B9_Respuesta_Indice] [varchar](max) NULL,
	[B10_Respuesta_Indice] [varchar](max) NULL,
	[B11_Respuesta_Indice] [varchar](max) NULL,
	[B12_Respuesta_Indice] [varchar](max) NULL,
	[B13_Respuesta_Indice] [varchar](max) NULL,
	[B14_Respuesta_Indice] [varchar](max) NULL,
	[B15_Respuesta_Indice] [varchar](max) NULL,
	[B1_TR] [int] NULL,
	[B2_TR] [int] NULL,
	[B3_TR] [int] NULL,
	[B4_TR] [int] NULL,
	[B5_TR] [int] NULL,
	[B6_TR] [int] NULL,
	[B7_TR] [int] NULL,
	[B8_TR] [int] NULL,
	[B9_TR] [int] NULL,
	[B10_TR] [int] NULL,
	[B11_TR] [int] NULL,
	[B12_TR] [int] NULL,
	[B13_TR] [int] NULL,
	[B14_TR] [int] NULL,
	[B15_TR] [int] NULL,
	[Lectura_A_TR] [int] NULL,
	[Lectura_B_TR] [int] NULL,
	[Cuestionario_A_TR] [int] NULL,
	[Cuestionario_B_TR] [int] NULL,
	[Comprension_Orden_de_Presentacion] [varchar](max) NULL,
	[Puntaje_A_Comprension] [int] NULL,
	[Puntaje_B_Comprension] [int] NULL,
	[Comprension_A1] [varchar](10) NULL,
	[Comprension_A2] [varchar](10) NULL,
	[Comprension_A3] [varchar](10) NULL,
	[Comprension_A4] [varchar](10) NULL,
	[Comprension_A5] [varchar](10) NULL,
	[Comprension_A6] [varchar](10) NULL,
	[Comprension_A7] [varchar](10) NULL,
	[Comprension_A8] [varchar](10) NULL,
	[Comprension_A9] [varchar](10) NULL,
	[Comprension_A10] [varchar](10) NULL,
	[Comprension_B1] [varchar](10) NULL,
	[Comprension_B2] [varchar](10) NULL,
	[Comprension_B3] [varchar](10) NULL,
	[Comprension_B4] [varchar](10) NULL,
	[Comprension_B5] [varchar](10) NULL,
	[Comprension_B6] [varchar](10) NULL,
	[Comprension_B7] [varchar](10) NULL,
	[Comprension_B8] [varchar](10) NULL,
	[Comprension_B9] [varchar](10) NULL,
	[Comprension_B10] [varchar](10) NULL,
 CONSTRAINT [PK_Tabla1] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
USE [master]
GO
ALTER DATABASE [Comprension] SET  READ_WRITE 
GO
