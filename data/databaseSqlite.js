const sqlite3 = require('sqlite3').verbose();

class SQLiteDatabase {
    constructor(dbPath) {
        this.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Erro ao conectar ao banco de dados:', err.message);
                throw err;
            }
            console.log('Conexão bem sucedida com o banco de dados SQLite');
        });
    }

    close() {
        this.db.close((err) => {
            if (err) {
                console.error('Erro ao fechar conexão com o banco de dados:', err.message);
                throw err;
            }
            console.log('Conexão com o banco de dados SQLite fechada com sucesso');
        });
    }

    createTable(tableName, columns) {
        let query = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
        for (let key in columns) {
            query += `${key} ${columns[key]}, `;
        }
        query = query.slice(0, -2); // Remover a última vírgula
        query += ')';
        this.db.run(query, (err) => {
            if (err) {
                console.error('Erro ao criar tabela:', err.message);
                throw err;
            }
            console.log(`Tabela ${tableName} criada com sucesso`);
        });
    }

    queryDatabase(term, tableName, columnName, callback) {
        const query = `SELECT * FROM ${tableName} WHERE ${columnName} LIKE '%${term}%'`;
        this.db.all(query, (err, rows) => {
            if (err) {
                console.error('Erro ao executar consulta:', err.message);
                throw err;
            }
            callback(rows);
        });
    }

    editRow(id, tableName, newData, callback) {
        const query = `UPDATE ${tableName} SET ? WHERE id = ?`;
        this.db.run(query, [newData, id], (err) => {
            if (err) {
                console.error('Erro ao atualizar linha:', err.message);
                throw err;
            }
            console.log(`Linha com ID ${id} na tabela ${tableName} atualizada com sucesso`);
            callback();
        });
    }

    deleteRow(id, tableName, callback) {
        const query = `DELETE FROM ${tableName} WHERE id = ?`;
        this.db.run(query, id, (err) => {
            if (err) {
                console.error('Erro ao deletar linha:', err.message);
                throw err;
            }
            console.log(`Linha com ID ${id} na tabela ${tableName} deletada com sucesso`);
            callback();
        });
    }

    insertRow(tableName, data, callback) {
        const keys = Object.keys(data);
        const values = Object.values(data);
        const placeholders = keys.map(() => '?').join(',');
        const query = `INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${placeholders})`;
        this.db.run(query, values, function (err) {
            if (err) {
                console.error('Erro ao inserir linha:', err.message);
                throw err;
            }
            console.log(`Nova linha inserida na tabela ${tableName} com ID ${this.lastID}`);
            callback(this.lastID);
        });
    }
}

module.exports = SQLiteDatabase;
