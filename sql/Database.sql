-- ****************************************************************************************************
-- Create new database
-- ****************************************************************************************************
IF NOT EXISTS(SELECT 1 FROM master.sys.databases WHERE name = 'PerfectMenuDB')
BEGIN
  CREATE DATABASE [PerfectMenuDB]
END
GO

USE [PerfectMenuDB]
GO

-- ****************************************************************************************************
-- Create Users table
-- ****************************************************************************************************
IF NOT EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Users')
BEGIN
  CREATE TABLE [Users]
  (
	  [Guid] NVARCHAR(50),
		[Status] INT,
	  [Login] NVARCHAR(50),
	  [Pswrd] NVARCHAR(50),
	  [Name] NVARCHAR(100),
	  CONSTRAINT PK_Users PRIMARY KEY (Guid)
  )
END
GO
