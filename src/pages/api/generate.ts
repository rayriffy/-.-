import { NextApiHandler } from 'next'

import { random, sample } from 'lodash'

import { figures } from '../../core/constants/figures'
import { nanoid } from 'nanoid'

const api: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    // get screen dimensions
    const { width, height } = req.body as { width: number; height: number }

    // get avarage width and height of riffy
    const widthAvg =
      figures.reduce((acc, val) => acc + val.width, 0) / figures.length
    const heightAvg =
      figures.reduce((acc, val) => acc + val.height, 0) / figures.length

    // specify density
    const density = 10

    // calculate amount of riffy needed to fill screen
    const amountOfRiffy =
      Math.floor((width * height) / ((widthAvg * heightAvg) / 4)) * density

    // generate riffy sprites
    const riffy = Array.from({ length: amountOfRiffy }).map(() => {
      const targetFigure = sample(figures)

      return {
        id: nanoid(),
        file: targetFigure.file,
        image: {
          width: targetFigure.width,
          height: targetFigure.height,
        },
        position: {
          width: random(0, width),
          height: random(0, height),
        },
      }
    })

    return res.status(200).send({
      status: 'success',
      data: riffy,
    })
  } else {
    return res.status(405).send({
      status: 'failed',
      data: 'invalid method',
    })
  }
}

export default api
