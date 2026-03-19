function ContactButton({ nome, link, Icon, Icontwo, className = "w-[90%]"}) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex bg-zinc-400 text-black rounded-xl px-3 py-2 items-center justify-between lg:hover:bg-zinc-300 ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-lime-400 flex items-center justify-center rounded-md">
            <Icon className="p-1 rounded-md" size={48} />
          </div>

          <p className="text-lg font-bold">{nome}</p>
        </div>
        <Icontwo />
      </a>
    </>
  );
}

export default ContactButton;
