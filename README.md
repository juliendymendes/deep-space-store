# Deep Space Store

This project consists of creating a payment page for the fictional online store "Deep Space Store". The payment page is the final point where customers can finalize their purchases, viewing a product offer and filling in their details to make payment.

## Table of contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Features

- View a product offer.
- Filling in customer data, including name, email, telephone, address and CPF.
- Providing payment method details such as credit card number, expiration date and security code.
- Validation of data provided by the customer.
- Payment processing.

## Install

Set up the project using pnpm. Use the command
`pnpm install`

After completing the installation, your environment is ready for Vuetify development.

## Usage

This section covers how to start the development server and build the project for production.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
pnpm dev
```

### Building for Production

To build your project for production, use:

```bash
pnpm build
```

Once the build process is completed, the application will be ready for deployment in a production environment.

### Run Unit tests

To run unit tests, run the the following command:

```bash
pnpm test
```

Unit test files are in the folder `/tests`

Covarege files will be in the folder `/coverage`

### Run E2E tests

To open Cypress UI, run the the following command:

```bash
pnpm cypress:open
```

Then select the spec file to run the test.

## License

[MIT](http://opensource.org/licenses/MIT)
