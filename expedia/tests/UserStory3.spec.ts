import { test, expect, Page } from '@playwright/test';

const validUser = "bromerodt@gmail.com";
const validPsw = "Test9731%";
const invalidPsw = "123654";
const invalidUser = "btestertert@gmail.com"


test('Login with valid credentials', async ({ page }) => {
 
    await page.goto('https://www.hoteles.com/');
    //await page.click('body');
    
    
    //await expect(page.getByText('Encuentra tu lugar perfecto')).toBeVisible();
   // await page.locator('[data-stid="header-menu-button"]');
    await page.waitForLoadState();
    
   
    const test= await page.getByText('Iniciar sesión');
    console.log(test);
    
    await page.waitForLoadState();
    await page.locator(':nth-match(a:has-text("Iniciar Sesión"), 1)').click(); // finds a text inside a link
    await page.waitForLoadState();
    await page.fill('input[id="loginFormEmailInput"]', validUser);
    await page.waitForLoadState();
    await page.click('button[id="loginFormSubmitButton"]');
   
    await page.click('button[id="passwordButton"]');
    await page.fill('input[id="enterPasswordFormPasswordInput"]', validPsw);
    await page.click('button[id="enterPasswordFormSubmitButton"]');
    await page.waitForLoadState();
  });

  test('Login with invalid credentials', async ({ page }) => {
 
    await page.goto('https://www.hoteles.com/');
    //await page.click('body');
    
    
    //await expect(page.getByText('Encuentra tu lugar perfecto')).toBeVisible();
   // await page.locator('[data-stid="header-menu-button"]');
    await page.waitForLoadState();
    
   
    const test= await page.getByText('Iniciar sesión');
    console.log(test);
    
    await page.waitForLoadState();
    await page.locator(':nth-match(a:has-text("Iniciar Sesión"), 1)').click(); // finds a text inside a link
    await page.waitForLoadState();
    await page.fill('input[id="loginFormEmailInput"]', invalidUser);
    await page.waitForLoadState();
    await page.click('button[id="loginFormSubmitButton"]');
   
    /*await page.click('button[id="passwordButton"]');
    await page.fill('input[id="enterPasswordFormPasswordInput"]', invalidPsw);
    await page.click('button[id="enterPasswordFormSubmitButton"]');
    await page.waitForLoadState();*/
    
  });
