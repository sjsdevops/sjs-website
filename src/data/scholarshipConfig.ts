import { ScholarshipConfig } from "@/types/scholarship";

export const scholarshipConfig: ScholarshipConfig = {
  // Master toggle to enable or disable the homepage announcement popup
  popupEnabled: true,

  // Toggle whether registrations are actively accepted
  registrationOpen: true,

  // Source of truth from official Scholarship Examination 2027–28 Poster
  academicYear: "2027–2028",
  title: "SREE JAYAM SCHOOL",
  subtitle: "Scholarship Examination 2027–2028",
  description:
    "Register eligible students for the Sree Jayam School Scholarship Examination and unlock scholarship opportunities for the upcoming academic year.",

  // Official Examination Details from Poster
  examinationDate: "29 November 2026",
  posterImage: "/images/scholarship/Scholarship%20Examination%202027-28%20Poster.jpg",
  contactNumbers: ["9486274144", "9487021111"],
  contactEmail: "scholarship@sreejayamschool.edu.in",
  website: "sreejayamschool.edu.in",

  // Official Eligible Classes
  eligibleClasses: [
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 11",
  ],

  // School Board Options
  boardOptions: [
    "State Board",
    "CBSE",
    "ICSE",
    "Other",
  ],
};
