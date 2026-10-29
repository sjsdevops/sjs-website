-- =============================================================================
-- SREE JAYAM SCHOOL — SCHOLARSHIP EXAMINATION DATABASE SCHEMA (2027–2028)
-- Target Table: scholarship_applications
-- Database: Supabase (PostgreSQL)
-- =============================================================================

-- 1. Create scholarship_applications table with exact client-specified schema
CREATE TABLE IF NOT EXISTS public.scholarship_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_number TEXT UNIQUE NOT NULL,
    -- Section 1: Student Details
    student_name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    gender TEXT,
    class_applied_for TEXT NOT NULL,
    academic_year TEXT NOT NULL DEFAULT '2027–2028',
    previous_school TEXT NOT NULL,
    previous_class TEXT NOT NULL,
    board TEXT NOT NULL,
    -- Section 2: Parent / Guardian Details
    father_guardian_name TEXT NOT NULL,
    father_guardian_occupation TEXT,
    mother_guardian_name TEXT NOT NULL,
    mother_guardian_occupation TEXT,
    primary_contact_number TEXT NOT NULL,
    alternate_contact_number TEXT,
    email_address TEXT NOT NULL,
    residential_address TEXT NOT NULL,
    -- Metadata & Status
    status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Reviewed', 'Approved', 'Rejected')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Indexes for fast admin queries, search, and dashboard filtering
CREATE INDEX IF NOT EXISTS idx_scholarship_app_number ON public.scholarship_applications (application_number);
CREATE INDEX IF NOT EXISTS idx_scholarship_status ON public.scholarship_applications (status);
CREATE INDEX IF NOT EXISTS idx_scholarship_class ON public.scholarship_applications (class_applied_for);
CREATE INDEX IF NOT EXISTS idx_scholarship_academic_year ON public.scholarship_applications (academic_year);
CREATE INDEX IF NOT EXISTS idx_scholarship_created_at ON public.scholarship_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_scholarship_student_name ON public.scholarship_applications (student_name);
CREATE INDEX IF NOT EXISTS idx_scholarship_primary_contact ON public.scholarship_applications (primary_contact_number);

-- 3. Automatic updated_at timestamp trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_scholarship_updated_at ON public.scholarship_applications;
CREATE TRIGGER trigger_scholarship_updated_at
BEFORE UPDATE ON public.scholarship_applications
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 4. Automatic Sequence for Application Numbers (Format: SJS-2027-0001)
CREATE SEQUENCE IF NOT EXISTS public.scholarship_app_seq_2027 START 1;

CREATE OR REPLACE FUNCTION public.assign_scholarship_application_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.application_number IS NULL OR NEW.application_number = '' THEN
        NEW.application_number := 'SJS-2027-' || LPAD(nextval('public.scholarship_app_seq_2027')::TEXT, 4, '0');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_assign_application_number ON public.scholarship_applications;
CREATE TRIGGER trigger_assign_application_number
BEFORE INSERT ON public.scholarship_applications
FOR EACH ROW EXECUTE FUNCTION public.assign_scholarship_application_number();

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.scholarship_applications ENABLE ROW LEVEL SECURITY;

-- 6. Row Level Security Policies
-- Policy A: Allow public visitors to submit new applications
DROP POLICY IF EXISTS "Public visitors can submit applications" ON public.scholarship_applications;
CREATE POLICY "Public visitors can submit applications"
ON public.scholarship_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy B: Only authenticated administrators can view applications
DROP POLICY IF EXISTS "Authenticated admins can view applications" ON public.scholarship_applications;
CREATE POLICY "Authenticated admins can view applications"
ON public.scholarship_applications
FOR SELECT
TO authenticated
USING (true);

-- Policy C: Administrators can update applications (change status)
DROP POLICY IF EXISTS "Authenticated admins can update applications" ON public.scholarship_applications;
DROP POLICY IF EXISTS "Allow update for anon and authenticated" ON public.scholarship_applications;
CREATE POLICY "Allow update for anon and authenticated"
ON public.scholarship_applications
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Policy D: Only authenticated administrators can delete applications
DROP POLICY IF EXISTS "Authenticated admins can delete applications" ON public.scholarship_applications;
CREATE POLICY "Authenticated admins can delete applications"
ON public.scholarship_applications
FOR DELETE
TO authenticated
USING (true);
