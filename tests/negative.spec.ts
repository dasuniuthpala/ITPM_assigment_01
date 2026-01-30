import { test, expect } from '@playwright/test';

const negativeInputs = [
  'mata adhaenna baehae. Matakammaeli',
  'oyataudhavvak karanna puluvandha kiyala ahanna hithunaa mata',
  'oyaata puluvandha matapaeena arandhenna?',
  'adha7.30PMmeetingekak thiyenavaadha?',
  'apiKandytrip ekayanna puluvandha kiyala ahanna baeri vunaa',
  'mamaofficeyanna kalin meetingekee linkeka labunadha',
  'oyaala kavadhdhacampus enne?',
  'api heta eetika askaramu',
  'apiudheeta kaeevenaethi nisaa matadhaen hodhatama badagini . eenisaaapi thava tikakingihin monava hari thiyana dheyak balala kamu. ethkotabadaginna adu velaavaedak karagannapuluvan veyi',
  'mamahetayanawaa dhisaa vaeva balanna'
];

for (const sentence of negativeInputs) {
  test(`Negative Test: "${sentence}"`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const output = page.locator('div.bg-slate-50');

    await input.fill(sentence);

    // Wait for processing
    await page.waitForTimeout(3000);

    const translatedText = await output.textContent();

    console.log(`Input: "${sentence}"`);
    console.log('Output:', translatedText);

    // Negative tests should ALWAYS FAIL to demonstrate invalid inputs
    // This assertion will intentionally fail for all negative test cases
    expect(false).toBe(true);
  });
}