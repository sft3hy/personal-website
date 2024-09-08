<script setup>
import backpacking from '@/assets/about_pictures/backpackingCamino.jpg';
import bean from '@/assets/about_pictures/ChicagoBean.jpg';
import Climbing1 from '@/assets/about_pictures/climbing1.jpg';
import friends from '@/assets/about_pictures/friends.jpg';
import SenecaBase from '@/assets/about_pictures/SenecaBase.jpg';
import snorkel from '@/assets/about_pictures/snorkelMaui.jpg';
import surfingMaui from '@/assets/about_pictures/surfingMaui.jpg';
import surfingOBX from '@/assets/about_pictures/surfingOBX.jpg';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

</script>

<template>
  <div class="about">
    <div class="topic-container">
      <h1>Professional Stuff:</h1>
      <p class="about-text">
        I grew up in Virginia Beach, VA and went to <a href="https://www.capehenrycollegiate.org/" target="_blank"
          rel="noopener">Cape
          Henry</a> for
        high school. I applied to a few colleges and chose <a href="https://www.virginia.edu/" target="_blank"
          rel="noopener">UVA</a>
        for my secondary education. My first year at UVA, I didn’t know what I wanted to focus on for my degree, so I
        took
        a wide variety of classes (drama, computer science, music, environmental science, physics, the list goes on).
        Over
        the years, I ended going for one fun major (music) and one get-a-job major (computer science). In May of 2022, I
        graduated UVA with 2 Bachelor of Arts degrees and then moved to northern Virginia. I worked for 2 years full
        time
        in person as a systems engineer for <a href="https://www.arcfield.com/" target="_blank"
          rel="noopener">Arcfield</a>, but did a
        lot of software
        engineering during my time. I sharpened my Python skills, as well as picking up some front end development tools
        (JavaScript, HTML, and CSS) and back end database management with SQL. I also learned the foundations of
        software
        deployment with Docker, Harbor, and Rancher for container orchestration. However, since I had lived in the state
        of Virginia my whole life and wanted a more advanced degree, I decided to apply to graduate school in
        California.
        I am now attending the University of California, Irvine, pursuing a Master’s in Data Science while still working
        remotely part time for Arcfield.
      </p>
    </div>
    <div class="topic-container">
      <h1><br>Who I really am:</h1>
      <p class="about-text">
        I’m a 25 year old guy that enjoys some pretty cookie cutter things: I like watching football (go Chiefs 3peat
        incoming), I enjoy spending time outdoors (hiking, camping, surfing, etc), and I love to cook just about
        anything.
        I’m currently living in Irvine, California, which is pretty conducive to the way I like to live my life with
        respect to the surfing and outdoorsy parts. Since my girlfriend lives in San Diego and attends USD law school, I
        spend a good amount of time down there as well. So far I’ve surfed at Scripps Pier, Encinitas, Windansea, and
        Trestles Beach, which have all had awesome waves.
      </p>
      <div class="carousel-container">
        <Carousel :items-to-show="1" :items-to-scroll="1" navigationEnabled>
          <template #addons>
            <Navigation />
          </template>
          <Slide v-for="(image, index) in images" :key="index">
            <div class="slide-content">
              <img :src="image.src" :alt="image.alt" width="300rem">
              <p>{{ image.caption }}</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      images: [
        { src: backpacking, alt: 'Backpacking the Camino de Santiago in Spain', caption: 'Backpacking Camino de Santiago in Spain' },
        { src: bean, alt: 'Me and a friend visiting the Chicago Bean', caption: 'Me and a friend visiting the Chicago Bean' },
        { src: Climbing1, alt: 'Climbing the Manchester Wall in Richmond, VA', caption: 'Climbing Manchester Wall in Richmond, VA' },
        { src: friends, alt: 'Friends visiting the caverns in Luray, VA', caption: 'Friends visiting the caverns in Luray, VA' },
        { src: SenecaBase, alt: 'About to start the climb at Seneca Rocks, WV', caption: 'About to climb at Seneca Rocks, WV' },
        { src: snorkel, alt: 'Snorkeling in Maui', caption: 'Snorkeling in Maui' },
        { src: surfingMaui, alt: 'Surfing in Maui', caption: 'Surfing in Maui' },
        { src: surfingOBX, alt: 'Surfing in the Outer Banks, NC', caption: 'Surfing in the Outer Banks, NC', height: "200rem" }
      ]
    };
  }
};
</script>

<style>
.about {
  min-height: 100vh;
}

.carousel-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.carousel__prev,
.carousel__next {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f3f7fc;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: #384355;
  /* Change this to your desired color */
  background-color: #f3f7fc;
  /* Example for background color */
  /* Example for border color */
}

.carousel__prev {
  left: 3rem;

}

.carousel__next {
  right: 3rem;

}


@media (max-width: 600px) {

  .carousel__prev {
    left: -30px;
    width: 2rem;
    height: 2rem;

  }

  .carousel__next {
    right: -30px;
    width: 2rem;
    height: 2rem;

  }
}

*/ .slide-content {
  text-align: center;
}

.slide-content img {
  display: block;
  margin: auto;
}

.slide-content p {
  margin-top: 10px;
}

@media (max-width: 500px) {
  .topic-container {
    width: 100%;
  }
}

@media (min-width: 501px) and (max-width: 1000px) {
  .topic-container {
    width: 95%;
  }
}

@media (min-width: 1001px) and (max-width: 1400px) {
  .topic-container {
    width: 90%;
  }
}

@media (min-width: 1401px) {
  .topic-container {
    width: 80%;
    /* You can adjust this value as needed */
  }
}


.topic-container h1,
p {
  width: 100%;
}

.about-text {
  font-size: 20px;
}
</style>
