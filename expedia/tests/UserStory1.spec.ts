import { test, expect, Page } from '@playwright/test';

const destination = "new york";
const minPrice = "380000";
const maxPrice = "800000" 
 

test('Search Hotels by Valid City Name', async ({ page }) => {
 
    await page.goto('https://www.hoteles.com/');
    await page.click('body');
    await page.click('[data-stid="destination_form_field-menu-trigger"]');
    await page.fill('input[id="destination_form_field"]', destination);
    await page.click('[aria-label="Times Square Nueva York, Nueva York, Estados Unidos"]');
    await page.click('[id="search_button"]');
    await page.getByRole('link', { name: 'Abre la página de Home2'}).isVisible();
   
  });

  test('Select Check-in and Check-out Dates', async ({ page }) => {
  


    await page.goto('https://www.hoteles.com/');
    await page.click('body');
    await page.click('[data-stid="destination_form_field-menu-trigger"]');
    await page.fill('input[id="destination_form_field"]', destination);
    await page.click('[aria-label="Times Square Nueva York, Nueva York, Estados Unidos"]');
    await page.click('[data-stid="uitk-date-selector-input1-default"]');
    await page.locator(".uitk-day-clickable").nth(25).click();
    await page.locator(".uitk-day-clickable").nth(30).click();
    await page.click('[id="search_button"]');
      await expect(page.getByText("Más de 300 propiedades")).toBeVisible(); //assert text presence
    await page.getByRole('link', { name: 'Abre la página de Home2'}).isVisible();
    
  });


  test('Apply "Guest Rating: 4+" Filter', async ({ page }) => {
 
    await page.goto('https://www.hoteles.com/');
    await page.click('body');
    await page.click('[data-stid="destination_form_field-menu-trigger"]');
    await page.fill('input[id="destination_form_field"]', destination);
    await page.click('[aria-label="Times Square Nueva York, Nueva York, Estados Unidos"]');
    await page.click('[data-stid="uitk-date-selector-input1-default"]');
    await page.locator(".uitk-day-clickable").nth(25).click();
    await page.locator(".uitk-day-clickable").nth(30).click();
    await page.click('[id="search_button"]');
  


    
    await page.locator('sort-filter-dropdown-sort').isVisible();
    await page.selectOption('select#sort-filter-dropdown-sort', { label: 'Puntuación de los huéspedes + nuestra selección' });



    await page.getByRole('link', { name: 'Abre la página de Home2'}).isVisible();
    

  });

  test('Apply "Price" Filter', async ({ page }) => {
 
    await page.goto('https://www.hoteles.com/');
    await page.click('body');
    await page.click('[data-stid="destination_form_field-menu-trigger"]');
    await page.fill('input[id="destination_form_field"]', destination);
    await page.click('[aria-label="Times Square Nueva York, Nueva York, Estados Unidos"]');
    await page.click('[data-stid="uitk-date-selector-input1-default"]');
    await page.locator(".uitk-day-clickable").nth(25).click();
    await page.locator(".uitk-day-clickable").nth(30).click();
    await page.click('[id="search_button"]');
  



    await page.fill('input[id="price-min"]', minPrice);
    await page.fill('input[id="price-max"]', maxPrice);

   // await page.locator('sort-filter-dropdown-sort').isVisible();
    //await page.selectOption('select#sort-filter-dropdown-sort', { label: 'Puntuación de los huéspedes + nuestra selección' });


    await expect(page.getByText("27 propiedades")).toBeVisible(); //assert text presence

  });

  
  test('Sort by "Lowest Price"', async ({ page }) => {
  
    
    await page.goto('https://www.hoteles.com/');
    await page.click('body');
    await page.click('[data-stid="destination_form_field-menu-trigger"]');
    await page.fill('input[id="destination_form_field"]', destination);
    await page.click('[aria-label="Times Square Nueva York, Nueva York, Estados Unidos"]');
    await page.click('[data-stid="uitk-date-selector-input1-default"]');
    await page.locator(".uitk-day-clickable").nth(25).click();
    await page.locator(".uitk-day-clickable").nth(30).click();
    await page.click('[id="search_button"]');
  


    
    await page.locator('sort-filter-dropdown-sort').isVisible();
    await page.selectOption('select#sort-filter-dropdown-sort', { label: 'Precio (de menor a mayor)' });



    await page.getByRole('link', { name: 'Abre la página de Home2'}).isVisible();
});


