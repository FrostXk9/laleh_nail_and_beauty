import { useState } from "react";
const LandingPage = () => {

    const [data] = useState([
        {
            dataID: 1, 
            data: "The name Laleh Nail and Beauty Salon is inspired by a girl's name of Persian origin meaning 'tulip'. Coupled to this as the owner I lived in City called laleh in Tabriz a province in the North West of Iran.I was in awe of the beautiful red, yellow and white tulips that bloomed during spring.The city is covered with these tulips as far as the eye can see.Taken by this beauty gave rise to Laleh Nail and Beauty Salon."
        }
    ]);

    const api = data.map(data => {
        return <div key={data.dataID}>{data.data}</div>
    });

  return (
    <>
        <div id="landLanding">
            <div className="container">
                <h1 className="text-uppercase display-3" id="mainTxt">A tulip-inspired journey</h1>
                <div className="d-flex justify-content-center" id="mediaQ">{api}</div>

                <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                    <button className="btn" id="bttn">Mens Treatment</button>
                    <button className="btn" id="bttn">Women Treatment</button>
                    <button className="btn" id="bttn">Contact our branch</button>
                </div>
                
            </div>
            {/* <div className="contained">
                <img src="https://cdn-images.imagevenue.com/ea/85/c0/ME1852A3_o.jpg" alt="" id="imgContained"/>
            </div> */}
        <section id="imgSec" className="gap-5">
            <div>
                <img src="https://cdn-images.imagevenue.com/ea/85/c0/ME1852A3_o.jpg" alt="" id="imgContained" className="rounded-5 object-fit" height={200} width={200}/>
            </div>
            <div>
                <img src="https://cdn-images.imagevenue.com/ea/85/c0/ME1852A3_o.jpg" alt="" id="imgContained" className="rounded-5 object-fit" height={250} width={250}/>
            </div>
            <div>
                <img src="https://cdn-images.imagevenue.com/ea/85/c0/ME1852A3_o.jpg" alt="" id="imgContained" className="rounded-5 object-fit" height={200} width={200}/>
            </div>
        </section>
        </div>
    </>
  )
}

export default LandingPage;
