import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'

import Page from '../schemas/Page'
import generateDeepLink from '../utils/generateDeepLink'

class SharedPagesController {
  async index(request: Request, response: Response): Promise<Response> {
    const pageRepository = getMongoRepository(Page)

    const pages = await pageRepository.find({
      where: {
        shared: true
      }
    })

    return response.json(pages)
  }

  async put(request: Request, response: Response): Promise<Response> {
    const { path } = request.params

    const pageRepository = getMongoRepository(Page)

    const page = await pageRepository.findOne({ path })

    if(page) {
      page.shared = true

      await pageRepository.save(page)

      return response.json(page)
    }

    return response.status(400).send()
  }
}

export default SharedPagesController
