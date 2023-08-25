export const professionOptions: SelectInputOptions[] = [
  { value: 'student', label: 'Student' },
  { value: 'employed', label: 'Employed' },
];

export const numberOfGuestsOptions: SelectInputOptions[] = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
];

export type SelectInputOptions = {
  value: string;
  label: string;
};

export type FieldName =
  | 'fullName'
  | 'age'
  | 'dob'
  | 'profession'
  | 'locality'
  | 'numberOfGuests'
  | 'address';

export type InputField = {
  label: string;
  type?: 'text' | 'date';
  name: FieldName;
  component: 'textInput' | 'selectInput' | 'textareaInput';
  options?: SelectInputOptions[];
  value?: number;
};

export const inputFields: InputField[] = [
  {
    label: 'Full Name',
    type: 'text',
    name: 'fullName',
    component: 'textInput',
  },
  {
    label: 'Age',
    type: 'text',
    name: 'age',
    component: 'textInput',
  },
  {
    label: 'Date of Birth',
    type: 'date',
    name: 'dob',
    component: 'textInput',
  },
  {
    label: 'Profession',
    name: 'profession',
    options: professionOptions,
    component: 'selectInput',
  },
  {
    label: 'Locality',
    type: 'text',
    name: 'locality',
    component: 'textInput',
  },
  {
    label: 'Number of Guests',
    name: 'numberOfGuests',
    options: numberOfGuestsOptions,
    component: 'selectInput',
  },
  {
    label: 'Address',
    name: 'address',
    value: 50,
    component: 'textareaInput',
  },
];
