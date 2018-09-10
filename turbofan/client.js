'use strict';

const Protocol = require('azure-iot-device-mqtt').Mqtt;
const Client = require('azure-iot-device').Client;
const Message = require('azure-iot-device').Message;
const readline = require('readline');
const fs = require('fs');


const connectionString = '<connection string>';

const dataFiles = ["../train_FD001.txt"]


const client = Client.fromConnectionString(connectionString, Protocol);

const connectCallback = function (err) {
    if (err) {
        console.error('Could not connect: ' + err.message);
    } else {

        // Read input data and send it to IoT Hub
        dataFiles.forEach(fileName => {
            const rl = readline.createInterface({
                input: fs.createReadStream(fileName)
            });

            rl.on('line', (line) => {
                setTimeout(() => {
                    let message = new Message(line);
                    client.sendEvent(message);
                    console.log("Sent!");
                }, Math.random() * 5000); // Send with random intervals of up to 5 seconds.
            });
        });

        client.on('error', function (err) {
            console.error(err.message);
        });

        client.on('disconnect', function () {
            clearInterval(sendInterval);
            client.removeAllListeners();
            client.open(connectCallback);
        });
    }
};

client.open(connectCallback);
