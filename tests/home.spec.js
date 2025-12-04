import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Shin Lee/);
  });

  test('should display profile image', async ({ page }) => {
    const profileImage = page.locator('img[alt="Shin Lee"]');
    await expect(profileImage).toBeVisible();
    await expect(profileImage).toHaveAttribute('src', '/profile_lightG.PNG');
  });

  test('should display the main heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Shin Lee', level: 1 });
    await expect(heading).toBeVisible();
  });

  test('should display the lead text', async ({ page }) => {
    const leadText = page.locator('.lead').first();
    await expect(leadText).toBeVisible();
    await expect(leadText).toContainText('Leading large-scale digital and cloud-native transformations');
  });

  test('should display navigation buttons', async ({ page }) => {
    const viewResumeButton = page.getByRole('link', { name: 'View Resume' });
    const exploreProjectsButton = page.getByRole('link', { name: 'Explore Projects' });

    await expect(viewResumeButton).toBeVisible();
    await expect(exploreProjectsButton).toBeVisible();

    // Verify links are correct
    await expect(viewResumeButton).toHaveAttribute('href', '/resume');
    await expect(exploreProjectsButton).toHaveAttribute('href', '/projects');
  });

  test('should navigate to resume page when clicking View Resume', async ({ page }) => {
    const viewResumeButton = page.getByRole('link', { name: 'View Resume' });
    await viewResumeButton.click();
    await expect(page).toHaveURL(/.*\/resume/);
  });

  test('should navigate to projects page when clicking Explore Projects', async ({ page }) => {
    const exploreProjectsButton = page.getByRole('link', { name: 'Explore Projects' });
    await exploreProjectsButton.click();
    await expect(page).toHaveURL(/.*\/projects/);
  });

  test('should display Focus Areas section', async ({ page }) => {
    const focusAreasHeading = page.getByRole('heading', { name: 'Focus Areas' });
    await expect(focusAreasHeading).toBeVisible();

    const focusAreasSubtitle = page.locator('text=Key areas of expertise and specialization');
    await expect(focusAreasSubtitle).toBeVisible();
  });

  test('should display focus areas list items', async ({ page }) => {
    // Wait for the focus areas to load (they come from PersonaContext)
    const focusAreasList = page.locator('#focus-areas ul');
    await expect(focusAreasList).toBeVisible();

    // Check that there are focus area items
    const focusAreaItems = focusAreasList.locator('li');
    const count = await focusAreaItems.count();
    expect(count).toBeGreaterThan(0);

    // Verify at least one expected focus area is present
    const focusAreasText = await focusAreasList.textContent();
    expect(focusAreasText).toBeTruthy();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const heading = page.getByRole('heading', { name: 'Shin Lee', level: 1 });
    await expect(heading).toBeVisible();
    
    const profileImage = page.locator('img[alt="Shin Lee"]');
    await expect(profileImage).toBeVisible();
  });

  test('should have proper semantic structure', async ({ page }) => {
    // Check for main heading
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toHaveText('Shin Lee');

    // Check for section headings
    const h2Headings = page.locator('h2');
    const h2Count = await h2Headings.count();
    expect(h2Count).toBeGreaterThanOrEqual(2); // At least Focus Areas and About
  });
});

