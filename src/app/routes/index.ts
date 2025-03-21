import { Router } from "express";
import { userRoutes } from "../modules/users/users.routes";

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;