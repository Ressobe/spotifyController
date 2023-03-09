function PageWrapper({ children }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs text-center">{children}</div>
    </div>
  );
}

export default PageWrapper;
