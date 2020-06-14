import React from 'react';

class footer extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div>
            <footer class="page-footer bg-dark font-small special-color-dark pt-4">

<div class="container">


  <ul class="list-unstyled list-inline  text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>

</div>

<div class="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="https://Resto-Sud.com/"> Resto-Sud.com</a>
</div>


</footer>

        </div>;
    }
}


export default footer;