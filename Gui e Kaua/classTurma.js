<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
let gerenciador = new GerenciadorTurmas({});

>>>>>>> c1494d1a90a58e4acebc95909e381ad057a364b1
>>>>>>> c752912078915618cd7e2c513bb7bd3289a4e3ba
export default class GerenciadorTurmas {
    constructor(objeto) {
        this.objeto = objeto;
    }

    cadastrar(nome, disciplina, professor, diasSemana, horaInicio, horaFim) {
        const uid = this.gerarUID();
        this.objeto[uid] = {
            nome,
            disciplina,
            professor,
            diasSemana,
            horaInicio,
            horaFim
        };
        return uid;
    }

    editar(uid, nome, disciplina, professor, diasSemana, horaInicio, horaFim) {
        if (this.objeto.hasOwnProperty(uid)) {
            this.objeto[uid] = {
                nome,
                disciplina,
                professor,
                diasSemana,
                horaInicio,
                horaFim
            };
            return true;
        } else {
            return false; // Turma não encontrada
        }
    }

    excluir(uid) {
        if (this.objeto.hasOwnProperty(uid)) {
            delete this.objeto[uid];
            return true;
        } else {
            return false; // Turma não encontrada
        }
    }

    listar() {
        return this.objeto;
    }

    buscarPorId(uid) {
        if (this.objeto.hasOwnProperty(uid)) {
            return this.objeto[uid];
        } else {
            return null; // Turma não encontrada
        }
    }

    gerarUID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}
