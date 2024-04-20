class Turma {
    constructor() {
        this.baseUrl = 'http://172.20.48.182:3000/salas';
        this.turmas = [];
    }

    async carregarTurmas() {
        const response = await fetch(this.baseUrl);
        this.turmas = await response.json();
    }

    async cadastrar(nome, disciplina, professor, diasSemana, horaInicio, horaFim) {
        const turma = {
            uid: this.gerarUID(),
            nome,
            disciplina,
            professor,
            diasSemana,
            horaInicio,
            horaFim
        };
        
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(turma),
        });

        const novaTurma = await response.json();
        this.turmas.push(novaTurma);
        return novaTurma;
    }

    async editar(uid, nome, disciplina, professor, diasSemana, horaInicio, horaFim) {
        const turma = this.buscarPorId(uid);
        if (turma) {
            turma.nome = nome;
            turma.disciplina = disciplina;
            turma.professor = professor;
            turma.diasSemana = diasSemana;
            turma.horaInicio = horaInicio;
            turma.horaFim = horaFim;

            await fetch(`${this.baseUrl}/${uid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(turma),
            });

            return true;
        }
        return false; // Turma não encontrada
    }

    async excluir(uid) {
        const index = this.turmas.findIndex(turma => turma.uid === uid);
        if (index !== -1) {
            await fetch(`${this.baseUrl}/${uid}`, {
                method: 'DELETE',
            });

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
