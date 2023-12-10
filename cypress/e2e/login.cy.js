describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверили нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); //нажали на кнопку "Забыли пароль"
        cy.get('#mailForgot').type('test@yandex.ru'); // ввели имейл
        cy.get('#restoreEmailButton').click(); //нажали на кнопку "отправить код"
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверили нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
  		})

    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio111'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверили нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
  		})

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov111.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверили нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
  		})

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без символа @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверили что получаем текст с ошибкой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
  		})

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверили нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
  		})
})