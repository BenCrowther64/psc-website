<template>
    <section class="contact">
      <div class = contact-wrapper>
        <div class = contact-text>
          <h1>PLEASE GET IN TOUCH</h1>
          <p>Paul Smith (Quantity Surveying & Project Management) T: 07713 167555</p>
          <a href="mailto: pauls@psc-surveying-ltd.com">pauls@psc-surveying-ltd.com</a>
          <p>Stephen Crowther (Building Surveying & Principal Designer) T: 07912 392045</p>
          <a href="mailto: stephenc@psc-surveying-ltd.com">stephenc@psc-surveying-ltd.com</a>
        </div>
      </div>
    </section>
</template>

<style scoped>
.contact{
  display: flex;
  justify-content: center;
}
.contact-wrapper{
  margin: 0% 1% 1% 1%;
  background-color: #f1f1f1;
  display: flex;
  width: 100%;
  justify-content: center;
}

.contact-text{
  padding: 3%;
  width: 100%;
  text-align: center;
}

.contact-text h1{
  font-size: 2vmax;
  margin: 0;
  color: var(--psc-dark-blue);
}


.contact-text p{
  font-size: 1vmax;
}
.contact-text a{
  font-weight: bolder;
  color: var(--psc-dark-blue);
  background: none;
}

.contact-text a:hover{
  text-decoration: underline;
}

@media (pointer:none), (pointer:coarse){

  .contact-text h1{
    font-size: 2vmax;
  }

  .contact-text p{
    font-size: 2vmax;
  }

  .contact-text a{
    font-size: 2vmax;
  }
}

@media (max-width: 738px) {
  .contact-text h1{
    font-size: 4vmax;
  }

  .contact-text p{
    font-size: 2vmax;
  }

  .contact-text a{
    font-size: 2vmax;
  }
}

</style>