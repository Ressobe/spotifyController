function LoginRegisterWrapper({ children }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">{children}</div>
    </div>
  );
}

export default LoginRegisterWrapper;
