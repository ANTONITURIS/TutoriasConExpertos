const {
  Tecnologias,
} = require('../../models/index');

const tecnologias = [
  {
    nombre: 'html y css', descripcion: 'aprende html y css',
  },
  {
    nombre: 'javascript', descripcion: 'aprende javascript',
  },
  {
    nombre: 'nodejs', descripcion: 'aprende nodejs',
  },
  {
    nombre: 'mysql', descripcion: 'aprende mysql',
  },
];
/* eslint-disable  */
const defaultDb = async () => {
  for (let i = 0; i < tecnologias.length; i += 1) {
    const {
      nombre, descripcion,
    } = tecnologias[i];
    await Tecnologias.create(
      { nombre, descripcion }
    );
  }
};
module.exports = defaultDb;
