function ContactButton({ nome, link, Icon }) {
  return (
    <a href={link} target="_blank">
      <div className="flex bg-white text-black w-[330px] h-[60px] rounded-md items-center justify-between px-2">

        <div className="flex items-center gap-2">
          <Icon className="border-2 border-black p-1" size={28} />
          <p className="text-lg font-bold">{nome}</p>
        </div>

      </div>
    </a>
  );
}

export default ContactButton;