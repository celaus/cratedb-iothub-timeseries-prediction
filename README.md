# Machine Data Science With CrateDB And Azure IoT Hub

This repository is part of a blog post. Check it out on [https://blog.x5ff.xyz/](https://blog.x5ff.xyz/), read it [here](https://blog.x5ff.xyz/blog/cratedb-iothub-timeseries-prediction).

# Jupyter Notebook

The [Jupyter Notebook](data.exploration.cmapss.ipynb) is built to connect to a local [CrateDB](https://crate.io) cluster. 

# Setup Turbofan inserter

Check out [the data](https://c3.nasa.gov/dashlink/resources/139/) and [explanation](https://www.grc.nasa.gov/www/cdtb/aboutus/CMAPSS_Litt.pdf).

The turbofan directory contains JavaScript code that pushes data into an IoT Hub. To run it, do these two things:

- Edit the file and add your IoT Hub's connection string
- Add the files that should be read (e.g. `train_FD001.txt`)

Afterwards, the usual process can start:

~~~
$ cd turbofan
$ npm install
$ node client.js
... 
~~~

Done!


# LICENSE

MIT