import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ContactForm } from "./ContactForm"

describe("Component: ContactForm", () => {
    it('should render component without error', () => {
        const { container } = render(<ContactForm />)

        expect(container.firstChild).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Let's Build Something Amazing/i)
    })
})