<template>
    <!-- 电影列表 后续需要修改为json文件 -->
    <div class="movie-list">
      <div v-for="(movie, index) in movies" :key="index" class="movie-card">
        <img :src="movie.poster" alt="Movie Poster" class="movie-poster">
        <div class="movie-info">
          <h2 class="movie-title">{{ movie.title }}</h2>
          <p class="movie-rating">Rating: {{ movie.rating }}</p>
          <p class="movie-summary">{{ movie.summary }}</p>
          <p class="movie-releaseDate">上映时间: {{ movie.上映时间 }}</p>
        </div>
      </div>
    </div>
  </template>
      
  <script>
  export default {
    name: 'MovieView',
    data() {
      return {
        movies: [
          {
            title: '流浪地球2',
            rating: 9.3,
            poster: 'https://p0.pipi.cn/mmdb/fb73868d9ab923338f300ba4e3ad51eb64f40.jpg?imageView2/1/w/464/h/644',
            summary: '太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新的家园，然而宇宙之路危机四伏，为了拯救地球，流浪地球时代的年轻人再次挺身而出，展开争分夺秒的生死之战...',
            上映时间: '2023-01-22 09:00'
          },
          {
            title: 'The Godfather',
            rating: 9.2,
            poster: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
            summary: 'An organized crime dynastys aging patriarch transfers control of his clandestine empire to his reluctant son.',
            上映时间: '1972-03-14'
          },
          // more movies...
        ]
      }
    }
  }
  </script>
      
  <style>
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
  </style>
  
      