import React from "react";
import { useState, useRef } from "react";
// import Card from "./Card";
// const data = {
//   img: "",
//   naem: "",
//   description: "",
//   price: "",
//   min: "",
//   max: "",
//   payment: "",
//   rating: "",
//   votes: "",
//   review: "",
// };
// export default function Forms(props) {
//   const [resturant, setResturant] = useState("");
//   const [formvalue, setForvalue] = useState(data);

//   const changeHandler = (e) => {
//     //setForvalue(e.target.value);
//     const { name, value } = e.target;
//     setForvalue({
//       ...formvalue,
//       [name]: value,
//     });
//   };
//   const changValue = (e) => {
//     e.preventDefault();
//     // const { name, value } = e.target;
//     // setResturant({
//     //   ...resturant,
//     //   [name]: value,
//     // });
//     // console.log(resturant);
//     // props.handler(resturant);
//     // setForvalue("");
//     // const { name, value } = e.target;
//     props.handler(formvalue);
//     setResturant("");
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         class="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         Add Resturant
//       </button>

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">
//                 add resturant
//               </h5>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <form onSubmit={changValue}>
//                 <div class="row">
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={formvalue}
//                       name="img"
//                       onChange={changeHandler}
//                       placeholder="First name"
//                     />
//                   </div>
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="naem"
//                       value={formvalue}
//                       onChange={changeHandler}
//                       placeholder="Last name"
//                     />
//                   </div>
//                 </div>
//                 <div class="row my-2">
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={formvalue}
//                       name="description"
//                       onChange={changeHandler}
//                       placeholder="First name"
//                     />
//                   </div>

//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={formvalue}
//                       name="price"
//                       onChange={changeHandler}
//                       placeholder="Last name"
//                     />
//                   </div>
//                 </div>
//                 <div class="row my-2">
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="min"
//                       value={formvalue}
//                       onChange={changeHandler}
//                       placeholder="First name"
//                     />
//                   </div>
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="max"
//                       value={formvalue}
//                       onChange={changeHandler}
//                       placeholder="Last name"
//                     />
//                   </div>
//                 </div>
//                 <div class="row my-2">
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="payment"
//                       value={formvalue}
//                       onChange={changeHandler}
//                       placeholder="First name"
//                     />
//                   </div>
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="rating"
//                       value={formvalue}
//                       onChange={changeHandler}
//                       placeholder="Last name"
//                     />
//                   </div>
//                 </div>
//                 <div class="row my-2">
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="votes"
//                       value={formvalue}
//                       onChange={changeHandler}
//                       placeholder="First name"
//                     />
//                   </div>
//                   <div class="col">
//                     <input
//                       type="text"
//                       class="form-control"
//                       name="review"
//                       value={formvalue}
//                       onChange={changeHandler}
//                       placeholder="Last name"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <button className="btn btn-primary" type="submit">
//                     Save changes
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Card food={data} />
//     </div>
//   );
// }
import Card from "./Card";
const contactArray = [
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/bxvehmjybbautqoy0j0m",
    name: "arsenal",
    description: "asin greatest biryani",
    price: "400rs",
    min: "30",
    max: "40",
    payment: "Accept online payments only",
    number: 4,
    votes: "8484",
    review: "532",
  },
];

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contactArray,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { contacts } = this.state,
      img = this.refs.img.value,
      name = this.refs.name.value,
      description = this.refs.description.value,
      price = this.refs.price.value,
      min = this.refs.min.value,
      max = this.refs.max.value,
      payment = this.refs.payment.value,
      rating = this.refs.rating.value,
      votes = this.refs.votes.value,
      review = this.refs.review.value;
    this.setState(
      {
        contacts: [
          ...contacts,
          {
            img,
            name,
            description,
            price,
            min,
            max,
            payment,
            rating,
            votes,
            review,
          },
        ],
      },
      () => {
        this.refs.img.value = "";
        this.refs.name.value = "";
        this.refs.description.value = "";
        this.refs.price.value = "";
        this.refs.min.value = "";
        this.refs.max.value = "";
        this.refs.payment.value = "";
        this.refs.rating.value = "";
        this.refs.votes.value = "";
        this.refs.review.value = "";
      }
    );
  }
  change = (e) => {
    console.log(e.target.value);
    const { pro } = this.state;

    pro.filter((el) => {
      if (el.rating >= e.target.value) {
        return el;
      }
    });
    console.log("mess", pro);
  };

  render() {
    const { contacts } = this.state;
    console.log("message", this.state.contacts);
    return (
      <div>
        <h2>Add hotels</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="img" placeholder="img" />
          <input type="text" ref="name" placeholder="name" />
          <input type="text" ref="description" placeholder="description" />
          <input type="text" ref="price" placeholder="price" />
          <input type="text" ref="min" placeholder="min" />
          <input type="text" ref="max" placeholder="max" />
          <input type="text" ref="payment" placeholder="payment" />
          <input type="number" ref="rating" placeholder="rating" />
          <input type="text" ref="votes" placeholder="votes" />
          <input type="text" ref="review" placeholder="review" />

          <button type="submit">Submit</button>
        </form>
        <h2>Foods</h2>
        <h2>sort the hotels by ratings</h2>
        <select onChange={this.change}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <ul>
          {contacts.map((contact) => (
            <div>
              <Card food={contact} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default Form;
