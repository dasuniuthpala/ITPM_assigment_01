# STEP-BY-STEP GUIDE TO RUN AUTOMATED TESTS

## Quick Start (Copy & Paste Commands)

Open PowerShell and run these commands in order:

```powershell
# Step 1: Navigate to your project folder
cd "d:\3Y2S new\IT23223080"

# Step 2: Install dependencies
npm install

# Step 3: Install Playwright browsers
npx playwright install

# Step 4: Run all tests (fastest)
npm test

# Step 5: View results
npm run test:report
```

---

## DETAILED STEP-BY-STEP INSTRUCTIONS

### STEP 1: Open Terminal/PowerShell

1. Press `Windows Key + R`
2. Type `powershell` and press Enter
3. Or in VS Code: Press `Ctrl + `` (backtick) to open terminal

### STEP 2: Navigate to Project Folder

```powershell
cd "d:\3Y2S new\IT23223080"
```

Expected output:
```
PS D:\3Y2S new\IT23223080>
```

### STEP 3: Install Dependencies (Run Once)

```powershell
npm install
```

**What this does:**
- Downloads `@playwright/test` package
- Installs all required modules
- Creates `node_modules` folder

**Wait time:** 2-5 minutes (first time only)

Expected output (end):
```
added 150 packages in 2m
```

### STEP 4: Install Playwright Browsers (Run Once)

```powershell
npx playwright install
```

**What this does:**
- Downloads Chromium, Firefox, WebKit browsers
- These are needed to run tests

**Wait time:** 5-10 minutes

Expected output (end):
```
Browsers downloaded successfully ✓
```

### STEP 5: Run All Tests

```powershell
npm test
```

**What happens:**
- Tests start running automatically
- Browser opens and closes for each test
- Shows results in terminal

**Sample output:**
```
 Pos_Fun_0001: Convert simple greeting ✓ (5.2s)
 Pos_Fun_0002: Convert simple present tense ✓ (4.8s)
 Pos_Fun_0003: Convert compound sentence ✓ (5.1s)
 ...
 ==================
 1 passed (42s)
```

### STEP 6: View HTML Report

```powershell
npm run test:report
```

**What this does:**
- Opens interactive HTML report in your browser
- Shows all test results with details
- Can take screenshots/videos

---

## RUNNING SPECIFIC TESTS

### Run Only Positive Tests
```powershell
npx playwright test tests/positive.spec.ts
```

### Run Only Negative Tests
```powershell
npx playwright test tests/negative.spec.ts
```

### Run Only UI Tests
```powershell
npx playwright test tests/ui.spec.ts
```

### Run One Specific Test
```powershell
npx playwright test -g "Pos_Fun_0001"
```

### Run in Browser View (Headed Mode)
```powershell
npm run test:headed
```

**What this does:**
- Shows browser window while running
- Lets you see exactly what's happening
- Helpful for debugging

### Run in Debug Mode
```powershell
npm run test:debug
```

**What this does:**
- Pauses before each action
- Opens Playwright Inspector
- Lets you step through manually
- Press Enter to go to next step

---

## RECORDING RESULTS IN EXCEL

### Method 1: Copy from Console Output

1. Run: `npm test`
2. Look for `console.log` output like:
   ```
   Input: oyaata kohomadha?
   Output captured
   ```
3. Copy these to Excel

### Method 2: Check HTML Report

1. Run: `npm test`
2. Run: `npm run test:report`
3. Click on each test to see details
4. Take note of pass/fail status

### Method 3: Run in Headed Mode and Screenshot

```powershell
npm run test:headed
```

1. Watch browser run tests
2. Press Print Screen to capture results
3. Paste into Excel

### What to Record in Excel

For each test, fill these columns:

| Column | Example Value |
|--------|---------------|
| TC ID | Pos_Fun_0001 |
| Test Case Name | Convert simple greeting |
| Input Length Type | S |
| Input | oyaata kohomadha? |
| Expected Output | ඔයාට ක ාක ාමද? |
| Actual Output | [Copy from test output] |
| Status | PASS or FAIL |
| What is covered | Greeting / request / response; Interrogative (question); S (≤30 characters); Accuracy validation |

---

## TROUBLESHOOTING

### Problem: "npm: command not found"

**Cause:** Node.js/npm not installed

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Install it (includes npm)
3. Restart PowerShell
4. Try again: `npm --version`

### Problem: Tests fail to connect to website

**Cause:** Internet issue or website down

**Solution:**
1. Check internet connection
2. Open https://www.swifttranslator.com/ in browser manually
3. If it loads, retry tests
4. If not, website might be down

### Problem: "Timeout waiting for locator"

**Cause:** Selectors not finding elements (website layout changed)

**Solution:**
1. Run: `npm run test:headed`
2. Watch browser and see what's on page
3. Update selectors in test files if needed
4. Contact instructor if website changed

### Problem: Tests run but all fail

**Check:**
1. Is website accessible? Try opening in browser
2. Are locators correct? Run headed mode to see
3. Is internet stable? Try again after few minutes

### Problem: "Cannot find module @playwright/test"

**Solution:** Run this:
```powershell
npm install
```

### Problem: Browsers not installed

**Solution:** Run this:
```powershell
npx playwright install
```

---

## TESTING WORKFLOW

### Day 1: Setup
```powershell
npm install
npx playwright install
```

### Day 2: Run Tests
```powershell
npm test
npm run test:report
```

### Day 3: Record Results
```powershell
npm run test:headed  # Watch and record
```

### Day 4: Fill Excel
- Copy results from tests
- Fill Excel template
- Record Pass/Fail status
- Add notes for failures

---

## FILE STRUCTURE AFTER SETUP

```
IT23223080/
├── node_modules/          ← Created by npm install (ignore)
├── tests/
│   ├── positive.spec.ts   ← 24 positive tests
│   ├── negative.spec.ts   ← 10 negative tests
│   └── ui.spec.ts         ← 8 UI tests
├── playwright-report/     ← Created after tests run
│   └── index.html        ← Open this for report
├── playwright.config.ts   ← Test configuration
├── package.json          ← Project info & scripts
├── package-lock.json     ← Dependency versions
└── README.md             ← Full documentation
```

---

## QUICK REFERENCE COMMANDS

| Task | Command |
|------|---------|
| Install all | `npm install` |
| Install browsers | `npx playwright install` |
| Run all tests | `npm test` |
| Run with browser view | `npm run test:headed` |
| Debug mode | `npm run test:debug` |
| View report | `npm run test:report` |
| Run positive tests only | `npx playwright test tests/positive.spec.ts` |
| Run negative tests only | `npx playwright test tests/negative.spec.ts` |
| Run UI tests only | `npx playwright test tests/ui.spec.ts` |
| Run one test | `npx playwright test -g "Pos_Fun_0001"` |
| Update tests | Edit `tests/*.spec.ts` files |

---

## NEXT STEPS

1. ✅ Complete installation (Step 3-4)
2. ✅ Run all tests (Step 5)
3. ✅ Check report (Step 6)
4. ✅ Record results in Excel
5. ✅ Push to GitHub:
   ```powershell
   git add .
   git commit -m "Add automated test suite"
   git push
   ```

---

## VIDEO TUTORIAL (Alternative)

If you prefer watching:
- Playwright docs: https://playwright.dev/
- Official setup guide: https://playwright.dev/docs/intro

---

Need help? This guide covers 90% of setup issues. Check README.md for more details!
