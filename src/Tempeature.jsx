import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';


const Temperature = () => {
    const [temperature, setTemperature] = useState("");
    const [unit, setUnit] = useState("C");
    const [result, setResult] = useState("");

    const handleAdd = () => {
        const tempValue = parseFloat(temperature);
        if (!tempValue) {
            alert("Please enter a valid number.");
            return;
        }

        if (unit === "C") {
            const fahrenheit = (tempValue * 9 / 5) + 32;
            setResult(`${tempValue} °C is equal to ${fahrenheit} °F`);
        } else {
            const celsius = (tempValue - 32) * 5 / 9;
            setResult(`${tempValue} °F is equal to ${celsius} °C`);
        }
    };

    const handleClear = () => {
        setTemperature("");
        setResult("");
    };

    return (
        <>
            <MDBNavbar light bgColor='light'>
                <MDBContainer>
                    <MDBNavbarBrand href='#'>
                        <h2 className='m-2'>Temperature App</h2>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>

            <MDBContainer className="mt-5">
                <div className="container w-50 d-flex flex-column align-items-center">
                    <input
                        type="text"
                        className='form-control mt-4'
                        onChange={(e) => setTemperature(e.target.value)}
                        value={temperature}
                        placeholder='Enter Temperature'
                    />
                    <select
                        className='form-control mt-2'
                        onChange={(e) => setUnit(e.target.value)}
                        value={unit}
                    >
                        <option value="C">Celsius</option>
                        <option value="F">Fahrenheit</option>
                    </select>
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className='btn btn-primary mx-2'
                            onClick={handleAdd}
                        >
                            Submit
                        </button>
                        <button
                            onClick={handleClear}
                            className='btn btn-warning'
                        >
                            Clear
                        </button>
                    </div>

                    <p className="result-text mt-3">{result}</p>
                </div>
            </MDBContainer>
        </>
    );
};

export default Temperature;