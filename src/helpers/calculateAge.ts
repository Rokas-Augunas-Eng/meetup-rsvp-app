export const calculateAge = (dateOfBirth: string) => {
  const dob = new Date(dateOfBirth);
  const now = new Date();
  const ageDiff = now.getTime() - dob.getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
