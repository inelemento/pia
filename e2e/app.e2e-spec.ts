import { browser, element, by, protractor, ElementFinder } from 'protractor';
import { PiaPage } from './app.po';

describe('PIA Home page', () => {
  let page: PiaPage;

  beforeEach(() => {
    page = new PiaPage();
  });

  var startString = "Avvio";
  var contextString = "Contesto";

  it('should display welcome message', done => {
    page.navigateTo();
    page.getButtonText()
      .then(msg => expect(msg).toEqual(startString))
      .then(done, done.fail);
  });

  /*
  it('should not be in developer mode', function() {
    expect(element(by.css('.pia-versionInfoBlock')).getText()).not.toMatch('DEV$');
  });
  */

  it('should display new PIA page', function() {
    element(by.css('.pia-authenticationBlock-enter a')).click();

    expect(element(by.css('.pia-newBlock-item-new-btn')).isPresent()).toBeTruthy();
  });

  it('should display new PIA form', function() {
    expect(element(by.css('.pia-cardsBlock-item-form')).isPresent()).toBeTruthy();
  });

  it('should create new PIA from form', function() {
    element(by.css('.pia-newBlock-item-new-btn')).click();

    element.all(by.css('#name')).first().sendKeys('test');
    element.all(by.css('#author_name')).first().sendKeys('test');
    element.all(by.css('#evaluator_name')).first().sendKeys('test');
    element.all(by.css('#validator_name')).first().sendKeys('test');

    element.all(by.css('.pia-cardsBlock-item-form')).first().submit();

    expect(element(by.css('.pia-entryContentBlock-header-title')).getText()).toMatch('^'+contextString);
  });

});
