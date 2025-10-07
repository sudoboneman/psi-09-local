# psi-09-local 🛠

> Local setup tool to generate `.wwebjs_auth` for the PSI-09 WhatsApp bot.

## Overview
`psi-09-local` initializes a **WhatsApp Web session locally** and generates the `.wwebjs_auth` folder, which is required for headless WhatsApp clients in `psi-09-web`.

### Features
- Generates `.wwebjs_auth` authentication data.
- CLI interface for QR code scanning.
- Prepares session data for cloud deployment.
- Configurable via `.env` file.

### Project Structure
```
psi-09-local/
├── generateAuth.js     # Generates .wwebjs_auth folder
├── package.json        # Node dependencies
├── .env.example        # Example env configuration
└── README.md
```

### Usage
```bash
git clone https://github.com/sudoboneman/psi-09-local.git
cd psi-09-local
npm install
cp .env.example .env
node generateAuth.js
```
- Scan QR code to authenticate WhatsApp account.
- `.wwebjs_auth` is created for upload to `psi-09-web`.

### Crosslinks
- Upload `.wwebjs_auth` to [`psi-09-web`](https://github.com/sudoboneman/psi-09-web) to enable headless WhatsApp client.
- Works indirectly with [`psi-09-roastbot`](https://github.com/sudoboneman/psi-09-roastbot) through the `psi-09-web` pipeline.

