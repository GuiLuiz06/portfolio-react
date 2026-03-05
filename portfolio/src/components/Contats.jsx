import { Linkedin } from 'lucide-react';
import { ExternalLink } from 'lucide-react'


const App = () => (
  <Linkedin/>
);

const github = () => {
    <ExternalLink/>
}

const linkedin = () => {
    <ExternalLink/>
}

const email = () => {
    <ExternalLink/>
}

function contact() {
    return (
        <>
        <div class="flex  bg-white text-black w-86 h-8 rounded-md">
            <div>
            <Linkedin class="ml-2 mt-1 border-2 border-black"/>
            </div> 
            <p class="p-1 text-xl font-bold">Linkedin</p>
            <a href="">
             <ExternalLink class="mt-1 ml-48"/> 
            </a>
            {/* criar para cada meio de contato uma tag a */}
        </div>
        </>
    )
}

export default contact