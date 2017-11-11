create database subdb;

use subdb;

CREATE TABLE 
subtitles (
	id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	title VARCHAR(512),
	content NVARCHAR(20000),
	FULLTEXT (title)
) ENGINE=InnoDB;


CREATE TABLE
video_subtitle_mapping (
	video_id VARCHAR(32) NOT NULL PRIMARY KEY,
	subtitle_id INT
);
