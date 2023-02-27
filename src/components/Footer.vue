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
          <p style="margin: 0%;">PSC Surveying Ltd. <br> Thomborough Hall <br> Leyburn <br> North Yorkshire <br> DL8 5AB</p>
          <a id="link" href="mailto: pauls@psc-surveying-ltd.com">Paul Smith - 07713 167555</a>
          <a id="link" href="mailto: stephenc@psc-surveying-ltd.com">Stephen Crowther - 07912 392045 </a>
        </div>
    </div>  
    <div class="link-section wrapper text">
      <b class = "header">
        Links 
      </b>
      <div class = "links">
        <router-link to="/About">People</router-link>
        <router-link to="/Quantity-Surveying">Quantity Surveying</router-link>
        <router-link to="/Building-Surveying">Building Surveying</router-link>
        <router-link to="/Project-Management">Project Management</router-link>
        <router-link to="/Principle-Designer">Principle Designer</router-link>
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
    padding-top: 20px;
    background-color: #f5f5f5;
    width: 100%;
    padding: 50px 0px;
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
</style>