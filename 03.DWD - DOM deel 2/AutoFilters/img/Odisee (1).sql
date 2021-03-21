use test;

-- DDL = Data Definition Language

-- DDL drop table = verwijder tabel
drop table if exists StudentVak;
drop table if exists Vak;

-- DDL create table = maakt een tabel
create table StudentVak 
(
	id				int				not null	identity(1,1), 
	naam			nvarchar(50)	not null,
	semester		nchar(2)		not null,
	studiepunten	int				not null,
	geslacht		nchar(1)		not null	default '?',
	geboortedatum	date			null,
	constraint PK_StudentVak primary key (id),
	constraint CK_Student_geslacht check (geslacht in ('?','V', 'M'))
);
insert into StudentVak
		(semester)
	values
		('A1', 1),
	

-- DML = Data Manipulation Language, CRUD = Create, Read, Update, Delete
-- CRUD Sql = Insert, Select, Update, Delete

-- DML Insert = voeg records toe
insert into StudentVak (naam) values ('Piet Pienter');
insert into StudentVak (naam, geslacht) values ('Bert Bibber', 'M');
insert into StudentVak 
		(naam, geslacht) 
	values 
		('Hilarius Warwinkel', 'M'), 
		('Philomena Happelspijs', 'V');

-- DML Update = wijzig gegevens
update StudentVak set geslacht = 'M' where id = 1;

-- DML Select = lees gegevens
select * from StudentVak;

-- DDL create table = maakt een tabel
create table Vak
(
	student			nvarchar(50)not null,
	id				int			not null	identity(1,1), 
	poging			nchar(2)	not null,
	resultaat		nchar(2)	not null,
	constraint PK_StudentVak primary key (id),
	constraint FK_Vak_persoonid foreign key (id) references StudentVak (id),
	constraint UK_StudentVak_id unique (id)
);

-- DML Insert = voeg records toe
insert into Vak
		(student, poging, resultaat)
	values
		('s0000001', 1),
		('12', 2),
		('18', 3)

/*
insert into Student
		(studentnr, persoonid)
	values
		('s0000003', 1),
		('s0000004', 2)
*/


-- DML Select = lees gegevens
select * from Vak


