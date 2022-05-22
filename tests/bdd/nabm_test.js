const { I } = inject();

Feature('nabm');

Before(() => {
    I.amOnPage('/actes-tarifs/nabm')
})

Scenario('nabm home page', () => {
    I.seeInTitle('prix des analyse aux maroc')
});
