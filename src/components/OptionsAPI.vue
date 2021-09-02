<script>
export default {
  data() {
    return {
      books: [],
      showAddBookForm: true,
    };
  },

  methods: {
    addbook(title, author) {
      this.books.push({ title, author });
    },
  },

  computed: {
    formattedBooks() {
      return this.books.map((book) => {
        return `${book.title} is written by ${book.author}`;
      });
    },
  },

  mounted() {
    fetch('api.com/books')
      .then((res) => res.json())
      .then((data) => (this.books = data));
  },
};
</script>
