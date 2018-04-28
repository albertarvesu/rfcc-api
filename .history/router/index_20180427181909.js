import express from 'express';
import Robot, { Configuration } from './../models/robot';

const router = express.Router();

router.get('/robots.json', (req, res, next ) => {
  const config = new Configuration(true, false, true, 10, 'red')
  let robots = [
      new Robot(1, 'Robot Name', config, ['on fire'])
  ];
  res.json(robots);
});

