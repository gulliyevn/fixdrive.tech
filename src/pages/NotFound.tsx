import React from 'react'
import { Link } from 'react-router-dom'
import { useT } from '@/contexts/LanguageContext'

const NotFound: React.FC = () => {
  const { t } = useT()
  return (
    <main className="min-h-[60vh] container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">{t('pages.common.back_home')}</p>
      <Link to="/" className="btn-primary inline-block px-4 py-2 rounded-md">
        {t('pages.common.back_home')}
      </Link>
    </main>
  )
}

export default NotFound

