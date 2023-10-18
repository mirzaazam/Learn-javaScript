
function paperRequirments(books_1,books_2,books_3){
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300; 
    
    const books_1Count = books_1 * book1Page;
    const books_2Count = books_2 * book2Page;
    const books_3Count = books_3 * book3Page;

    const totalResult = books_1Count + books_2Count + books_3Count;
     return totalResult;
}

const result = paperRequirments(10, 20, 50);
console.log('Total need page: ', result);