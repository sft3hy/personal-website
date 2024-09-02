<script setup>
import backpacking from '@/assets/about_pictures/backpackingCamino.jpg';
import bean from '@/assets/about_pictures/ChicagoBean.jpg';
import Climbing1 from '@/assets/about_pictures/climbing1.jpg';
import friends from '@/assets/about_pictures/friends.jpg';
import SenecaBase from '@/assets/about_pictures/SenecaBase.jpg';
import snorkel from '@/assets/about_pictures/snorkelMaui.jpg';
import surfingMaui from '@/assets/about_pictures/surfingMaui.jpg';
import surfingOBX from '@/assets/about_pictures/surfingOBX.jpg';
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
        spend a good amount of time down there as well. So far I’ve surfed at Scripps Pier, Encinitas, and Trestles
        Beach,
        which have all had awesome waves.
      </p>
      <br>
      <div class="images-container">
        <img :src="backpacking" alt="Backpacking the Camino de Santiago in Spain" width="300rem" height="400rem">
        <p>Backpacking Camino de Santiago in Spain</p><br>
        <img :src="bean" alt="Me and a friend visiting the Chicago Bean" width="300rem" height="400rem">
        <p>Me and a friend visiting the Chicago Bean</p><br>
        <img :src="Climbing1" alt="Climbing the Manchester Wall in Richmond, VA" width="300rem" height="400rem">
        <p>Climbing Manchester Wall in Richmond, VA</p><br>
        <img :src="friends" alt="Friends visiting the caverns in Luray, VA" width="300rem" height="400rem">
        <p>Friends visiting the caverns in Luray, VA</p><br>
        <img :src="SenecaBase" alt="About to start the climb at Seneca Rocks, WV" width="300rem" height="400rem">
        <p>About to climb at Seneca Rocks, WV</p><br>
        <img :src="snorkel" alt="Snorkeling in Maui" width="300rem" height="400rem">
        <p>Snorkeling in Maui</p><br>
        <img :src="surfingMaui" alt="Surfing in Maui" width="300rem" height="400rem">
        <p>Surfing in Maui</p><br>
        <img :src="surfingOBX" alt="Surfing in the Outer Banks, NC" width="300rem" height="200rem">
        <p>Surfing in the Outer Banks, NC</p><br>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    addMetaTags() {
      const existingTitle = document.querySelectorAll('title');
      existingTitle.forEach(tag => tag.remove());
      document.title = 'Sam Townsend - About';

      const existingMetaTags = document.querySelectorAll('meta[name="description"]', 'meta[property="og:title"]');
      existingMetaTags.forEach(tag => tag.remove());
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = "Biographical information about Sam Townsend or Samuel Townsend. He is a software engineer working part time for Arcfield and getting his Master's in Data Science at UC Irvine. Pictures of his travelling and surfing.";
      document.head.appendChild(metaDescription);

      const metaOgTitle = document.createElement('meta');
      metaOgTitle.setAttribute('property', 'og:title');
      metaOgTitle.content = 'Sam Townsend - About';
      document.head.appendChild(metaOgTitle);
      return {
        backpacking, bean, Climbing1, friends, SenecaBase, snorkel, surfingMaui, surfingOBX
      };
    },
  },
  mounted() {
    this.addMetaTags();
  },
};
</script>

<style>
.about {
  min-height: 100vh;
}

.images-container {
  text-align: center;
  overflow-x: hidden;
}

.images-container p {
  margin-top: -8px;
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
