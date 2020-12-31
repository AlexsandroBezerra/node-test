import { Request, Response } from 'express'
import { getMongoRepository } from 'typeorm'

import Page from '../schemas/Page'
import generateDeepLink from '../utils/generateDeepLink'

class PageController {
  async index(request: Request, response: Response): Promise<Response> {
    const pageRepository = getMongoRepository(Page)

    const pages = await pageRepository.find()

    return response.json(pages)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const pageRepository = getMongoRepository(Page)

    const path = name.toLowerCase().split(' ').join('-')

    const deepLink = await generateDeepLink(path)

    const page = pageRepository.create({
      name,
      path,
      deepLink
    })

    await pageRepository.save(page)

    return response.json(page)
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { path } = request.params

    const pageRepository = getMongoRepository(Page)

    const page = await pageRepository.findOne({
      where: { path }
    })

    return response.json(page)
  }
}

export default PageController
