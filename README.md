# Meetup-rsvp-app

## Table of Contents

- General info
- Setup
- Results
- Improvements

## General info

An event app, which has three features. In the first screen the user can RSVP to the event using a form. In the second screen, the user can look up people who have RSVP'd to the event and search them by their name or locality. Lastly, in the third screen the admin has access to bar graphs about the users. The app uses Next.js, TypeScript and Tailwindcss.

## Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First install dependencies, run the following in the terminal:

```bash
yarn install
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Results

### Home screen
<img width="1024" alt="Screenshot 2023-08-16 at 07 43 47" src="https://github.com/Rokas-Augunas-Eng/meetup-rsvp-app/assets/78915609/cc5292f5-859f-497d-8c43-2148fb6207b6">

### Registration Form
<img width="790" alt="Screenshot 2023-08-25 at 16 00 17" src="https://github.com/Rokas-Augunas-Eng/meetup-rsvp-app/assets/78915609/bf7f03e1-bfd0-457e-bb5d-b7866fdc7fa9">


### Guest Info
<img width="1719" alt="Screenshot 2023-08-16 at 07 45 03" src="https://github.com/Rokas-Augunas-Eng/meetup-rsvp-app/assets/78915609/baae5449-bdfe-43b8-956e-145b4b299417">

<img width="1719" alt="Screenshot 2023-08-16 at 07 45 08" src="https://github.com/Rokas-Augunas-Eng/meetup-rsvp-app/assets/78915609/339cc286-609f-4184-9509-34b61d1ea09b">

### Admin Panel
<img width="1719" alt="Screenshot 2023-08-16 at 07 46 50" src="https://github.com/Rokas-Augunas-Eng/meetup-rsvp-app/assets/78915609/ded72c32-77b9-43c5-a997-0098142b6d80">

## Improvements

- More robust test to be written
- Add more validation checks to the registration form
- Did not implement the graph by locality. A better approach would be to implement by continent
