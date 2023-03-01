const Recruits = [
 {
  id : "r1",
  Name: "Sarah Johnson",
  City: "Los Angeles, CA",
  Education: "Bachelor's degree in Psychology",
  Experience: "3 years of experience as a counselor in a mental health clinic",
 },  
 {
  id : "r2",
  Name: "David Lee",
  City: "New York, NY",
  Education: "Master's degree in Finance",
  Experience: "5 years of experience as a financial analyst at a large investment bank",
 },
 {
  id : "r3",
  Name: "Emily Chen",
  City: "San Francisco, CA",
  Education: "Bachelor's degree in Computer Science",
  Experience: "2 years of experience as a software engineer at a tech startup",
 },
 {
  id : "r4",
  Name: "Michael Davis",
  City: "Chicago, IL",
  Education: "Master's degree in Business Administration",
  Experience: "6 years of experience as a project manager in the construction industry",
 },
 {
  id : "r5",
  Name: "Samantha Brown",
  City: "Miami, FL",
  Education: "Bachelor's degree in Marketing",
  Experience: "4 years of experience as a marketing specialist at a consumer goods company",
 },
 {
  id : "r6",
  Name: "John Smith",
  City: "Austin, TX",
  Education: "Bachelor's degree in Mechanical Engineering",
  Experience: "3 years of experience as a design engineer at an aerospace company",
 },
 {
  id : "r7",
  Name: "Rachel Kim",
  City: "Seattle, WA",
  Education: "Bachelor's degree in Nursing",
  Experience: "2 years of experience as a registered nurse at a hospital",
 },
 {
  id : "r8",
  Name: "Kevin Nguyen",
  City: "Boston, MA",
  Education: "Master's degree in Education",
  Experience: "5 years of experience as a high school teacher",
 },
 {
  id : "r9",
  Name: "Jessica Rodriguez",
  City: "Houston, TX",
  Education: "Bachelor's degree in Journalism",
  Experience: "3 years of experience as a journalist at a local newspaper",
 },
 {
  id : "r10",
  Name: "Thomas Jackson",
  City: "Denver, CO",
  Education: "Master's degree in Public Health",
  Experience: "7 years of experience as a public health researcher",
 },
 {
  id : "r11",
  Name: "Ashley Kim",
  City: "Washington, DC",
  Education: "Bachelor's degree in Political Science",
  Experience: "4 years of experience as a legislative assistant for a member of Congress",
 },
 {
  id : "r12",
  Name: "Christopher Lee",
  City: "Philadelphia, PA",
  Education: "Master's degree in Architecture",
  Experience: "6 years of experience as an architect at an architecture firm.",
 },
];

export function myRecruits() {
  return Recruits;
}

export function findRecruits(id) {
  return Recruits.filter((Recruit) => Object.values(Recruit).indexOf(id) > -1)[0];
}
