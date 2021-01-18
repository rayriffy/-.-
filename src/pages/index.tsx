import React, { useEffect, useState } from 'react'

import { NextPage } from 'next'

import { useViewportSize } from 'web-api-hooks'

interface APIResult<T = unknown> {
  status: 'success' | 'failed'
  data: T
}

interface GeneratedFigure {
  id: string
  file: string
  image: {
    width: number
    height: number
  }
  position: {
    width: number
    height: number
  }
}

const Page: NextPage = props => {
  const [width, height] = useViewportSize()

  const [figures, setFigures] = useState<GeneratedFigure[]>([])

  const handleRender = async (width: number, height: number) => {
    const res: APIResult<GeneratedFigure[]> = await fetch(`/api/generate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        width,
        height,
      }),
    }).then(o => o.json())

    setFigures(res.data)
  }

  useEffect(() => {
    const delay = 500

    const handler = setTimeout(() => {
      handleRender(width, height)
    }, delay)

    return () => clearTimeout(handler)
  }, [width, height])

  return (
    <React.Fragment>
      {figures.map(figure => (
        <img
          key={`figure-${figure.id}`}
          src={`/static/${figure.file}`}
          width={`${Math.floor(figure.image.width / 2)}`}
          height="auto"
          style={{
            position: 'absolute',
            left: figure.position.width - 150,
            top: figure.position.height - 200,
          }}
        />
      ))}
    </React.Fragment>
  )
}

export default Page
