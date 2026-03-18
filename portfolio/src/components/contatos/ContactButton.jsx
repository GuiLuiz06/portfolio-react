function ContactButton({ nome, link, Icon, Icontwo }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex bg-zinc-400 text-black w-full rounded-xl px-3 py-2 items-center justify-between"
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
