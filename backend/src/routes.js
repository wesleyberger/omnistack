/** Importando Express */
const express = require('express');

/** Importando Controller */
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/** Exportando express */
const routes = express.Router();

/**ROTA / RECURSOS */

/** POST para criar um cadastro e GET gerar relatórios */
/** ONGS */
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

/** CASOS */
routes.get('/incidente', IncidentController.index);
routes.post('/incidente', IncidentController.create);
routes.delete('/incidente/:id', IncidentController.delete);

/** PROFILE */
routes.get('/profile', ProfileController.index);

/** LOGIN */
routes.post('/session', SessionController.create);

/** Exportando Rotas */
module.exports = routes;
