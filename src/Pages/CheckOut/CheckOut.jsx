import { useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price,img } = service || {};
 const {user} = UseAuth()
  console.log(user)
  const handleBookService = (e) =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value ;
    const date = form.date.value;
    const email = user?. email;
    const price = form.deuAmount.value
    const number = form.number.value
    // console.log(name, date, email,number, price)
    const booking ={
        customerName : name, img,
        email, date,service_id: _id,
        service: title,
        price : price,
        number: number

    }
    console.log(booking)
    fetch ('http://localhost:5000/bookings',{
        method : 'POST',
        headers :{
        'content-type' : 'application/json'
        },
      body :JSON.stringify(booking)
    })
    .then(res =>{
        res.json()
    })
    .then (data =>{
        console.log(data)
    })

  }
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center">Booked Services : {title}</h1>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
            defaultValue={user?.displayName}
              name="name"
              type="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              name="date"
              type="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
            defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deu Amount</span>
            </label>
            <input
            defaultValue={'$' + price}
              name="deuAmount"
              type="text"
              placeholder="Deu Amount"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
