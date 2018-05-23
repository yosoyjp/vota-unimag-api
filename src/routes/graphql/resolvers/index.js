const { merge } = require('lodash');

const Usuario = require('./def/usuario');
const Rol = require('./def/rol');
const Lugar = require('./def/lugar');
const Mesa = require('./def/mesa');
const TipoUsuario = require('./def/tipoUsuario');

module.exports = merge(
	Usuario,
	Rol,
	Lugar,
	Mesa,
	TipoUsuario
);
