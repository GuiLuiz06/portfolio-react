import Contact from "./Contats"

function aside() {
    return (
        <>
            <aside class="py-10">
                <div class="bg-black p-4 w-96 h-[500px] text-white ml-8 rounded-xl">
                    <div class="flex justify-between items-start">
                        <div class="flex items-start">
                            <img src="../src/assets/img/Guilherme.jpeg" alt="Foto de guilherme"
                                class="w-24 border-4 border-indigo-600 rounded-md" />
                        </div>
                        <div class="mr-6">
                            <p class="flex font-bold text-3xl">Guilherme Luiz</p>
                            <div class="bg-cyan-500 rounded-xl text-indigo-600">
                                <p class="ml-2">Desenvolvedor</p>
                                <div class="">
                                    <p class="ml-2">Full-Stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start font-bold mt-4">
                        <p>Contato</p>
                    </div>
                    <div class="mt-2">
                        <Contact/>
                    </div>
                    <div class="mt-6">
                        <Contact/>
                    </div>
                    <div class="mt-6">
                        <Contact/>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default aside