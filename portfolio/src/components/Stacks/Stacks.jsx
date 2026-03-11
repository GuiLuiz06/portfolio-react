import React from "react"



function MyStacks({ nome, Icon, descricao }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-10 text-sm">
                <div className="flex flex-col w-[80%] items-center bg-cyan-200 rounded-xl p-2">
                    <div className="w-8">
                        {Icon && <Icon size={48} />}
                    </div>
                    <div className="font-semibold">
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