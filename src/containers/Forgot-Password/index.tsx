export function ForgotPassword()
{

  function alertMsg()
  {
    alert('Esqueceu a senha')
  }

  return (
    <h5 onClick={alertMsg}>Esqueceu a senha?</h5>
  );
}