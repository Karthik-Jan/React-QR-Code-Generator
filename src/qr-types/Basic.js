import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./styles.css";

function Basic() {
    const [qrValue, setQrValue] = useState("");
    const handleOnChange = event => {
        const { value } = event.target;
        setQrValue(value);
    };
    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${qrValue}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <div className="App">
            <h2>QR Code and Download - Jeftar</h2>
            <div style = {{padding: 8}}>
                <input onChange={handleOnChange} placeholder="Write your value" />
            </div>
            <br />
            <QRCode
                id="qr-gen"
                value={qrValue}
                size={290}
                level={"H"}
                includeMargin={true}
            />
            <p>
                <button type="button" onClick={downloadQRCode}>
                    Download QR Code
                </button>
            </p>
        </div>
    );
}

export default Basic;
