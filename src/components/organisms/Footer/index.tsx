import { memo } from 'react'

function FooterContent() {
  return (
    <footer className="flex-none py-4 text-center border-t border-gray-300">
      footer
    </footer>
  )
}

export const Footer = memo(FooterContent)
