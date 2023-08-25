import { FormData, Inputs } from '@/components/RegistrationForm/utitls/types';

class ApiWrapper {
  private apiEndpoint: string;

  constructor(apiEndpoint: string) {
    this.apiEndpoint = apiEndpoint;
  }

  async submitFormData(data: FormData<Inputs>): Promise<boolean> {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('API call successful');
        return true;
      } else {
        console.error('API call failed');
        return false;
      }
    } catch (error) {
      console.error('Error while making API call', error);
      return false;
    }
  }
}

const apiEndpoint = 'https://form-submission.free.beeceptor.com';
export const api = new ApiWrapper(apiEndpoint);
