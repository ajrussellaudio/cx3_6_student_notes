DROP TABLE bitings;
DROP TABLE zombies;
DROP TABLE victims;

CREATE TABLE zombies(
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255)
);

CREATE TABLE victims(
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  run_speed INT2
);

CREATE TABLE bitings(
  id SERIAL8 PRIMARY KEY,
  victim_id INT8 REFERENCES victims(id),
  zombie_id INT8 REFERENCES zombies(id),
  infected_on DATE NOT NULL
);

INSERT INTO victims (name, run_speed) VALUES ('Valerie', 100);
INSERT INTO victims (name, run_speed) VALUES ('Keith', 2);
INSERT INTO victims (name, run_speed) VALUES ('Kat', 75);
INSERT INTO victims (name, run_speed) VALUES ('Sandy', 50);

INSERT INTO zombies (name, type) VALUES ('Zsolt', 'Runner');
INSERT INTO zombies (name, type) VALUES ('Jay', 'Drooler');
INSERT INTO zombies (name, type) VALUES ('Rick', 'Walker');
INSERT INTO zombies (name, type) VALUES ('Tony', 'Chef');

INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (1, 1, 'Jan 12 2016');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (2, 2, 'Jan 15 2016');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (3, 1, 'Jan 17 2016');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (1, 4, 'Jan 19 2016');

SELECT * FROM victims;
SELECT * FROM zombies;
SELECT * FROM bitings;

SELECT * FROM zombies INNER JOIN bitings ON zombies.id = bitings.zombie_id;
SELECT * FROM victims INNER JOIN bitings ON victims.id = bitings.victim_id;

SELECT zombies.name, victims.name, infected_on FROM zombies
  INNER JOIN bitings on zombies.id = bitings.zombie_id
  INNER JOIN victims on victims.id = bitings.victim_id
  WHERE zombies.name = 'Zsolt';

