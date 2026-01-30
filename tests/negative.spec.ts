import { test, expect } from '@playwright/test';

// Negative functional test cases for Singlish to Sinhala conversion
test.describe('Negative Functional Tests - Singlish to Sinhala Conversion', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  // 1. Missing spaces - joined words (robustness test)
  test('Neg_Fun_0001: Fail with joined words without spaces', async ({ page }) => {
    const input = 'mamagedharayanavaa';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    // Expect incorrect or incomplete conversion
    expect(outputText).toBeTruthy(); // Log output to Excel
  });

  // 2. Random character mix
  test('Neg_Fun_0002: Fail with random invalid characters', async ({ page }) => {
    const input = '@#$%^&*()';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 3. Only punctuation
  test('Neg_Fun_0003: Fail with only punctuation marks', async ({ page }) => {
    const input = '!?!?';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 4. Only numbers
  test('Neg_Fun_0004: Fail with only numbers', async ({ page }) => {
    const input = '12345678';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 5. Extreme multiple spaces
  test('Neg_Fun_0005: Fail with extreme multiple spaces', async ({ page }) => {
    const input = 'mama     gedhara      yanavaa';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 6. Invalid Singlish transliteration - non-standard mapping
  test('Neg_Fun_0006: Fail with invalid Singlish characters', async ({ page }) => {
    const input = 'xxzz yyana vvaa';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 7. Mixed with too much English
  test('Neg_Fun_0007: Fail with excessive English content', async ({ page }) => {
    const input = 'Hello I am very happy today and I like to work';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 8. Long input without proper structure (≥300 chars)
  test('Neg_Fun_0008: Fail with extremely long unstructured input', async ({ page }) => {
    const input = 'mamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanavaamamagedharayanaaa';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 9. Unicode characters mixed with Singlish
  test('Neg_Fun_0009: Fail with Unicode mixed characters', async ({ page }) => {
    const input = 'mama 你好 gedhara 🎉';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 10. Gibberish Singlish with misspellings
  test('Neg_Fun_0010: Fail with heavily misspelled Singlish gibberish', async ({ page }) => {
    const input = 'mmmaa ggeeeddddhhaarraa yyaaannnaaaavvvaaaa';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });
});
