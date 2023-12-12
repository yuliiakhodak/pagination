class Pagination {
    getHeading(){
        return cy.get(".is-size-3")
    }
    getSubHeading(){
        return cy.get("#sub_heading")
    }
    getContent(){
        return cy.get("#content")
    }
    getPreviousButton(){
        return cy.get("#previous")
    }
    getNextButton(){
        return cy.get("#next")
    }
    getBodyData(){
        return cy.get(".city_info")
    }

}


module.exports = Pagination