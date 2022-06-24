create database petBD;

use petBD;

create table tb_pet(
	id_pet			int primary key auto_increment,
    nm_pet          varchar(100)
);



insert into tb_pet(nm_pet)
		values('Rex');
        
        
        
select id_pet			id,
       nm_pet			nome
  from tb_pet