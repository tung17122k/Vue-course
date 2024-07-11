<template>
  <div>
    <form
      class="form-post"
      autocomplete="off"
      method="post"
      @submit.prevent="handleSubmit"
    >
      <input type="text" name="image" placeholder="Image url" />
      <input type="text" name="title" placeholder="enter your title" />
      <input type="text" name="author" placeholder="enter your author" />
      <input
        type="text"
        name="avatar"
        placeholder="enter your avatar url
      "
      />
      <button type="submit">Add DB</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      youtubeData: null,
    };
  },
  computed: {},
  methods: {},
  mounted() {
    async function addDB({ image, title, author, avatar }) {
      await fetch("http://localhost:3000/youtubedata", {
        method: "POST",
        body: JSON.stringify({
          image,
          title,
          author,
          avatar,
        }),
        header: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
    }
    const formPost = document.querySelector(".form-post");
    formPost.addEventListener("submit", async function (e) {
      e.preventDefault();
      const youtube = {
        image: this.elements["image"].value,
        author: this.elements["author"].value,
        avatar: this.elements["avatar"].value,
        title: this.elements["title"].value,
      };
      await addDB(youtube);
      this.reset;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-post {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin: 25px auto;
  padding: 50px;
}
.form-post input {
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 8px;
}
.form-post button {
  background-color: #6a5af9;
  color: white;
  border: 0;
  outline: none;
  padding: 10px 15px;
  border-radius: 4px;
}
</style>
