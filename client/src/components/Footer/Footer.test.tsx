import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Footer } from "./Footer"

describe("Component: Footer", () => {
    it('should render component without error', () => {
        const { container } = render(<Footer />)

        expect(container.firstChild).toBeInTheDocument()

        expect(screen.getByRole('paragraph')).toHaveTextContent(/Seth Zarkovich/i)
    })

    it("should render proper links", () => {
        render(<Footer/>)

        expect(screen.getByTestId('link1')).toHaveAttribute(
            "href", 
            "https://github.com/SethZarko/resume"
        )

        expect(screen.getByTestId('link2')).toHaveAttribute(
            "href", 
            "https://ca.linkedin.com/in/seth-zarkovich"
        )
    })
})