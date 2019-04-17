import CheckboxPage from '../pageobjects/checkbox.page';
import {Eyes, Target} from '@applitools/eyes.webdriverio';

describe('checkboxes', () => {
    it('checkbox 2 should be enabled', () => {
        CheckboxPage.open();
        expect(CheckboxPage.firstCheckbox.isSelected()).toEqual(false);
        expect(CheckboxPage.lastCheckbox.isSelected()).toEqual(true);
    });
    const eyes = new Eyes();
    eyes.setApiKey(process.env.APPLITOOLS_KEY);
    it('prepare eyes', () => {
        let currentSize = browser.execute(function () {
            return {
                width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            };
        });
        console.log(browser.capabilities.browserName);
        eyes.open(browser, '', 'Image test', currentSize);
        eyes.check('Applitools test', Target.window());
    });

    it('checkbox 1 should be enabled after clicking on it', () => {
        CheckboxPage.open();
        expect(CheckboxPage.firstCheckbox.isSelected()).toEqual(false);
        CheckboxPage.firstCheckbox.click();
        expect(CheckboxPage.firstCheckbox.isSelected()).toEqual(true);
    });
});
