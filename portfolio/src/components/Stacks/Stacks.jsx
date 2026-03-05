import React from "react"

function MyStacks({nome, icon}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-col w-80 items-center bg-cyan-200 rounded-xl p-3">
                    <div className="w-12">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" className="" /></svg>
                    </div>
                    <div className="font-semibold "> 
                        <div className="flex justify-center font-bold">
                            <p>HTML</p>
                        </div>
                        <p>linguagem usada para estruturar o conteúdo de páginas web, definindo títulos, textos, imagens, links e seções de um site.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyStacks