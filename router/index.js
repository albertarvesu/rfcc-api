import express from 'express';
import faker from 'faker';
import Robot, { Configuration } from './../models';

const router = express.Router();

const ON_FIRE = 'on fire';
const RUSTY = 'rusty';
const LOOSE_SCREWS = 'loose screws';
const PAINT_SCRATCHED = 'paint scratched';

const TOTAL = process.env.TOTAL || 1000;

const STATUSES = [ON_FIRE, RUSTY, LOOSE_SCREWS, PAINT_SCRATCHED];

const random = max => Math.floor(Math.random() * max);

let robots = Array(TOTAL).fill().map(
  index => {
    const config = new Configuration(
      Math.random() > 0.5,
      Math.random() > 0.5,
      Math.random() > 0.5,
      random(11), // Max 10
      faker.commerce.color(),
    );
    const robot = new Robot(
      faker.random.number(),
      `${faker.hacker.abbreviation()} ${faker.finance.mask()}`,
      config,
      Array(random(STATUSES.length)).fill()
        .map(value => STATUSES[random(STATUSES.length)])
        .reduce((x, y) => x.includes(y) ? x : [...x, y], []),
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

router.post('/robots/:id/extinguish.json', (req, res, next ) => {
  const robotId = parseInt(req.params.id, 10);
  let robot = null;
  robots = robots.reduce(
    (accum, current) => {
      if (current.id === robotId) {
        robot = {
          ...current,
          statuses: current.statuses.filter(status => status !== ON_FIRE)
        }
        return [
          ...accum,
          robot,
        ];
      } else {
        return accum.concat(current);
      }
    },
    [],
  );

  res.json({
    data: robot,
  });
});

router.post('/robots/recycle.json', (req, res, next ) => {
  const robotIds = req.body.recycleRobots;
  robots = robots.filter(robot => !robotIds.includes(robot.id))
  res.json({
    data: robotIds,
  });
});

router.put('/shipments/create', (req, res, next ) => {
  const robotIds = req.body.robotIds;
  robots = robots.filter(robot => !robotIds.includes(robot.id))
  res.json({
    data: robotIds,
  });
});

export default router;
