<template>
  <div>
    <div class="youtube-list">
      <div class="youtube-item">
        <div class="youtube-image">
          <img :src="image" alt="" />
        </div>
        <div class="youtube-footer">
          <img
            src="https://images.unsplash.com/photo-1719209618812-a11aea8d1a32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="youtube-avatar"
          />
          <div class="youtube-info">
            <h3 class="youtube-title">{{ title }}</h3>
            <h4 class="youtube-author">Tung</h4>
          </div>
        </div>
      </div>
      <div class="youtube-item">
        <div class="youtube-image">
          <img :src="image" alt="" />
        </div>
        <div class="youtube-footer">
          <img
            src="https://images.unsplash.com/photo-1719209618812-a11aea8d1a32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="youtube-avatar"
          />
          <div class="youtube-info">
            <h3 class="youtube-title">{{ title }}</h3>
            <h4 class="youtube-author">Tung</h4>
          </div>
        </div>
      </div>
      <div class="youtube-item">
        <div class="youtube-image">
          <img :src="image" alt="" />
        </div>
        <div class="youtube-footer">
          <img
            src="https://images.unsplash.com/photo-1719209618812-a11aea8d1a32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="youtube-avatar"
          />
          <div class="youtube-info">
            <h3 class="youtube-title">{{ title }}</h3>
            <h4 class="youtube-author">Tung</h4>
          </div>
        </div>
      </div>
      <div class="youtube-item">
        <div class="youtube-image">
          <img :src="image" alt="" />
        </div>
        <div class="youtube-footer">
          <img
            src="https://images.unsplash.com/photo-1719209618812-a11aea8d1a32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="youtube-avatar"
          />
          <div class="youtube-info">
            <h3 class="youtube-title">{{ title }}</h3>
            <h4 class="youtube-author">Tung</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.youtube-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  padding: 25px;
}
.youtube-image {
  height: 250px;
  margin-bottom: 15px;
}
.youtube-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.youtube-footer {
  display: flex;
  align-items: flex-start;
  gap: 0 20px;
}
.youtube-avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
  flex-shrink: 0;
}
.youtube-title {
  font-size: 18px;
  margin-bottom: 5px;
}
.youtube-author {
  font-size: 14px;
  color: #999;
  font-weight: 300;
}
</style>
