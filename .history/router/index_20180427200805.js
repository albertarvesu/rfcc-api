import express from 'express';
import faker from 'faker';
import Robot, { Configuration } from './../models';

const router = express.Router();

const statuses = ['on fire', 'rusty', 'loose screws', 'paint scratched'];

const robots = Array(10).fill().map(
  index => {
    const config = new Configuration(
      Math.random() > 0.5,
      Math.random() > 0.5,
      Math.random() > 0.5,
      Math.floor(Math.random() * 11),
      faker.commerce.color(),
    );
    const robot = new Robot(
      faker.random.number(),
      faker.internet.userName(),
      config,
      ['on fire'],
    );
    return robot;
  }
);

router.get('/robots.json', (req, res, next ) => {
  // const config = new Configuration(true, false, true, 10, 'red')
  // let robots = [
  //     new Robot(1, 'Robot Name', config, ['on fire'])
  // ];
  res.json(robots);
});

export default router;

