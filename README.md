# Swift Translator - Automated Test Suite

This is a comprehensive automated test suite for the Swift Translator (Singlish to Sinhala) application using Playwright and TypeScript.

## Project Structure

```
├── tests/
│   ├── positive.spec.ts      # 24 positive functional tests
│   ├── negative.spec.ts      # 10 negative functional tests
│   └── ui.spec.ts            # 8 UI tests (1 UI positive + 1 UI negative + 6 additional)
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Test Coverage

### Positive Functional Tests (24 tests)
- Simple, compound, and complex sentences
- Interrogative and imperative forms
- Positive and negative sentence structures
- Common greetings, requests, and responses
- Polite and informal phrasing
- Tense variations (past, present, future)
- Plural pronouns and singular variations
- Multi-word expressions and collocations
- Mixed English-Singlish content (brand names, places)
- Time formats, currency, dates
- Punctuation and numbers
- Repeated word emphasis
- Short, medium, and long inputs

### Negative Functional Tests (10 tests)
- Joined words without spaces
- Invalid/random characters
- Only punctuation or numbers
- Extreme multiple spaces
- Invalid Singlish transliteration
- Excessive English content
- Unstructured long inputs
- Unicode/emoji mixing
- Heavily misspelled content
- Robustness edge cases

### UI Tests (8 tests)
**Positive UI Tests:**
- Real-time output updates while typing
- Clear input functionality
- Page loads with visible fields
- Tab navigation
- Text selection capability
- Paste functionality
- Undo/Redo support

**Negative UI Tests:**
- Empty input handling
- Responsiveness with extremely long input
- JavaScript error detection

## Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control) - [Download here](https://git-scm.com/)
- **Playwright** (will be installed via npm)

## Installation Steps

### Step 1: Clone or Download the Repository

```powershell
# If cloned from GitHub
git clone https://github.com/dasuniuthpala/ITPM_assigment_01.git
cd ITPM_assigment_01
```

Or if you already have the folder:
```powershell
cd "path\to\IT23223080"
```

### Step 2: Install Dependencies

```powershell
npm install
```

This will install:
- `@playwright/test` - The testing framework
- `@types/node` - TypeScript types for Node.js

### Step 3: Install Playwright Browsers

```powershell
npx playwright install
```

This downloads the browser binaries (Chromium, Firefox, WebKit) that Playwright needs.

## Running the Tests

### Run All Tests

```powershell
npm test
```

### Run Tests in Headed Mode (see browser)

```powershell
npm run test:headed
```

### Run Tests in Debug Mode

```powershell
npm run test:debug
```

### Run Specific Test File

```powershell
# Run only positive tests
npx playwright test tests/positive.spec.ts

# Run only negative tests
npx playwright test tests/negative.spec.ts

# Run only UI tests
npx playwright test tests/ui.spec.ts
```

### Run Specific Test by Name

```powershell
npx playwright test -g "Pos_Fun_0001"
```

### View Test Reports

After running tests, view the HTML report:

```powershell
npm run test:report
```

Or manually open:
```powershell
.\playwright-report\index.html
```

## Test Output Format

### Console Output
Tests will output:
- ✓ PASSED tests in green
- ✗ FAILED tests in red
- Test execution time
- Logs from `console.log()` statements

### HTML Report
Located in `./playwright-report/`, includes:
- All test results
- Pass/fail status
- Execution time
- Screenshots (if configured)
- Video recordings (if configured)

### Recording Test Results for Excel

The test output includes:
1. **Test ID** - Format: `Pos_Fun_0001`, `Neg_Fun_0001`, `Pos_UI_0001`
2. **Status** - PASS or FAIL
3. **Actual Output** - Captured from the web page
4. **Console Logs** - Shows input/output for manual review

## Filling Out the Excel Template

After running each test, record:

| Column | Source | Note |
|--------|--------|------|
| TC ID | Test name | e.g., `Pos_Fun_0001` |
| Input | From test code | e.g., `oyaata kohomadha?` |
| Expected Output | From test code or assignment | Sinhala translation |
| Actual Output | From test console/page capture | What the system actually produced |
| Status | Test result | PASS/FAIL |
| What is covered | Test description | See assignment template |

## Configuration

### Change Browser

Edit `playwright.config.ts`:

```typescript
use: {
  // Change to 'firefox' or 'webkit' instead of 'chromium'
  browserName: 'chromium',
},
```

### Add Screenshots/Videos

Edit `playwright.config.ts`:

```typescript
use: {
  screenshot: 'only-on-failure', // Capture on failure
  video: 'retain-on-failure',     // Record on failure
},
```

### Change Timeout

```typescript
timeout: 30000, // 30 seconds per test
```

## Troubleshooting

### Problem: "npm: The term 'npm' is not recognized"
**Solution:** Reinstall Node.js ensuring npm is selected during installation.

### Problem: "playwright: command not found"
**Solution:** Run `npx playwright install`

### Problem: Tests timeout or fail to find elements
**Solution:** 
- Increase timeout: `await page.waitForTimeout(1000);`
- Check selectors: `page.locator('textarea, input')`
- Use headed mode: `npm run test:headed` to see what's happening

### Problem: Port already in use
**Solution:** The tests use the actual website, no local server needed.

## CI/CD Integration

To run on GitHub Actions or similar:

```yaml
name: Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install
      - run: npm test
```

## Best Practices

1. **Always run tests in order** - Run positive tests first, then negative, then UI
2. **Use headed mode** - When debugging: `npm run test:headed`
3. **Check console logs** - Tests print actual output for Excel recording
4. **Update selectors if UI changes** - The app layout might change
5. **Record in Excel immediately** - Don't rely on memory; fill Excel as you go

## Notes for Assignment Submission

- ✅ All 24 positive + 10 negative + 1 UI test = 35 tests automated
- ✅ Tests follow naming convention: `Pos_Fun_XXXX`, `Neg_Fun_XXXX`, `Pos_UI_XXXX`, `Neg_UI_XXXX`
- ✅ HTML reports available in `playwright-report/`
- ✅ README explains installation and execution
- ✅ Git repository is public and accessible
- ✅ Actual outputs need to be manually recorded in Excel from console/page capture

## Support

For Playwright documentation: https://playwright.dev/docs/intro

For assignment questions: Refer to the assignment brief provided.

---

**Important:** When submitting, rename files with your registration number and ensure the GitHub link is publicly accessible!
