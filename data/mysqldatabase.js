const mysql = require('mysql');

class MySQLDatabase {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Erro ao conectar ao banco de dados:', err);
                throw err;
            }
            console.log('Conexão bem sucedida com o banco de dados MySQL');
        });
    }

    disconnect() {
        this.connection.end();
    }

    createTable(tableName, columns) {
        let query = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
        for (let key in columns) {
            query += `${key} ${columns[key]}, `;
        }
        query = query.slice(0, -2); // Remover a última vírgula
        query += ')';
        this.connection.query(query, (err, result) => {
            if (err) throw err;
            console.log(`Tabela ${tableName} criada com sucesso`);
        });
    }

    queryDatabase(term, tableName, columnName, callback) {
        const query = `SELECT * FROM ${tableName} WHERE ${columnName} LIKE '%${term}%'`;
        this.connection.query(query, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    editRow(id, tableName, newData, callback) {
        const query = `UPDATE ${tableName} SET ? WHERE id = ?`;
        this.connection.query(query, [newData, id], (err, result) => {
            if (err) throw err;
            console.log(`Linha com ID ${id} na tabela ${tableName} atualizada com sucesso`);
            callback(result);
        });
    }

    deleteRow(id, tableName, callback) {
        const query = `DELETE FROM ${tableName} WHERE id = ?`;
        this.connection.query(query, [id], (err, result) => {
            if (err) throw err;
            console.log(`Linha com ID ${id} na tabela ${tableName} deletada com sucesso`);
            callback(result);
        });
    }

    insertRow(tableName, data, callback) {
        const query = `INSERT INTO ${tableName} SET ?`;
        this.connection.query(query, data, (err, result) => {
            if (err) throw err;
            console.log(`Nova linha inserida na tabela ${tableName}`);
            callback(result);
        });
    }
}

module.exports = MySQLDatabase;
