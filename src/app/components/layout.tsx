import { FunctionComponent } from 'react'

export const AppLayout: FunctionComponent = props => {
  const { children } = props

  return (
    <main className="bg-gray-50 min-h-screen relative overflow-hidden">
      {children}
    </main>
  )
}
