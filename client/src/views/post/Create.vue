<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-6">
        <h1> Create User </h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card shadow-lg rounded border-0">
          <div class="card-body">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="name">
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <div>
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></template>

<script>
export default {
  
}
</script>