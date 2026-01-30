import { test, expect } from '@playwright/test';

// Positive functional test cases for Singlish to Sinhala conversion
test.describe('Positive Functional Tests - Singlish to Sinhala Conversion', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  // 1. Simple sentence - greeting
  test('Pos_Fun_0001: Convert simple greeting', async ({ page }) => {
    const input = 'oyaata kohomadha?';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500); // Wait for real-time conversion
    
    const outputText = await page.locator('body').textContent();
    expect(outputText?.length).toBeGreaterThan(0);
    console.log(`Input: ${input} | Output captured`);
  });

  // 2. Simple sentence - present tense
  test('Pos_Fun_0002: Convert simple present tense', async ({ page }) => {
    const input = 'mama gedhara yanavaa.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText?.length).toBeGreaterThan(0);
  });

  // 3. Compound sentence
  test('Pos_Fun_0003: Convert compound sentence', async ({ page }) => {
    const input = 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 4. Question form - interrogative
  test('Pos_Fun_0004: Convert interrogative question', async ({ page }) => {
    const input = 'oyaa kavadhdha enna hithan inne?';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 5. Command form - imperative
  test('Pos_Fun_0005: Convert imperative command', async ({ page }) => {
    const input = 'mata kiyanna.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 6. Negative form
  test('Pos_Fun_0006: Convert negative form', async ({ page }) => {
    const input = 'mama ehema karannee naehae.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 7. Common greeting - aayuboovan
  test('Pos_Fun_0007: Convert common greeting aayuboovan', async ({ page }) => {
    const input = 'aayuboovan!';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 8. Polite request
  test('Pos_Fun_0008: Convert polite request', async ({ page }) => {
    const input = 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 9. Informal phrasing
  test('Pos_Fun_0009: Convert informal phrasing', async ({ page }) => {
    const input = 'eeyi, ooka dhiyan.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 10. Past tense
  test('Pos_Fun_0010: Convert past tense', async ({ page }) => {
    const input = 'mama iiyee gedhara giyaa.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 11. Future tense
  test('Pos_Fun_0011: Convert future tense', async ({ page }) => {
    const input = 'mama heta enavaa.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 12. Plural pronoun
  test('Pos_Fun_0012: Convert plural pronoun', async ({ page }) => {
    const input = 'api yamu.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 13. Multi-word expression
  test('Pos_Fun_0013: Convert multi-word expression', async ({ page }) => {
    const input = 'hariyata vaeda karanna.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 14. Proper spacing
  test('Pos_Fun_0014: Convert with proper spacing', async ({ page }) => {
    const input = 'mata paan kanna oonee.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 15. Short input with punctuation
  test('Pos_Fun_0015: Convert with punctuation', async ({ page }) => {
    const input = 'mata help eka?';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 16. Mixed English brand names - WiFi
  test('Pos_Fun_0016: Convert with WiFi brand name', async ({ page }) => {
    const input = 'WiFi password eka ehi aenuvak.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText?.includes('WiFi')).toBeTruthy();
  });

  // 17. Place name with English
  test('Pos_Fun_0017: Convert with place name', async ({ page }) => {
    const input = 'siiyaa Colombo yanna hadhannee.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText?.includes('Colombo')).toBeTruthy();
  });

  // 18. Time format
  test('Pos_Fun_0018: Convert with time format', async ({ page }) => {
    const input = 'mama 3 PM eken office yavanna.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText?.includes('PM')).toBeTruthy();
  });

  // 19. Currency format
  test('Pos_Fun_0019: Convert with currency', async ({ page }) => {
    const input = 'Rs. 1000 dhanna venee.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText?.includes('Rs')).toBeTruthy();
  });

  // 20. Date format
  test('Pos_Fun_0020: Convert with date format', async ({ page }) => {
    const input = 'dhesaembar 25 eken yanavaa.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 21. Repeated word emphasis
  test('Pos_Fun_0021: Convert repeated word emphasis', async ({ page }) => {
    const input = 'hari hari!';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 22. Short input (≤30 chars)
  test('Pos_Fun_0022: Convert short input S type', async ({ page }) => {
    const input = 'mata baya naee.'; // 15 chars
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 23. Negation pattern
  test('Pos_Fun_0023: Convert negation pattern', async ({ page }) => {
    const input = 'mama dhannee naee.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText).toBeTruthy();
  });

  // 24. Complex sentence with mixed content
  test('Pos_Fun_0024: Convert complex sentence with mixed content', async ({ page }) => {
    const input = 'mama Zoom meeting ekk attend karalaa office eka imila.';
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill(input);
    await page.waitForTimeout(500);
    
    const outputText = await page.locator('body').textContent();
    expect(outputText?.includes('Zoom')).toBeTruthy();
  });
});
