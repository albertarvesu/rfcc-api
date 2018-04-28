import express from 'express';
import faker from 'faker';
import Robot, { Configuration } from './../models';

const router = express.Router();

const statuses = ['on fire', 'rusty', 'loose screws', 'paint scratched'];

const TOTAL = process.env.TOTAL || 100;

const random = max => Math.floor(Math.random() * max);

const robots = Array(TOTAL).fill().map(
  index => {
    const config = new Configuration(
      Math.random() > 0.5,
      Math.random() > 0.5,
      Math.random() > 0.5,
      Math.floor(Math.random() * 11), // Max 10
      faker.commerce.color(),
    );
    const robot = new Robot(
      faker.random.number(),
      faker.internet.userName(),
      config,
      Array(random(status.length)).fill().map(value => statuses[Math.floor(Math.random() * statuses.length)]).reduce((x, y) => x.includes(y) ? x : [...x, y], []),
    );
    return robot;
  }
);

router.get('/robots.json', (req, res, next ) => {
  const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 20;
  res.json({
    data: robots.slice(offset, offset + limit),
    total: robots.length,
  });
});

router.get('/robots/:id/extinguish.json', (req, res, next ) => {
  const robotId = 
  robots = robots.reduce(
    (accum, current) => {

    },
    [],
  );
  res.json({});
  // const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0;
  // const limit = req.query.limit ? parseInt(req.query.limit, 10) : 20;
  // console.warn(req.query);
  // res.json({
  //   data: robots.slice(offset, offset + limit),
  //   total: robots.length,
  // });
});

export default router;

