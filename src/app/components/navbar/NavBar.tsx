export const NavBar = () => {
  const navs = [
    {
      name: "home",
      label: "Home",
      path: "/",
      on_hover: "hover:border hover:border-light rounded-lg",
    },
    {
      name: "works",
      label: "Works",
      path: "/works",
      on_hover: "hover:border hover:border-light rounded-lg",
    },
    {
      name: "about",
      label: "About",
      path: "/about",
      on_hover: "hover:border hover:border-light rounded-lg",
    },
  ];

  return (
    <div className="w-full p-2 bg-gray-900 my-4 gap-5 rounded-lg flex justify-center items-center md:text-2xl">
      {navs.map((item, index) => (
        <div
          key={index}
          className={`px-5 py-2 text-light cursor-pointer select-none border border-gray-900 ${item.on_hover}`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
