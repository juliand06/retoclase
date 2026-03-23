
const entradaUsuario = {
  nombre: "julian",
  apellido: "duran",
  email: "[EMAIL_ADDRESS]",
  telefono: "3133870715",
  ciudad: "bucaramanga",
  pais: "Colombia",
  activo: true,
};



const {
  nombre,
  apellido,
  email: correo,       
  telefono: contacto, 
  ciudad,
  pais,
  activo,
} = entradaUsuario;



const usuarioFormateado = {
  identidad: { ...{ nombre, apellido } },
  contacto:  { ...{ correo, contacto } },
  ubicacion: { ...{ ciudad, pais } },
  activo,
};
