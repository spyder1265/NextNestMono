'use client'
import { motion } from 'framer-motion'
import * as React from 'react'

interface IPageProps {
  children: React.ReactNode
}

export const Page: React.FC<IPageProps> = ({ children }) => (
  <motion.div
    //flade in from right to left
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    className=''
  >
    {children}
  </motion.div>
)

export default Page
