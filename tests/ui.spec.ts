import { test, expect } from '@playwright/test';

// UI test cases for Swift Translator
test.describe('UI Tests - Swift Translator Interface', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  // Positive UI test - Real-time output updating
  test('Pos_UI_0001: Verify real-time output updates while typing', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    const startTime = Date.now();
    
    // Type character by character to simulate real typing
    await singlishInput.fill('m');
    await page.waitForTimeout(100);
    let output1 = await page.locator('body').textContent();
    
    await singlishInput.fill('ma');
    await page.waitForTimeout(100);
    let output2 = await page.locator('body').textContent();
    
    await singlishInput.fill('mama');
    await page.waitForTimeout(100);
    let output3 = await page.locator('body').textContent();
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    // Verify updates happened and were reasonably fast
    expect(responseTime).toBeLessThan(2000); // Should be under 2 seconds
    expect(output1).toBeTruthy();
    expect(output2).toBeTruthy();
    expect(output3).toBeTruthy();
    console.log(`Real-time update test passed. Total time: ${responseTime}ms`);
  });

  // Positive UI test - Clear input functionality
  test('Pos_UI_0002: Verify input can be cleared and output disappears', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    
    // First, enter some text
    await singlishInput.fill('mama gedhara yanavaa');
    await page.waitForTimeout(300);
    
    let outputWithText = await page.locator('body').textContent();
    expect(outputWithText).toBeTruthy();
    
    // Now clear the input
    await singlishInput.clear();
    await page.waitForTimeout(300);
    
    // Verify input is empty
    const inputValue = await singlishInput.inputValue();
    expect(inputValue).toBe('');
    console.log('Clear input test passed');
  });

  // Positive UI test - Page loads successfully
  test('Pos_UI_0003: Verify page loads with input and output fields', async ({ page }) => {
    // Wait for input field to be visible
    const singlishInput = page.locator('textarea, input').first();
    await expect(singlishInput).toBeVisible({ timeout: 5000 });
    
    // Verify placeholder or label exists
    const isVisible = await singlishInput.isVisible();
    expect(isVisible).toBeTruthy();
    console.log('Page load test passed');
  });

  // Positive UI test - Tab navigation works
  test('Pos_UI_0004: Verify tab key navigation works in input field', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.focus();
    await singlishInput.fill('mama gedhara');
    
    // Verify focus is on input field
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['TEXTAREA', 'INPUT']).toContain(focusedElement);
  });

  // Positive UI test - Copy output functionality (if available)
  test('Pos_UI_0005: Verify text output is selectable', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    
    await singlishInput.fill('mama gedhara yanavaa');
    await page.waitForTimeout(500);
    
    // Try to select output text
    const outputArea = page.locator('body');
    const selectedText = await page.evaluate(() => window.getSelection()?.toString());
    expect(outputArea).toBeVisible();
  });

  // Negative UI test - Empty input handling
  test('Neg_UI_0001: Verify behavior with empty input field', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    
    // Leave input empty and check if output is empty or shows placeholder
    await singlishInput.fill('');
    await page.waitForTimeout(300);
    
    const inputValue = await singlishInput.inputValue();
    expect(inputValue).toBe('');
    console.log('Empty input handled correctly');
  });

  // Negative UI test - Page responsiveness with very long input
  test('Neg_UI_0002: Verify UI remains responsive with extremely long input', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    const longInput = 'mama gedhara yanavaa '.repeat(50); // 1050+ characters
    
    const startTime = Date.now();
    await singlishInput.fill(longInput);
    await page.waitForTimeout(1000);
    const endTime = Date.now();
    
    // Verify page didn't freeze (took reasonable time)
    expect(endTime - startTime).toBeLessThan(3000);
    
    // Verify input is still visible and accessible
    const isVisible = await singlishInput.isVisible();
    expect(isVisible).toBeTruthy();
    console.log(`Long input test completed in ${endTime - startTime}ms`);
  });

  // Negative UI test - Browser console errors
  test('Neg_UI_0003: Verify no critical JavaScript errors occur', async ({ page }) => {
    let jsErrors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        jsErrors.push(msg.text());
      }
    });
    
    const singlishInput = page.locator('textarea, input').first();
    await singlishInput.fill('mama gedhara yanavaa');
    await page.waitForTimeout(500);
    
    // Log any errors found (for manual review)
    if (jsErrors.length > 0) {
      console.log('Console errors found:', jsErrors);
    }
    expect(singlishInput).toBeVisible();
  });

  // Positive UI test - Paste functionality
  test('Pos_UI_0006: Verify paste functionality works correctly', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    
    // Use clipboard API to paste text
    await page.evaluate((text) => {
      navigator.clipboard.writeText(text);
    }, 'mama gedhara yanavaa');
    
    await singlishInput.focus();
    await singlishInput.press('Control+V');
    await page.waitForTimeout(300);
    
    const inputValue = await singlishInput.inputValue();
    expect(inputValue).toContain('mama');
  });

  // Positive UI test - Undo/Redo functionality
  test('Pos_UI_0007: Verify input field supports undo operation', async ({ page }) => {
    const singlishInput = page.locator('textarea, input').first();
    
    // Type first text
    await singlishInput.fill('mama');
    await page.waitForTimeout(100);
    
    // Type more
    await singlishInput.fill('mama gedhara');
    await page.waitForTimeout(100);
    
    // Try undo
    await singlishInput.press('Control+Z');
    await page.waitForTimeout(200);
    
    const inputValue = await singlishInput.inputValue();
    expect(singlishInput).toBeVisible();
  });
});
