import React, { useState } from "react";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phones: [
      {
        id: Date.now(),
        number: "",
      },
    ],
    addresses: [
      {
        id: Date.now() + 1,
        city: "",
        state: "",
      },
    ],
  });

  const updateEmployee = (field, value) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [field]: value,
    }));
  };

  const updatePhone = (phoneId, value) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      phones: prevEmployee.phones.map((phone) =>
        phone.id === phoneId
          ? {
              ...phone,
              number: value,
            }
          : phone,
      ),
    }));
  };

  const addPhone = ()=>{
    setEmployee((prevEmployee)=>({
        ...prevEmployee,
        phones: [
            ...prevEmployee.phones,
            {
                id: Date.now(),
                number:""
            }
        ]
    }))
  }

  const removePhone = (phoneId) =>{
    setEmployee((prevEmployee)=>({
      ...prevEmployee,
      phones: prevEmployee.phones.filter((phone)=>phone.id !== phoneId)

    }))
  }

  const updateAddress = (addressId,field, value) =>{
    setEmployee((prevEmployee)=>({
      ...prevEmployee,
      addresses: prevEmployee.addresses.map((address)=>address.id === addressId? {
        ...address,
        [field]: value,
      }: address)
    }))
  }


  const addAddress = () =>{
    setEmployee((prevEmployee)=>({
      ...prevEmployee,
      addresses:[
        ...prevEmployee.addresses,
        {
          id: Date.now(),
          city:"",
          state:""
        }
      ]
    }))

    const removeAddress = (addressId) =>{
      setEmployee((prevEmployee)=>({
        ...prevEmployee,
        addresses:prevEmployee.addresses.filter((address)=>address.id !== addressId)
      }))

    }

    const handleSubmit = (event)=>{
      event.preventDefault();
      console.log("Employee", employee)
    }



  }
  return   <section className="demo-section">
      <h2>Employee Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:

            <input
              value={employee.name}
              onChange={(event) =>
                updateEmployee(
                  "name",
                  event.target.value
                )
              }
            />
          </label>
        </div>

        <div>
          <label>
            Email:

            <input
              type="email"
              value={employee.email}
              onChange={(event) =>
                updateEmployee(
                  "email",
                  event.target.value
                )
              }
            />
          </label>
        </div>

        <h3>Phone Numbers</h3>

        {employee.phones.map((phone) => (
          <div key={phone.id}>
            <input
              value={phone.number}
              placeholder="Phone number"
              onChange={(event) =>
                updatePhone(
                  phone.id,
                  event.target.value
                )
              }
            />

            <button
              type="button"
              onClick={() =>
                removePhone(phone.id)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addPhone}
        >
          Add Phone
        </button>

        <h3>Addresses</h3>

        {employee.addresses.map((address) => (
          <div key={address.id}>
            <input
              value={address.city}
              placeholder="City"
              onChange={(event) =>
                updateAddress(
                  address.id,
                  "city",
                  event.target.value
                )
              }
            />

            <input
              value={address.state}
              placeholder="State"
              onChange={(event) =>
                updateAddress(
                  address.id,
                  "state",
                  event.target.value
                )
              }
            />

            <button
              type="button"
              onClick={() =>
                removeAddress(address.id)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addAddress}
        >
          Add Address
        </button>

        <br />
        <br />

        <button type="submit">
          Save Employee
        </button>
      </form>
    </section>
  ;

};

export default EmployeeForm;
