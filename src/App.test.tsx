import { render, screen } from '@testing-library/react'
import App from './App'
import { prestamoService } from './services/prestamoService'
import { afterEach, beforeEach, expect, describe, test, vi } from "vitest"

describe('App', () => {

  beforeEach(() => {
    vi.spyOn(prestamoService, 'getPrestamosPendientes').mockImplementation(() => Promise.resolve([]))
  })

  test('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Préstamos/i)
    expect(linkElement).toBeTruthy()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

})