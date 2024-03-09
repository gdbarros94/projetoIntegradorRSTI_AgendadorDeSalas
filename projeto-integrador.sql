CREATE TABLE IF NOT EXISTS `usuarios` (
	`id` int NOT NULL AUTO_INCREMENT UNIQUE DEFAULT '',
	`nome_completo` varchar(96) NOT NULL DEFAULT '',
	`email` varchar(128) NOT NULL DEFAULT '',
	`senha` varchar(128) NOT NULL DEFAULT '',
	`telefone` varchar(12) NOT NULL DEFAULT '',
	`cargo` varchar(32) NOT NULL DEFAULT '',
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `salas` (
	`id` int NOT NULL AUTO_INCREMENT UNIQUE DEFAULT '',
	`numero` int NOT NULL DEFAULT '',
	`capacidade` int NOT NULL DEFAULT '',
	`recursos` varchar(128) NOT NULL DEFAULT '',
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `turmas` (
	`id` int NOT NULL AUTO_INCREMENT UNIQUE DEFAULT '',
	`numero` varchar(16) NOT NULL DEFAULT '',
	`alunos` int NOT NULL DEFAULT '',
	`data_inicio` date NOT NULL DEFAULT '',
	`data_fim` date NOT NULL DEFAULT '',
	`periodo` text NOT NULL DEFAULT '',
	`hora_inicio` time NOT NULL DEFAULT '',
	`hora_fim` time NOT NULL DEFAULT '',
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Agendamentos` (
	`id` int NOT NULL AUTO_INCREMENT UNIQUE DEFAULT '',
	`id_sala` int NOT NULL DEFAULT '',
	`id_usuario` int NOT NULL DEFAULT '',
	`data_hora_inicio` timestamp NOT NULL DEFAULT '',
	`data_hora_fim` timestamp NOT NULL DEFAULT '',
	PRIMARY KEY (`id`)
);




ALTER TABLE `Agendamentos` ADD CONSTRAINT `Agendamentos_fk1` FOREIGN KEY (`id_sala`) REFERENCES `salas`(`id`);

ALTER TABLE `Agendamentos` ADD CONSTRAINT `Agendamentos_fk2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`);