const books = [
    {
        title: "The Silent Forest",
        authorName: "Emily Carter",
        releaseYear: 2015,
    },
    {
        title: "Beyond the Horizon",
        authorName: "Michael Turner",
        releaseYear: 2018,
    },
    {
        title: "Digital Dreams",
        authorName: "Sophia Lee",
        releaseYear: 2021,
    },
    {
        title: "The Last Kingdom",
        authorName: "Daniel Brooks",
        releaseYear: 2012,
    },
    {
        title: "Mind Over Matter",
        authorName: "Olivia Harris",
        releaseYear: 2019,
    },
    {
        title: "Echoes of Time",
        authorName: "James Walker",
        releaseYear: 2010,
    },
    {
        title: "The Innovation Code",
        authorName: "Liam Scott",
        releaseYear: 2023,
    },
    {
        title: "Fragments of Light",
        authorName: "Ava Martinez",
        releaseYear: 2016,
    },
    {
        title: "Zero Gravity",
        authorName: "Noah Anderson",
        releaseYear: 2014,
    },
    {
        title: "The Hidden Path",
        authorName: "Isabella Moore",
        releaseYear: 2020,
    },
    {
        title: "Future Blueprint",
        authorName: "Ethan Clark",
        releaseYear: 2022,
    }
];

const sortByYear = (firstBook, secondBook) => {
    if (firstBook.releaseYear < secondBook.releaseYear) return -1;
    if (firstBook.releaseYear > secondBook.releaseYear) return 1;
    return 0;
};

const filteredBooks = books.filter(book => book.releaseYear < 2018);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);