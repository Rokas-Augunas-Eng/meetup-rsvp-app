import { FormData, Inputs } from '@/components/RegistrationForm/utitls/types';

const apiEndpoint = 'https://form-submission.free.beeceptor.com';

export async function submitFormData(data: FormData<Inputs>): Promise<boolean> {
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Mock API call successful');
      return true;
    } else {
      console.error('Mock API call failed');
      return false;
    }
  } catch (error) {
    console.error('Error while making mock API call', error);
    return false;
  }
}
