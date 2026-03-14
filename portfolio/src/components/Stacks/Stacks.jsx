import React from "react";

function MyStacks({ Title, Icon, Descricao, TitleSection }) {
  return (
    <>
        <div className="bg-slate-800 w-[95%] mx-auto mb-4 rounded-xl flex items-center p-3 gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div>
            <p className="font-semibold text-white">{Title}</p>
            <p className="text-xs text-gray-300">{Descricao}</p>
          </div>
        </div>
    </>
  );
}

export default MyStacks;
