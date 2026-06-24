# TypeScript Project with Auto-Watch

A TypeScript-based project configured to automatically compile files in real-time whenever changes are saved.

## 🛠️ Prerequisites

To run this project, you need **Node.js** installed on your system.

## 🚀 Quick Start

### 1. Install TypeScript
Install the TypeScript compiler globally on your system:
```bash
npm install -g typescript
```

### 2. Initialize Configuration
If you do not have a `tsconfig.json` file yet, generate one by running:
```bash
npm init -y,  tsc --init
```

### 3. Run in Watch Mode
To start tracking file changes and automatically compile them into JavaScript, execute:
```bash
tsc --watch
```

## 📁 Project Structure

* `src/` — Source files containing TypeScript code (`.ts`).
* `dist/` — Output folder for compiled JavaScript code (`.js`).
* `tsconfig.json` — Configuration settings for the TypeScript compiler.
