USE company_db;

INSERT INTO department(name)
VALUES ("Engineering"),
       ("Business"),
       ("Legal"),
       ("HR");

INSERT INTO role(title, salary, department_id)
VALUES ("HR Manager", 80000, 4),
       ("Engineer", 120000, 1),
       ("Business Analyst", 100000, 2),
       ("Senior Attorney", 300000, 3);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("Robert", "McDonald", 1, null),
       ("Truman","Show",1,1);