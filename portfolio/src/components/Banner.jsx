import "./Banner.css";

const items = Array.from({ length: 6 });

export default function Banner() {
    return (

        <> <div className="relative w-full h-screen overflow-hidden bg-transparent grid-bg pointer-events-none">
            <div
                className="slider absolute top-[10%] left-1/2 -translate-x-1/2"
                style={{ "--quantity": items.length }}
            >
                {items.map((_, i) => (
                    <div
                        key={i}
                        className="item flex items-center justify-center text-white text-3xl font-bold rounded-xl"
                        style={{ "--position": i + 1 }}
                    >
                        DEVELOPER 
                    </div>
                ))}
            </div>

            
        </div>
        
        </>
       
        
    );
}
