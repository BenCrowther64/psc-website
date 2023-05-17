<template>
  <div class="footer-wrapper">
    <div class="about wrapper text">
      <b class = "header">
        About PSC Surveying Ltd.
      </b>
      <p>
        Based in Leeds since 2011, we work thoughout the United Kingdom in a variety
        of sectors including heritage, commercial, retail, leisure, offices, education 
        and residential.
      </p>
      <img id="footer-img" src="../assets/images/branding/RICS_Logo.png">
      <img id="footer-img" src="../assets/images/branding/Corporate.png">
    </div> 
    <div class="wrapper text">
        <b class = "header">
          Get in touch
        </b>
        <div class = "touch">
          <p style="margin: 0%;">PSC Surveying Ltd. <br> Thornborough Hall <br> Leyburn <br> North Yorkshire <br> DL8 5AB</p>
          <a id="link" href="mailto: pauls@psc-surveying-ltd.com">Paul Smith</a>
          <a id="link" href="mailto: stephenc@psc-surveying-ltd.com">Stephen Crowther</a>
        </div>
    </div>  
    <div class="link-section wrapper text">
      <b class = "header">
        Links 
      </b>
      <div class = "links">
        <router-link to="/People">People</router-link>
        <router-link to="/Quantity-Surveying">Quantity Surveying</router-link>
        <router-link to="/Building-Surveying">Building Surveying</router-link>
        <router-link to="/Project-Management">Project Management</router-link>
        <router-link to="/Principal-Designer">Principle Designer</router-link>
        <router-link to="/Projects">Projects</router-link>
        <router-link to="/Contact">Contact</router-link>
      </div>
    </div>  
    <div class="practice wrapper text">
      <b class = "header">
        Our Practice
      </b>
      <p>
        We are an experienced team of Chartered Surveyors, Quantity Surveyors, Project Managers, 
        Building Surveyors and Principal Designers. From 2015 we provide a senior level of involvement
        in all our projects.
      </p>
    </div>  
  </div>
  <div class="made-by-bar">Made by&nbsp;<a id="link" href="https://github.com/BenCrowther64">Ben Crowther</a></div>
</template>

<style>
  .footer-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: top;
    background-color: #f5f5f5;
    width: 100%;
    padding: 40px 0px;
  }

  .text {
    color: rgb(100, 100, 100);
    font-size: 12px;
  }

  .wrapper{
    width: 25%;
    margin: 0px 20px;
  }

  .touch{
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 10vh;
  }

  .links{
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 10vh;
  }

  .links :hover{
    background: none;
    text-decoration-line: underline;
  } 

  #footer-img {
    height: 70px;
  }
  
  .made-by-bar{
    color: rgb(100, 100, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
    width: 100%;
    height: 5vh;
    font-size: 15px;
  }

  #link{
    font-weight: 500;
    color: var(--psc-dark-blue);
    background: none;
    text-decoration: none;
  }

  #link:hover{
    text-decoration: underline;
  }

  .header{
    color: #000000;
  }

  @media (pointer:none), (pointer:coarse){
    .wrapper{
      width: 95%;
      margin: 10px 0px;
      font-size: 1.7vmax;
    }

    .footer-wrapper {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      padding: 4% 0;
    }

    
    .link-section {
      margin-top: 8vmax;
    }
  }

  @media (max-width: 1200px) {
    .wrapper{
      width: 95%;
      margin: 10px 0px;
      font-size: 1.7vmax;
    }

    .footer-wrapper {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }

    .link-section {
      margin-top: 8vmax;
    }
}

</style>