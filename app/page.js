'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Loader from '@/components/elements/Loader'

const Home = () => {
  const router = useRouter()

  router.push('/projects')

  useEffect(() => {
    return () => {}
  })

  return <Loader />
}

export default Home
