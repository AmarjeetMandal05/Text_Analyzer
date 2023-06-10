import React, { useState } from "react";

export default function About(props) {
    // const[myStyle,setMyStyle] = useState(
    //     {
    //         color: "black",
    //         backgroundColor: "white"
    //     })
        let myStyle = {
        color:props.mode === "dark"?"white":"#042743",
        backgroundColor: props.mode === "dark"?"rgb(36,74,104)":"white",
        border: "2px solid ",
        borderColor :props.mode === "dark"?"white":"#042743"
           }
    // const [btnText , setBtnText] = useState("Enable Dark Mode")


    // This toggle style has been removed on video 18 where we give dark mode to about component through the slider button

    // const toggleStyle=()=>{
    //     if(myStyle.color === "black"){
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    
  return (
    <div className="container">
        <h1 style={{color:props.mode === "dark"?"white":"#042743"}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What exactly TextUtils is all about?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong> Eaque, id soluta? Reiciendis beatae placeat veniam dolores eum eveniet repellendus dolore magnam ut nisi eaque accusantium numquam saepe rerum doloremque sapiente, sequi magni quaerat, deserunt, sunt obcaecati. Incidunt accusamus laboriosam corrupti at, repudiandae dolores quasi in, ullam provident harum deleniti quibusdam officia quisquam consequuntur, cupiditate dicta aut a? Soluta reprehenderit quia et, earum recusandae est molestias. Temporibus cumque a vel explicabo ipsum at mollitia dolor eaque facilis, debitis iusto!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Why to choose TextUtils Pro Application ? 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             <strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit fuga exercitationem est, aut quibusdam? </strong> Doloremque, sit, incidunt ducimus quasi fugit illo cum et eos aut expedita quaerat aliquam. Soluta, quia itaque iure perferendis nobis totam corrupti! Dignissimos iusto, voluptates illum corporis eos minus excepturi asperiores voluptatem ratione a et aperiam quod reprehenderit iste ullam commodi! Rerum veniam amet hic repudiandae modi cupiditate fugiat, alias ratione officia animi ab sapiente aliquid consequuntur temporibus necessitatibus laudantium excepturi, debitis recusandae dicta!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Some Powerful Text Applications , You should know about ?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non officiis voluptatem provident molestiae aut. Suscipit iste error sunt nobis recusandae beatae quidem!</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo error aliquid iste dolore possimus autem dignissimos exercitationem officiis odio architecto, voluptatibus ducimus tenetur.</p> Quam ducimus libero ipsa quasi perspiciatis doloribus tempora iusto consequatur quidem, et dicta voluptatum atque impedit nesciunt ratione, cumque, inventore deleniti est? Deleniti, quod quaerat? Dolorum incidunt, nisi odio exercitationem saepe porro? Molestiae perspiciatis labore suscipit.
            </div>
          </div>
        </div>
      </div>
            {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" class="btn btn-primary">{btnText}</button>
            </div> */}
    </div>
  );
}
