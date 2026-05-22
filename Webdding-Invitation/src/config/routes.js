// Configuración centralizada de rutas
export const ROUTES = [
  {
    id: 'inicio',
    path: '/Mar',
    label: 'Inicio',
    icon: 'home'
  },
//   {
//     id: 'invitacion',
//     path: '/invitacion',
//     label: 'Invitación',
//     icon: 'envelope'
//   },
//   {
//     id: 'presentacion',
//     path: '/presentacion',
//     label: 'Presentación',
//     icon: 'heart'
//   },
//   {
//     id: 'info',
//     path: '/info',
//     label: 'Información',
//     icon: 'info-circle'
//   },
//   {
//     id: 'ubicacion',
//     path: '/ubicacion',
//     label: 'Ubicación',
//     icon: 'map-marker'
//   },
//   {
//     id: 'padrinos',
//     path: '/padrinos',
//     label: 'Padrinos',
//     icon: 'users'
//   },
//   {
//     id: 'especiales',
//     path: '/especiales',
//     label: 'Especiales',
//     icon: 'star'
//   },
//   {
//     id: 'atuendo',
//     path: '/atuendo',
//     label: 'Código de Atuendo',
//     icon: 'tuxedo'
//   },
//   {
//     id: 'itinerario',
//     path: '/itinerario',
//     label: 'Itinerario',
//     icon: 'clock'
//   },
//   {
//     id: 'galeria',
//     path: '/galeria',
//     label: 'Galería',
//     icon: 'images'
//   },
  {
    id: 'expo',
    path: '/expo',
    label: '16 de Mayo',
    icon: 'heart',
    special: true
  },
  {
    id: 'baile',
    path: '/baile',
    label: '09 de Mayo',
    icon: 'heart',
    special: true
  },
  {
    id: 'frase',
    path: '/frase',
    label: '06 de Mayo',
    icon: 'ticket',
    special: true
  }
];

export const getRouteByPath = (path) => {
  return ROUTES.find(route => route.path === path);
};

export const getRouteById = (id) => {
  return ROUTES.find(route => route.id === id);
};
