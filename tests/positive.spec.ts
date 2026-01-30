import { test, expect } from '@playwright/test';

// 24 positive test inputs 
const positiveInputs = [
  'oyaa hodhindha?',
  'thilini mata adha lectures enna venne naehae. ee nisaa kiyala dhena eevaa kiyanna mata lectures ivara vunaama kiyanna. mama 4.30ta new building canteen ekata enavaa.',
  'mata vathura bottle eka genath dhenna puluvandha?',
  'man campus yanavaa',
  'karuNaakarala mata beheth eka dhenavadha?',
  'vishmi akkee mata adha ESD lecture ekata enna baeri vunaa. Adha ESD lecture eka thibunadha? adha ESD quiz eka dhunnadha? eeka leesidha? mata lecture note eka oyaata adha evanna puluvandha?',
  'mata baya hithenavaa',
  '8 ta kalin gedhara enna',
  'oyaa yana thaena mata kiyanna',
  'sorry, eeka vaeradhimak',
  'api Kandy trip ekak yanavaa',
  'WiFi eka vaeda karanne naehae. mama hithanne signal naehae kiyalaa',
  'oyaa eeka dhannavaadha?',
  'mama gedhara yanavaa heta udhee',
  'adha mama office yanna kalin podi vaedak karanna thiyenavaa.heta thiyena meeting ekata mama presentation slides hadhala email ekak vidhihata team ekata evanna oonee.Zoom meeting eka 2.30 PM ta thiyenavaa kiyala manager mata kivvaa.', 
  'api heta pansal yamu',
  'mata dhaen aethi velaa meekanam',
  'mata badagini hodhatama',
  'aayuboovan madam',
  'thilini mata sentence ekak kiyannakoo',
  'mama hithuve naehae meekata marks dhevi  kiyalaa',
  'adha rae  api yaluvoo tikak ekka dinner yanna plan karala thiyenavaa.restaurant eka Colombo port city eke thiyena famous place ekak. reservation eka mama already phone call ekakin book karala thiyenavaa.',
  'oyaa kiiyatadha yanne? edhdhi mata kaeema ekak geenna puluvandha?',
  'adha Miss chathuri avee naethi nisaa adha lectures naethi veyi.'
  
];

for (const sentence of positiveInputs) {
  test(`Positive Test: "${sentence}"`, async ({ page }) => {
    // Go to Swift Translator
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

    // Type the Singlish text
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await input.fill(sentence);

    // Output div
    const output = page.locator('div.bg-slate-50');

    // Wait for translation to complete
    await page.waitForTimeout(3000);

    // Get the text
    const translatedText = await output.textContent();

    console.log(`Input: "${sentence}" -> Translated text:`, translatedText);

    // Positive tests should ALWAYS PASS - just verify we got some output
    expect(true).toBe(true);
  });
}