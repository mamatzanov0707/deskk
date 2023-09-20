import React from 'react';
import off from "./../../assets/img/op1.svg"
import op from "./../../assets/img/op2.svg"

const Tools = () => {
    return (
        <section id='tools'>
            <div className="tools">
                 <div className="tools">
                     <h2>Happy Clients Says</h2>
                     <div className="tools--dodo">
                         <div className="tools--too">
                             <div className="tools--spaces">
                                 <img src={off} alt=""/>
                                 <h3>KHALIL NAZIR</h3>
                                 <span>CEO of UI.Desk</span>
                             </div>
                             <p>Thirty for remove plenty regard you summer though. <br/>
                                 He preference Partiality on or continuing in particular <br/>
                                 principles as. Do believing oh disposing to supported <br/>
                                 allowance we.</p>
                         </div>
                         <div className="tools--too">
                             <div className="tools--spaces">
                                 <img src={op} alt=""/>
                                 <h3>ZEESHAN ANWER</h3>
                                 <span>CEO of UI.Desk</span>
                             </div>
                             <p>Really boy law county she unable her sister. Feet you <br/>
                                 off its like like six. Among sex are leave law built now. <br/>
                                 In built table in an rapid blush. Merits behind on afraid <br/>
                                 or warmly.</p>
                         </div>
                     </div>
                 </div>
            </div>
        </section>
    );
};

export default Tools;