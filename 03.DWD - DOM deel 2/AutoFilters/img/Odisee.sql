use test;

-- DDL = Data Definition Language

-- DDL drop table = verwijder tabel
drop table if exists Student;
drop table if exists Persoon;

-- DDL create table = maakt een tabel
create table Persoon 
(
	id				int				not null	identity(1,1), 
	naam			nvarchar(50)	not null,
	geslacht		nchar(1)		not null	default '?',
	geboortedatum	date			null,
	constraint PK_Persoon primary key (id),
	constraint CK_Persoon_geslacht check (geslacht in ('?','V', 'M'))
);

-- DML = Data Manipulation Language, CRUD = Create, Read, Update, Delete
-- CRUD Sql = Insert, Select, Update, Delete

-- DML Insert = voeg records toe
insert into Persoon (naam) values ('Piet Pienter');
insert into Persoon (naam, geslacht) values ('Bert Bibber', 'M');
insert into Persoon 
		(naam, geslacht) 
	values 
		('Hilarius Warwinkel', 'M'), 
		('Philomena Happelspijs', 'V');

-- DML Update = wijzig gegevens
update Persoon set geslacht = 'M' where id = 1;

-- DML Select = lees gegevens
select * from Persoon;

-- DDL create table = maakt een tabel
create table Student
(
	studentnr		nchar(8)	not null,
	persoonid		int			not null,
	inschrijving	date		not null	default getdate(),
	constraint PK_Student primary key (studentnr),
	constraint FK_Student_persoonid foreign key (persoonid) references Persoon (id),
	constraint UK_Student_persoonid unique (persoonid)
);

-- DML Insert = voeg records toe
insert into Student
		(studentnr, persoonid)
	values
		('s0000001', 1),
		('s0000002', 2)

/*
insert into Student
		(studentnr, persoonid)
	values
		('s0000003', 1),
		('s0000004', 2)
*/


-- DML Select = lees gegevens
select * from Student


