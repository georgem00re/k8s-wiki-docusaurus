
docusaurus-install-dependencies:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd docusaurus && nvm use && npm install

docusaurus-start:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd docusaurus && nvm use && npm start

docusaurus-build:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd docusaurus && nvm use && npm run build

docusaurus-typecheck:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd docusaurus && nvm use && npm run typecheck
