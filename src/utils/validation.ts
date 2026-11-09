/**
 * Form validation helper functions
 */

export const validateName = (name: string, fieldLabel = "Name"): string | null => {
  const trimmed = name.trim();
  if (!trimmed) {
    return `${fieldLabel} is required`;
  }
  if (trimmed.length < 2) {
    return `${fieldLabel} must be at least 2 characters`;
  }
  if (trimmed.length > 60) {
    return `${fieldLabel} cannot exceed 60 characters`;
  }
  // Allow letters, spaces, hyphens, apostrophes, and dots (e.g. Dr. John O'Connor-Smith)
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return `${fieldLabel} can only contain letters, spaces, dots, and hyphens`;
  }
  // Ensure there are at least two alphabetic letters
  const letterCount = (trimmed.match(/[a-zA-Z]/g) || []).length;
  if (letterCount < 2) {
    return `Please enter a valid ${fieldLabel.toLowerCase()}`;
  }
  return null;
};

export const validatePhone = (phone: string): string | null => {
  const trimmed = phone.trim();
  if (!trimmed) {
    return 'Mobile number is required';
  }

  // Must contain only numbers
  if (/\D/.test(trimmed)) {
    return 'Mobile number can only contain digits (0–9)';
  }

  // Must not exceed or be less than 10 digits
  if (trimmed.length < 10) {
    return `Mobile number must be 10 digits (${trimmed.length}/10 entered)`;
  }
  if (trimmed.length > 10) {
    return 'Mobile number cannot exceed 10 digits';
  }

  // Must start with 6, 7, 8, or 9 (TRAI Indian mobile number standard)
  if (!/^[6-9]/.test(trimmed)) {
    return 'Mobile number must start with 6, 7, 8, or 9';
  }

  // Block identical repeated digits (e.g., 9999999999, 8888888888, 7777777777, 6666666666)
  if (/^(\d)\1{9}$/.test(trimmed)) {
    return 'Please enter a genuine mobile number (repeated digits are not valid)';
  }

  return null;
};

export const validateEmail = (email: string): string | null => {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Email address is required';
  }
  if (trimmed.length > 100) {
    return 'Email address cannot exceed 100 characters';
  }
  // Standard RFC 5322 compliant regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address (e.g., name@example.com)';
  }
  return null;
};

export const validateRequired = (value: string, fieldLabel: string): string | null => {
  const trimmed = value.trim();
  if (!trimmed || trimmed === '') {
    return `Please select or enter ${fieldLabel.toLowerCase()}`;
  }
  return null;
};

export const validateMessage = (message: string, maxLen = 500): string | null => {
  if (message.length > maxLen) {
    return `Message cannot exceed ${maxLen} characters`;
  }
  return null;
};

export const validateDob = (dob: string): string | null => {
  const trimmed = dob.trim();
  if (!trimmed) {
    return "Child's date of birth is required";
  }
  // Try parsing date or checking common patterns like MM/DD/YYYY or DD/MM/YYYY or YYYY-MM-DD
  const dateRegex = /^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4}$|^\d{4}[/\-.]\d{1,2}[/\-.]\d{1,2}$/;
  if (!dateRegex.test(trimmed)) {
    return 'Please enter a valid date (e.g. DD/MM/YYYY or MM/DD/YYYY)';
  }
  return null;
};

