let bookstaken = [];let users = [];class Book{
    constructor(title, author, numberPages){
        this.title = title;
        this.author = author;
        this.numberPages = numberPages;

     }}class user{
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.listBooks = [];
         }
         bookstaken(book){
            this.listBooks.push(book);

         }}
         const user1 = new user("Cleiton", 13);
         const user2 = new user("marlon", 50);
         const user3 = new user("roberto", 14);
         const book1 = new Book('OppenHeimmer', 'Heimer', 200);
         const book2 = new Book('Peppa Pig', 'Disney', 100);
         const book3 = new Book('Barbie', 'ken', 450);
         const book4 = new Book('harry potter', 'JK', 300);
         const book5 = new Book('Bem10', 'Cartoon', 20);
         const book6 = new Book('lenda do vazio', 'Kha zix', 800);
         class Library{

                 users = [user1, user2, user3];

                 bookstaken = [book1, book2, book3, book4, book5, book6];

            } user1.bookstaken(book1);
            user1.bookstaken(book3);
            user2.bookstaken(book2);
            user3.bookstaken(book5);
            console.log('Pessoas cadastradas: ' + bookstaken);
            let borrowedbook = "";
            console.log({user1});
            user1.listBooks.forEach((book) => {

                 borrowedbook += book.title+"; ";})
                 console.log(`A pessoa ${user1.name} tem os livros ${borrowedbook}`);
                 console.log({user2});
                 user2.listBooks.forEach((book) => {

                 borrowedbook = "";

             borrowedbook += book.title+"; ";})
             console.log(`A pessoa ${user2.name} tem os livros ${borrowedbook}`);
             console.log({user3});
             user3.listBooks.forEach((book) => {

                 borrowedbook = "";

             borrowedbook += book.title+"; ";})
             console.log(`A pessoa ${user3.name} tem os livros ${borrowedbook}`);
             const library = new Library();console.log(library)