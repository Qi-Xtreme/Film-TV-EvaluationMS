<!-- 当前页面弃用 -->
<!-- <template>
  电影列表 后续需要修改为json文件
  <div class="movie-list">
    <div v-for="(movie, index) in movies" :key="index" class="movie-card">
      <img :src="movie.poster" alt="Movie Poster" class="movie-poster">
      <div class="movie-info">
        <h2 class="movie-title">{{ movie.title }}</h2>
        <p class="movie-rating">Rating: {{ movie.rating }}</p>
        <p class="movie-summary">{{ movie.summary }}</p>
        <p class="movie-releaseDate">Release Date: {{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'MovieList',
  data() {
    return {
      movies: [
        {
          title: 'The Shawshank Redemption',
          rating: 9.3,
          poster: 'https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
          summary: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          release_date: '1994-09-23'
        },
        {
          title: 'The Godfather',
          rating: 9.2,
          poster: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
          summary: 'An organized crime dynastys aging patriarch transfers control of his clandestine empire to his reluctant son.',
          release_date: '1972-03-14'
        },
        more movies...
      ]
    }
  }
}
</script> -->
    
<!-- <style>
.movie-list {
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.movie-card {
  width: 1000px;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.movie-poster {
  width: 200px;
  height: 300px;
  object-fit: cover;
}

.movie-info {
  padding: 20px;
}

.movie-title {
  font-size: 24px;
  margin: 0 0 10px;
}

.movie-rating {
  font-size: 18px;
  margin: 0 0 10px;
}

.movie-summary {
  font-size: 16px;
  margin: 0 0 10px;
}

.movie-releaseDate {
  font-size: 14px;
  margin: 0;
}
</style> -->

    