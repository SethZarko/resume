import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App  from './App'

describe("Component: App", () => {
    it("should render without error and have content", () => {
        const { container } = render(<App />)

        expect(container.firstChild).toBeInTheDocument()
    })
})