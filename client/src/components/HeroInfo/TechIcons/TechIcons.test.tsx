import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TechIcons } from './TechIcons'

describe("Component: TechIcons", () => {
    it("should render without error and have content", () => {
        const { container } = render(<TechIcons title="React" color="white" background='black' />)

        expect(container.firstChild).toBeInTheDocument()
        expect(screen.getByText(/React/i)).toBeInTheDocument()
    })
})