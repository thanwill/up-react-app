import "./formulario.css";

function FormsLogin() {
  const image = "https://cdn-icons-png.flaticon.com/512/9995/9995237.png";
  return (
    <form className='col-10 offset-1 col-md-6 offset-md-3 pt-5 pb-5'>
      <img class='mb-4' src={image} alt='' width='72' />
      <h1 class='h3 mb-3 fw-normal'>Faça login!</h1>
      <div class='form-floating'>
        <input
          type='email'
          class='form-control'
          id='floatingInput'
          placeholder='name@example.com'
        />
        <label for='floatingInput'>Seu e-mail</label>
      </div>
      <div class='form-floating'>
        <input
          type='password'
          class='form-control'
          id='floatingPassword'
          placeholder='Password'
        />
        <label for='floatingPassword'>Senha</label>
      </div>

      <div class='checkbox mb-3'>
        <label>
          <input type='checkbox' value='remember-me' /> Remember me
        </label>
      </div>
      <button class='w-100 btn btn-lg btn-primary' type='submit'>
        Sign in
      </button>
    </form>
  );
}
export default FormsLogin;
