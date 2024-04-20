class Turma {
    constructor() {
        this.turmas = [];
    }

    cadastrar(nome, disciplina, professor, diasSemana, horaInicio, horaFim) {
        const turma = {
            uid: this.gerarUID(),
            nome,
            disciplina,
            professor,
            diasSemana,
            horaInicio,
            horaFim
        };
        this.turmas.push(turma);
        return turma;
    }

    editar(uid, nome, disciplina, professor, diasSemana, horaInicio, horaFim) {
        const turma = this.buscarPorId(uid);
        if (turma) {
            turma.nome = nome;
            turma.disciplina = disciplina;
            turma.professor = professor;
            turma.diasSemana = diasSemana;
            turma.horaInicio = horaInicio;
            turma.horaFim = horaFim;
            return true;
        }
        return false; // Turma não encontrada
    }

    excluir(uid) {
        const index = this.turmas.findIndex(turma => turma.uid === uid);
        if (index !== -1) {
            this.turmas.splice(index, 1);
            return true;
        }
        return false; // Turma não encontrada
    }

    listar() {
        return this.turmas;
    }

    buscarPorId(uid) {
        return this.turmas.find(turma => turma.uid === uid);
    }

    gerarUID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}