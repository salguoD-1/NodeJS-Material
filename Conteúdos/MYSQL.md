# Banco de Dados MySQL

## Instalação

Para instalar o MySQL no Windows, basta acessar o site oficial e baixar o instalador. [MySQL Community Downloads](https://dev.mysql.com/downloads/installer/)

# Comandos MySQL

Veremos alguns comandos básicos do MySQL para criar e manipular tabelas.

## SHOW DATABASES;

Mostra todas as bases de dados existentes.

```sql
SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sakila             |
| sys                |
| world              |
+--------------------+
6 rows in set (0.00 sec)
```

## CREATE DATABASE nome_da_base;

O comando `CREATE DATABASE` cria uma nova base de dados.

```sql
CREATE DATABASE sistemaDeCadastro;
```

Exibindo novamente as bases de dados, podemos ver que a base de dados `sistemaDeCadastro` foi criada.

```sql
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sakila             |
| sistemadecadastro  |
| sys                |
| world              |
+--------------------+
7 rows in set (0.00 sec)
```

## USE nome_da_base;

O comando `USE` seleciona a base de dados que será utilizada.

```sql
USE sistemaDeCadastro;
Database changed
```

## SHOW TABLES;

O comando `SHOW TABLES` mostra todas as tabelas existentes na base de dados selecionada. Como não criamos nenhuma tabela ainda, o resultado será vazio.

```sql
Empty set (0.00 sec)
```

## CREATE TABLE nome_da_tabela;

O comando `CREATE TABLE` cria uma nova tabela. Uma tabela é um conjunto de dados relacionados que são organizados em linhas e colunas.

```sql
CREATE TABLE usuarios (
    nome VARCHAR(100),
    email VARCHAR(100),
    idade INT(2)
);
```

Note que criamos três colunas na tabela `usuarios`. A primeira coluna é `nome`, do tipo `VARCHAR(100)`, que significa que o valor dessa coluna pode ter até 100 caracteres. A segunda coluna é `email`, do tipo `VARCHAR(100)`, e a terceira coluna é `idade`, do tipo `INT(2)`, que significa que o valor dessa coluna pode ter até dois dígitos.

Exibindo a tabela criada

```sql
mysql> SHOW TABLES;
+-----------------------------+
| Tables_in_sistemadecadastro |
+-----------------------------+
| usuarios                    |
+-----------------------------+
1 row in set (0.00 sec)
```

## DESCRIBE nome_da_tabela;

O comando `DESCRIBE` mostra as colunas e informações sobre tabela selecionada.

```sql
mysql> DESCRIBE usuarios;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| nome  | varchar(100) | YES  |     | NULL    |       |
| email | varchar(100) | YES  |     | NULL    |       |
| idade | int          | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

## INSERT INTO nome_da_tabela;

O comando `INSERT INTO` insere um novo registro na tabela selecionada.

```sql
INSERT INTO usuarios (nome, email, idade) VALUES ('Douglas', 'contact.dougcunha@gmail.com', 23);
```

Note que usamos parênteses para explicitar quais colunas serão preenchidas e valores para preencher essas colunas. Se não especificarmos quais colunas serão preenchidas, o MySQL preencherá todas as colunas da tabela.

## SELECT \* FROM nome_da_tabela;

O comando `SELECT` seleciona os registros da tabela selecionada. O asterisco `*` significa que todos os registros serão selecionados.

```sql
SELECT * FROM usuarios;
+---------+-----------------------------+-------+
| nome    | email                       | idade |
+---------+-----------------------------+-------+
| Douglas | contact.dougcunha@gmail.com |    23 |
+---------+-----------------------------+-------+
1 row in set (0.00 sec)
```

Note que o resultado da consulta é uma tabela, com as colunas e valores selecionados.

Preenchendo a tabela com mais registros

```sql
INSERT INTO usuarios (nome, email, idade) VALUES ('João', 'joao@test.com' , 25);
INSERT INTO usuarios (nome, email, idade) VALUES ('Maria', 'maria@test.com' , 30);
INSERT INTO usuarios (nome, email, idade) VALUES ('José', 'jose@test.com' , 28);
```

Exibindo os dados

```sql
mysql> SELECT * FROM usuarios;
+---------+-----------------------------+-------+
| nome    | email                       | idade |
+---------+-----------------------------+-------+
| Douglas | contact.dougcunha@gmail.com |    23 |
| João    | joao@test.com               |    25 |
| Maria   | maria@test.com              |    30 |
| José    | jose@test.com               |    28 |
+---------+-----------------------------+-------+
4 rows in set (0.00 sec)
```

## WHERE nome_da_coluna = valor;

O comando `WHERE` filtra os registros da tabela selecionada. O comando `WHERE` é usado em conjunto com o comando `SELECT`.

```sql
SELECT * FROM usuarios WHERE idade >= 28;
```

```sql
SELECT * FROM usuarios WHERE idade >= 28;
+-------+----------------+-------+
| nome  | email          | idade |
+-------+----------------+-------+
| Maria | maria@test.com |    30 |
| José  | jose@test.com  |    28 |
+-------+----------------+-------+
2 rows in set (0.00 sec)
```

Note que exibiu apenas os registros que possuem idade maior ou igual a 28.

## DELETE FROM nome_da_tabela;

O comando `DELETE FROM` deleta os registros da tabela selecionada. O comando `DELETE FROM` é usado em conjunto com o comando `WHERE` para deletar apenas os registros que atendem a condição especificada.

```sql
mysql> DELETE FROM usuarios WHERE nome = "José";
Query OK, 1 row affected (0.00 sec)
```

Ou seja, o comando `DELETE FROM` deletou o registro que possui o nome `José`. Vamos exibir os registros para verificar se o registro foi deletado.

```sql
mysql> SELECT * FROM usuarios;
+---------+-----------------------------+-------+
| nome    | email                       | idade |
+---------+-----------------------------+-------+
| Douglas | contact.dougcunha@gmail.com |    23 |
| João    | joao@test.com               |    25 |
| Maria   | maria@test.com              |    30 |
+---------+-----------------------------+-------+
3 rows in set (0.00 sec)
```

Note que o registro que possui o nome `José` não foi exibido.

## UPDATE nome_da_tabela SET nome_da_coluna = valor;

O comando `UPDATE` atualiza os registros da tabela selecionada. O comando `UPDATE` é usado em conjunto com o comando `WHERE` para atualizar apenas os registros que atendem a condição especificada. Além disso, o comando `UPDATE` é usado em conjunto com o comando `SET` para especificar quais colunas serão atualizadas.

```sql
mysql> UPDATE usuarios SET email = "douglas@test.com" WHERE nome = "Douglas";
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

Ou seja, o comando `UPDATE` atualizou o registro que possui o nome `Douglas`, alterando o valor da coluna `email` para `douglas@test.com`. Vamos exibir os registros para verificar se o registro foi atualizado.

```sql
mysql> SELECT * FROM usuarios;
+---------+------------------+-------+
| nome    | email            | idade |
+---------+------------------+-------+
| Douglas | douglas@test.com |    23 |
| João    | joao@test.com    |    25 |
| Maria   | maria@test.com   |    30 |
+---------+------------------+-------+
3 rows in set (0.00 sec)
```

Note que o registro que possui o nome `Douglas` foi atualizado.

[Voltar](../README.md)
