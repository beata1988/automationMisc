import { test, expect, Page } from '@playwright/test';
import { Locator } from 'nightwatch/lib/element';

const departure = "madrid";
const destination = "new york";

const minPrice = "380000";
const maxPrice = "800000"
 

test('Verify Round Trip Selection Enables Return Date Field', async ({ page }) => {
 //Selecting the “Round Trip” option should enable the return date field.
    await page.goto('https://www.booking.com/');
    await page.click('body');
    await page.locator('#flights').click();
    await page.locator('fieldset').click();

    
    
   
  });

test('Validate Departure and Destination City Inputs Fetch Flights', async ({ page }) => {
  await page.goto('https://www.booking.com/');
  const departurec = page.locator("input[placeholder='Airport or city']");
  const destinationc = page.locator("input[placeholder='Airport or city']");
  const  airport1 = page.locator("//li[2]//span[3]//span[1]");
    await page.click('body');
    await page.locator('#flights').click();

    await page.click('[data-ui-name="input_location_from_segment_0"]');
    await departurec.press('Backspace');
    await departurec.fill(departure);
    await page.getByText('MAD Adolfo Suarez Madrid-').click();
    

   await page.click('[data-ui-name="input_location_to_segment_0"]');
   await departurec.fill(destination);
    await page.getByText('LAG').click();
   await page.click('[data-ui-name="button_search_submit"]');
 

 

});

test('Verify Date Selection Updates Available Flights', async ({ page }) => {
  //Test Case 3: Verify Date Selection Updates Available Flights
  await page.goto('https://www.booking.com/');
  const departurec = page.locator("input[placeholder='Airport or city']");
  const destinationc = page.locator("input[placeholder='Airport or city']");
  const  airport1 = page.locator("//li[2]//span[3]//span[1]");
  const datesButton = page.locator('[data-ui-name="button_date_segment_0"]');
    await page.click('body');
    await page.locator('#flights').click();

    await page.click('[data-ui-name="input_location_from_segment_0"]');

    await departurec.waitFor();
    await departurec.press('Backspace');
    await departurec.fill(departure);
    await page.getByText('MAD Adolfo Suarez Madrid-').click();
    

   await page.click('[data-ui-name="input_location_to_segment_0"]');
   await departurec.fill(destination);

    await page.getByText('LAG').click();

    await datesButton.click();

   await page.click("span[aria-label='17 April 2025']");

   await page.click('[data-ui-name="button_search_submit"]');
 

  
});





  