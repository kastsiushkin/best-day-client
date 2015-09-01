module.exports = function(app) {
  var express = require('express');
  var activitiesRouter = express.Router();

  activitiesRouter.get('/', function(req, res) {
    res.send({
      'activities': [
        {
          id: 1,
          name: 'Golden Gate Park',
          description: 'Walk around',
          address: 'Golden Gate Park',
          day: "1"
        },
        {
          id: 2,
          name: 'Golden Gate Bridge',
          description: 'Vista point',
          address: 'Golden Gate Park',
          day: "1"
        },
        {
          id: 3,
          name: 'Twin Peaks',
          description: 'Watching sunset',
          address: 'Twin Peaks',
          day: "1"
        },
        {
          id: 4,
          name: 'Dinner at NOPA',
          description: 'Yummy',
          address: 'Divisadero and Fell',
          day: "1"
        }
      ]
    });
  });

  activitiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  activitiesRouter.get('/:id', function(req, res) {
    res.send({
      'activities': {
        id: req.params.id
      }
    });
  });

  activitiesRouter.put('/:id', function(req, res) {
    res.send({
      'activities': {
        id: req.params.id
      }
    });
  });

  activitiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/activities', activitiesRouter);
};
