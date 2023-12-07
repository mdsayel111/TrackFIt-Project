const Logo = () => {
  return (
    <div className="flex">
      <img src="/image/Logo.png" alt="" className="aspect-square mr-3" />
      <h1 className="text-3xl hidden md:block">
        Track<span className="text-primary">Fit</span>
      </h1>
    </div>
  );
};

export default Logo;
