import express from 'express';
import Robot, { Configuration } from './../models';

const router = express.Router();

const robots = Array(10).fill().map(
  index => new Robot(index, 'Robot Name', Configuration(true, false, true, 10, 'red'), ['on fire'])
);

router.get('/robots.json', (req, res, next ) => {
  // const config = new Configuration(true, false, true, 10, 'red')
  // let robots = [
  //     new Robot(1, 'Robot Name', config, ['on fire'])
  // ];
  res.json(robots);
});

export default router;
