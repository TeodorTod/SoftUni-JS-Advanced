const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

const host = "http://localhost:5500/";

describe("Test", async function () {
  this.timeout(6000);

  let browser, page;

  before(async () => {
    browser = await chromium.launch();
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    page.close();
  });

  it("loads all books", async () => {
    //navigate to page
    // await page.route('**/jsonstore/collections/books', (route, request) => {
    //     route.fulfill({
    //         body: JSON.stringify({}),
    //         status: 200,
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // });

    await page.goto(host);
    
    await page.click('text = Load all books');
    await page.waitForSelector('text = Harry Potter');
    const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent));

    expect(rowData[0]).to.contains('Harry Potter');
    expect(rowData[0]).to.contains('Rowling');
    expect(rowData[1]).to.contains('Fundamentals');
   
    it('creates books', async() => {
      await page.goto(host);

      await page.fill('input[name=title]', 'Title');
      await page.fill('input[name=author]', 'Author');

      const [request] = Promise.all([
        page.waitForRequest((request) => request.method() == 'POST'),
        page.click('text=Submit')
      ]);

      console.log(request);
    });
      

  });
});
