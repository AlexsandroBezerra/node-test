import { Router } from 'express'
import NotificationsController from './controllers/NotificationsController'

import PageController from './controllers/PageController'
import SharedPagesController from './controllers/SharedPagesController'

const routes = Router()

const pageController = new PageController()
const sharedPagesController = new SharedPagesController()
const notificationsController = new NotificationsController()

routes.get('/pages', pageController.index)
routes.get('/pages/:path', pageController.show)
routes.post('/pages', pageController.create)

routes.get('/shared-pages', sharedPagesController.index)
routes.post('/pages/:path/share', sharedPagesController.put)

routes.post('/notifications', notificationsController.create)

export default routes
