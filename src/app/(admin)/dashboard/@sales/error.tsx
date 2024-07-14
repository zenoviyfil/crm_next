'use client'

import React from 'react'

export interface ErrorComponentProps {
    error: Error
}

export default function ErrorComponent({error}: ErrorComponentProps) {
  return (
    <div>{error.message}</div>
  )
}
