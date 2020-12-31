import { Request, Response } from 'express'
import { sendNotification } from '../services/firebaseSdk'

class NotificationsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    await sendNotification({
      title: name,
      body: `Notification from ${name}`
    })

    return response.send()
  }
}

export default NotificationsController
