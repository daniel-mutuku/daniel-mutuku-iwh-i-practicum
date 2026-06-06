# Integrating With HubSpot I: Foundations Practicum

A Node.js application that integrates with the HubSpot CRM API to manage a custom object (Cars). Built as part of the HubSpot Academy Integrating With HubSpot I: Foundations certification.

**Custom object list view:** https://app-eu1.hubspot.com/contacts/148639814/objects/2-203762586/views/all/list

---

## Prerequisites

- [Node.js](https://nodejs.org/en/download) v14 or higher
- A HubSpot developer test account with a private app that has the following scopes:
  - `crm.schemas.custom` (read & write)
  - `crm.objects.custom` (read & write)
  - `crm.objects.contacts` (read & write)

---

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/daniel-mutuku/daniel-mutuku-iwh-i-practicum
   cd daniel-mutuku-iwh-i-practicum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your environment**

   Create a `.env` file in the root of the project:
   ```bash
   touch .env
   ```

   Add your HubSpot private app access token to the file:
   ```
   PRIVATE_APP_ACCESS=your-private-app-access-token-here
   ```

   > **Never commit your `.env` file.** It is listed in `.gitignore`.

---

## Running the app

```bash
node index.js
```

Open your browser and go to **http://localhost:3000**

---

## Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Homepage — lists all car records in a table |
| GET | `/update-cobj` | Renders the form to add a new car record |
| POST | `/update-cobj` | Submits the form and creates the record in HubSpot |
