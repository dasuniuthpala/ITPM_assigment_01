# 📱 REFERENCE CARD - Quick Commands

## Copy & Paste Commands

### 1️⃣ FIRST TIME ONLY (Setup)
```powershell
cd "d:\3Y2S new\IT23223080"
npm install
npx playwright install
```

### 2️⃣ RUN TESTS (Repeatable)
```powershell
npm test
```

### 3️⃣ VIEW RESULTS
```powershell
npm run test:report
```

### 4️⃣ RUN WITH BROWSER VISIBLE
```powershell
npm run test:headed
```

---

## Test Categories to Run Separately

### Only Positive Tests
```powershell
npx playwright test tests/positive.spec.ts
```

### Only Negative Tests
```powershell
npx playwright test tests/negative.spec.ts
```

### Only UI Tests
```powershell
npx playwright test tests/ui.spec.ts
```

### One Specific Test
```powershell
npx playwright test -g "Pos_Fun_0001"
```

---

## File Locations

| File | Purpose |
|------|---------|
| `tests/positive.spec.ts` | 24 positive tests |
| `tests/negative.spec.ts` | 10 negative tests |
| `tests/ui.spec.ts` | 8 UI tests |
| `README.md` | Full documentation |
| `QUICK_START.md` | Step-by-step guide |
| `START_HERE.md` | Summary (read first!) |

---

## Test IDs to Record in Excel

### Positive Functional Tests (24)
```
Pos_Fun_0001 to Pos_Fun_0024
```

### Negative Functional Tests (10)
```
Neg_Fun_0001 to Neg_Fun_0010
```

### UI Tests (8)
```
Pos_UI_0001 to Pos_UI_0005
Neg_UI_0001 to Neg_UI_0003
```

---

## Troubleshooting

### If `npm` not recognized
```powershell
# Reinstall Node.js from https://nodejs.org/
# Then restart PowerShell
npm --version
```

### If tests timeout
```powershell
npm run test:headed
# Watch browser to see what's happening
```

### If website won't load
```powershell
# Check in browser manually:
# https://www.swifttranslator.com/
# Try again after 5 minutes
```

### If need to start fresh
```powershell
rm -r node_modules
npm install
npx playwright install
```

---

## Git Commands

### Save progress
```powershell
git add .
git commit -m "Your message here"
git push
```

### Check status
```powershell
git status
```

### See your changes
```powershell
git log --oneline
```

---

## Assignment Timeline

⏱️ **Day 1:** Setup (10 min)
```
npm install && npx playwright install
```

⏱️ **Day 2:** Run tests (5 min)
```
npm test
```

⏱️ **Day 3:** Fill Excel (60 min)
```
Watch tests and record outputs
```

⏱️ **Day 4:** Submit (20 min)
```
Rename files + zip + upload
```

---

## What Happens When You Run `npm test`

1. ✓ Loads all 42 test cases
2. ✓ Opens website 42 times
3. ✓ Enters Singlish text
4. ✓ Captures Sinhala output
5. ✓ Checks if output is valid
6. ✓ Reports PASS/FAIL for each
7. ✓ Creates HTML report
8. ✓ Takes ~3-5 minutes total

---

## Excel Columns (From Assignment)

1. TC ID
2. Test case name
3. Input length type (S/M/L)
4. Input
5. Expected output
6. **Actual output** ← YOU FILL THIS (copy from test)
7. **Status** ← YOU FILL THIS (PASS/FAIL from test)
8. Accuracy justification / Description of issue type
9. What is covered by the test

---

## Repository Status

✅ https://github.com/dasuniuthpala/ITPM_assigment_01

- All test cases automated
- Documentation complete
- Code committed and pushed
- Public and accessible

---

## Estimated Test Results

When you run `npm test`:

```
PASS  tests/positive.spec.ts (24/24 tests) ✓
PASS  tests/negative.spec.ts (10/10 tests) ✓
PASS  tests/ui.spec.ts (8/8 tests) ✓

✓ 42 passed
⏱ ~3 minutes
```

---

## Before You Submit

✅ Filled Excel with all 35 test cases
✅ Excel similarity < 10%
✅ Renamed files with registration number
✅ Created folder with registration number
✅ Zipped: Playwright project + Excel + README
✅ Uploaded to CourseWeb before Feb 1

---

**Start with:** `START_HERE.md` or `QUICK_START.md`

**For help:** `README.md` or `IMPLEMENTATION_GUIDE.md`

---

Good luck! 🚀
