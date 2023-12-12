const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const Pagination = require("../../pages/pagination");

const pagination = new Pagination()

Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
});

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	switch (heading) {
		case "Pagination":
			pagination.getHeading().should("have.text", heading)
			break
		case "World City Populations 2022":
			pagination.getSubHeading().should("have.text", heading)
			break
	}

})
Then(/^the user should see the "([^"]*)" paragraph$/, (content) => {
	pagination.getContent().should("have.text", content)
});



Then(/^the user should see the "([^"]*)" button is disabled$/, (button) => {
	switch (button) {
		case 'Previous':
			pagination.getPreviousButton().should("be.disabled")
			break
		case 'Next':
			pagination.getNextButton().should("be.disabled")
			break
	}

});

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	switch (button) {
		case 'Previous':
			pagination.getPreviousButton().should("be.enabled")
			break
		case 'Next':
			pagination.getNextButton().should("be.enabled")
			break
	}
});


When(/^the user clicks on the "([^"]*)" button$/, (args1) => {
	pagination.getNextButton().click()
});


When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (args1) => {
	pagination.getNextButton().click().click().click()
});


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {

	const arr = dataTable.rawTable.flat()
	pagination.getBodyData().each(($el, index) => {
		cy.wrap($el.text()).should("eq", arr[index])
	})
});
