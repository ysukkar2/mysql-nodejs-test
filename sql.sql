create database karma;
use karma;
create table users(id numeric primary key,username varchar(100) unique , karma_score integer , image_id numeric   );
create table images ( id numeric primary key, url varchar(100));

create table karmaposition ( id numeric primary key, position numeric, karma_score integer,Image_url varchar(100) );


insert into karmaposition values(6, 3 , 4205, 'http');
insert into karmaposition values(8, 4 , 4204, 'http');
insert into karmaposition values(1, 5 , 4202, 'http');
insert into karmaposition values(4, 6 , 4201, 'http');

insert into karmaposition values(7, 7 , 4200, 'http');
insert into users values(1, 'troglecartier' , 4202, 1);



insert into users values(2, 'towpocket' , 5000, 2);
insert into users values(3, 'snorklingbinnacle' , 5500, 3);
insert into users values(4, 'fitwhatever' , 4201, 4);
insert into users values(5, 'singeofficer' , 3203, 5);
insert into users values(6, 'perhapsupstage' , 4205, 6);
insert into users values(7, 'chokefiery' , 4200, 7);
insert into users values(8, 'artistmath' , 4204, 8);
insert into images values(1,'h');

select * from users;
select * from images;
select * from karmaposition;



