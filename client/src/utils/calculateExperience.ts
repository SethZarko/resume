export function getProfessionalExperienceText(
  professionalYears: number,
  professionalMonths: number
) {
  if (professionalYears < 1) {
    return `${professionalMonths} months`;
  }
  if (professionalYears === 1) {
    return `${professionalYears} year`;
  }
  return `${professionalYears} years`;
}
