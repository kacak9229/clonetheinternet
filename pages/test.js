import Layout from '../components/layout'

const Test = () => (
  <Layout>
    <div class="card card-cascade narrower">
      <div class="view overlay">
        <img
          src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
          class="img-fluid"
          width="500px"
        />
        <a>
          <div class="mask rgba-white-slight" />
        </a>
      </div>

      <div class="card-body">
        <h5 class="pink-text">
          <i class="fa fa-cutlery" /> Culinary
        </h5>
        <h4 class="card-title">Cheat day inspirations</h4>
        <p class="card-text">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </p>
        <a class="btn btn-unique">Button</a>
      </div>
    </div>
  </Layout>
)

export default Test
