const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

class DatabaseManager {
    constructor(dbName) {
        this.db = new sqlite3.Database(dbName);
    }

    createTable(tableName, columns) {
        const columnsString = columns.map(col => `${col.name} ${col.type}`).join(',');
        const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columnsString})`;
        return new Promise((resolve, reject) => {
            this.db.run(query, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    insertData(tableName, data) {
        const keys = Object.keys(data);
        const placeholders = keys.map(() => '?').join(',');
        const values = Object.values(data);
        const query = `INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${placeholders})`;
        return new Promise((resolve, reject) => {
            this.db.run(query, values, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    updateData(tableName, newData, condition) {
        const setClause = Object.keys(newData).map(key => `${key} = ?`).join(',');
        const values = [...Object.values(newData), ...Object.values(condition)];
        const query = `UPDATE ${tableName} SET ${setClause} WHERE ${Object.keys(condition).join(' = ? AND ')} = ?`;
        return new Promise((resolve, reject) => {
            this.db.run(query, values, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    deleteData(tableName, condition) {
        const query = `DELETE FROM ${tableName} WHERE ${Object.keys(condition).join(' = ? AND ')} = ?`;
        const values = Object.values(condition);
        return new Promise((resolve, reject) => {
            this.db.run(query, values, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    searchData(tableName, condition) {
        const query = `SELECT * FROM ${tableName} WHERE ${Object.keys(condition).join(' = ? AND ')} = ?`;
        const values = Object.values(condition);
        return new Promise((resolve, reject) => {
            this.db.all(query, values, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    startServer(port) {
        const app = express();
        app.use(cors());
        app.use(express.json());

        app.post('/insert', async (req, res) => {
            const { tableName, data } = req.body;
            try {
                await this.insertData(tableName, data);
                res.send('Data inserted successfully');
            } catch (err) {
                res.status(500).send(err.message);
            }
        });

        app.put('/update', async (req, res) => {
            const { tableName, newData, condition } = req.body;
            try {
                await this.updateData(tableName, newData, condition);
                res.send('Data updated successfully');
            } catch (err) {
                res.status(500).send(err.message);
            }
        });

        app.delete('/delete', async (req, res) => {
            const { tableName, condition } = req.body;
            try {
                await this.deleteData(tableName, condition);
                res.send('Data deleted successfully');
            } catch (err) {
                res.status(500).send(err.message);
            }
        });

        app.post('/search', async (req, res) => {
            const { tableName, condition } = req.body;
            try {
                const result = await this.searchData(tableName, condition);
                res.json(result);
            } catch (err) {
                res.status(500).send(err.message);
            }
        });

        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }
}

// Exemplo de uso:
/*const dbManager = new DatabaseManager('example.db');

dbManager.createTable('users', [
    { name: 'id', type: 'INTEGER PRIMARY KEY AUTOINCREMENT' },
    { name: 'name', type: 'TEXT' },
    { name: 'age', type: 'INTEGER' }
]).then(() => {
    dbManager.startServer(3000);
}).catch(err => {
    console.error('Error:', err);
});
*/