import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HeroInfo } from "./HeroInfo";

describe("Component: HeroInfo", () => {
  it("should render without error and have content", () => {
    const { container } = render(<HeroInfo />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Seth Zarkovich/i
    );
  });

  it("shows months when professionalYears < 1", () => {
    vi.setSystemTime(new Date("2025-11-21"));
    render(<HeroInfo />);

    expect(screen.queryByRole("heading", { level: 3 })).toHaveTextContent(
      /months/i
    );
  });

  it("shows text 'years' when professionalYears >= 1", () => {
    vi.setSystemTime(new Date("2026-9-1"));
    render(<HeroInfo />);

    expect(screen.queryByRole("heading", { level: 3 })).toHaveTextContent(
      /years/i
    );
  });

  it("shows text 'year' when professionalYears < 1", () => {
    vi.setSystemTime(new Date("2026-5-1"));
    render(<HeroInfo />);

    expect(screen.queryByRole("heading", { level: 3 })).toHaveTextContent(
      /year/i
    );
  });
});
