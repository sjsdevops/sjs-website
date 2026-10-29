export type ApplicationStatus = 'Pending' | 'Reviewed' | 'Approved' | 'Rejected';

export interface ScholarshipApplication {
  id: string;
  application_number: string;
  // Section 1: Student Details
  student_name: string;
  date_of_birth: string;
  gender: string;
  class_applied_for: string;
  academic_year: string;
  previous_school: string;
  previous_class: string;
  board: string;
  // Section 2: Parent / Guardian Details
  father_guardian_name: string;
  father_guardian_occupation?: string | null;
  mother_guardian_name: string;
  mother_guardian_occupation?: string | null;
  primary_contact_number: string;
  alternate_contact_number?: string | null;
  email_address: string;
  residential_address: string;
  // System Metadata
  status: ApplicationStatus;
  created_at: string;
  updated_at?: string | null;
}

export interface ScholarshipFormData {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  classAppliedFor: string;
  academicYear: string;
  previousSchool: string;
  previousClass: string;
  board: string;
  fatherGuardianName: string;
  fatherGuardianOccupation: string;
  motherGuardianName: string;
  motherGuardianOccupation: string;
  primaryContactNumber: string;
  alternateContactNumber: string;
  emailAddress: string;
  residentialAddress: string;
}

export interface ScholarshipConfig {
  popupEnabled: boolean;
  registrationOpen: boolean;
  academicYear: string;
  title: string;
  subtitle: string;
  description: string;
  examinationDate: string;
  posterImage: string;
  contactNumbers: string[];
  contactEmail: string;
  website: string;
  eligibleClasses: string[];
  boardOptions: string[];
}
