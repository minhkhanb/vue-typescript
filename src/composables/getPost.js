import { ref } from 'vue';

export const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts/' + id);
      console.log(data);
      if (!data.ok) {
        throw Error('that post does not exist');
      }

      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return {
    post,
    error,
    load,
  };
};