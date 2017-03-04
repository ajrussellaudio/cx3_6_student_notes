DROP TABLE lightsabers;
DROP TABLE jedis;

CREATE TABLE jedis (
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INT2 NOT NULL,
  darkside BOOLEAN NOT NULL
);

CREATE TABLE lightsabers (
  id SERIAL8 PRIMARY KEY,
  color VARCHAR(255) NOT NULL,
  hilt_metal VARCHAR(255) NOT NULL,
  jedi_id INT8 REFERENCES jedis(id)
);

-- SELECT * FROM jedis;

INSERT INTO jedis (name, age, darkside) VALUES ('Luke', 58, false);
INSERT INTO jedis (name, age, darkside) VALUES ('Vader', 78, true);
INSERT INTO jedis (name, age, darkside) VALUES ('Obi-Wan', 89, true);

UPDATE jedis SET darkside = true;
UPDATE jedis SET darkside = false WHERE name = 'Luke';
UPDATE jedis SET darkside = false WHERE name = 'Obi-Wan' AND age = 89;

INSERT INTO jedis (name, age, darkside) VALUES ('Anakin', 12, false);

-- SELECT * FROM jedis;
-- SELECT COUNT(*) FROM jedis;

-- UPDATE jedis SET age = 20, darkside = true WHERE name = 'Anakin';
-- UPDATE jedis SET (age, darkside) = (20, true) WHERE name = 'Anakin'; -- same thing

-- SELECT * FROM jedis;

-- DELETE FROM jedis WHERE name = 'Luke';

INSERT INTO jedis (name, age, darkside) VALUES ('Anakin', 38, true);

-- UPDATE jedis SET id = 5 WHERE name = 'Anakin' AND age = 12;
-- Gives Error:
-- psql:jedi.sql:36: ERROR:  duplicate key value violates unique constraint "jedis_pkey"

-- DELETE FROM jedis WHERE id = 1;
-- id: 1 is gone forever

-- SELECT * FROM jedis;
-- SELECT * FROM jedis ORDER BY id;
-- SELECT * FROM jedis ORDER BY id DESC; 

INSERT INTO lightsabers (color, hilt_metal, jedi_id) VALUES ('green', 'palladium', 1);
INSERT INTO lightsabers (color, hilt_metal, jedi_id) VALUES ('red', 'titanium', 2);
INSERT INTO lightsabers (color, hilt_metal, jedi_id) VALUES ('tartan', 'iron', 1);

-- SELECT * FROM jedis;
-- SELECT * FROM lightsabers;

-- SELECT * FROM jedis, lightsabers;
-- Cross Join, never any use

SELECT * FROM jedis INNER JOIN lightsabers ON jedis.id = lightsabers.jedi_id WHERE name = 'Luke';
