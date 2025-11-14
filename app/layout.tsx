import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Faster font loading
  preload: true,
})

export const metadata: Metadata = {
  title: 'Raj Pratap Singh Gurjar - Full Stack Developer',
  description: 'Full Stack Developer from IIT Patna. Passionate about AI/ML, Web Development, and Problem Solving. Building innovative solutions with React, Next.js, and Python.',
  keywords: ['Full Stack Developer', 'IIT Patna', 'Web Development', 'AI/ML', 'React', 'Next.js', 'Python'],
  authors: [{ name: 'Raj Pratap Singh Gurjar' }],
  icons: {
    icon: '/assets/photo.jpeg',
  },
  openGraph: {
    title: 'Raj Pratap Singh Gurjar - Full Stack Developer',
    description: 'Full Stack Developer from IIT Patna',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/photo.jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
