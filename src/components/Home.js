import shop from '../images/shop.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-details">
        <img className="home-image" src={shop} alt="shop" />
        <div className="home-info">
          <p>
            Ea quis eu aliqua esse incididunt eu nulla tempor consectetur
            nostrud. Eu aliquip eu tempor ut culpa ea magna sunt. Voluptate
            nostrud et officia quis adipisicing mollit Lorem do. In fugiat
            pariatur amet aute ut ex. Ullamco ea incididunt sit duis est
            consequat commodo adipisicing cillum eu. Ex esse Lorem sit aliqua
            sint sint est reprehenderit id.
          </p>
          <p>
            Sunt officia cillum minim culpa. Consequat esse do pariatur elit
            aliquip proident et amet et. Cillum commodo aute do adipisicing et
            enim veniam nostrud id aute Lorem pariatur exercitation quis.
          </p>
          <p>
            Culpa incididunt enim exercitation nulla. Veniam ipsum nulla et in
            ex. Ullamco reprehenderit culpa exercitation magna enim elit aute
            velit ea proident excepteur dolor deserunt. Nostrud aliquip qui
            nulla amet. Cillum eiusmod nisi culpa incididunt voluptate. Non aute
            occaecat nostrud ipsum excepteur mollit cupidatat. Commodo officia
            do quis do quis consequat labore aliquip aute.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
