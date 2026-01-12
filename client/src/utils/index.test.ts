import { describe, it, expect } from "vitest";
import { getProfessionalExperienceText } from "./calculateExperience";
import { calculateDifference } from "./calculateYears";

describe("getProfessionalExperienceText", () => {
  it("returns months when professionalYears < 1", () => {
    expect(getProfessionalExperienceText(0, 4)).toBe("4 months");
    expect(getProfessionalExperienceText(0, 11)).toBe("11 months");
  });

  it("returns year singular when professionalYears == 1", () => {
    expect(getProfessionalExperienceText(1, 5)).toBe("1 year");
  });

  it("returns plural years when professionalYears > 1", () => {
    expect(getProfessionalExperienceText(2, 3)).toBe("2 years");
    expect(getProfessionalExperienceText(5, 0)).toBe("5 years");
  });
});

describe("calculateYears", () => {
    it("should return 0 when a true full year has not passed between dates", () => {
        expect(calculateDifference("January 2, 2025", new Date("January 1, 2026"))).toBe(0)
    })

    it("should return greater than 0 when a true full year has passed between dates", () => {
        expect(calculateDifference("January 1, 2025", new Date("January 1, 2026"))).toBe(1)
    })
});
