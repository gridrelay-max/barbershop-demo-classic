'use client';

import dynamic from 'next/dynamic'

const TemplateComponent = dynamic(() => import('./components/TemplateComponent'), {
  ssr: false,
  loading: () => <div style={{ background: '#000', minHeight: '100vh' }} />
})

export default function Home() {
  return <TemplateComponent />
}
