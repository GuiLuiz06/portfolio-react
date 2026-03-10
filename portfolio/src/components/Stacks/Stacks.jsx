import React from "react"



function MyStacks({ nome, Icon, descricao }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-col w-96  items-center bg-cyan-200 rounded-xl p-4 min-h-[250px]">
                    <div className="w-12">
                        {Icon && <Icon size={48} />}
                    </div>
                    <div className="font-semibold ">
                        <div className="flex justify-center font-bold">
                            <p>{nome}</p>
                        </div>
                        <p className="text-indigo-700">{descricao}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyStacks