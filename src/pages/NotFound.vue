<template>
    <section id="error-404" class="error-box">
      <ul>
        <li class="error-404">
          <div id="f404-1" class="f404">4</div>
          <div id="f404-2" class="f404">0</div>
          <div id="f404-3" class="f404">4</div>
        </li>
  
        <li class="error-text">
          <div>
            <h2>Мы сожалеем.</h2>
            <p>Страница, которую вы ищете, не найдена.</p>
  
            <router-link to="/" class="back-btn">
              Вернуться на главную
            </router-link>
          </div>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,800");
  @import url("https://fonts.googleapis.com/css?family=Krona+One");
  
  * {
    font-family: "Montserrat";
    margin: 0;
    padding: 0;
  }
  
  .error-box {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  
  .error-404,
  .error-text {
    display: flex;
    justify-content: center;
  }
  
  .error-404 {
    height: 40vh;
  }
  
  .f404 {
    display: inline-block;
    cursor: default;
    font-family: "Krona One";
    font-size: 28vh;
    text-align: center;
    color: #ccc;
    text-shadow: 0 10vh 40px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
  
  .f404:hover {
    margin-top: 3vh;
    font-size: 24.5vh;
    color: #eee;
    text-shadow: none;
  }

  #f404-1,
  #f404-2,
  #f404-3 {
    animation: float 2s infinite ease-in-out alternate;
  }
  
  #f404-2 {
    animation-delay: 0.4s;
  }
  
  #f404-3 {
    animation-delay: 0.8s;
  }
  
  @keyframes float {
    100% {
      transform: translateY(20px);
    }
  }
  
  .error-text h2 {
    margin-top: 20px;
    font-size: 32px;
    text-align: center;
    color: #333;
  }
  
  .error-text p {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    color: #555;
  }
  
  .back-btn {
    display: inline-block;
    margin-top: 25px;
    padding: 12px 26px;
    background-color: #4caf50;
    color: #fff;
    font-size: 18px;
    border-radius: 8px;
    text-decoration: none;
    transition: 0.3s;
  }
  
  .back-btn:hover {
    background-color: #3a9c44;
  }
  </style>
  