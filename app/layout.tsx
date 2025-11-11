import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio - FULL STACK Developer & Cloud Engineer',
  description: 'Portfolio professionnel d\'un Backend Developer et Cloud Engineer spécialisé dans les technologies modernes',
  keywords: ['Portfolio', 'Backend Developer', 'Cloud Engineer', 'Full Stack', 'Node.js', 'AWS', 'Docker'],
  authors: [{ name: 'SBOUI AZIZ' }],
  openGraph: {
    title: 'Portfolio - SBOUI AZIZ',
    description: 'Portfolio professionnel d\'un Backend Developer et Cloud Engineer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  )
}

