function RegisterUser() {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <input type="password" name="password" />
        <input type="password" name="password2" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default RegisterUser;
