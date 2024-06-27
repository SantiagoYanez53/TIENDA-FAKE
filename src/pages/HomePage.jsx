
import PageSection from "../components/PageSection";

export default function HomePage () {
    return (
        <div>
            <h1 className=" text-4x1 font-bold text-center">Home Page</h1>
            <p className="text-center">This is the Home Page</p>
            <div>
            <PageSection> 
            <h2>Vendemos de todo</h2>
            </PageSection>
            <PageSection>
                <div className="w-full grid grid-cols-2 gap-2">
                <img 
                src="https://www.ceupe.com/images/easyblog_articles/3625/b2ap3_large_que-es-un-tienda-online.png" 
                alt=""/>
                <p>HOLAAAAAAAAAAAAAAAAAAA</p>
                </div>
            </PageSection>
            </div>
        </div>
        
    )
}