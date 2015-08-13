module.exports = function(app) {
  var express = require('express');
  var daysRouter = express.Router();

  daysRouter.get('/', function(req, res) {
    res.send({
      'days': [
        {
          id: 1,
          name: 'San Francisco Sightseeing',
          description: 'Beautiful places in San Francisco',
          address: 'San Francisco'
        },
        {
          id: 2,
          name: 'Kauai',
          description: 'Active day on Kauai',
          address: 'Kauai, Hawaii'
        },
        {
          id: 3,
          name: 'Los Angeles',
          description: 'Active day on Kauai',
          address: 'Kauai, Hawaii'
        },
        {
          id: 4,
          name: 'Maui',
          description: 'Active day on Kauai',
          address: 'Kauai, Hawaii'
        },
        {
          id: 5,
          name: 'Oahu',
          description: 'Active day on Kauai',
          address: 'Kauai, Hawaii'
        },
        {
          id: 6,
          name: 'Big Island',
          description: 'Active day on Kauai',
          address: 'Kauai, Hawaii'
        }
      ]
    });
  });

  daysRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  daysRouter.get('/:id', function(req, res) {
    res.send({
      'days': {
        id: req.params.id
      }
    });
  });

  daysRouter.put('/:id', function(req, res) {
    res.send({
      'days': {
        id: req.params.id
      }
    });
  });

  daysRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/days', daysRouter);
};
