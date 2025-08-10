# create database
create database test;

# drop database
drop database test;

# create database
create database test;

# use database
# use edu;
use test;

# create table
create table student (
	id varchar(255),
    student_name varchar(255),
    student_number int,
    is_graduate boolean,
    graduate_date datetime
);

# drop table
drop table student;

# create table
create table student (
	id varchar(255),
    student_name varchar(255),
    student_number int,
    is_graduate boolean,
    graduate_date datetime
);

# select
select * from student;

# insertstudentstudent
insert into student values ("1", "john", 1, true, now());
insert into student values ("2", "jane", 2, false, now());
insert into student values ("3", "jack", 3, true, now());

# update
update student set student_name = "ai" where id = "1";
update student set student_name= "ai";

# delete
delete from student where id = "2";
delete from student;

#select advanced
CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

# 샘플 데이터 삽입
INSERT INTO users (name, email, is_active) VALUES
	('홍길동', 'hong@example.com', TRUE),
    ('김영희', 'kim@example.com', FALSE),
    ('이철수', 'lee@example.com', TRUE);
 
# 확인 
select * from users;

# 기본 조회
select * from users;

# 조건 조회
select * from users where is_active = true;

# 집계함수 조회
select count(*) as count, sum(is_active) as sum from users;
select is_active as "is_active Value", count(*) as count from users group by is_active order by is_active;
select is_active as "is_active Value", count(*) as count from users group by is_active order by is_active desc;

# 게시판 페이징
select * from users where is_active = true;

# page size = 10
# current page = 1, 2, 3, 4, ... n
# limit 시작 offset, 갯수
# (n-1) * 10

select * from users where is_active = true limit 1, 5;