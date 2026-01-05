/**
 *
 * @param {Date | string} Start Date
 * @param {Date} Optional Second Arugment that Defaults to Current Date - Can be used for specific end date
 * @returns {number} Returns a number
 */
export const calculateDifference = (
  start: Date | string,
  end: Date = new Date()
): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  let years = endDate.getFullYear() - startDate.getFullYear();

  const hasHadAnniversary =
    endDate.getMonth() > startDate.getMonth() ||
    (endDate.getMonth() === startDate.getMonth() && endDate.getDate() >= startDate.getDate());

  if (!hasHadAnniversary) {
    years -= 1;
  }

  return Math.max(0, years);
};
