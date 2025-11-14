import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { FlowChart } from "./FlowChart"

describe("Component: FlowChart", () => {
    it('should render component without error', () => {
        const { container } = render(<FlowChart item={"Next.js Frontend (SSG + React Client Components)"} />)

        expect(container.firstChild).toBeInTheDocument()
        expect(screen.getByTestId('test-list-item')).toHaveTextContent("Next.js Frontend (SSG + React Client Components)")
    })
})
